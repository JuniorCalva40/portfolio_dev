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
				info: 'Más información'
			},
			items: {
				rever: {
					description:
						'Plataforma de generación de imágenes basada en IA utilizando modelos de Stable Diffusion. Implementada con una arquitectura moderna que combina Next.js para el frontend y FastAPI para el backend, ofreciendo una experiencia fluida en la generación y gestión de imágenes.'
				},
				netmall: {
					description:
						'Plataforma de comercio electrónico B2B que facilita la conexión entre proveedores y compradores. Desarrollada con Next.js y FastAPI, incorpora características avanzadas como gestión de inventario, sistema de pedidos y panel de administración personalizado.'
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
				info: 'More info'
			},
			items: {
				rever: {
					description:
						'AI image generation platform using Stable Diffusion models. Implemented with a modern architecture combining Next.js for frontend and FastAPI for backend, offering a smooth experience in image generation and management.'
				},
				netmall: {
					description:
						'B2B e-commerce platform that facilitates connection between suppliers and buyers. Developed with Next.js and FastAPI, incorporating advanced features such as inventory management, order system, and custom admin panel.'
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
