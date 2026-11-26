import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const collections = {
  service: defineCollection({
    loader: glob({ base: "./src/content/services", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      number: z.number(),
    }),
  }),
  work: defineCollection({
    loader: glob({ base: "./src/content/works", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      description: z.string(),
      client: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
      img: image(),
      img_alt: z.string().optional(),
    }),
  }),
  news: defineCollection({
    loader: glob({ base: "./src/content/news", pattern: "**/*.md" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()),
    }),
  }),
};
