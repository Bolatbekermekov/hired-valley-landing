'use client'

import type { MotionValue } from 'framer-motion'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Rocket, Shield, Target, Zap } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

type Company = {
	name: string
	logo: string
	orbit: 1 | 2 | 3
}

const PURPLE = '#522591'
const BLACK = '#09030F'

const companies: Company[] = [
	{ name: 'Qfc', logo: '/companies/qfc-qatar.png', orbit: 1 },
	{ name: 'Astana-Hub', logo: '/companies/astana-hub.png', orbit: 2 },
	{
		name: 'Draper-Accociates',
		logo: '/companies/draper-accociates.png',
		orbit: 1,
	},
	{ name: 'Gitex-Global', logo: '/companies/gitex-global.png', orbit: 3 },
	{ name: 'Inmerge', logo: '/companies/inmerge.png', orbit: 2 },
	{
		name: 'Qatar-Science-And-Technology-Park',
		logo: '/companies/qatar-science-and-technology-park.png',
		orbit: 3,
	},
	{ name: 'Web-Summit', logo: '/companies/web-summit.png', orbit: 2 },
]

const getOrbitPosition = (
	index: number,
	orbit: number,
	isMobile: boolean,
	total: number,
) => {
	const angle = (index / total) * 2 * Math.PI

	// Важно: подогнано под высоту контейнера, чтобы НЕ вылезало вверх
	const baseRadius = isMobile ? 50 : 78
	const radius = orbit * baseRadius

	return {
		x: Math.cos(angle) * radius,
		y: Math.sin(angle) * radius,
	}
}

// Линии от центра к логотипам (на мобилке скрываем)
const OrbitConnections = ({ isMobile }: { isMobile: boolean }) => {
	if (isMobile) return null

	return (
		<svg className='absolute inset-0 w-full h-full pointer-events-none'>
			{companies.map((c, i) => {
				const pos = getOrbitPosition(i, c.orbit, isMobile, companies.length)
				return (
					<motion.line
						key={c.name}
						x1='50%'
						y1='50%'
						x2={`calc(50% + ${pos.x}px)`}
						y2={`calc(50% + ${pos.y}px)`}
						stroke='rgba(82, 37, 145, 0.18)'
						strokeWidth='1'
						strokeDasharray='5,6'
						animate={{ strokeDashoffset: [0, -12] }}
						transition={{
							duration: 2.4,
							repeat: Infinity,
							ease: 'linear',
						}}
					/>
				)
			})}
		</svg>
	)
}

// Orbital Logo Card
type OrbitalLogoProps = {
	company: Company
	index: number
	mouseX: MotionValue<number>
	mouseY: MotionValue<number>
	isMobile: boolean
}

