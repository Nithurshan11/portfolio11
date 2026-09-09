import Link from "next/link";
import { SocialLinks } from "@/components/layout/social-links";
import { Container } from "@/components/ui/container";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="glass-header sticky top-0 z-50">
      <Container className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-sm font-bold tracking-tight text-foreground transition-colors hover:text-accent sm:text-base"
            >
              {site.name}
            </Link>
            <SocialLinks className="lg:hidden" />
          </div>

          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors",
                      "hover:bg-accent/10 hover:text-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="hidden lg:flex" />
        </div>
      </Container>
    </header>
  );
}
