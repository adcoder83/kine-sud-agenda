import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) navigate("/login");
    else { setUser(user); fetchAppointments(); }
  };

  const fetchAppointments = async () => {
    const { data } = await supabase.from("appointments").select("*, kines(name), services(name)").order("appointment_date", { ascending: true });
    if (data) setAppointments(data);
  };

  const deleteAppointment = async (id: string) => {
    const { error } = await supabase.from("appointments").delete().eq("id", id);
    if (!error) { toast.success("Rendez-vous supprimé"); fetchAppointments(); }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <Card>
        <CardHeader><CardTitle>Gestion des Rendez-vous</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Heure</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Kiné</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {appointments.map((apt) => (
                <TableRow key={apt.id}>
                  <TableCell>{apt.appointment_date}</TableCell>
                  <TableCell>{apt.appointment_time}</TableCell>
                  <TableCell>{apt.patient_name}</TableCell>
                  <TableCell>{apt.kines?.name || "Indifférent"}</TableCell>
                  <TableCell>{apt.services?.name}</TableCell>
                  <TableCell><Button variant="destructive" size="sm" onClick={() => deleteAppointment(apt.id)}>Annuler</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
