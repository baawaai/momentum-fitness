import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

export function HomeFacilitySection() {
  return (
    <section className="bg-charcoal-grey px-margin-mobile py-24 md:px-margin-desktop md:py-32">
      <div className="mx-auto grid max-w-container-max items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=900&h=675&fit=crop"
              alt="Momentum facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-pure-black/60 to-transparent" />
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <span className="text-label-caps text-electric-blue">Facility</span>
          <h2 className="text-headline-xl mt-3 uppercase text-secondary">
            Space to train without compromise
          </h2>
          <p className="mt-4 font-sans text-lg text-on-surface-variant">
            Open floor rig zones, calibrated cardio, dedicated strength platforms,
            and recovery that matches the intensity of your sessions.
          </p>
          <ul className="mt-8 space-y-3 font-sans text-on-surface-variant">
            {[
              "Rogue & Eleiko-caliber barbells and bumper inventory",
              "Climate-controlled performance floor with zone lighting",
              "Cold plunge, sauna, and mobility studio on Elite tier",
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <span className="text-neon-green">▸</span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="/gallery"
            className="mt-10 inline-block border-b-2 border-electric-blue pb-1 font-display text-sm font-bold uppercase tracking-widest text-electric-blue"
          >
            View gallery →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
