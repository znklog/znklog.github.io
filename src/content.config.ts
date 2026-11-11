import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
    loader: glob({
        base: "./markdowns",
        pattern: ["**/[[]*[]]*.md", "**/[[]*[]]*/index.md"],
        generateId: ({ entry }) => {
            const parts = entry.replaceAll("\\", "/").split("/");
            const fileName = parts.at(-1);
            const postName = fileName === "index.md" ? parts.at(-2) : fileName?.replace(/\.md$/, "");
            const match = postName?.match(/^\[[^\]]+\](.+)$/);

            return match?.[1] ?? entry;
        },
    }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        updated: z.iso.date(),
    }),
});

export const collections = { posts };
