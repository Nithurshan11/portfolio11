import Link from "next/link";
import { Download } from "lucide-react";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { certificates } from "@/lib/certificates";
import { cn } from "@/lib/utils";

export function Certificates() {
  return (
    <section id="certificates" className="section-gradient bg-background py-16 sm:py-20">
      <Container className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Certificates"
          description="Professional certifications and completed training programs."
        />

        <Reveal stagger className="mx-auto grid max-w-3xl gap-4">
          {certificates.map((certificate) => (
            <RevealItem key={certificate.title}>
              <article
                className={cn(
                  "glow-card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6",
                )}
              >
                <div>
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted sm:text-base">{certificate.issuer}</p>
                </div>

                <Link
                  href={certificate.href}
                  download
                  className={cn(
                    "glow-button-primary inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold",
                  )}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download
                </Link>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
