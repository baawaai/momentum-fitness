import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <SiteContainer>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 via-card to-card px-6 py-16 text-center sm:px-12 lg:py-20">
            <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Build Your Momentum?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Join 2,400+ members transforming their fitness. Start with a
                free 3-day trial — no commitment required.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/pricing">
                    View Membership Plans
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Book a Free Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