const OrbitalLogo = ({
	company,
	index,
	mouseX,
	mouseY,
	isMobile,
}: OrbitalLogoProps) => {
	const [isHovered, setIsHovered] = useState(false)

	// позиция на орбите ОТ ЦЕНТРА
	const { x, y } = getOrbitPosition(
		index,
		company.orbit,
		isMobile,
		companies.length,
	)

	// Параллакс на ВНУТРЕННЮЮ карточку (чтобы не ломать орбиту)
	const springConfig = { damping: 20, stiffness: 150 }
	const parallaxX = useSpring(
		useTransform(mouseX, [0, 1], isMobile ? [0, 0] : [-10, 10]),
		springConfig,
	)
	const parallaxY = useSpring(
		useTransform(mouseY, [0, 1], isMobile ? [0, 0] : [-10, 10]),
		springConfig,
	)

	return (
		<motion.div
			className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
			initial={{ opacity: 0, scale: 0, x, y }}
			animate={{
				opacity: 1,
				scale: 1,
				x: [x, x + (isMobile ? 3 : 6), x - (isMobile ? 3 : 6), x],
				y: [y, y - (isMobile ? 3 : 6), y + (isMobile ? 3 : 6), y],
			}}
			transition={{
				opacity: { delay: index * 0.08, duration: 0.45 },
				scale: { delay: index * 0.08, duration: 0.55, type: 'spring' },
				x: {
					duration: 8 + company.orbit * 2,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: index * 0.35,
				},
				y: {
					duration: 8 + company.orbit * 2,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: index * 0.35,
				},
			}}
			onMouseEnter={() => !isMobile && setIsHovered(true)}
			onMouseLeave={() => !isMobile && setIsHovered(false)}
			whileHover={isMobile ? {} : { scale: 1.16, zIndex: 50 }}
		>
			<motion.div
				className={`relative rounded-2xl backdrop-blur-2xl cursor-pointer ${
					isMobile ? 'w-20 h-20' : 'w-32 h-32'
				}`}
				style={{
					x: parallaxX,
					y: parallaxY,
					background: isHovered
						? 'rgba(255, 255, 255, 0.15)'
						: 'rgba(255, 255, 255, 0.06)',
					border: '1px solid rgba(255, 255, 255, 0.2)',
					boxShadow: isHovered
						? '0 0 40px rgba(82, 37, 145, 0.6), 0 20px 40px -10px rgba(0, 0, 0, 0.4)'
						: '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
				}}
				animate={{
					rotate: isHovered ? 0 : [0, 4, -4, 0],
				}}
				transition={{
					rotate: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
				}}
			>
				{/* Glow */}
				<motion.div
					className='absolute inset-0 rounded-2xl'
					style={{
						background:
							'radial-gradient(circle at center, rgba(82, 37, 145, 0.4), transparent 70%)',
						opacity: isHovered ? 1 : 0,
					}}
					transition={{ duration: 0.25 }}
				/>

				{/* Rotating border (desktop only) */}
				{!isMobile && (
					<motion.div
						className='absolute inset-0 rounded-2xl'
						style={{
							background:
								'conic-gradient(from 0deg, transparent, rgba(138, 43, 226, 0.8), transparent)',
							opacity: isHovered ? 1 : 0,
							mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
							maskComposite: 'exclude',
							padding: '2px',
						}}
						animate={{ rotate: 360 }}
						transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
					/>
				)}

				{/* Logo */}
				<div
					className={`relative z-10 w-full h-full flex items-center justify-center ${
						isMobile ? 'p-2' : 'p-4'
					}`}
				>
					<motion.div
						animate={{
							filter: isHovered
								? 'grayscale(0%) brightness(1.3)'
								: 'grayscale(70%) brightness(0.85)',
						}}
						transition={{ duration: 0.25 }}
					>
						<Image
							src={company.logo}
							alt={company.name}
							width={isMobile ? 60 : 100}
							height={isMobile ? 24 : 40}
							className={`w-auto h-auto max-w-full object-contain ${
								isMobile ? 'max-h-8' : 'max-h-12'
							}`}
						/>
					</motion.div>
				</div>

				{/* Orbit indicator */}
				<motion.div
					className={`absolute -bottom-1 -right-1 rounded-full flex items-center justify-center text-xs font-bold ${
						isMobile ? 'w-5 h-5' : 'w-6 h-6'
					}`}
					style={{
						background: 'linear-gradient(135deg, #522591, #8B2FC9)',
						color: 'white',
						boxShadow: '0 4px 12px rgba(82, 37, 145, 0.5)',
					}}
					animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
					transition={{ duration: 0.55, repeat: isHovered ? Infinity : 0 }}
				>
					{company.orbit}
				</motion.div>
			</motion.div>
		</motion.div>
	)
}

