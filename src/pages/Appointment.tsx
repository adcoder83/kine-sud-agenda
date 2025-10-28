import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";

const Appointment = () => {
  const [kines, setKines] = useState<any[]>([]);
  const [services, setServices] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    kineId: "",
    serviceId: "",
    time: "",
    reason: "",
  });

  useEffect(() => {
    fetchKinesAndServices();
  }, []);

  const fetchKinesAndServices = async () => {
    const { data: kinesData } = await supabase.from("kines").select("*");
    const { data: servicesData } = await supabase.from("services").select("*");
    if (kinesData) setKines(kinesData);
    if (servicesData) setServices(servicesData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !formData.time) {
      toast.error("Veuillez sélectionner une date et une heure");
      return;
    }

    const { error } = await supabase.from("appointments").insert({
      patient_name: formData.patientName,
      patient_email: formData.patientEmail,
      patient_phone: formData.patientPhone,
      kine_id: formData.kineId || null,
      service_id: formData.serviceId,
      appointment_date: selectedDate.toISOString().split("T")[0],
      appointment_time: formData.time,
      reason: formData.reason,
    });

    if (error) {
      toast.error("Erreur lors de la réservation");
    } else {
      toast.success("Rendez-vous confirmé ! Vous recevrez une confirmation par email.");
      setFormData({ patientName: "", patientEmail: "", patientPhone: "", kineId: "", serviceId: "", time: "", reason: "" });
      setSelectedDate(undefined);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <CalendarCheck className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-6">Réservez Votre Séance en Ligne</h1>
          <p className="text-xl opacity-90">Choisissez votre créneau en quelques clics</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Formulaire de Réservation</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Nom complet *</Label>
                  <Input required value={formData.patientName} onChange={(e) => setFormData({ ...formData, patientName: e.target.value })} />
                </div>
                <div>
                  <Label>Email *</Label>
                  <Input type="email" required value={formData.patientEmail} onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })} />
                </div>
                <div>
                  <Label>Téléphone *</Label>
                  <Input required value={formData.patientPhone} onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })} />
                </div>
                <div>
                  <Label>Type de soin *</Label>
                  <Select required value={formData.serviceId} onValueChange={(value) => setFormData({ ...formData, serviceId: value })}>
                    <SelectTrigger><SelectValue placeholder="Choisir" /></SelectTrigger>
                    <SelectContent>{services.map((s) => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Kinésithérapeute</Label>
                  <Select value={formData.kineId} onValueChange={(value) => setFormData({ ...formData, kineId: value })}>
                    <SelectTrigger><SelectValue placeholder="Indifférent" /></SelectTrigger>
                    <SelectContent>{kines.map((k) => <SelectItem key={k.id} value={k.id}>{k.name}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Heure souhaitée *</Label>
                  <Input type="time" required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} />
                </div>
              </div>
              <div>
                <Label>Date du rendez-vous *</Label>
                <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} className="rounded-md border" />
              </div>
              <div>
                <Label>Motif de consultation</Label>
                <Textarea value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} rows={3} />
              </div>
              <Button type="submit" className="w-full" size="lg">Confirmer le rendez-vous</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Appointment;
