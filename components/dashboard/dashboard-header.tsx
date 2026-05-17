import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function DashboardHeader({
  title,
  description,
  className,
}: DashboardHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between",
        className
      )}
    >
      <div>
        <h1 className="font-display text-2xl font-extrabold uppercase tracking-tight text-secondary md:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 font-sans text-sm text-outline md:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-outline" />
          <Input
            placeholder="Search..."
            className="w-56 border-white/10 bg-surface-container pl-9 text-secondary placeholder:text-outline md:w-64"
          />
        </div>
        <Button
          variant="outline"
          size="icon"
          aria-label="Notifications"
          className="border-white/10 bg-charcoal-grey text-electric-blue hover:bg-white/5"
        >
          <Bell className="size-4" />
        </Button>
      </div>
    </div>
  );
}
