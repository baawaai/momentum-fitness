import Link from "next/link";
import { ABOUT_VALUES } from "@/data/site";
import { FadeIn } from "@/components/motion/fade-in";

export function HomeWhySection() {
  return (
    <section className="bg-background px-margin-mobile py-24 md:px-margin-desktop md:py-32">
      <div className="mx-auto max-w-container-max">
        <FadeIn className="mb-16 max-w-2xl">
          <span className="text-label-caps text-electric-blue">Why Momentum</span>
          <h2 className="text-headline-xl mt-3 uppercase text-secondary">
            Built for athletes who refuse average
          </h2>
          <p className="mt-4 font-sans text-lg text-on-surface-variant">
            Precision programming, premium equipment, and a culture that holds
            you to a higher standard.
          </p>
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-3">
          {ABOUT_VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="group border border-white/5 bg-charcoal-grey p-8 transition-colors hover:border-electric-blue/30">
                <div className="mb-4 h-1 w-12 bg-gradient-to-r from-electric-blue to-neon-green" />
                <h3 className="text-headline-md mb-3 uppercase text-secondary">
                  {v.title}
                </h3>
                <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                  {v.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex border-2 border-neon-green px-8 py-3 font-display text-sm font-bold uppercase tracking-wider text-neon-green transition-all hover:bg-neon-green hover:text-pure-black"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
