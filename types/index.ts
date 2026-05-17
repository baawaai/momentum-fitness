export interface NavLink {
  label: string;
  href: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  rating: number;
  sessions: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
}

export interface Member {
  id: string;
  name: string;
  email: string;
  plan: string;
  status: "active" | "inactive" | "pending";
  joined: string;
}

export interface AttendanceRecord {
  id: string;
  member: string;
  date: string;
  checkIn: string;
  checkOut: string;
  status: "present" | "late" | "absent";
}

export interface WorkoutSession {
  id: string;
  name: string;
  date: string;
  duration: string;
  calories: number;
  completed: boolean;
}

export interface BookingSlot {
  id: string;
  trainer: string;
  date: string;
  time: string;
  type: string;
  status: "confirmed" | "pending" | "cancelled";
}
