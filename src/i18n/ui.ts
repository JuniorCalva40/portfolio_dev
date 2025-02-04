export const languages = {
	es: 'Español',
	en: 'English'
}

export const defaultLang = 'es'

export const showDefaultLang = false

export const ui = {
	es: {
		nav: {
			home: 'Inicio',
			projects: 'Proyectos',
			skills: 'Habilidades',
			blog: 'Blog'
		},
		home: {
			badge: 'Disponible para trabajar',
			greeting: 'Hola, soy',
			name: 'Junior Calva',
			profession: 'Desarrollador de Software',
			description:
				'Enfocado en crear soluciones digitales completas, diseñando aplicaciones funcionales y visualmente atractivas'
		},
		experience: {
			title: 'Experiencia',
			items: {
				inkua: {
					description:
						'Formé parte del equipo creando soluciones digitales para ONGs, desarrollando plantillas web optimizadas que mejoraron la accesibilidad y eficiencia en iniciativas humanitarias.'
				},
				werbung: {
					description:
						'Colaboré estrechamente con diseñadores y desarrolladores para optimizar el sistema de diseño, asegurando una mayor eficiencia y coherencia en la creación de productos digitales.'
				}
			}
		},
		projects: {
			title: 'Proyectos',
			subtitle: 'Proyectos destacados: de la idea a la implementación',
			card: {
				source: 'Código fuente',
				info: 'Más información'
			},
			items: {
				rever: {
					title: 'Rever AI',
					description:
						'Plataforma de generación de imágenes basada en IA utilizando modelos de Stable Diffusion. Implementada con una arquitectura moderna que combina Next.js para el frontend y FastAPI para el backend, ofreciendo una experiencia fluida en la generación y gestión de imágenes.'
				},
				mapa_crime_ec: {
					title: 'Mapa de Crimen Ecuador',
					description:
						'Esta web proporciona un mapa de calor de crimen en Ecuador, permitiendo a los usuarios ver y analizar datos de crimen. Ayuda a los usuarios a estar informados y tomar medidas de seguridad apropiadas. La arquitectura de frontend con React + Mantine UI y backend con FastAPI + Pandas para analizar los datos la fuente proviene de datos abiertos Ecuador.'
				},

				portfolio: {
					title: 'Portfolio Personal',
					description:
						'Sitio web personal desarrollado con Astro y TailwindCSS, optimizado para rendimiento y SEO. Implementa internacionalización, animaciones fluidas y una interfaz adaptativa para mostrar proyectos y habilidades técnicas.'
				}
			}
		},
		skills: {
			title: 'Habilidades',
			subtitle: 'Tecnologías que dan vida a mis ideas'
		},
		footer: {
			title: 'Contacto',
			subtitle: 'Estoy abierto a nuevas oportunidades'
		}
	},
	en: {
		nav: {
			home: 'Home',
			projects: 'Projects',
			skills: 'Skills',
			blog: 'Blog'
		},
		home: {
			badge: 'Open to Work',
			greeting: "Hi, I'm",
			name: 'Junior Calva',
			profession: 'Software Developer',
			description:
				'Focused on building complete digital solutions, designing functional and visually appealing applications'
		},
		experience: {
			title: 'Experience',
			items: {
				inkua: {
					description:
						'I was part of the team creating digital solutions for NGOs, developing optimized web templates that improved accessibility and efficiency in humanitarian initiatives.'
				},
				werbung: {
					description:
						'I worked closely with designers and developers to optimize the design system, ensuring greater efficiency and consistency in the creation of digital products.'
				}
			}
		},
		projects: {
			title: 'Projects',
			subtitle: 'Featured Projects: From Idea to Implementation',
			card: {
				info: 'More info',
				source: 'Source Code'
			},

			items: {
				rever: {
					title: 'Rever AI',
					description:
						'AI image generation platform using Stable Diffusion models. Implemented with a modern architecture combining Next.js for frontend and FastAPI for backend, offering a smooth experience in image generation and management.'
				},
				mapa_crime_ec: {
					title: 'Ecuador Crime Map Heat',
					description:
						'This web provides a heat map of crime in Ecuador, allowing users to view and analyze crime data. It helps users stay informed and take appropriate safety measures. The frontend architecture is React + Mantine UI and the backend is FastAPI + Pandas to analyze the data, the source of the data is from open data Ecuador.'
				},

				portfolio: {
					title: 'Personal Portfolio',
					description:
						'Personal website developed with Astro and TailwindCSS, optimized for performance and SEO. Implements internationalization, smooth animations, and an adaptive interface to showcase projects and technical skills.'
				}
			}
		},
		skills: {
			title: 'Skills',
			subtitle: 'Technologies that bring my ideas to life'
		},
		footer: {
			title: 'Contact',
			subtitle: 'Open to new opportunities'
		}
	}
} as const
