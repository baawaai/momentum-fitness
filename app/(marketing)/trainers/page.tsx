import { PageHeader } from "@/components/marketing/page-header";
import { TrainersGrid } from "@/components/marketing/trainers-grid";
import { CtaSection } from "@/components/marketing/cta-section";
import { SiteContainer } from "@/components/layout/site-container";
import { TRAINERS } from "@/data/trainers";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = { title: "Trainers" };

export default function TrainersPage() {
  return (
    <>
      <PageHeader
        badge="Expert Team"
        title="World-Class Coaches"
        description="Our certified trainers bring years of experience and passion to help you reach your fitness goals."
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <TrainersGrid />
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {TRAINERS.map((trainer, index) => (
              <FadeIn key={`bio-${trainer.id}`} delay={index * 0.05}>
                <Card className="border-border/50 bg-card/50">
                  <CardContent className="flex gap-6 p-6">
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold">{trainer.name}</h3>
                      <p className="text-sm text-primary">{trainer.role}</p>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                        {trainer.bio}
                      </p>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {trainer.experience} experience · {trainer.specialty}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </SiteContainer>
      </section>
      <CtaSection />
    </>
  );
}
