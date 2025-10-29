import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Activity, Bone, BookOpen, Network, Snowflake, Wind, Calendar, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-kine.jpg";
import sportsKineImage from "@/assets/sports-kine.jpg";
import postOpKineImage from "@/assets/post-op-kine.jpg";
import respiratoryKineImage from "@/assets/respiratory-kine.jpg";

const Home = () => {
  const services = [
    {
      icon: Activity,
      title: "Kiné du sport",
      description: "Prise en charge des blessures sportives et réathlétisation pour un retour optimal à la performance.",
      image: sportsKineImage,
    },
    {
      icon: Bone,
      title: "Ostéopathie",
      description: "Approche globale et manuelle pour rétablir l'équilibre du corps et soulager les tensions.",
      image: postOpKineImage,
    },
    {
      icon: BookOpen,
      title: "École du dos",
      description: "Programme éducatif pour prévenir et gérer les douleurs dorsales au quotidien.",
      image: respiratoryKineImage,
    },
    {
      icon: Network,
      title: "Chaîne musculaire de Busquet",
      description: "Techniques avancées de rééquilibrage postural et de libération des tensions myofasciales.",
      image: sportsKineImage,
    },
    {
      icon: Snowflake,
      title: "Cryothérapie",
      description: "Thérapie par le froid pour accélérer la récupération et réduire les inflammations.",
      image: postOpKineImage,
    },
    {
      icon: Wind,
      title: "Pressothérapie",
      description: "Drainage lymphatique mécanique pour améliorer la circulation et favoriser la récupération.",
      image: respiratoryKineImage,
    },
  ];

  const testimonials = [
    {
      quote: "Une équipe professionnelle et à l'écoute. Ma rééducation s'est très bien passée grâce à leur expertise.",
      author: "Marie D.",
      rating: 5,
    },
    {
      quote: "Cabinet moderne et accueillant. Les soins sont de grande qualité et les résultats sont au rendez-vous.",
      author: "Jean-Pierre L.",
      rating: 5,
    },
    {
      quote: "Excellent suivi pour ma blessure sportive. Je recommande vivement ce cabinet !",
      author: "Sophie M.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cabinet de Kinésithérapie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Kinésithérapeute Sportif et Rééducation à La Seyne-sur-Mer
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Votre bien-être en mouvement avec des soins personnalisés et une approche globale
          </p>
          <Link to="/rendez-vous">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-light text-lg px-8 py-6 shadow-glow">
              <Calendar className="mr-2" />
              Prendre RDV en Ligne
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Nos Spécialités</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des soins adaptés à vos besoins avec une approche personnalisée
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/soins">
            <Button variant="outline" size="lg">
              Découvrir tous nos soins
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Témoignages de nos Patients</h2>
            <p className="text-xl text-muted-foreground">Votre satisfaction est notre priorité</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Nous Trouver</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-muted-foreground">Le catamaran, 24 Av. Alex Peire bat c<br />83500 La Seyne-sur-Mer</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <p className="font-semibold">Horaires d'ouverture</p>
                  <p className="text-muted-foreground">Lundi - Vendredi : 9h - 18h<br />Samedi : Sur rendez-vous</p>
                </div>
              </div>
            </div>
            <Link to="/contact">
              <Button className="mt-6" variant="default">
                Nous contacter
              </Button>
            </Link>
          </div>
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.845!2d5.8798!3d43.1034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c91b35f7b6e8f1%3A0x9c8c4e6e5e5e5e5e!2s24%20Avenue%20Alex%20Peire%2C%2083500%20La%20Seyne-sur-Mer!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localisation du cabinet"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
