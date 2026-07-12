import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    topic: z.string(),
    tags: z.array(z.string()).default([]),
    /** 관련 프로젝트 slug (src/data/projects.ts 기준). 없으면 미표시 */
    project: z.string().optional(),
  }),
});

export const collections = { notes };
