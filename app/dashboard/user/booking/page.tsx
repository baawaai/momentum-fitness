import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BOOKING_SLOTS } from "@/data/user-dashboard";
import { TRAINERS } from "@/data/trainers";
import { Calendar } from "lucide-react";

export const metadata = { title: "Book Trainer" };

export default function UserBookingPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Book a Trainer"
        description="Schedule personal training sessions with our expert coaches."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border border-white/5 bg-charcoal-grey">
          <CardHeader>
            <CardTitle className="text-base">New Booking</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="space-y-2">
              <Label>Trainer</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select trainer" />
                </SelectTrigger>
                <SelectContent>
                  {TRAINERS.map((t) => (
                    <SelectItem key={t.id} value={t.id}>
                      {t.name} — {t.specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Session Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strength">Strength Training</SelectItem>
                  <SelectItem value="hiit">HIIT Session</SelectItem>
                  <SelectItem value="mobility">Mobility & Recovery</SelectItem>
                  <SelectItem value="nutrition">Nutrition Consult</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Date</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may20">May 20, 2026</SelectItem>
                    <SelectItem value="may21">May 21, 2026</SelectItem>
                    <SelectItem value="may22">May 22, 2026</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7am">7:00 AM</SelectItem>
                    <SelectItem value="12pm">12:00 PM</SelectItem>
                    <SelectItem value="6pm">6:30 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button className="w-full">Confirm Booking</Button>
          </CardContent>
        </Card>

        <Card className="border border-white/5 bg-charcoal-grey">
          <CardHeader>
            <CardTitle className="text-base">Your Bookings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {BOOKING_SLOTS.map((slot) => (
              <div
                key={slot.id}
                className="flex items-center justify-between rounded-sm border border-white/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{slot.trainer}</p>
                    <p className="text-xs text-muted-foreground">
                      {slot.date} · {slot.time}
                    </p>
                    <p className="text-xs text-muted-foreground">{slot.type}</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    slot.status === "confirmed"
                      ? "border-emerald-500/30 text-emerald-500"
                      : "border-amber-500/30 text-amber-500"
                  }
                >
                  {slot.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
