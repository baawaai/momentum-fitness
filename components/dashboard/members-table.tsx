import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Member } from "@/types";
import { cn } from "@/lib/utils";

interface MembersTableProps {
  members: Member[];
}

const STATUS_STYLES = {
  active: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  inactive: "bg-muted text-muted-foreground",
  pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
};

export function MembersTable({ members }: MembersTableProps) {
  return (
    <div className="rounded-sm border border-white/5">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden sm:table-cell">Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell className="font-mono text-xs text-muted-foreground">
                {member.id}
              </TableCell>
              <TableCell className="font-medium">{member.name}</TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">
                {member.email}
              </TableCell>
              <TableCell>{member.plan}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn("capitalize", STATUS_STYLES[member.status])}
                >
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell text-muted-foreground">
                {member.joined}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
