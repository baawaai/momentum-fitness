import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { StatCard } from "@/components/dashboard/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ADMIN_STATS, REVENUE_CHART } from "@/data/admin-dashboard";
import { formatPkr, formatPkrLedger } from "@/lib/format-currency";

export const metadata = { title: "Financial Overview" };

const FINANCIAL_STATS = ADMIN_STATS.filter((s) =>
  ["Monthly Revenue", "Churn Rate"].includes(s.label)
).concat([
  {
    label: "Avg. Revenue / Member",
    value: formatPkr(76.2),
    change: "+2.1%",
    trend: "up" as const,
  },
  {
    label: "Outstanding Invoices",
    value: formatPkr(4280),
    change: "-12%",
    trend: "down" as const,
  },
]);

const RECENT_TRANSACTIONS = [
  { desc: "Sarah Mitchell — Momentum Pro", amount: 89 },
  { desc: "Tom Bradley — Elite Performance", amount: 149 },
  { desc: "Lisa Wong — Essential", amount: 49 },
  { desc: "Equipment maintenance", amount: -1240 },
];

export default function AdminFinancialPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Financial Overview"
        description="Track revenue, billing, and financial health."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {FINANCIAL_STATS.map((stat) => (
          <StatCard key={stat.label} stat={stat} />
        ))}
      </div>
      <RevenueChart data={REVENUE_CHART} title="Revenue Trend" />
      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {RECENT_TRANSACTIONS.map((tx) => (
              <li
                key={tx.desc}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm">{tx.desc}</span>
                <span
                  className={
                    tx.amount >= 0
                      ? "text-sm font-medium text-emerald-500"
                      : "text-sm font-medium text-red-400"
                  }
                >
                  {formatPkrLedger(tx.amount)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
