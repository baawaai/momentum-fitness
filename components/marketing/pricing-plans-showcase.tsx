"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/data/pricing";
import { formatPkr } from "@/lib/format-currency";
import { cn } from "@/lib/utils";

type Billing = "monthly" | "yearly";

const YEARLY_DISCOUNT = 0.15;

function priceForPlan(monthly: number, billing: Billing) {
  if (billing === "monthly") return { amount: monthly, suffix: "/month" };
  const yearly = Math.round(monthly * 12 * (1 - YEARLY_DISCOUNT));
  return { amount: yearly, suffix: "/year" };
}

export function PricingPlansShowcase() {
  const [billing, setBilling] = useState<Billing>("monthly");

  const toggleClass = (active: boolean) =>
    cn(
      "relative z-10 rounded-sm px-5 py-2 font-display text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200",
      active ? "text-pure-black" : "text-on-surface-variant hover:text-secondary"
    );

  return (
    <div className="mx-auto max-w-6xl">
      <FadeIn className="flex flex-col items-center gap-6 text-center">
        <p className="font-display text-xs font-bold uppercase tracking-[0.35em] text-electric-blue">
          Memberships
        </p>
        <h2 className="font-display text-3xl font-black italic tracking-tight text-secondary sm:text-4xl md:text-5xl">
          Train at your level.
          <span className="block text-on-surface-variant not-italic font-extrabold text-2xl sm:text-3xl md:text-4xl mt-1">
            Upgrade anytime.
          </span>
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant md:text-base">
          Pick monthly flexibility or lock in two months free on annual billing. Every tier includes app access and core amenities.
        </p>

        <div
          className="relative mt-2 flex h-11 w-full max-w-[300px] items-stretch rounded-sm border border-white/[0.12] bg-pure-black/60 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          role="group"
          aria-label="Billing period"
        >
          <span
            className="pointer-events-none absolute top-1 bottom-1 w-[calc(50%-6px)] rounded-sm bg-electric-blue transition-[left] duration-300 ease-out"
            style={{
              left: billing === "monthly" ? "4px" : "calc(50% + 2px)",
            }}
          />
          <button
            type="button"
            className={cn(toggleClass(billing === "monthly"), "flex-1")}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            type="button"
            className={cn(toggleClass(billing === "yearly"), "flex-1")}
            onClick={() => setBilling("yearly")}
          >
            Yearly
            <span className="ml-1.5 rounded-sm bg-neon-green/20 px-1.5 py-0.5 text-[9px] font-black text-neon-green">
              −15%
            </span>
          </button>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {PRICING_PLANS.map((plan, index) => {
          const { amount, suffix } = priceForPlan(plan.price, billing);
          return (
            <FadeIn key={plan.id} delay={index * 0.08}>
              <article
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-sm border bg-gradient-to-b transition-shadow duration-300",
                  plan.popular
                    ? "border-electric-blue/50 from-surface-container-high/90 to-pure-black shadow-[0_0_0_1px_rgba(0,240,255,0.2),0_24px_80px_rgba(0,240,255,0.08)] lg:z-[1] lg:scale-[1.03]"
                    : "border-white/[0.08] from-surface-container/80 to-pure-black/90 hover:border-white/[0.14]"
                )}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-sm bg-electric-blue px-3 py-1 font-display text-[10px] font-black uppercase tracking-widest text-pure-black">
                    Best value
                  </div>
                )}

                <div className="border-b border-white/[0.06] px-6 pb-6 pt-8">
                  <h3 className="font-display text-xl font-black italic tracking-tight text-secondary">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {plan.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-end gap-1">
                    <span className="font-display text-4xl font-black tracking-tight text-electric-blue md:text-5xl">
                      {formatPkr(amount)}
                    </span>
                    <span className="pb-1 text-sm font-medium text-on-surface-variant">
                      {suffix}
                    </span>
                  </div>
                  {billing === "yearly" && (
                    <p className="mt-2 text-xs text-on-surface-variant/80">
                      Billed once per year · saves {Math.round(YEARLY_DISCOUNT * 100)}% vs twelve monthly payments
                    </p>
                  )}
                </div>

                <ul className="flex flex-1 flex-col gap-3 px-6 py-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-on-surface-variant"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-neon-green/15 text-neon-green">
                        <Check className="size-3 stroke-[3]" />
                      </span>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/[0.06] p-6">
                  <Button
                    asChild
                    className={cn(
                      "h-11 w-full rounded-sm font-display text-xs font-bold uppercase tracking-widest",
                      plan.popular
                        ? "bg-electric-blue text-pure-black hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.35)]"
                        : "border border-white/20 bg-transparent text-secondary hover:bg-white/[0.06]"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/contact">Start with {plan.name}</Link>
                  </Button>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
}
