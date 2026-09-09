import { Reveal, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { education } from "@/lib/education";
import { cn } from "@/lib/utils";

export function Education() {
  return (
    <section id="education" className="section-gradient bg-background py-16 sm:py-20">
      <Container className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Education"
          description="Academic background in software engineering and information technology."
        />

        <Reveal stagger className="mx-auto max-w-3xl space-y-6">
          {education.map((item) => (
            <RevealItem key={`${item.school}-${item.program}`}>
              <article className={cn("glow-card p-5 sm:p-6")}>
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {item.program}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent sm:text-base">{item.school}</p>

                {item.details?.map((detail) => (
                  <p key={detail} className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    • {detail}
                  </p>
                ))}
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
