import { HeroSection } from "@/components/marketing/hero-section";
import { BentoSection } from "@/components/marketing/bento-section";
import { HomeStatsStrip } from "@/components/marketing/home-stats-strip";
import { HomeMarquee } from "@/components/marketing/home-marquee";
import { HomeWhySection } from "@/components/marketing/home-why-section";
import { HomeFacilitySection } from "@/components/marketing/home-facility-section";
import { HomePricingTeaser } from "@/components/marketing/home-pricing-teaser";
import { HomeTestimonials } from "@/components/marketing/home-testimonials";
import { HomeCtaBand } from "@/components/marketing/home-cta-band";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeStatsStrip />
      <HomeMarquee />
      <BentoSection />
      <HomeWhySection />
      <HomeFacilitySection />
      <HomePricingTeaser />
      <HomeTestimonials />
      <HomeCtaBand />
    </>
  );
}
