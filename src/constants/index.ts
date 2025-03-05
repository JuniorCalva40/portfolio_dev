export const SocialNetworks = {
	LINKEDIN: 'https://www.linkedin.com/in/junior-calva-a51313224/',
	GITHUB: 'https://github.com/JuniorCalva40'
}

//DATA for component tech Badge
// prettier-ignore
export type Color = "blue" | "white" | "yellow" | "red" | "sky" | "pink" | "violet" | "emerald"  |"green"| "cyan" | "orange" | "muted" |'indigo';
// prettier-ignore
export type SkillName = 'Frontend:' | 'Backend:' | 'Databases:' | 'Other Tools:' | 'Next.js' | 'Vue' |'React' | 'Tailwind' | 'Astro' | 'HTML' | 'CSS' | 'Javascript' | 'Node' | 'Express' | 'Prisma' | 'Typescript' | 'Python' | 'FastAPI' | 'PostgreSQL' | 'Mongo' | 'MySQL' | 'Docker' | 'Git' | 'Figma' | 'Wordpress' | 'PHP'

type BaseSkill = {
	color: Color
	url?: string
	IconName?: string
}

export const skillsConfig: Record<SkillName, BaseSkill> = {
	'Frontend:': { color: 'muted' },
	'Backend:': { color: 'muted' },
	'Databases:': { color: 'muted' },
	'Other Tools:': { color: 'muted' },
	'Next.js': { IconName: 'logos/nextjs', color: 'white', url: 'https://nextjs.org/' },
	React: { IconName: 'logos/react', color: 'cyan', url: 'https://react.dev/' },
	Tailwind: { IconName: 'logos/tailwind', color: 'cyan', url: 'https://tailwindcss.com/' },
	Astro: { IconName: 'logos/astro', color: 'white', url: 'https://astro.build/' },
	HTML: {
		IconName: 'logos/html',
		color: 'orange',
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
	},
	CSS: {
		IconName: 'logos/css',
		color: 'blue',
		url: 'https://developer.mozilla.org/es/docs/Web/CSS'
	},
	Javascript: {
		IconName: 'logos/javascript',
		color: 'yellow',
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	Node: { IconName: 'logos/node', color: 'emerald', url: 'https://nodejs.org/' },
	Express: { IconName: 'logos/express', color: 'white', url: 'https://expressjs.com/' },
	Prisma: { IconName: 'logos/prisma', color: 'white', url: 'https://www.prisma.io/' },
	Typescript: {
		IconName: 'logos/typescript',
		color: 'blue',
		url: 'https://www.typescriptlang.org/'
	},
	Python: { IconName: 'logos/python', color: 'blue', url: 'https://www.python.org/' },
	PHP: { IconName: 'logos/php', color: 'indigo', url: 'https://www.php.net/' },
	FastAPI: { IconName: 'logos/fastapi', color: 'emerald', url: 'https://fastapi.tiangolo.com/' },
	PostgreSQL: { IconName: 'logos/postgresql', color: 'blue', url: 'https://www.postgresql.org/' },
	Mongo: { IconName: 'logos/mongo', color: 'emerald', url: 'https://www.mongodb.com/' },
	MySQL: { IconName: 'logos/mysql', color: 'sky', url: 'https://www.mysql.com/' },
	Docker: { IconName: 'logos/docker', color: 'blue', url: 'https://www.docker.com/' },
	Git: { IconName: 'logos/git', color: 'orange', url: 'https://git-scm.com/' },
	Figma: { IconName: 'logos/figma', color: 'pink', url: 'https://www.figma.com/' },
	Wordpress: { IconName: 'logos/wordpress', color: 'blue', url: 'https://wordpress.org/' },
	Vue: { IconName: 'logos/vue', color: 'green', url: 'https://vuejs.org/' }
}
