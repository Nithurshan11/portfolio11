"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/lib/skills";
import { defaultTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SkillBarProps = {
  skill: Skill;
};

export function SkillBar({ skill }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-foreground sm:text-base">{skill.name}</span>
        <span className="text-sm font-semibold text-accent">{skill.level}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-surface-elevated">
        <motion.div
          className={cn("h-full rounded-full skill-bar-fill")}
          initial={{ width: shouldReduceMotion ? `${skill.level}%` : "0%" }}
          animate={{ width: isInView || shouldReduceMotion ? `${skill.level}%` : "0%" }}
          transition={{ ...defaultTransition, duration: 0.8, delay: 0.1 }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency`}
        />
      </div>
    </div>
  );
}
