import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { projects } from "./data/projects";

const projectSlugs = new Set(projects.map((p) => p.slug));

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // 관련 프로젝트 slug. projects.ts에 없는 값이면 빌드에서 실패한다.
    project: z
      .string()
      .optional()
      .refine((slug) => !slug || projectSlugs.has(slug), {
        message: "projects.ts에 없는 프로젝트 slug",
      }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes };
