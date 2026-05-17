import Link from "next/link";
import { MaterialIcon } from "@/components/ui/material-icon";
import { FadeIn } from "@/components/motion/fade-in";

export function HomeCtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-pure-black px-margin-mobile py-20 md:px-margin-desktop md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,240,255,0.25),transparent)]" />
      <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="text-label-caps text-neon-green">Start today</span>
        <h2 className="text-headline-xl mt-4 uppercase text-secondary">
          Your next PR starts with one session
        </h2>
        <p className="mt-4 font-sans text-lg text-on-surface-variant">
          Book a tour, trial a class, or talk memberships — we’ll match you to
          the right program.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-electric-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-tight text-pure-black transition-all hover:shadow-[0_0_28px_rgba(0,240,255,0.45)]"
          >
            <MaterialIcon name="calendar_month" className="text-[20px]" />
            Book a tour
          </Link>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 border-2 border-electric-blue px-8 py-4 font-display text-sm font-bold uppercase tracking-tight text-electric-blue transition-all hover:bg-electric-blue hover:text-pure-black"
          >
            <MaterialIcon name="shopping_bag" className="text-[20px]" />
            Shop supplements
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
