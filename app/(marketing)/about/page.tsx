import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { MaterialIcon } from "@/components/ui/material-icon";

export const metadata = {
  title: "About",
};

const HERO_BG_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRWzSrfKzP9sr2WbV9BcrTCUfnF72MmB-Qf65HcVVD7KKXSTieiA0oxgLsBn8oFaQ3oIoU3d8wSpKdx134wRRVeWdnOrR8_yjD2yGnslaadJ4fkvlqyofmpr3c3MulKgQDvEFn5Is97cSgvncd9eFN9NSnsJjJDMOtEJ2iM4rRTYhx_AZQnWY7a8ZATSANtIlpimSQU-2Qgvzf1x_Vp_rnz0aQNSWXJ25aJW3Ry-sC2W2xOXr-F_E-naVV_jZiIuCZDas7t1bhjqIR";

const MISSION_IMG_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApu1dyPTI2oUujTaseSzbJwM5ulniu466q3VZLbS4BT1W0uhIE3v3hbP_X1wrR8rdotHAzbcMmn_BJ8mYDAcsaKaZU7ZY1NBS3hjJYal5Zkhuk3tTZ5nuiNcDuXVVwPVM38jsVKsja7b4GqqEstnTKTfxqEGvbs_yKWlWJpgZCmuXBPEzyuC9dHtuGTM_m67GKt2vVk4LhqMC76BRrKIRXHG_eSmH5F1vm9qpRJMPTebT34HVaMrIUS4A0xIzX_H0Z83kDJaUmq2oX";

/** Stitch export roster — imagery matches `stitch-export/about.html`. */
const ELITE_ROSTER = [
  {
    name: "Marcus Vance",
    role: "Head of Strength",
    roleColor: "text-electric-blue" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDSWFioLNT751jGNLTdpBdTlUEgQ-JogBzFLFJG152DUcyWzLG1vGm2lScwNSCAgs-7-IGTLHDDJFmzjrJFRWgFzURBzN30JWSsIO5z80mMFqt8rnCQv-gn66BqUdRGo0ogz3uM2ea0rYvHuznzoYoNR9aXtwobZ54ujkVjbmtaEX_HuAyZ1NiCbErpvNSnZpKgaZhdLof6iEUkxoBjiNAhJf_Si9vGv9HB7Q9DkXxBPVwFhiEncpyObdliN27tgQo3mbHS7AVfGpU1",
  },
  {
    name: "Elena Rostova",
    role: "Performance Director",
    roleColor: "text-neon-green" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnidRHd33pBxvbCeo8eX6Ef2lEaspXnpTG9ySzbf_6B-BP9xnkK_mh1g0fzKeverbFvX6bG6bgjrJpZ3ingTMTGrwczog5T0SmnY913pp1ctA6AjJWvws7QbPa8pKFq9n6cMJLdhWnNxWAibAi-u6xyckeEcoJch9FJIZ4RCGNjhuudFpOXjqrQK9mRn95tDfIpuF11HRk_3SJ5Pwj-bNiZ6jyiGKFoqDvVx6XX_mJIjdH5IrcyPqV3t2kirnxJa1uKPltlaSihcLQ",
  },
  {
    name: "Julian Hayes",
    role: "Metabolic Specialist",
    roleColor: "text-electric-blue" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBw-5sy9rnCq7B1tzPplME0zA5W_hUxS0kiyZyyfNkIPY6b481s0jPUl-ZGfKVcC10Zwcar1xIbMYXRMN69kPIPit9Tg3ggI-CV1G-EAfP5TDJmz8nIfcaNAVEMxy3nbW7FFr62QfUgSNzy63yrX-sfKP-lHMoy-R3wm1QxPCiDJ1u0Bc0Zw4UPrWuF3jU93lDo9T4n3kGZ8guRf9uCVBR4i5Aw6ynvzk_gCgjFGZwtBjLTNwjRTEjefs7kMFQIUziJclxAIKrJaj",
  },
  {
    name: "Dr. Sarah Lin",
    role: "Biomechanics Lead",
    roleColor: "text-neon-green" as const,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBl0ilGLY7MlA9IDebWqP7uSzEZvR5upbtV2VgQ5LDf-A_z_S8QIDB8NHc88Xy9skI3aQ3_8bZz5w-Xya_uSR3P0-GDT2J3YWpfon6-xU-ehOIBxykHozm34R5D9bnDLY6luhrDhtCPaUkEsDh0Zk0x5f8xI2S4aipAYhEWEEgxES5lgDt3T57MJ9hLu_NXufeU0wecN0Qjdr_K1VqASQj-4BDkIOGkTqlNPYabSoHJiuj3I9QZkFDNnUkldGyRVhtmLAaGOxLMaPdM",
  },
] as const;

