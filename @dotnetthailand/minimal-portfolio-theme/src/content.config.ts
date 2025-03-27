// Import the glob loader
//import { glob } from "astro/loaders";
// Import utilities from `astro:content`
// import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const postCollection = defineCollection({
  //loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/post" }),
  type: "content", // use loader does not export post.slug
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string())
  })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  post: postCollection
};
