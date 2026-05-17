import Link from "next/link";
import { PRICING_PLANS } from "@/data/pricing";
import { FadeIn } from "@/components/motion/fade-in";
import { formatPkr } from "@/lib/format-currency";
import { cn } from "@/lib/utils";

export function HomePricingTeaser() {
  return (
    <section className="border-t border-white/10 bg-charcoal-grey px-margin-mobile py-24 md:px-margin-desktop md:py-32">
      <div className="mx-auto max-w-container-max">
        <FadeIn className="mb-14 text-center">
          <span className="text-label-caps text-neon-green">Memberships</span>
          <h2 className="text-headline-xl mt-3 uppercase text-secondary">
            Choose your tier
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-on-surface-variant">
            Flexible plans from floor access to full coaching — same Kinetic
            Performance aesthetic as our Stitch system screens.
          </p>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.1}>
              <div
                className={cn(
                  "flex h-full flex-col border border-white/10 bg-surface-container p-8 transition-all hover:border-electric-blue/40",
                  plan.popular && "ring-1 ring-electric-blue/50 shadow-[0_0_24px_rgba(0,240,255,0.12)]"
                )}
              >
                {plan.popular && (
                  <span className="mb-4 inline-block w-fit bg-electric-blue px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-pure-black">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold uppercase text-secondary">
                  {plan.name}
                </h3>
                <p className="mt-4 font-display text-4xl font-black text-electric-blue">
                  {formatPkr(plan.price)}
                  <span className="text-base font-normal text-on-surface-variant">
                    {plan.period}
                  </span>
                </p>
                <p className="mt-3 font-sans text-sm text-on-surface-variant">
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2 font-sans text-sm text-outline">
                  {plan.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-neon-green">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pricing"
                  className={cn(
                    "mt-8 w-full py-3 text-center font-display text-sm font-bold uppercase tracking-tight transition-all",
                    plan.popular
                      ? "bg-electric-blue text-pure-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      : "border border-white/15 text-secondary hover:border-electric-blue hover:text-electric-blue"
                  )}
                >
                  View plan
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
