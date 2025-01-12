import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		img: z.string().url(),
		description: z.string(),
		date: z.string(),
		category: z.string(),
		content: z.string()
	})
})

export const collections = {
	posts
}
