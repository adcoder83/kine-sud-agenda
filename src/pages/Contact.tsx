import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Euro, FileText } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Accès, Tarifs et Contact</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Toutes les informations pratiques pour votre venue au cabinet
          </p>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <MapPin className="w-10 h-10 text-secondary mb-2" />
              <CardTitle>Adresse</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                <strong>Cabinet Kiné Bien-Être Sud</strong>
              </p>
              <p className="text-muted-foreground">12 Avenue Victor Hugo</p>
              <p className="text-muted-foreground">13100 Aix-en-Provence</p>
              <p className="text-sm text-muted-foreground mt-2">
                Parking gratuit disponible à proximité
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <Clock className="w-10 h-10 text-secondary mb-2" />
              <CardTitle>Horaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-semibold">9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-semibold">Sur RDV</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-semibold">Fermé</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <Phone className="w-10 h-10 text-secondary mb-2" />
              <CardTitle>Coordonnées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">04 42 00 00 00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">contact@kine-bienetre-sud.fr</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tarifs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <Euro className="w-10 h-10 text-secondary mb-2" />
              <CardTitle className="text-2xl">Tarifs & Remboursements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-primary mb-2">Conventionnement Secteur 1</p>
                <p className="text-muted-foreground">
                  Nos tarifs sont fixés par la Sécurité Sociale. Les séances sont remboursées à hauteur de 60% par l'Assurance Maladie (avec ordonnance).
                </p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Tarif Bilan Initial</p>
                <p className="text-muted-foreground">Selon la nomenclature en vigueur (AMK 14,3)</p>
              </div>
              <div>
                <p className="font-semibold text-primary mb-2">Tarif Séance de Suivi</p>
                <p className="text-muted-foreground">Selon la nomenclature en vigueur (AMK 10,1)</p>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Certaines prestations spécifiques peuvent faire l'objet d'un dépassement d'honoraires. Dans ce cas, vous en serez informé(e) au préalable.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20">
            <CardHeader>
              <FileText className="w-10 h-10 text-secondary mb-2" />
              <CardTitle className="text-2xl">Documents Requis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-primary mb-2">Pour votre première séance</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span><strong>Ordonnance médicale</strong> obligatoire (datant de moins d'1 an)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Carte Vitale à jour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Carte de mutuelle</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Comptes-rendus d'examens médicaux (radiographies, IRM, etc.)</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-primary italic">
                💡 Pensez à arriver 5 minutes en avance pour faciliter votre accueil
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-center text-primary">Nous Contacter</CardTitle>
            <p className="text-center text-muted-foreground">
              Une question ? N'hésitez pas à nous écrire
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="jean.dupont@example.com"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Votre message..."
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Envoyer le message
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">Plan d'accès</h2>
        <div className="h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.6738705755!2d5.447427!3d43.529742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98dae8f5a0f6b%3A0x40819a5fd970220!2sAix-en-Provence!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation du cabinet"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
