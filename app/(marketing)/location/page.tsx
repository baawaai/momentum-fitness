import { SiteContainer } from "@/components/layout/site-container";
import { PageHeader } from "@/components/marketing/page-header";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GOOGLE_MAPS_LOCATION_URL } from "@/data/site";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Location" };

export default function LocationPage() {
  return (
    <>
      <PageHeader
        badge="Find Us"
        title="Momentum Fitness Location"
        description="Open Google Maps for the official listing, hours, and turn-by-turn directions to our gym."
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.035503953341!2d74.2646743!3d31.4682095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190338a26b44f1%3A0x7b451dea970f3965!2sMomentum%20Fitness%20(Gym%20%26%20Supplements%20Store)!5e0!3m2!1sen!2s!4v1779019920684!5m2!1sen!2s"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />      <section className="py-16 lg:py-24">
        <SiteContainer>
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <Card className="border-border/50 bg-card/50">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-7" />
                  </div>
                  <CardTitle className="text-xl">Directions & pins</CardTitle>
                  <CardDescription>
                    This shortcut opens our venue in Google Maps (mobile picks
                    the app automatically).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6 pb-8 text-center">
                  <Button asChild size="lg" className="w-full sm:mx-auto sm:w-fit">
                    <Link
                      href={GOOGLE_MAPS_LOCATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </Link>
                  </Button>
                  <p className="break-all font-mono text-xs text-muted-foreground">
                    {GOOGLE_MAPS_LOCATION_URL}
                  </p>
                  <Button variant="outline" asChild className="w-full sm:mx-auto sm:w-fit">
                    <Link href="/contact">Contact &amp; other details</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
