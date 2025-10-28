import KineCard from "@/components/KineCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import treatmentImage from "@/assets/treatment-session.jpg";

const Cabinet = () => {
  const kines = [
    {
      name: "Dr. Martin Dubois",
      specialty: "Kinésithérapie du Sport",
      bio: "Expert en réathlétisation avec 15 ans d'expérience auprès d'athlètes de haut niveau",
      photoUrl: "/placeholder.svg",
    },
    {
      name: "Mme Sophie Lambert",
      specialty: "Rééducation Post-Opératoire",
      bio: "Spécialiste en orthopédie et techniques manuelles avancées pour une récupération optimale",
      photoUrl: "/placeholder.svg",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Approche Personnalisée",
      description: "Chaque patient est unique. Nous adaptons nos soins à vos besoins spécifiques.",
    },
    {
      icon: Users,
      title: "Écoute et Accompagnement",
      description: "Un suivi attentif tout au long de votre rééducation pour des résultats optimaux.",
    },
    {
      icon: Award,
      title: "Excellence et Expertise",
      description: "Formation continue et techniques de pointe pour vous offrir les meilleurs soins.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Notre Approche et Nos Spécialistes</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Un cabinet moderne dédié à votre santé et votre bien-être avec une équipe passionnée
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Notre Philosophie</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Au Cabinet Kiné Bien-Être Sud, nous croyons en une approche <strong>globale et manuelle</strong> de la kinésithérapie. Notre objectif est de vous accompagner vers une récupération complète et durable.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Nous privilégions une <strong>relation de confiance</strong> avec nos patients, basée sur l'écoute, le dialogue et un suivi personnalisé adapté à votre rythme de vie.
            </p>
            <p className="text-lg text-muted-foreground">
              Notre cabinet dispose d'équipements modernes et d'un environnement <strong>chaleureux et professionnel</strong> pour optimiser votre confort durant vos séances.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={treatmentImage}
              alt="Séance de kinésithérapie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground">Ce qui guide notre pratique au quotidien</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Notre Équipe</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des professionnels diplômés et passionnés à votre service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {kines.map((kine) => (
            <KineCard key={kine.name} {...kine} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cabinet;
