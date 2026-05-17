import { PageHeader } from "@/components/marketing/page-header";
import { GalleryGrid } from "@/components/marketing/gallery-grid";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        badge="Facility"
        title="Inside Momentum"
        description="Explore our world-class training facility, recovery zones, and group class studios."
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <GalleryGrid />
        </SiteContainer>
      </section>
    </>
  );
}