// Central Hub
const CentralHub = ({ isMobile }: { isMobile: boolean }) => {
	return (
		<motion.div
			className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'
			initial={{ scale: 0, rotate: -180 }}
			animate={{ scale: 1, rotate: 0 }}
			transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
		>
			{/* Outer rings */}
			{[1, 2, 3].map(ring => (
				<motion.div
					key={ring}
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/20'
					style={{
						width: ring * (isMobile ? 120 : 220),
						height: ring * (isMobile ? 120 : 220),
					}}
					animate={{
						rotate: ring % 2 === 0 ? 360 : -360,
						scale: [1, 1.02, 1],
					}}
					transition={{
						rotate: {
							duration: 20 + ring * 10,
							repeat: Infinity,
							ease: 'linear',
						},
						scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
					}}
				/>
			))}

			{/* Central core */}
			<motion.div
				className={`relative rounded-full backdrop-blur-3xl flex items-center justify-center ${
					isMobile ? 'w-24 h-24' : 'w-40 h-40'
				}`}
				style={{
					background:
						'radial-gradient(circle, rgba(82, 37, 145, 0.4), rgba(82, 37, 145, 0.1))',
					border: '2px solid rgba(255, 255, 255, 0.2)',
					boxShadow:
						'0 0 60px rgba(82, 37, 145, 0.6), inset 0 0 40px rgba(138, 43, 226, 0.3)',
				}}
				animate={{
					boxShadow: [
						'0 0 60px rgba(82, 37, 145, 0.6)',
						'0 0 80px rgba(138, 43, 226, 0.8)',
						'0 0 60px rgba(82, 37, 145, 0.6)',
					],
				}}
				transition={{ duration: 3, repeat: Infinity }}
			>
				<div className='text-center'>
					<motion.div
						className={`font-bold text-white mb-1 ${isMobile ? 'text-xl' : 'text-3xl'}`}
						animate={{
							textShadow: [
								'0 0 20px rgba(138, 43, 226, 0.8)',
								'0 0 40px rgba(138, 43, 226, 1)',
								'0 0 20px rgba(138, 43, 226, 0.8)',
							],
						}}
						transition={{ duration: 2, repeat: Infinity }}
					>
						50+
					</motion.div>
					<div className='text-xs text-gray-300 uppercase tracking-wider'>
						Партнеры
					</div>
				</div>

				{/* Pulse rings */}
				{[...Array(3)].map((_, i) => (
					<motion.div
						key={i}
						className='absolute inset-0 rounded-full border-2 border-purple-400'
						initial={{ scale: 1, opacity: 0.75 }}
						animate={{ scale: 2, opacity: 0 }}
						transition={{
							duration: 2,
							repeat: Infinity,
							delay: i * 0.6,
							ease: 'easeOut',
						}}
					/>
				))}
			</motion.div>
		</motion.div>
	)
}

// Stats Card
const StatCard = ({ icon: Icon, label, value, delay }: any) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.6 }}
			whileHover={{ scale: 1.05, y: -5 }}
			className='relative group'
		>
			<div
				className='p-4 md:p-6 rounded-2xl backdrop-blur-xl border'
				style={{
					background: 'rgba(255, 255, 255, 0.04)',
					borderColor: 'rgba(255, 255, 255, 0.1)',
				}}
			>
				<motion.div
					className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100'
					style={{
						background:
							'radial-gradient(circle at center, rgba(82, 37, 145, 0.2), transparent)',
					}}
					transition={{ duration: 0.3 }}
				/>
				<div className='relative z-10 flex items-center gap-3 md:gap-4'>
					<div
						className='p-2 md:p-3 rounded-xl'
						style={{
							background:
								'linear-gradient(135deg, rgba(82, 37, 145, 0.5), rgba(138, 43, 226, 0.3))',
						}}
					>
						<Icon className='w-5 h-5 md:w-6 md:h-6 text-purple-200' />
					</div>
					<div>
					<div className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
							{value}
						</div>
						<div className='text-xs md:text-sm text-gray-400'>{label}</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

