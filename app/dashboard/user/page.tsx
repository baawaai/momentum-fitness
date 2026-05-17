import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BOOKING_SLOTS,
  PROGRESS_CHART,
  USER_PROFILE,
  USER_STATS,
  WORKOUT_HISTORY,
} from "@/data/user-dashboard";

export const metadata = { title: "Member Dashboard" };

export default function UserDashboardPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title={`Welcome back, ${USER_PROFILE.name.split(" ")[0]}`}
        description="Here's your fitness overview for this month."
      />

      <Card className="border border-electric-blue/25 bg-gradient-to-r from-electric-blue/10 via-charcoal-grey to-charcoal-grey">
        <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
          <Image
            src={USER_PROFILE.avatar}
            alt={USER_PROFILE.name}
            width={72}
            height={72}
            className="rounded-full ring-2 ring-electric-blue/40"
          />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl font-bold">{USER_PROFILE.name}</h2>
              <Badge>{USER_PROFILE.plan}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Member since {USER_PROFILE.memberSince} · Next billing{" "}
              {USER_PROFILE.nextBilling}
            </p>
            <p className="mt-2 text-sm">
              <span className="text-electric-blue font-medium">
                {USER_PROFILE.sessionsRemaining}
              </span>{" "}
              personal training sessions remaining
            </p>
          </div>
          <Button asChild>
            <Link href="/dashboard/user/booking">Book Session</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {USER_STATS.map((stat) => (
          <Card key={stat.label} className="border border-white/5 bg-charcoal-grey">
            <CardContent className="p-5">
              <p className="text-label-caps text-outline">{stat.label}</p>
              <p className="mt-1 font-display text-3xl font-black text-secondary">
                {stat.value}
              </p>
              <p className="mt-1 text-label-caps text-neon-green">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <ProgressChart data={PROGRESS_CHART} />
        <Card className="border border-white/5 bg-charcoal-grey">
          <CardHeader>
            <CardTitle className="font-display text-base uppercase text-secondary">
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {BOOKING_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between rounded-sm border border-white/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-sm bg-electric-blue/10">
                    <Calendar className="size-4 text-electric-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{slot.trainer}</p>
                    <p className="text-xs text-muted-foreground">
                      {slot.date} · {slot.time} · {slot.type}
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    slot.status === "confirmed"
                      ? "border-neon-green/40 text-neon-green"
                      : "border-electric-blue/40 text-electric-blue"
                  }
                >
                  {slot.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="font-display text-base uppercase text-secondary">
            Recent Workouts
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/user/progress">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {WORKOUT_HISTORY.slice(0, 3).map((workout) => (
              <li
                key={workout.id}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <div>
                  <p className="text-sm font-medium">{workout.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {workout.date} · {workout.duration}
                  </p>
                </div>
                <span className="font-sans text-sm text-outline">
                  {workout.calories} cal
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
