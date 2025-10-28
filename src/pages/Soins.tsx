import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Heart, Baby, Calendar } from "lucide-react";
import sportsKineImage from "@/assets/sports-kine.jpg";
import postOpKineImage from "@/assets/post-op-kine.jpg";
import respiratoryKineImage from "@/assets/respiratory-kine.jpg";

const Soins = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Kinésithérapie du Sport",
      subtitle: "Réathlétisation et Prévention",
      description: "Spécialisés dans la prise en charge des sportifs de tous niveaux, nous vous accompagnons dans votre retour à l'activité physique après une blessure.",
      features: [
        "Rééducation post-traumatique sportive",
        "Prévention des blessures et renforcement musculaire",
        "Programme de réathlétisation personnalisé",
        "Suivi des performances et récupération optimale",
        "Techniques de strapping et taping",
      ],
      image: sportsKineImage,
    },
    {
      icon: Heart,
      title: "Rééducation Post-Opératoire",
      subtitle: "Orthopédie et Suivi Chirurgical",
      description: "Un accompagnement complet après votre chirurgie orthopédique pour retrouver votre mobilité et votre autonomie en toute sécurité.",
      features: [
        "Rééducation après prothèse (hanche, genou, épaule)",
        "Suivi post-opératoire ligamentaire (LCA, LCP)",
        "Récupération après fracture ou entorse",
        "Mobilisation articulaire progressive et contrôlée",
        "Renforcement musculaire adapté",
      ],
      image: postOpKineImage,
    },
    {
      icon: Baby,
      title: "Kinésithérapie Respiratoire Pédiatrique",
      subtitle: "Techniques Spécifiques",
      description: "Des soins doux et efficaces pour les enfants souffrant de pathologies respiratoires, dans un environnement rassurant et adapté.",
      features: [
        "Drainage bronchique pour nourrissons et enfants",
        "Prise en charge de la bronchiolite",
        "Kinésithérapie respiratoire pour asthme",
        "Techniques non invasives et respectueuses",
        "Éducation des parents aux gestes de prévention",
      ],
      image: respiratoryKineImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Détail des Soins de Kinésithérapie Proposés</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Une expertise reconnue dans trois domaines de spécialité pour répondre à tous vos besoins
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="space-y-24">
          {specialties.map((specialty, index) => (
            <div
              key={specialty.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                      <specialty.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-3xl text-primary mb-2">{specialty.title}</CardTitle>
                    <p className="text-lg text-secondary font-semibold">{specialty.subtitle}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-lg text-muted-foreground">{specialty.description}</p>
                    <div>
                      <h3 className="font-bold text-lg mb-3 text-primary">Nos prestations :</h3>
                      <ul className="space-y-2">
                        {specialty.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="text-secondary mr-2 mt-1">✓</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <img
                  src={specialty.image}
                  alt={specialty.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Prêt à commencer votre rééducation ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prenez rendez-vous en ligne dès maintenant et bénéficiez d'un accompagnement personnalisé
          </p>
          <Link to="/rendez-vous">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light">
              <Calendar className="mr-2" />
              Réserver ma séance
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Soins;
