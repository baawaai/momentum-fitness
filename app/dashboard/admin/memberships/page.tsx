import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MEMBERSHIP_BREAKDOWN } from "@/data/admin-dashboard";

export const metadata = { title: "Membership Management" };

export default function AdminMembershipsPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Membership Management"
        description="Configure plans and view membership distribution."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {MEMBERSHIP_BREAKDOWN.map((item) => (
          <Card key={item.plan} className="border border-white/5 bg-charcoal-grey">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.plan}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{item.count}</p>
              <p className="text-xs text-muted-foreground">active members</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <PricingCards />
    </div>
  );
}
