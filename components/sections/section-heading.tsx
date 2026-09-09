import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 text-center sm:mb-12", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <div
        className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-accent-secondary via-accent to-accent-secondary shadow-[0_0_12px_var(--accent-glow-soft)]"
        aria-hidden="true"
      />
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
