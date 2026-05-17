import {
  Clock,
  Dumbbell,
  HeartPulse,
  Smartphone,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteContainer } from "@/components/layout/site-container";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES } from "@/data/site";

const ICON_MAP: Record<string, LucideIcon> = {
  Dumbbell,
  Users,
  Clock,
  HeartPulse,
  Trophy,
  Smartphone,
};

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28">
      <SiteContainer>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why Momentum
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built for Serious Athletes
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to train, recover, and perform at your peak —
            under one roof.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon] ?? Dumbbell;
            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <Card className="group h-full border-border/50 bg-card/50 transition-colors hover:border-primary/30 hover:bg-card">
                  <CardContent className="p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
