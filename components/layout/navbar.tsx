"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_NAME } from "@/data/site";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
  variant?: "marketing";
}

export function Navbar({ variant = "marketing" }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = NAV_LINKS;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full",
      )}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-electric-blue/60 to-transparent" />
      <div
        className={cn(
          "border-b border-white/10 bg-charcoal-grey/90 shadow-[0_8px_32px_rgba(0,0,0,0.55)] backdrop-blur-xl",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-container-max items-center justify-between gap-6 px-margin-desktop py-3 md:py-4",
          )}
        >
          <Link href="/" className="group flex flex-col shrink-0">
            <span className="font-display text-2xl font-black italic leading-none tracking-tight text-electric-blue drop-shadow-[0_0_14px_rgba(0,240,255,0.45)] transition-[filter] group-hover:drop-shadow-[0_0_22px_rgba(0,240,255,0.65)] md:text-[1.75rem]">
              {SITE_NAME}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-on-surface-variant">
              Fitness
            </span>
          </Link>

          <nav className="hidden rounded-sm border border-white/[0.07] bg-pure-black/30 p-1 md:flex md:items-center md:gap-0.5">
            {links.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" &&
                  link.href !== "/shop" &&
                  pathname.startsWith(link.href));
              const isShopLink = link.href === "/shop";
              const active =
                isActive ||
                (isShopLink && pathname === "/shop") ||
                (link.href === "/" && pathname === "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-sm px-4 py-2 font-display text-[13px] font-bold uppercase tracking-widest transition-all duration-200",
                    active
                      ? "bg-electric-blue/15 text-electric-blue shadow-[inset_0_0_0_1px_rgba(0,240,255,0.35)]"
                      : "text-secondary/90 hover:bg-white/[0.06] hover:text-electric-blue"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">

            <Link
              href="/dashboard/user"
              className="hidden rounded-sm border border-neon-green/50 px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-neon-green transition-all hover:bg-neon-green hover:text-pure-black md:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "font-display text-label-caps uppercase tracking-tight transition-all",
                "bg-electric-blue px-5 py-2.5 text-pure-black hover:bg-cyan-300 hover:shadow-[0_0_22px_rgba(0,240,255,0.45)] active:scale-[0.98]"
              )}
            >
              Join Now
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className="inline-flex size-10 items-center justify-center rounded-sm border border-white/10 text-secondary md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="border-white/10 bg-charcoal-grey w-[min(100vw,20rem)]"
              >
                <SheetHeader>
                  <SheetTitle className="font-display italic text-electric-blue">
                    {SITE_NAME}
                  </SheetTitle>
                </SheetHeader>
                <nav className="mt-10 flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-sm px-4 py-3 font-display text-sm uppercase tracking-widest text-secondary hover:bg-white/5 hover:text-electric-blue"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="mt-4 rounded-sm border border-white/10 px-4 py-3 text-center text-xs uppercase tracking-widest text-outline"
                  >
                    Main site
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
