import * as z from "zod";

export const postSchema = z.object({
    title: z.string().nonempty("Title is required"),
    content: z.string().nonempty("Content is required"),
    community: z.string({ message: "Community is required" }),
});

export type PostData = z.infer<typeof postSchema>;