import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const ServiceCard = ({ icon: Icon, title, description, image }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-2 border-border">
      {image && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 bg-primary rounded-none flex items-center justify-center mb-3 group-hover:shadow-glow transition-all border-b-2 border-secondary">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-montserrat tracking-wide">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base font-lato">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
