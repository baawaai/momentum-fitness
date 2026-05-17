import { PageHeader } from "@/components/marketing/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <>
      <PageHeader
        title="Terms of Service"
        description="Last updated: May 1, 2026"
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-semibold prose-p:text-muted-foreground">
            <h2>Membership Agreement</h2>
            <p>
              By joining Momentum Fitness, you agree to abide by our facility
              rules, code of conduct, and membership terms. Membership fees are
              billed monthly and are non-refundable except as required by law.
            </p>
            <h2>Cancellation Policy</h2>
            <p>
              Members may cancel with 30 days written notice. Freeze requests
              are limited to 3 months per calendar year and require advance
              approval.
            </p>
            <h2>Liability Waiver</h2>
            <p>
              All members must complete a liability waiver before using facility
              equipment. Momentum Fitness is not liable for injuries resulting
              from misuse of equipment or failure to follow trainer guidance.
            </p>
            <h2>Facility Rules</h2>
            <p>
              Members must wipe down equipment after use, respect other members,
              and follow dress code requirements. Failure to comply may result in
              membership suspension.
            </p>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
