import { ProjectCard } from "@/components/projects/project-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Container } from "@/components/ui/container";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="section-gradient bg-background py-16 sm:py-20">
      <Container className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          description="Full-stack applications built across retail, finance, and e-commerce domains."
        />

        <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
