import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		img: z.string(),
		description: z.string(),
		published_at: z.string(),
		category: z.string()
	})
})

export const collections = {
	posts
}
