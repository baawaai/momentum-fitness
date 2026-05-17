import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { PricingPlansShowcase } from "@/components/marketing/pricing-plans-showcase";
import { SiteContainer } from "@/components/layout/site-container";
import { Button } from "@/components/ui/button";
import { PRICING_FAQ } from "@/data/pricing-faq";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-pure-black pt-8 pb-14 lg:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% -10%, rgba(0,240,255,0.25), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(204,255,0,0.08), transparent 50%)",
          }}
        />
        <SiteContainer className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_minmax(0,420px)] lg:gap-16">
            <FadeIn>
              <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-electric-blue">
                Pricing
              </p>
              <h1 className="mt-4 font-display text-4xl font-black italic leading-[1.05] tracking-tight text-secondary sm:text-5xl lg:text-6xl">
                Memberships built around how you train.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-on-surface-variant">
                Transparent tiers, no surprise fees. Compare plans below, switch billing to annual for two months comped, then lock in your start date at the desk or online.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-11 rounded-sm bg-electric-blue px-6 font-display text-xs font-bold uppercase tracking-widest text-pure-black hover:bg-cyan-300"
                >
                  <Link href="/contact">Book a tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-sm border-white/20 bg-transparent font-display text-xs font-bold uppercase tracking-widest text-secondary hover:bg-white/[0.06]"
                >
                  <Link href="/location">Visit the gym</Link>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/[0.1] bg-surface-container-low lg:aspect-square">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&h=900&fit=crop)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-neon-green">
                    Facility
                  </p>
                  <p className="mt-2 font-display text-xl font-black italic text-secondary">
                    Recovery · turf · racks · studio
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </SiteContainer>
      </section>

      <section className="py-16 lg:py-24">
        <SiteContainer>
          <PricingPlansShowcase />
        </SiteContainer>
      </section>

      <section className="border-t border-white/[0.07] bg-charcoal-grey/40 py-16 lg:py-24">
        <SiteContainer>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-black italic tracking-tight text-secondary sm:text-3xl">
              Questions before you join
            </h2>
            <p className="mt-3 text-sm text-on-surface-variant md:text-base">
              Straight answers about freezes, billing changes, and trials.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="mx-auto mt-12 max-w-2xl">
            <Accordion className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {PRICING_FAQ.map((item) => (
                <AccordionItem key={item.id} value={item.id} className="border-0">
                  <AccordionTrigger className="py-5 font-display text-sm font-bold uppercase tracking-wide text-secondary hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-on-surface-variant leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </SiteContainer>
      </section>

      <section className="border-t border-white/[0.07] py-16 lg:py-20">
        <SiteContainer>
          <FadeIn className="flex flex-col items-center rounded-sm border border-electric-blue/30 bg-gradient-to-br from-surface-container-high/50 to-pure-black px-8 py-12 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="font-display text-2xl font-black italic text-secondary md:text-3xl">
                Still comparing options?
              </h2>
              <p className="mt-2 max-w-md text-sm text-on-surface-variant">
                Tell us your goals — we&apos;ll recommend the right tier and onboarding path.
              </p>
            </div>
            <Button
              asChild
              className="mt-8 h-11 shrink-0 rounded-sm border border-neon-green/60 bg-neon-green px-8 font-display text-xs font-black uppercase tracking-widest text-pure-black hover:bg-neon-green/90 md:mt-0"
            >
              <Link href="/contact">Talk to us</Link>
            </Button>
          </FadeIn>
        </SiteContainer>
      </section>
    </>
  );
}
