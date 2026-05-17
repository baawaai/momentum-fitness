import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MembersTable } from "@/components/dashboard/members-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RECENT_MEMBERS } from "@/data/admin-dashboard";
import { Plus } from "lucide-react";

export const metadata = { title: "User Management" };

const ALL_MEMBERS = [
  ...RECENT_MEMBERS,
  {
    id: "M-1037",
    name: "Jordan Lee",
    email: "jordan.l@email.com",
    plan: "Elite Performance",
    status: "active" as const,
    joined: "May 7, 2026",
  },
  {
    id: "M-1036",
    name: "Emma Clark",
    email: "emma.c@email.com",
    plan: "Momentum Pro",
    status: "active" as const,
    joined: "May 6, 2026",
  },
];

export default function AdminUsersPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="User Management"
        description="Manage member accounts and membership status."
      />
      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">All Members</CardTitle>
          <Button size="sm">
            <Plus className="mr-2 size-4" />
            Add Member
          </Button>
        </CardHeader>
        <CardContent>
          <MembersTable members={ALL_MEMBERS} />
        </CardContent>
      </Card>
    </div>
  );
}
