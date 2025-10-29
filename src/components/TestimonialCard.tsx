import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-card border-2 border-primary/20 shadow-inner">
      <CardContent className="pt-6">
        <Quote className="w-10 h-10 text-secondary mb-4" />
        <p className="text-foreground mb-4 italic font-lato leading-relaxed">"{quote}"</p>
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <p className="font-semibold text-primary font-montserrat tracking-wide">— {author}</p>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-secondary text-lg">★</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
