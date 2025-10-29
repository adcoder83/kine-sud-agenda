import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Bone, BookOpen, Network, Snowflake, Wind, Calendar } from "lucide-react";
import sportsKineImage from "@/assets/sports-kine.jpg";
import postOpKineImage from "@/assets/post-op-kine.jpg";
import respiratoryKineImage from "@/assets/respiratory-kine.jpg";

const Soins = () => {
  const specialties = [
    {
      icon: Activity,
      title: "Kiné du sport",
      subtitle: "Performance et Récupération",
      description: "Prise en charge spécialisée des blessures sportives et accompagnement vers un retour optimal à la performance pour tous les niveaux.",
      features: [
        "Rééducation post-traumatique sportive",
        "Réathlétisation et retour au sport",
        "Prévention des blessures",
        "Renforcement musculaire ciblé",
        "Techniques de strapping et taping",
      ],
      image: sportsKineImage,
    },
    {
      icon: Bone,
      title: "Ostéopathie",
      subtitle: "Approche Globale et Manuelle",
      description: "Thérapie manuelle visant à rétablir l'équilibre structurel et fonctionnel du corps pour soulager douleurs et tensions.",
      features: [
        "Traitement des douleurs musculo-squelettiques",
        "Manipulations articulaires douces",
        "Libération des tensions viscérales",
        "Approche crânienne et fasciale",
        "Rééquilibrage postural global",
      ],
      image: postOpKineImage,
    },
    {
      icon: BookOpen,
      title: "École du dos",
      subtitle: "Éducation et Prévention",
      description: "Programme éducatif personnalisé pour comprendre, prévenir et gérer efficacement les douleurs dorsales au quotidien.",
      features: [
        "Apprentissage des postures correctes",
        "Exercices de renforcement du dos",
        "Gestes et postures au travail",
        "Prévention des lombalgies",
        "Conseils ergonomiques personnalisés",
      ],
      image: respiratoryKineImage,
    },
    {
      icon: Network,
      title: "Chaîne musculaire de Busquet",
      subtitle: "Rééquilibrage Postural",
      description: "Méthode avancée de thérapie manuelle pour libérer les tensions myofasciales et restaurer l'équilibre des chaînes musculaires.",
      features: [
        "Analyse posturale approfondie",
        "Libération des chaînes musculaires",
        "Traitement des déséquilibres posturaux",
        "Techniques myofasciales spécifiques",
        "Harmonisation des tensions corporelles",
      ],
      image: sportsKineImage,
    },
    {
      icon: Snowflake,
      title: "Cryothérapie",
      subtitle: "Thérapie par le Froid",
      description: "Utilisation du froid à des fins thérapeutiques pour accélérer la récupération, réduire les inflammations et soulager les douleurs.",
      features: [
        "Réduction des inflammations",
        "Accélération de la récupération musculaire",
        "Soulagement des douleurs articulaires",
        "Amélioration de la circulation sanguine",
        "Effet tonifiant et énergisant",
      ],
      image: postOpKineImage,
    },
    {
      icon: Wind,
      title: "Pressothérapie",
      subtitle: "Drainage Lymphatique Mécanique",
      description: "Technique de drainage lymphatique par compression pneumatique pour améliorer la circulation et favoriser l'élimination des toxines.",
      features: [
        "Amélioration du retour veineux",
        "Réduction des œdèmes et gonflements",
        "Drainage lymphatique efficace",
        "Sensation de jambes légères",
        "Récupération post-effort optimisée",
      ],
      image: respiratoryKineImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Nos Services de Kinésithérapie et Thérapies</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Une gamme complète de soins spécialisés pour votre santé et votre bien-être
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
