import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background pt-24">{children}</main>
      <Footer />
    </>
  );
}
