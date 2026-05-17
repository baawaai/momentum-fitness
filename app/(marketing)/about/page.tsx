import Image from "next/image";
import { PageHeader } from "@/components/marketing/page-header";
import { FeaturesSection } from "@/components/marketing/features-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { SiteContainer } from "@/components/layout/site-container";
import { ABOUT_VALUES } from "@/data/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Our Story"
        title="Where Champions Are Made"
        description="Momentum Fitness was founded on a simple belief: everyone deserves access to world-class training, coaching, and community."
      />

      <section className="py-16 lg:py-24">
        <SiteContainer>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop"
                  alt="Momentum Fitness facility"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                More Than a Gym
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Since 2018, we&apos;ve built Austin&apos;s premier performance
                facility — 18,000 sq ft of elite equipment, expert coaching, and
                a community that pushes you to be your best.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Whether you&apos;re training for competition or starting your
                fitness journey, Momentum provides the environment, tools, and
                support to help you succeed.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {ABOUT_VALUES.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SiteContainer>
      </section>

      <FeaturesSection />
      <CtaSection />
    </>
  );
}
