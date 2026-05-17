"use client";

import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { USER_PROFILE } from "@/data/user-dashboard";

export default function UserProfilePage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Profile Settings"
        description="Manage your account and notification preferences."
      />

      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src={USER_PROFILE.avatar}
              alt={USER_PROFILE.name}
              width={80}
              height={80}
              className="rounded-full"
            />
            <Button variant="outline" size="sm">
              Change Photo
            </Button>
          </div>
          <Separator />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={USER_PROFILE.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={USER_PROFILE.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="(512) 555-0198" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Membership</Label>
              <Input id="plan" defaultValue={USER_PROFILE.plan} disabled />
            </div>
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="border border-white/5 bg-charcoal-grey">
        <CardHeader>
          <CardTitle className="text-base">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { label: "Workout reminders", desc: "Daily training reminders" },
            { label: "Class updates", desc: "Schedule changes and cancellations" },
            { label: "Billing alerts", desc: "Payment and renewal notifications" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between"
            >
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <Switch defaultChecked />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
