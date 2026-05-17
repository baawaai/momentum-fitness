import { HOME_TESTIMONIALS } from "@/data/home";
import { FadeIn } from "@/components/motion/fade-in";

export function HomeTestimonials() {
  return (
    <section className="bg-background px-margin-mobile py-24 md:px-margin-desktop md:py-32">
      <div className="mx-auto max-w-container-max">
        <FadeIn className="mb-14">
          <span className="text-label-caps text-electric-blue">
            Member voices
          </span>
          <h2 className="text-headline-xl mt-3 uppercase text-secondary">
            Proof in the gym
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {HOME_TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.id} delay={i * 0.1}>
              <blockquote className="glass-card flex h-full flex-col p-8">
                <p className="font-sans text-lg leading-relaxed text-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-white/10 pt-6">
                  <cite className="font-display text-sm font-bold uppercase not-italic text-electric-blue">
                    {t.name}
                  </cite>
                  <p className="mt-1 text-label-caps text-outline">{t.role}</p>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
