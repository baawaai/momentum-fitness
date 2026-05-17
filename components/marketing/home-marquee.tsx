import { HOME_MARQUEE_ITEMS } from "@/data/home";

export function HomeMarquee() {
  const doubled = [...HOME_MARQUEE_ITEMS, ...HOME_MARQUEE_ITEMS];
  return (
    <section className="overflow-hidden border-b border-white/10 bg-charcoal-grey py-3">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="text-label-caps text-on-surface-variant"
          >
            {label}
            <span className="mx-6 text-electric-blue">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
