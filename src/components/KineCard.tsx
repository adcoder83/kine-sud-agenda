import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface KineCardProps {
  name: string;
  specialty: string;
  bio: string;
  photoUrl: string;
}

const KineCard = ({ name, specialty, bio, photoUrl }: KineCardProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader className="text-center">
        <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-secondary ring-offset-4">
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-2xl font-bold text-primary">{name}</h3>
        <Badge className="mt-2 bg-secondary text-secondary-foreground">{specialty}</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default KineCard;
