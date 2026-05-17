"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaterialIcon } from "@/components/ui/material-icon";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/data/site";

const ADMIN_NAV = [
  { label: "Overview", href: "/dashboard/admin", icon: "dashboard" },
  { label: "Analytics", href: "/dashboard/admin/analytics", icon: "bar_chart" },
  { label: "Inventory", href: "/dashboard/admin/memberships", icon: "inventory_2" },
  { label: "Attendance", href: "/dashboard/admin/attendance", icon: "event_available" },
  { label: "Financials", href: "/dashboard/admin/financial", icon: "payments" },
  { label: "Trainers", href: "/dashboard/admin/trainers", icon: "fitness_center" },
  { label: "Users", href: "/dashboard/admin/users", icon: "group" },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col border-r border-white/5 bg-charcoal-grey py-8 md:flex">
      <div className="mb-12 px-6">
        <Link
          href="/"
          className="font-display text-headline-md text-electric-blue"
        >
          {SITE_NAME}
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {ADMIN_NAV.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard/admin" &&
              pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 transition-colors duration-200",
                isActive
                  ? "border-l-4 border-neon-green bg-secondary-container text-on-secondary-container"
                  : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              <MaterialIcon
                name={item.icon}
                filled={isActive}
                className={isActive ? "" : "opacity-80"}
              />
              <span className="text-label-caps">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-6 px-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFXgcGTXumpPii2v6oTXRF-MwoGnOCeLRVKGzSd7qJArRj_Kc-2bfw7Bs2bf0FrplXZnTJAK7dr0-UbAyHENWQy7b92kpyFVeJxc7waBKb43yIYa3YyLULxN9rawJSo5n4rWqmx1BC-Vh7xfeMu65AWIpbRDH0KiANXZUHiFhcWyeXFId-PcQ61wprdjG3QRf4sPjKyh-tPoPhwBTb464z4_Zt2jnDzFTbXlABx9dbXk2Rqm0_3Q3b43BYPZ3CFqA3brop3y4dQkgA"
            alt="Admin"
            width={40}
            height={40}
            className="rounded-full border border-white/10"
          />
          <div>
            <p className="text-label-caps text-secondary">Admin Console</p>
            <p className="text-[10px] text-label-caps text-outline">
              Momentum HQ
            </p>
          </div>
        </div>
        <button
          type="button"
          className="w-full bg-electric-blue py-3 font-display text-base uppercase tracking-tighter text-pure-black transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.5)]"
        >
          Quick Book
        </button>
        <Link
          href="/"
          className="text-center text-xs text-outline transition-colors hover:text-secondary"
        >
          ← Back to website
        </Link>
      </div>
    </aside>
  );
}
