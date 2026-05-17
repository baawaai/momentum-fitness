import Image from "next/image";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TRAINERS } from "@/data/trainers";
import { Plus } from "lucide-react";

export const metadata = { title: "Trainer Management" };

export default function AdminTrainersPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader
        title="Trainer Management"
        description="Manage coaching staff and session schedules."
      />
      <div className="flex justify-end">
        <Button size="sm">
          <Plus className="mr-2 size-4" />
          Add Trainer
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {TRAINERS.map((trainer) => (
          <Card key={trainer.id} className="border border-white/5 bg-charcoal-grey">
            <CardContent className="flex gap-4 p-5">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold">{trainer.name}</h3>
                    <p className="text-sm text-primary">{trainer.role}</p>
                  </div>
                  <Badge variant="outline" className="shrink-0">
                    Active
                  </Badge>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {trainer.specialty} · {trainer.sessions}+ sessions
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
