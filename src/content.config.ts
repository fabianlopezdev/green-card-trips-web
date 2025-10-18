import { defineCollection, z } from "astro:content";

const legal = defineCollection({
  type: "content",
  schema: z.object({
    pageKey: z.enum(["privacy-policy", "terms-and-conditions", "cookies-policy"]),
    locale: z.enum(["en", "es", "tl", "vi", "zh-cn"]),
    title: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
  }),
});

export const collections = {
  legal,
};
