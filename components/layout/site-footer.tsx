import Link from "next/link";
import { SocialLinks } from "@/components/layout/social-links";
import { LinkedInIcon } from "@/components/icons/brands";
import { Container } from "@/components/ui/container";
import { contact } from "@/lib/contact";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <SocialLinks />

          <p className="flex items-center gap-2 text-sm text-muted">
            Made with
            <Link
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:text-foreground",
              )}
            >
              NithurshanG
              <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
