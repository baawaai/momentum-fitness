import { FadeIn } from "@/components/motion/fade-in";
import { SiteContainer } from "@/components/layout/site-container";

interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <section className="border-b border-border/50 bg-card/20 py-16 lg:py-24">
      <SiteContainer>
        <FadeIn className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
