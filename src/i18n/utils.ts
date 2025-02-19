import { ui, defaultLang, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split('/')
	if (lang in ui) return lang as keyof typeof ui
	return defaultLang
}

type NestedKeys<T> = T extends object
	? {
			[K in keyof T]: `${K & string}${T[K] extends object ? `.${NestedKeys<T[K]>}` : ''}`
		}[keyof T]
	: never

type UIKeys = NestedKeys<(typeof ui)['es']>

export function useTranslations(lang: keyof typeof ui) {
	return function t(key: UIKeys): string {
		return getNestedValue(ui[lang], key)
	}
}

function getNestedValue(obj: any, path: string): string {
	return path.split('.').reduce((acc, part) => {
		if (acc && acc[part] !== undefined) {
			return acc[part]
		} else {
			console.error(`⚠️ Clave no encontrada: ${path}`)
			return ''
		}
	}, obj)
}

export function useTranslatedPath(lang: keyof typeof ui) {
	return function translatePath(path: string, l: string = lang) {
		return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
	}
}