// Star field
const StarField = () => {
	const [stars, setStars] = useState<
		{ left: number; top: number; delay: number; duration: number }[]
	>([])

	useEffect(() => {
		setStars(
			Array.from({ length: 50 }, () => ({
				left: Math.random() * 100,
				top: Math.random() * 100,
				delay: Math.random() * 2,
				duration: 2 + Math.random() * 3,
			})),
		)
	}, [])

	// ❗ важно: пока нет stars — ничего не рендерим
	if (stars.length === 0) return null

	return (
		<div className='absolute inset-0'>
			{stars.map((star, i) => (
				<motion.div
					key={i}
					className='absolute w-0.5 h-0.5 bg-white rounded-full'
					style={{
						left: `${star.left}%`,
						top: `${star.top}%`,
					}}
					animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
					transition={{
						duration: star.duration,
						repeat: Infinity,
						delay: star.delay,
					}}
				/>
			))}
		</div>
	)
}

export default function AboutLogos() {
	const mouseX = useMotionValue(0.5)
	const mouseY = useMotionValue(0.5)
	const containerRef = useRef<HTMLDivElement>(null)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768)
		checkMobile()
		window.addEventListener('resize', checkMobile)

		const handleMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return
			if (isMobile) return

			const rect = containerRef.current.getBoundingClientRect()
			mouseX.set((e.clientX - rect.left) / rect.width)
			mouseY.set((e.clientY - rect.top) / rect.height)
		}

		window.addEventListener('mousemove', handleMouseMove)
		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('resize', checkMobile)
		}
	}, [mouseX, mouseY, isMobile])

	return (
		<section className='relative w-full py-10 sm:py-16 md:py-24 overflow-hidden'>
			{/* Background */}
			<div className='absolute inset-0 bg-black'>
				<motion.div
					className='absolute inset-0'
					style={{
						backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(82, 37, 145, 0.3), transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.2), transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(75, 0, 130, 0.15), transparent 50%)
            `,
					}}
					animate={{ opacity: [0.5, 0.8, 0.5] }}
					transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				/>

				<StarField />

				<div
					className='absolute inset-0 opacity-10'
					style={{
						backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
						backgroundSize: '50px 50px',
					}}
				/>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 md:px-6'>
				{/* Header (ВСЕГДА поверх логотипов) */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='relative z-20 text-center mb-10 md:mb-20'
				>
					<motion.h2 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6'>
						Наше{' '}
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage: `linear-gradient(90deg, ${PURPLE}, rgba(255,255,255,0.92), ${PURPLE})`,
							}}
						>
							Созвездие
						</span>
					</motion.h2>
					<p className='text-white/60 text-base md:text-lg max-w-2xl mx-auto px-4'>
						Сеть из 50+ глобальных партнеров вращается вокруг нашей экосистемы
					</p>
				</motion.div>

				{/* Orbital System */}
				<div
					ref={containerRef}
					className={`relative z-10 mx-auto overflow-hidden rounded-3xl ${
						isMobile ? 'h-[460px] mt-4' : 'h-[600px]'
					}`}
				>
					<OrbitConnections isMobile={isMobile} />
					<CentralHub isMobile={isMobile} />

					{companies.map((company, index) => (
						<OrbitalLogo
							key={company.name}
							company={company}
							index={index}
							mouseX={mouseX}
							mouseY={mouseY}
							isMobile={isMobile}
						/>
					))}
				</div>

				{/* Stats */}
				<div className='mt-10 sm:mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
					<StatCard
						icon={Target}
						label='Точность подбора'
						value='94%'
						delay={0.2}
					/>
					<StatCard
						icon={Rocket}
						label='Среднее время'
						value='14 дней'
						delay={0.3}
					/>
					<StatCard
						icon={Shield}
						label='Гарантия качества'
						value='100%'
						delay={0.4}
					/>
					<StatCard
						icon={Zap}
						label='Успешных хайров'
						value='1.5K+'
						delay={0.5}
					/>
				</div>
			</div>
		</section>
	)
}
