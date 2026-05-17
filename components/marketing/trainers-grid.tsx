import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";
import { TRAINERS } from "@/data/trainers";

interface TrainersGridProps {
  limit?: number;
}

export function TrainersGrid({ limit }: TrainersGridProps) {
  const trainers = limit ? TRAINERS.slice(0, limit) : TRAINERS;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {trainers.map((trainer, index) => (
        <FadeIn key={trainer.id} delay={index * 0.08}>
          <Card className="group overflow-hidden border-border/50 bg-card/50">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={trainer.image}
                alt={trainer.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1 text-primary">
                  <Star className="size-3.5 fill-primary" />
                  <span className="text-xs font-medium">{trainer.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    · {trainer.sessions}+ sessions
                  </span>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold">{trainer.name}</h3>
              <p className="text-sm text-primary">{trainer.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {trainer.specialty}
              </p>
            </CardContent>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
