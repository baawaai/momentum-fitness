import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { REVENUE_CHART } from "@/data/admin-dashboard";

export const metadata = { title: "Analytics" };

const CLASS_ATTENDANCE = [
  { week: "Mon", workouts: 85 },
  { week: "Tue", workouts: 72 },
  { week: "Wed", workouts: 90 },
  { week: "Thu", workouts: 68 },
  { week: "Fri", workouts: 95 },
  { week: "Sat", workouts: 110 },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Analytics"
        description="Deep insights into membership growth and facility usage."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <RevenueChart data={REVENUE_CHART} title="Revenue vs Growth" />
        <ProgressChart data={CLASS_ATTENDANCE} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Peak Hours", value: "6–8 AM" },
          { label: "Most Popular Class", value: "HIIT Burn" },
          { label: "Avg. Session Length", value: "58 min" },
          { label: "Member Retention", value: "97.9%" },
        ].map((metric) => (
          <Card key={metric.label} className="border border-white/5 bg-charcoal-grey">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold">{metric.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
