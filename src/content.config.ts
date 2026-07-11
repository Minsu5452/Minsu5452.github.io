import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { projects } from "./data/projects";
import { ARTICLE_TOPICS } from "./consts";

const projectSlugs = new Set(projects.map((p) => p.slug));

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string().max(90),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    topic: z.enum(ARTICLE_TOPICS),
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

// 프로젝트 케이스 스터디 본문. 파일명이 projects.ts의 slug와 1:1로 일치해야 하며,
// 대응 관계 검증은 pages/projects/[slug].astro의 getStaticPaths에서 수행한다.
const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({}),
});

export const collections = { articles, caseStudies };
