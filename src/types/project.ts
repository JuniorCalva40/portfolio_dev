import type { ImageMetadata } from 'astro'

// prettier-ignore
export type Color = "blue" | "white" | "yellow" | "red" | "sky" | "pink" | "violet" | "emerald" | "cyan" | "orange" | "muted";
// prettier-ignore
export type SkillName = 'Frontend:' | 'Backend:' | 'Databases:' | 'Other Tools:' | 'Next.js' | 'React' | 'Tailwind' | 'Astro' | 'HTML' | 'CSS' | 'Javascript' | 'Node' | 'Express' | 'Prisma' | 'Typescript' | 'Python' | 'FastAPI' | 'PostgreSQL' | 'Mongo' | 'MySQL' | 'Docker' | 'Git' | 'Figma' | 'Wordpress';

export interface Project {
	title: string
	description: string
	techStack: SkillName[]
	img: ImageMetadata
}
