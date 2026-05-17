import Link from "next/link";
import { SITE_NAME } from "@/data/site";
import { FOOTER_LINKS } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative bottom-0 w-full border-t border-white/10 bg-pure-black">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 px-margin-desktop py-8 md:flex-row">
        <Link
          href="/"
          className="font-display text-headline-md font-black italic text-electric-blue"
        >
          {SITE_NAME}
        </Link>

        <nav className="flex flex-wrap justify-center gap-6 font-sans text-body-md text-outline">
          {FOOTER_LINKS.company.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.label === "Contact"
                  ? "text-neon-green transition-opacity hover:opacity-80"
                  : "transition-colors hover:text-secondary"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-center font-sans text-sm text-on-surface-variant">
          © {new Date().getFullYear()} {SITE_NAME} FITNESS. ENGINEERED FOR
          PERFORMANCE.
        </p>
      </div>
    </footer>
  );
}
