import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-card to-muted border-0 shadow-md">
      <CardContent className="pt-6">
        <Quote className="w-10 h-10 text-secondary mb-4" />
        <p className="text-foreground mb-4 italic">"{quote}"</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-primary">— {author}</p>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-secondary">★</span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
