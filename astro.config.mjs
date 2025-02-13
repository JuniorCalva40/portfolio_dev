import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
	integrations: [icon(), mdx()],
	vite: {
		plugins: [tailwindcss()]
	},
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en']
	}
})
