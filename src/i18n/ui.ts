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
				info: 'Más info'
			},
			items: {
				rever: {
					title: 'Rever AI',
					description:
						'Arcanume es una plataforma creada con WordPress y LearnPress, personalizada para una academia de cocina. Permite gestionar cursos, estudiantes y contenido educativo de manera intuitiva, brindando una experiencia de aprendizaje única y enfocada en el ámbito culinario.'
				},
				mapa_crime_ec: {
					title: 'Mapa de Crimen Ecuador',
					description:
						'Esta web proporciona un mapa de calor de crimen en Ecuador, permitiendo a los usuarios ver y analizar datos de crimen. Ayuda a los usuarios a estar informados y tomar medidas de seguridad apropiadas. La arquitectura de frontend con React + Mantine UI y backend con FastAPI + Pandas para analizar los datos la fuente proviene de datos abiertos Ecuador.'
				},

				'Netmall Marketplace': {
					title: 'Netmall Markeplace',
					description:
						'Netmall es una web app construida con Next.js y Tailwind CSS, optimizada para el rendimiento y SEO. Es un marketplace de tecnología que incluye funcionalidades de gestión de productos, permitiendo a los usuarios comprar y vender productos tecnológicos fácilmente. La app cuenta con un dashboard intuitivo para gestionar anuncios, realizar un seguimiento de ventas y ver análisis. Utiliza PostgreSQL para la gestión de bases de datos, con Prisma como ORM, asegurando un manejo eficiente de los datos y una integración fluida.'
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
					title: 'Arcanume',
					description:
						'Arcanume is a platform built with WordPress and LearnPress, customized for a culinary academy. It allows for intuitive management of courses, students, and educational content, providing a unique learning experience focused on the culinary field.'
				},
				mapa_crime_ec: {
					title: 'Ecuador Crime Map Heat',
					description:
						'This web provides a heat map of crime in Ecuador, allowing users to view and analyze crime data. It helps users stay informed and take appropriate safety measures. The frontend architecture is React + Mantine UI and the backend is FastAPI + Pandas to analyze the data, the source of the data is from open data Ecuador.'
				},
				'Netmall Marketplace': {
					title: 'Personal Portfolio',
					description:
						"Netmall is a web app built with Next.js and Tailwind CSS, optimized for performance and SEO. It's a tech marketplace that includes product management features, enabling users to easily buy and sell tech products. The app uses PostgreSQL for database management, with Prisma as the ORM, ensuring efficient data handling and seamless integration."
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
