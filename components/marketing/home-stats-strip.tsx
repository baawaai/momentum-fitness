import { HOME_STATS } from "@/data/home";

export function HomeStatsStrip() {
  return (
    <section className="border-y border-white/10 bg-pure-black py-10">
      <div className="mx-auto grid max-w-container-max grid-cols-2 gap-8 px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        {HOME_STATS.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-3xl font-black uppercase italic text-electric-blue md:text-4xl">
              {item.value}
            </p>
            <p className="mt-1 text-label-caps text-outline">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