const METHODOLOGY_CARDS = [
  {
    title: "Biometric Profiling",
    body: "We establish baseline metrics through comprehensive physiological testing, ensuring every protocol is engineered for your unique structural makeup.",
    icon: "analytics",
    watermark: "biotech",
    accent: "electric-blue" as const,
    hoverBorder: "hover:border-electric-blue/50",
  },
  {
    title: "Kinetic Load Tracking",
    body: "Velocity-based training and real-time output monitoring guarantee precise neuromuscular adaptation, preventing overtraining while maximizing power yield.",
    icon: "fitness_center",
    watermark: "bolt",
    accent: "neon-green" as const,
    hoverBorder: "hover:border-neon-green/50",
  },
  {
    title: "Accelerated Recovery",
    body: "Integration of cold-water immersion, pneumatic compression, and targeted nutritional supplementation to radically reduce systemic inflammation between cycles.",
    icon: "healing",
    watermark: "vital_signs",
    accent: "electric-blue" as const,
    hoverBorder: "hover:border-electric-blue/50",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero — matches Stitch export */}
      <section className="relative flex min-h-[716px] items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_BG_SRC}
            alt="Athlete training with kettlebells in a dark, high-contrast gym"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-pure-black via-pure-black/80 to-transparent" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/20 blur-[120px] mix-blend-screen" />
        </div>

        <div className="relative z-10 mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
          <FadeIn>
            <span className="mb-4 block text-label-caps tracking-widest text-neon-green">
              Our Origin
            </span>
            <h1 className="mb-6 font-display text-[48px] leading-[52px] font-black tracking-tight text-white uppercase md:text-[80px] md:leading-[88px] md:tracking-[-0.04em]">
              Redefining <br />
              <span className="bg-linear-to-r from-electric-blue to-[#7df4ff] bg-clip-text text-transparent">
                Human Limits
              </span>
            </h1>
            <p className="mx-auto max-w-2xl font-sans text-lg leading-7 text-on-surface-variant">
              Momentum Fitness is not just a facility; it&apos;s a crucible for
              high-performance athletics. We fuse cutting-edge sport science with
              relentless intensity to engineer elite outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Mission — asymmetric */}
      <section className="mx-auto max-w-container-max border-b border-white/5 px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <div className="grid grid-cols-1 items-center gap-gutter-desktop md:grid-cols-12">
          <div className="relative md:col-span-5">
            <Image
              src={MISSION_IMG_SRC}
              alt="Determined athlete focused under harsh studio lighting"
              width={800}
              height={1000}
              className="h-auto w-full rounded-sm border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] grayscale contrast-125"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 border-r-2 border-b-2 border-neon-green" aria-hidden />
          </div>
          <div className="mt-12 space-y-8 md:col-span-6 md:col-start-7 md:mt-0">
            <FadeIn delay={0.06}>
              <h2 className="font-display text-[40px] leading-[48px] font-black tracking-tight text-white uppercase">
                The Physics <br /> of{" "}
                <span className="text-electric-blue">Progress</span>
              </h2>
              <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                At Momentum, we believe that kinetic potential is universal, but
                realizing it requires precision. Our mission is to strip away the
                noise of the fitness industry and provide an environment built
                purely on empirical data, world-class coaching, and unrelenting
                effort.
              </p>
              <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                We don&apos;t do fads. We do physiology. We build structural
                integrity, explosive power, and metabolic dominance through systems
                tested on professional stages worldwide.
              </p>
              <div className="flex gap-6 pt-4">
                <div className="border-l-2 border-neon-green pl-4">
                  <span className="block font-display text-[40px] leading-[48px] font-black text-white">
                    15+
                  </span>
                  <span className="text-label-caps text-on-surface-variant">
                    Years Experience
                  </span>
                </div>
                <div className="border-l-2 border-electric-blue pl-4">
                  <span className="block font-display text-[40px] leading-[48px] font-black text-white">
                    10k
                  </span>
                  <span className="text-label-caps text-on-surface-variant">
                    Athletes Optimized
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Science of Performance — bento grid */}
      <section className="border-b border-white/5 bg-charcoal-grey py-24 md:py-32">
        <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
          <FadeIn className="mb-16 text-center">
            <span className="mb-2 block text-label-caps tracking-widest text-neon-green">
              Methodology
            </span>
            <h2 className="font-display text-[40px] leading-[48px] font-black text-white uppercase">
              The Science of Performance
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-gutter-mobile md:grid-cols-3 md:gap-gutter-desktop">
            {METHODOLOGY_CARDS.map((card, index) => (
              <FadeIn key={card.title} delay={index * 0.06}>
                <article
                  className={`group relative flex min-h-[300px] flex-col justify-between overflow-hidden border border-white/5 bg-surface p-8 transition-colors duration-500 ${card.hoverBorder}`}
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
                    <MaterialIcon
                      name={card.watermark}
                      className={`text-[80px] ${card.accent === "neon-green" ? "text-neon-green" : "text-electric-blue"}`}
                    />
                  </div>
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center border border-white/10 bg-charcoal-grey">
                      <MaterialIcon
                        name={card.icon}
                        className={
                          card.accent === "neon-green"
                            ? "text-neon-green"
                            : "text-electric-blue"
                        }
                      />
                    </div>
                    <h3 className="mb-4 text-headline-md font-bold tracking-wide text-white uppercase">
                      {card.title}
                    </h3>
                    <p className="font-sans text-base leading-relaxed text-on-surface-variant">
                      {card.body}
                    </p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Elite Roster */}
      <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop md:py-32">
        <FadeIn className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <span className="mb-2 block text-label-caps tracking-widest text-electric-blue">
              The Vanguard
            </span>
            <h2 className="font-display text-[40px] leading-[48px] font-black text-white uppercase">
              Elite Roster
            </h2>
          </div>
          <Link
            href="/trainers"
            className="text-label-caps flex items-center gap-2 border-b border-neon-green pb-1 tracking-wider text-neon-green transition-colors hover:text-white"
          >
            View full roster{" "}
            <MaterialIcon name="arrow_forward" className="text-base" />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-1 gap-gutter-mobile sm:grid-cols-2 md:gap-gutter-desktop lg:grid-cols-4">
          {ELITE_ROSTER.map((trainer, index) => (
            <FadeIn key={trainer.name} delay={index * 0.06}>
              <Link
                href="/trainers"
                className="group trainer-card relative cursor-pointer overflow-hidden border border-white/5 bg-charcoal-grey"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-surface">
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name}, ${trainer.role}`}
                    fill
                    className="object-cover object-top grayscale-80 contrast-125 transition-all duration-400 ease-out group-hover:grayscale-0 group-hover:contrast-100"
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-pure-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="relative z-10 -mt-12 border-t border-white/10 bg-charcoal-grey/90 p-6 backdrop-blur-sm">
                  <h4 className="mb-1 text-headline-md font-bold text-white uppercase">
                    {trainer.name}
                  </h4>
                  <p className={`text-label-caps ${trainer.roleColor}`}>
                    {trainer.role}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
