"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_IMAGE, SITE_TAGLINE } from "@/data/site";
import { fadeInUp } from "@/lib/motion";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-surface-container-high">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />
        <div className="absolute inset-0 bg-pure-black/60" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <motion.div
        initial={fadeInUp.initial}
        animate={fadeInUp.animate}
        transition={fadeInUp.transition}
        className="relative z-10 mx-auto mt-20 max-w-container-max px-margin-mobile text-center md:px-margin-desktop"
      >
        <h1 className="text-display-lg mb-6 uppercase italic text-secondary drop-shadow-lg">
          ENGINEERED FOR <br />
          <span className="text-electric-blue">PERFORMANCE</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-on-surface">
          {SITE_TAGLINE}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/pricing"
            className="bg-electric-blue px-8 py-4 font-display text-xl font-bold uppercase text-pure-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_#00F0FF] active:scale-95"
          >
            Start Your Trial
          </Link>
          <Link
            href="/#services"
            className="border-2 border-neon-green px-8 py-4 font-display text-xl font-bold uppercase text-neon-green transition-all duration-300 hover:bg-neon-green hover:text-pure-black active:scale-95"
          >
            View Programs
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
