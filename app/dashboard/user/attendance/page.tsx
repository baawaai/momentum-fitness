import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ATTENDANCE_HISTORY } from "@/data/user-dashboard";
import { cn } from "@/lib/utils";

export const metadata = { title: "Attendance History" };

const STATUS_STYLES = {
  present: "border-emerald-500/30 text-emerald-500",
  late: "border-amber-500/30 text-amber-500",
  absent: "border-red-500/30 text-red-400",
};

export default function UserAttendancePage() {
  const streak = ATTENDANCE_HISTORY.filter((d) => d.status === "present").length;

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Attendance History"
        description="Your gym check-in history and streak."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border border-white/5 bg-charcoal-grey">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="mt-1 text-3xl font-bold text-primary">{streak} days</p>
          </CardContent>
        </Card>
        <Card className="border border-white/5 bg-charcoal-grey">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">This Month</p>
            <p className="mt-1 text-3xl font-bold">18</p>
            <p className="text-xs text-muted-foreground">visits</p>
          </CardContent>
        </Card>
        <Card className="border border-white/5 bg-charcoal-grey">
          <CardContent className="p-5">
            <p className="text-sm text-muted-foreground">Attendance Rate</p>
            <p className="mt-1 text-3xl font-bold">92%</p>
          </CardContent>
        </Card>
      </div>
      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Recent Visits</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {ATTENDANCE_HISTORY.map((day) => (
              <li
                key={day.date}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-sm font-medium">{day.date}</span>
                <Badge
                  variant="outline"
                  className={cn("capitalize", STATUS_STYLES[day.status])}
                >
                  {day.status}
                </Badge>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
