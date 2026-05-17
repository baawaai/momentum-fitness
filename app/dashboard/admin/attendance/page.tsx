import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AttendanceTable } from "@/components/dashboard/attendance-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ATTENDANCE_LOG } from "@/data/admin-dashboard";

export const metadata = { title: "Attendance" };

export default function AdminAttendancePage() {
  const present = ATTENDANCE_LOG.filter((r) => r.status === "present").length;
  const late = ATTENDANCE_LOG.filter((r) => r.status === "late").length;
  const absent = ATTENDANCE_LOG.filter((r) => r.status === "absent").length;

  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Attendance Tracking"
        description="Monitor member check-ins and facility usage."
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Present Today", value: present },
          { label: "Late Arrivals", value: late },
          { label: "No Shows", value: absent },
        ].map((stat) => (
          <Card key={stat.label} className="border border-white/5 bg-charcoal-grey">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Recent Check-ins</CardTitle>
        </CardHeader>
        <CardContent>
          <AttendanceTable records={ATTENDANCE_LOG} />
        </CardContent>
      </Card>
    </div>
  );
}
