import type { Transition, Variants } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const pageTransition: Transition = {
  duration: 0.25,
  ease: [0.25, 0.46, 0.45, 0.94],
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function getReducedMotionVariants(variants: Variants): Variants {
  if (typeof window === "undefined") return variants;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? reducedMotionVariants
    : variants;
}

export const revealViewport = {
  once: true,
  margin: "-80px" as const,
};
