import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brands";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={cn("glow-card flex h-full flex-col overflow-hidden")}>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "glow-button-secondary inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold",
            )}
          >
            <GitHubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Link>

          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "glow-button-primary inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold",
              )}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live Demo
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
