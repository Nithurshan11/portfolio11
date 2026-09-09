export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [{ name: "Node.js", level: 80 }],
  },
];
