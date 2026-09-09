import { z } from "zod";

export const blogFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  published: z.boolean().default(true),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
