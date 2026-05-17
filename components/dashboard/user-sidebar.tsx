"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/ui/material-icon";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/data/site";

const USER_NAV = [
  { label: "Overview", href: "/dashboard/user", icon: "dashboard" },
  { label: "My Progress", href: "/dashboard/user/progress", icon: "trending_up" },
  { label: "Attendance", href: "/dashboard/user/attendance", icon: "how_to_reg" },
  { label: "Book Session", href: "/dashboard/user/booking", icon: "event_available" },
  { label: "Billing", href: "/dashboard/user/billing", icon: "receipt_long" },
  { label: "Profile", href: "/dashboard/user/profile", icon: "person" },
];

export function UserSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/5 bg-charcoal-grey py-8 md:flex">
      <div className="mb-12 px-6">
        <Link href="/" className="font-display text-xl font-bold text-electric-blue">
          {SITE_NAME}
        </Link>
        <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-outline">
          Member portal
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-2">
        {USER_NAV.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard/user" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-sm px-4 py-3 transition-colors duration-200",
                isActive
                  ? "border-l-4 border-neon-green bg-secondary-container text-on-secondary-container"
                  : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              <MaterialIcon name={item.icon} filled={isActive} className="text-[22px]" />
              <span className="text-label-caps">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-white/5 px-4 pt-6">
        <Link
          href="/shop"
          className="mb-4 flex items-center justify-center gap-2 bg-electric-blue py-3 font-display text-xs font-bold uppercase tracking-tighter text-pure-black transition-transform hover:scale-[1.02] hover:shadow-[0_0_14px_rgba(0,240,255,0.5)]"
        >
          <MaterialIcon name="shopping_bag" className="text-[18px]" />
          Shop gear
        </Link>
        <Link
          href="/"
          className="block text-center text-xs text-outline transition-colors hover:text-secondary"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
