import { PageHeader } from "@/components/marketing/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        description="Last updated: May 1, 2026"
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <div className="prose prose-invert mx-auto max-w-3xl prose-headings:font-semibold prose-p:text-muted-foreground">
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide when signing up for membership,
              including name, email, phone number, and payment details. We also
              collect usage data through our member app to improve your
              experience.
            </p>
            <h2>How We Use Your Data</h2>
            <p>
              Your data is used to manage your membership, process payments,
              communicate facility updates, and personalize your training
              experience. We do not sell your personal information to third
              parties.
            </p>
            <h2>Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. Payment data is processed through PCI-compliant
              payment providers.
            </p>
            <h2>Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data by contacting hello@momentumfitness.com.
            </p>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
