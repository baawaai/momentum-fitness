import { PageHeader } from "@/components/marketing/page-header";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { CtaSection } from "@/components/marketing/cta-section";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <>
      <PageHeader
        badge="Membership"
        title="Choose Your Plan"
        description="Flexible memberships designed for every fitness level. All plans include access to our member app and facility amenities."
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <PricingCards />
        </SiteContainer>
      </section>
      <CtaSection />
    </>
  );
}
