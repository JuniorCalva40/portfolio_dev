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
				habitnow: {
					title: 'HabitNow',
					description:
						'Aplicación para gestionar hábitos y tareas diarias. Permite a los usuarios organizar y dar seguimiento a sus actividades, con recordatorios y estadísticas personalizadas para fomentar el cumplimiento de metas y hábitos saludables.'
				},
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

				'Website UAO': {
					title: 'Sitio Web UAO',
					description:
						'Web diseñada para brindar apoyo a personas afectadas por la crisis en Ucrania. Construida con Astro, HTML, CSS y JavaScript, esta web ofrece información, recursos y formas de contribuir con donaciones, voluntariado y ayuda humanitaria'
				}
			}
		},
		skills: {
			title: 'Habilidades',
			subtitle: 'Tecnologías que dan vida a mis ideas'
		},
		footer: {
			title: 'Contacto',
			subtitle:
				'Me encanta crear soluciones digitales que no solo destacan visualmente, sino que también abren nuevas oportunidades de crecimiento.'
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
				'Website UAO': {
					title: 'Website UAO',
					description:
						'Web platform designed to support people affected by the crisis in Ukraine. Built with Astro, HTML, CSS, and JavaScript, this site provides information, resources, and ways to contribute through donations, volunteering, and humanitarian aid'
				},
				habitnow: {
					title: 'HabitNow',
					description:
						'An app to manage daily habits and tasks. It allows users to organize and track their activities, with reminders and personalized statistics to foster the achievement of healthy goals and habits.'
				}
			}
		},
		skills: {
			title: 'Skills',
			subtitle: 'Technologies that bring my ideas to life'
		},
		footer: {
			title: 'Contact',
			subtitle:
				'I love creating digital solutions that not only stand out visually but also open new opportunities for growth'
		}
	}
} as const
