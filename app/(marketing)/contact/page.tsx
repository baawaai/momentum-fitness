import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/marketing/page-header";
import { ContactForm } from "@/components/marketing/contact-form";
import { SiteContainer } from "@/components/layout/site-container";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "2847 Performance Blvd, Austin, TX 78701",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "(512) 555-0147",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "hello@momentumfitness.com",
  },
];

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Get in Touch"
        title="Let's Start Your Journey"
        description="Have questions about membership, training, or tours? We're here to help."
      />
      <section className="py-16 lg:py-24">
        <SiteContainer>
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="space-y-6 lg:col-span-2">
              {CONTACT_INFO.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.1}>
                  <Card className="border-border/50 bg-card/50">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="size-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2} className="lg:col-span-3">
              <ContactForm />
            </FadeIn>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
