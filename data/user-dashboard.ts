import type { BookingSlot, WorkoutSession } from "@/types";

export const USER_PROFILE = {
  name: "Alex Morgan",
  email: "alex.morgan@email.com",
  plan: "Momentum Pro",
  memberSince: "March 2024",
  avatar:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
  nextBilling: "June 1, 2026",
  sessionsRemaining: 2,
};

export const USER_STATS = [
  { label: "Workouts This Month", value: "18", change: "+3" },
  { label: "Total Hours", value: "24.5", change: "+4.2h" },
  { label: "Calories Burned", value: "12,840", change: "+1,200" },
  { label: "Attendance Streak", value: "12 days", change: "Personal best" },
];

export const WORKOUT_HISTORY: WorkoutSession[] = [
  {
    id: "W-101",
    name: "Upper Body Strength",
    date: "May 17, 2026",
    duration: "62 min",
    calories: 420,
    completed: true,
  },
  {
    id: "W-100",
    name: "HIIT Conditioning",
    date: "May 15, 2026",
    duration: "45 min",
    calories: 580,
    completed: true,
  },
  {
    id: "W-99",
    name: "Leg Day",
    date: "May 13, 2026",
    duration: "70 min",
    calories: 510,
    completed: true,
  },
  {
    id: "W-98",
    name: "Mobility & Recovery",
    date: "May 11, 2026",
    duration: "35 min",
    calories: 180,
    completed: true,
  },
];

export const PROGRESS_CHART = [
  { week: "W1", workouts: 4, calories: 2800 },
  { week: "W2", workouts: 5, calories: 3200 },
  { week: "W3", workouts: 4, calories: 2900 },
  { week: "W4", workouts: 5, calories: 3940 },
];

export const BOOKING_SLOTS: BookingSlot[] = [
  {
    id: "B-201",
    trainer: "Marcus Chen",
    date: "May 20, 2026",
    time: "7:00 AM",
    type: "Strength Training",
    status: "confirmed",
  },
  {
    id: "B-202",
    trainer: "Sofia Rivera",
    date: "May 22, 2026",
    time: "6:30 PM",
    type: "HIIT Session",
    status: "pending",
  },
];

export const ATTENDANCE_HISTORY = [
  { date: "May 17", status: "present" as const },
  { date: "May 15", status: "present" as const },
  { date: "May 13", status: "present" as const },
  { date: "May 11", status: "present" as const },
  { date: "May 9", status: "late" as const },
  { date: "May 7", status: "absent" as const },
];

export const BILLING_HISTORY = [
  {
    id: "INV-2405",
    date: "May 1, 2026",
    description: "Momentum Pro — Monthly",
    amount: 89,
    status: "paid" as const,
  },
  {
    id: "INV-2404",
    date: "Apr 1, 2026",
    description: "Momentum Pro — Monthly",
    amount: 89,
    status: "paid" as const,
  },
  {
    id: "INV-2403",
    date: "Mar 1, 2026",
    description: "Momentum Pro — Monthly",
    amount: 89,
    status: "paid" as const,
  },
];

export const PAYMENT_METHOD = {
  brand: "Visa",
  last4: "4242",
  exp: "08 / 28",
};
