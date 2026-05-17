import Link from "next/link";
import { Check } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PRICING_PLANS } from "@/data/pricing";
import { cn } from "@/lib/utils";

interface PricingCardsProps {
  showAll?: boolean;
}

export function PricingCards({ showAll = true }: PricingCardsProps) {
  const plans = showAll ? PRICING_PLANS : PRICING_PLANS.slice(0, 3);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {plans.map((plan, index) => (
        <FadeIn key={plan.id} delay={index * 0.1}>
          <Card
            className={cn(
              "relative flex h-full flex-col border-border/50 bg-card/50",
              plan.popular && "border-primary shadow-lg shadow-primary/10"
            )}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <CardHeader className="pb-4">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </FadeIn>
      ))}
    </div>
  );
}
