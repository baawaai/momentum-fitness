import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AttendanceRecord } from "@/types";
import { cn } from "@/lib/utils";

interface AttendanceTableProps {
  records: AttendanceRecord[];
}

const STATUS_STYLES = {
  present: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  late: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  absent: "bg-red-500/10 text-red-500 border-red-500/20",
};

export function AttendanceTable({ records }: AttendanceTableProps) {
  return (
    <div className="rounded-sm border border-white/5">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Member</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="hidden sm:table-cell">Check In</TableHead>
            <TableHead className="hidden sm:table-cell">Check Out</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {records.map((record) => (
            <TableRow key={record.id}>
              <TableCell className="font-medium">{record.member}</TableCell>
              <TableCell className="text-muted-foreground">{record.date}</TableCell>
              <TableCell className="hidden sm:table-cell">{record.checkIn}</TableCell>
              <TableCell className="hidden sm:table-cell">{record.checkOut}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={cn("capitalize", STATUS_STYLES[record.status])}
                >
                  {record.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
