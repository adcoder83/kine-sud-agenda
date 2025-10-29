import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kiné Bien-Être Sud</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Le catamaran, 24 Av. Alex Peire bat c<br />83500 La Seyne-sur-Mer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>04 94 06 25 47</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>contact@kine-bienetre-sud.fr</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Horaires
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Lundi - Vendredi :</span>
                <span className="font-medium">9h - 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi :</span>
                <span className="font-medium">Sur RDV</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche :</span>
                <span className="font-medium">Fermé</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link to="/" className="block hover:text-secondary transition-colors">
                Accueil
              </Link>
              <Link to="/cabinet" className="block hover:text-secondary transition-colors">
                Le Cabinet
              </Link>
              <Link to="/soins" className="block hover:text-secondary transition-colors">
                Nos Soins
              </Link>
              <Link to="/contact" className="block hover:text-secondary transition-colors">
                Contact
              </Link>
              <Link to="/rendez-vous" className="block hover:text-secondary transition-colors">
                Prendre RDV
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Kiné Bien-Être Sud. Tous droits réservés.</p>
          <p className="mt-2 text-primary-foreground/80">
            Cabinet de Kinésithérapie à Aix-en-Provence - SIRET : 123 456 789 00010
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
