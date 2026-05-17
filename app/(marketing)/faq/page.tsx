import { PageHeader } from "@/components/marketing/page-header";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { CtaSection } from "@/components/marketing/cta-section";
import { SiteContainer } from "@/components/layout/site-container";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = { title: "FAQ" };

export default function FaqPage() {
  return (
    <>
      <PageHeader
        badge="Support"
        title="Frequently Asked Questions"
        description="Find answers to common questions about membership, training, and our facility."
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <FadeIn className="mx-auto max-w-3xl">
            <FaqAccordion />
          </FadeIn>
        </SiteContainer>
      </section>
      <CtaSection />
    </>
  );
}
