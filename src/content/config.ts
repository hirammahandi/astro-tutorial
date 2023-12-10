// @note Import `astro:content` utilities
import { z, defineCollection } from "astro:content";

// @note Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  }),
});

// @note Exports a single `collections` object with the registered collections
export const collections = {
  posts: postsCollection,
};
