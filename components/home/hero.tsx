import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const heroContent = {
  name: "NITHURSHAN GANESHAMOORTHY",
  title: "Specializing in Software Engineering",
  introduction:
    "Software Engineering undergraduate at SLIIT with hands-on experience building and maintaining production full-stack applications including a live POS system, an internal finance management system, and client e-commerce platforms. Comfortable across the stack, from REST API design and database modeling to responsive UI implementation, and quick to adapt in fast-paced Agile teams.",
} as const;

export function Hero() {
  return (
    <section id="hero" className="section-gradient bg-background">
      <Container className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-gradient">{heroContent.name}</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">
              {heroContent.title}
            </p>

            <div
              className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent-secondary via-accent to-accent-secondary shadow-[0_0_12px_var(--accent-glow-soft)]"
              aria-hidden="true"
            />

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {heroContent.introduction}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/projects"
                className={cn(
                  "glow-button-primary inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold",
                )}
              >
                View My Work
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "glow-button-secondary inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold",
                )}
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-square w-full max-w-xs sm:max-w-sm">
              <div
                className="absolute inset-0 rounded-3xl bg-accent/10 blur-xl"
                aria-hidden="true"
              />
              <div className="neon-border relative overflow-hidden rounded-3xl bg-surface p-2">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-elevated">
                  <Image
                    src="/images/profile.png"
                    alt="Nithurshan Ganeshamoorthy profile photo"
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, 384px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
