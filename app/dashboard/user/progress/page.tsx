import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { ProgressChart } from "@/components/dashboard/progress-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROGRESS_CHART, WORKOUT_HISTORY } from "@/data/user-dashboard";

export const metadata = { title: "Workout Progress" };

export default function UserProgressPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Workout Progress"
        description="Track your training history and performance trends."
      />
      <ProgressChart data={PROGRESS_CHART} />
      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Workout History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {WORKOUT_HISTORY.map((workout) => (
              <li
                key={workout.id}
                className="flex items-center justify-between rounded-sm border border-white/10 p-4"
              >
                <div>
                  <p className="font-medium">{workout.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {workout.date} · {workout.duration}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">
                    {workout.calories} cal
                  </span>
                  <Badge
                    variant="outline"
                    className="border-emerald-500/30 text-emerald-500"
                  >
                    Completed
                  </Badge>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
