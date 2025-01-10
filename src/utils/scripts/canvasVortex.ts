export function initVortex() {
	const canvas = document.getElementById('vortexAnimation') as HTMLCanvasElement
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight

	const centerWidth = canvas.width / 2
	const centerHeight = canvas.height / 2
	const center: [number, number] = [centerWidth, centerHeight]

	const particles: Particle[] = Array.from({ length: 150 }, () => new Particle(canvas))
	const circle = new Circle(canvas, centerWidth, centerHeight, 200)

	const drawParticles = () => {
		particles.forEach((particle: Particle) => {
			particle.update([canvas.width / 2, canvas.height / 2])
			particle.draw()
		})
	}

	const animate = () => {
		const ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		circle.draw()
		drawParticles()
		requestAnimationFrame(animate)
	}

	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth
		canvas.height = window.innerHeight
		particles.forEach((particle: Particle) =>
			particle.update([canvas.width / 2, canvas.height / 2])
		)
		circle.updatePosition(canvas.width / 2, canvas.height / 2)
	})

	animate()
}

class Particle {
	canvas: HTMLCanvasElement

	ctx: CanvasRenderingContext2D

	x: number = 0

	y: number = 0

	vx: number = 0

	vy: number = 0

	life: number = 0

	ttl: number = 0

	speed: number = 0

	radius: number = 0

	color: string = ''

	constructor(canvas: HTMLCanvasElement) {
		this.canvas = canvas

		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D

		this.reset()
	}

	reset(): void {
		this.x = Math.random() * this.canvas.width

		this.y = Math.random() * this.canvas.height

		this.life = 0

		this.ttl = 50 + Math.random() * 200 // Time to live for my particle

		this.speed = 0.1 + Math.random() * 2 // Velocity

		this.radius = 1 + Math.random() * 3

		this.color = Math.random() > 0.5 ? '#952bff' : '#7000ff'
	}

	update(center: [number, number]): void {
		const angle = Math.atan2(this.y - center[1], this.x - center[0])

		this.vx = (1 - 0.5) * this.vx + 0.5 * Math.cos(angle)

		this.vy = (1 - 0.5) * this.vy + 0.5 * Math.sin(angle)

		this.x += this.vx * this.speed

		this.y += this.vy * this.speed

		this.life++

		if (this.life > this.ttl - 20) {
			this.speed *= 0.5
		}

		if (
			this.life > this.ttl ||
			this.x < 0 ||
			this.x > this.canvas.width ||
			this.y < 0 ||
			this.y > this.canvas.height
		) {
			this.reset()
		}
	}

	updatePosition(x: number, y: number): void {
		this.x = x

		this.y = y
	}

	draw(): void {
		this.ctx.save()

		this.ctx.beginPath()

		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)

		this.ctx.fillStyle = this.color

		this.ctx.fill()

		this.ctx.restore()
	}
}

class Circle {
	canvas: HTMLCanvasElement

	ctx: CanvasRenderingContext2D

	x: number

	y: number

	radius: number

	constructor(canvas: HTMLCanvasElement, x: number, y: number, radius: number) {
		this.canvas = canvas

		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D

		this.x = x

		this.y = y

		this.radius = radius
	}

	draw(): void {
		const gradient = this.ctx.createRadialGradient(this.x, this.y, 20, this.x, this.y, this.radius)

		gradient.addColorStop(0.1, 'black')

		gradient.addColorStop(1, '#482bff')

		this.ctx.save()

		this.ctx.filter = 'blur(90px)'

		this.ctx.beginPath()

		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)

		this.ctx.fillStyle = gradient

		this.ctx.fill()

		this.ctx.restore()
	}

	updatePosition(x: number, y: number): void {
		this.x = x

		this.y = y
	}
}

initVortex()
