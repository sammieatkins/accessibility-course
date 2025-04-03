// src/content/config.ts
import { defineCollection, z } from "astro:content";

const lessons = defineCollection({
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    type: z.enum(["instruction", "activity"]),
    order: z.number().nonnegative(),
    activity: z.string().optional(),
  }),
});

export const collections = {
  lessons,
};
