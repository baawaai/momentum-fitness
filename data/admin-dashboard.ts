import type { AttendanceRecord, DashboardStat, Member } from "@/types";
import { formatPkrCompact } from "@/lib/format-currency";

export const ADMIN_STATS: DashboardStat[] = [
  {
    label: "Active Members",
    value: "2,408",
    change: "+12% vs last month",
    trend: "up",
  },
  {
    label: "Monthly Revenue",
    value: formatPkrCompact(142000),
    change: "+5.4% vs last month",
    trend: "up",
  },
  {
    label: "Today's Check-ins",
    value: "842",
    change: "75% of daily avg",
    trend: "neutral",
  },
  {
    label: "Inventory Alerts",
    value: "3",
    change: "Items critically low",
    trend: "down",
  },
];

export interface AdminActivity {
  id: string;
  icon: string;
  iconColor: string;
  message: string;
  highlight?: string;
  meta: string;
}

export const ADMIN_ACTIVITIES: AdminActivity[] = [
  {
    id: "1",
    icon: "person_add",
    iconColor: "text-neon-green",
    message: "Marcus Johnson joined as a Premium Member.",
    highlight: "Marcus Johnson",
    meta: "2 mins ago • Front Desk",
  },
  {
    id: "2",
    icon: "local_mall",
    iconColor: "text-electric-blue",
    message: "Inventory restock logged: Whey Isolate (Chocolate) x50.",
    highlight: "Whey Isolate (Chocolate) x50",
    meta: "15 mins ago • System Admin",
  },
  {
    id: "3",
    icon: "credit_card_off",
    iconColor: "text-status-error",
    message: "Failed payment attempt for Sarah Connor.",
    highlight: "Sarah Connor",
    meta: "45 mins ago • Billing System",
  },
  {
    id: "4",
    icon: "event_available",
    iconColor: "text-secondary",
    message: "HIIT Bootcamp (18:00) reached maximum capacity (30/30).",
    highlight: "HIIT Bootcamp",
    meta: "1 hour ago • Scheduling",
  },
];

export const UPCOMING_CLASSES = [
  {
    name: "CrossFit Fundamentals",
    time: "14:00",
    enrolled: 18,
    capacity: 20,
    barColor: "bg-neon-green",
    width: "w-[90%]",
  },
  {
    name: "Powerlifting Seminar",
    time: "16:30",
    enrolled: 9,
    capacity: 20,
    barColor: "bg-electric-blue",
    width: "w-[45%]",
  },
];

export const RECENT_MEMBERS: Member[] = [
  {
    id: "M-1042",
    name: "Sarah Mitchell",
    email: "sarah.m@email.com",
    plan: "Premium",
    status: "active",
    joined: "May 12, 2026",
  },
  {
    id: "M-1041",
    name: "Tom Bradley",
    email: "tom.b@email.com",
    plan: "Elite",
    status: "active",
    joined: "May 11, 2026",
  },
];

export const ATTENDANCE_LOG: AttendanceRecord[] = [
  {
    id: "A-501",
    member: "Sarah Mitchell",
    date: "May 17, 2026",
    checkIn: "6:12 AM",
    checkOut: "7:45 AM",
    status: "present",
  },
  {
    id: "A-500",
    member: "Tom Bradley",
    date: "May 17, 2026",
    checkIn: "5:58 AM",
    checkOut: "—",
    status: "present",
  },
];

export const MEMBERSHIP_BREAKDOWN = [
  { plan: "Essential", count: 820 },
  { plan: "Momentum Pro", count: 1140 },
  { plan: "Elite Performance", count: 458 },
];

export const REVENUE_CHART = [
  { month: "Jan", revenue: 118000 },
  { month: "Feb", revenue: 125000 },
  { month: "Mar", revenue: 132000 },
  { month: "Apr", revenue: 138000 },
  { month: "May", revenue: 142000 },
];
