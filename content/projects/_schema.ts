import { z } from "zod";

export const projectFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
});

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
