import { Reveal, RevealItem } from "@/components/motion/reveal";
import { SkillBar } from "@/components/sections/skill-bar";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { skillCategories } from "@/lib/skills";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="section-gradient bg-background py-16 sm:py-20">
      <Container className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Skills"
          description="Core technologies I use to build reliable full-stack applications."
        />

        <Reveal stagger className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <RevealItem key={category.category}>
              <article className={cn("glow-card p-5 sm:p-6")}>
                <h3 className="mb-5 text-lg font-semibold text-foreground">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
