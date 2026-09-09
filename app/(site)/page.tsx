import { Hero } from "@/components/home/hero";
import { Certificates } from "@/components/sections/certificates";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Hero />
      <Projects />
      <Education />
      <Certificates />
      <Skills />
      <Contact />
    </main>
  );
}
