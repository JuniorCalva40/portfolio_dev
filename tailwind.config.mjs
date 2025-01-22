/** @type {import('tailwindcss').Config} */
import Typography from '@tailwindcss/typography'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				shimmer: 'shimmer 2s linear infinite'
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				}
			},
			colors: {
				primary: 'var(--pw-color-primary)',
				secondary: 'var(--pw-color-secondary)',
				accent: 'var(--pw-color-accent)',
				default: 'var(--pw-text-default)',
				muted: 'var(--pw-text-muted)'
			}
		}
	},

	plugins: [Typography]
}
