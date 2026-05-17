import Image from "next/image";
import { MaterialIcon } from "@/components/ui/material-icon";
import {
  ADMIN_ACTIVITIES,
  ADMIN_STATS,
  UPCOMING_CLASSES,
} from "@/data/admin-dashboard";
import { cn } from "@/lib/utils";

export const metadata = { title: "Admin Console | Overview" };

export default function AdminOverviewPage() {
  return (
    <>
        <header className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-headline-xl uppercase tracking-tight text-secondary">
              System Overview
            </h2>
            <p className="mt-2 font-sans text-base text-outline">
              Real-time performance metrics for Momentum Fitness HQ.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              className="flex items-center gap-2 border-2 border-neon-green px-6 py-2 font-display text-base uppercase text-neon-green transition-all duration-200 hover:bg-neon-green hover:text-pure-black hover:shadow-[0_0_20px_rgba(204,255,0,0.3)] active:scale-95"
            >
              <MaterialIcon name="add" className="text-[20px]" />
              New Member
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-white/5 bg-surface-container px-6 py-2 font-display text-base uppercase text-secondary transition-colors duration-200 hover:bg-surface-variant"
            >
              <MaterialIcon name="receipt_long" className="text-[20px]" />
              Log Payment
            </button>
          </div>
        </header>

        <section className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {ADMIN_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex min-h-[160px] flex-col justify-between border border-white/5 p-6 shadow-xl transition-colors duration-300",
                stat.label === "Inventory Alerts"
                  ? "border-status-error/30 bg-error-container/20"
                  : "bg-charcoal-grey hover:border-electric-blue/30",
                stat.label === "Today's Check-ins" && "relative overflow-hidden"
              )}
            >
              {stat.label === "Today's Check-ins" && (
                <div className="absolute inset-0 -z-10 bg-electric-blue/5 backdrop-blur-3xl" />
              )}
              <div className="flex items-start justify-between">
                <span className="text-label-caps text-outline uppercase">
                  {stat.label}
                </span>
                <MaterialIcon
                  name={
                    i === 0
                      ? "groups"
                      : i === 1
                        ? "account_balance_wallet"
                        : i === 2
                          ? "how_to_reg"
                          : "warning"
                  }
                  filled
                  className={
                    stat.label === "Inventory Alerts"
                      ? "text-status-error"
                      : "text-electric-blue"
                  }
                />
              </div>
              <div>
                <p
                  className={cn(
                    "font-display text-5xl font-black text-secondary",
                    stat.label === "Inventory Alerts" && "text-error"
                  )}
                >
                  {stat.value}
                </p>
                <p
                  className={cn(
                    "mt-1 flex items-center gap-1 text-label-caps",
                    stat.trend === "up" && "text-neon-green",
                    stat.trend === "down" && "text-error",
                    stat.trend === "neutral" && "text-outline"
                  )}
                >
                  {stat.trend === "up" && (
                    <MaterialIcon name="trending_up" className="text-[14px]" />
                  )}
                  {stat.change}
                </p>
                {stat.label === "Today's Check-ins" && (
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-container">
                    <div className="h-full w-[75%] bg-electric-blue" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        <div className="grid flex-1 grid-cols-1 gap-8 lg:grid-cols-3">
          <section className="flex flex-col border border-white/5 bg-charcoal-grey p-8 lg:col-span-2">
            <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
              <h3 className="text-headline-md uppercase text-secondary">
                Recent Activity
              </h3>
              <button
                type="button"
                className="text-label-caps text-electric-blue transition-colors hover:text-white"
              >
                View All
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-6">
              {ADMIN_ACTIVITIES.map((activity) => (
                <div
                  key={activity.id}
                  className="flex cursor-default items-start gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-surface-container">
                    <MaterialIcon
                      name={activity.icon}
                      className={cn("text-[20px]", activity.iconColor)}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-base text-secondary">
                      {activity.highlight ? (
                        <>
                          {activity.message.split(activity.highlight)[0]}
                          <span className="font-bold">{activity.highlight}</span>
                          {activity.message.split(activity.highlight)[1]}
                        </>
                      ) : (
                        activity.message
                      )}
                    </p>
                    <p className="mt-1 text-label-caps text-outline">
                      {activity.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-8">
            <div className="border border-white/5 bg-charcoal-grey p-6">
              <h3 className="mb-6 text-lg font-bold uppercase text-secondary">
                Upcoming Classes
              </h3>
              <div className="flex flex-col gap-4">
                {UPCOMING_CLASSES.map((cls, i) => (
                  <div
                    key={cls.name}
                    className={cn(i === 0 && "border-b border-white/5 pb-4")}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-sans text-base text-secondary">
                        {cls.name}
                      </span>
                      <span className="text-label-caps text-neon-green">
                        {cls.time}
                      </span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-surface-container">
                      <div
                        className={cn("h-full rounded-full", cls.barColor, cls.width)}
                      />
                    </div>
                    <p className="mt-1 text-right text-label-caps text-outline">
                      {cls.enrolled}/{cls.capacity} Enrolled
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="group relative flex min-h-[200px] flex-1 flex-col justify-end overflow-hidden border border-white/5 bg-charcoal-grey p-6">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                alt="Gym equipment"
                fill
                className="object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-grey via-charcoal-grey/80 to-transparent" />
              <div className="relative z-10">
                <span className="mb-2 inline-block bg-neon-green px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-pure-black">
                  Facility Update
                </span>
                <h4 className="mb-2 font-display text-xl uppercase leading-tight text-secondary">
                  New Squat Racks Installed
                </h4>
                <p className="font-sans text-sm text-outline">
                  Maintenance completed in Zone A. Equipment is live.
                </p>
              </div>
            </div>
          </section>
        </div>
    </>
  );
}
