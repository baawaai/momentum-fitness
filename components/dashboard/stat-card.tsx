import { MaterialIcon } from "@/components/ui/material-icon";
import type { DashboardStat } from "@/types";
import { cn } from "@/lib/utils";

interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const isAlert = stat.label.toLowerCase().includes("inventory") || stat.label.toLowerCase().includes("churn");

  return (
    <div
      className={cn(
        "flex min-h-[160px] flex-col justify-between border border-white/5 p-6 shadow-xl transition-colors duration-300",
        isAlert
          ? "border-status-error/30 bg-error-container/20"
          : "bg-charcoal-grey hover:border-electric-blue/30"
      )}
    >
      <span className="text-label-caps text-outline uppercase">{stat.label}</span>
      <div>
        <p
          className={cn(
            "font-display text-4xl font-black text-secondary",
            isAlert && "text-error"
          )}
        >
          {stat.value}
        </p>
        <p
          className={cn(
            "mt-1 flex items-center gap-1 text-label-caps",
            stat.trend === "up" && "text-neon-green",
            stat.trend === "down" && !isAlert && "text-neon-green",
            stat.trend === "down" && isAlert && "text-error",
            stat.trend === "neutral" && "text-outline"
          )}
        >
          {stat.trend === "up" && (
            <MaterialIcon name="trending_up" className="text-[14px]" />
          )}
          {stat.change}
        </p>
      </div>
    </div>
  );
}
