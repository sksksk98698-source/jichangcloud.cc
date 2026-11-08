import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

/**
 * Blog — 专栏文章集合 (src/data/blog/<slug>/index.mdx)
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      authors: z.array(reference("authors")).min(1, "a post needs at least one author reference"),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
      heroImageAlt: z.string(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().optional(),
    }),
});

/**
 * Projects — 历史案例集合 (src/data/projects/<slug>/index.mdx)
 */
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cardTitle: z.string().optional(),
      description: z.string(),
      tagline: z.string(),
      status: z.enum(["complete", "in-progress"]),
      moduleId: z.string(),
      order: z.number(),
      thumbnail: image(),
      thumbnailAlt: z.string(),
      tech: z.array(z.string()),
      specs: z.array(z.object({ label: z.string(), value: z.string() })),
      features: z.array(z.object({ lead: z.string(), text: z.string() })),
      archCaption: z.string(),
      challenge: z.object({ title: z.string(), body: z.string() }),
      solution: z.object({ title: z.string(), body: z.string() }),
      draft: z.boolean().optional(),
    }),
});

/**
 * Authors — 作者集合 (src/data/authors/*.md)
 */
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*{md,mdx}", base: "./src/data/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image().optional(),
      authorLink: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
  authors: authorsCollection,
};
