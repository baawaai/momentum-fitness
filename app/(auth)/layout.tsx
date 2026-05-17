import Image from "next/image";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/data/site";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-pure-black text-foreground lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] xl:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
      <div className="relative hidden min-h-screen lg:block">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=1600&fit=crop"
          alt="Athletes training with weights in a gym"
          fill
          className="object-cover"
          sizes="50vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/55 to-pure-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-pure-black/80 via-transparent to-transparent" />

        <Link
          href="/"
          className="absolute left-10 top-10 font-display text-2xl font-black italic tracking-tight text-electric-blue drop-shadow-[0_0_14px_rgba(0,240,255,0.35)] transition-[filter] hover:drop-shadow-[0_0_22px_rgba(0,240,255,0.55)]"
        >
          {SITE_NAME}
        </Link>

        <div className="absolute bottom-12 left-10 max-w-md">
          <p className="font-display text-xs font-bold uppercase tracking-[0.3em] text-neon-green">
            Member access
          </p>
          <p className="mt-4 font-display text-3xl font-black italic leading-tight text-secondary">
            Sign in to bookings, programs, and check-ins.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-on-surface-variant">
            {SITE_TAGLINE}
          </p>
        </div>
      </div>

      <div className="flex min-h-screen flex-col bg-background">
        <header className="flex items-center justify-between px-margin-desktop py-5 lg:px-12 lg:py-8">
          <Link
            href="/"
            className="font-display text-xl font-black italic text-electric-blue lg:hidden"
          >
            {SITE_NAME}
          </Link>
          <Link
            href="/"
            className="ml-auto font-display text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant transition-colors hover:text-electric-blue"
          >
            ← Back to site
          </Link>
        </header>
        <div className="flex flex-1 flex-col justify-center px-margin-desktop pb-16 lg:px-12 xl:px-16">
          {children}
        </div>
      </div>
    </div>
  );
}
