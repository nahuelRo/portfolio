import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string().optional(),
    employmentType: z.string().optional(),
    start: z.string(),
    end: z.string(),
    order: z.number(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(true),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(["demo", "case", "placeholder"]),
    period: z.string().optional(),
    order: z.number(),
    stack: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    status: z.enum(["live", "coming-soon", "case-only"]).default("case-only"),
  }),
});

export const collections = { experience, projects };
