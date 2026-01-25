'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import {
	ArrowUpRight,
	BadgeCheck,
	Globe2,
	Layers3,
	Sparkles,
	Users2,
} from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

const PURPLE = '#522591'
const BLACK = '#09030F'

const stats = [
	{ label: 'Сообщество', value: '87K+', icon: Users2 },
	{ label: 'Офферов', value: '1500+', icon: BadgeCheck },
	{ label: 'Стран', value: '40+', icon: Globe2 },
	{ label: 'Программ', value: '12+', icon: Layers3 },
]

// Floating orbs
const FloatingOrbs = () => {
	return (
		<div className='absolute inset-0 overflow-hidden'>
			{[...Array(5)].map((_, i) => (
				<motion.div
					key={i}
					className='absolute rounded-full blur-3xl'
					style={{
						background: `radial-gradient(circle, rgba(82, 37, 145, ${
							0.35 - i * 0.05
						}) 0%, transparent 70%)`,
						width: `${300 + i * 100}px`,
						height: `${300 + i * 100}px`,
						left: `${20 + i * 15}%`,
						top: `${10 + i * 18}%`,
					}}
					animate={{
						x: [0, 90, -50, 0],
						y: [0, -90, 50, 0],
						scale: [1, 1.15, 0.9, 1],
					}}
					transition={{
						duration: 18 + i * 4,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: i * 1.2,
					}}
				/>
			))}
		</div>
	)
}

// Liquid glass card
type LiquidGlassCardProps = {
	children: React.ReactNode
	delay?: number
	className?: string
}

const LiquidGlassCard = ({
	children,
	delay = 0,
	className = '',
}: LiquidGlassCardProps) => {
	const [isHovered, setIsHovered] = useState(false)
	const ref = useRef<HTMLDivElement>(null)

	const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
		if (!ref.current) return
		const rect = ref.current.getBoundingClientRect()
		const x = ((e.clientX - rect.left) / rect.width) * 100
		const y = ((e.clientY - rect.top) / rect.height) * 100
		ref.current.style.setProperty('--mouse-x', `${x}%`)
		ref.current.style.setProperty('--mouse-y', `${y}%`)
	}

	const handleLeave = () => {
		if (!ref.current) return
		ref.current.style.setProperty('--mouse-x', `50%`)
		ref.current.style.setProperty('--mouse-y', `50%`)
	}

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 20, scale: 0.96 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.6, type: 'spring', bounce: 0.28 }}
			whileHover={{ scale: 1.05, y: -5 }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onPointerMove={handleMove}
			onPointerLeave={handleLeave}
			className={`relative rounded-2xl backdrop-blur-xl ${className}`}
			style={{
				background: 'rgba(255, 255, 255, 0.03)',
				border: '1px solid rgba(255, 255, 255, 0.08)',
				boxShadow: isHovered
					? `0 20px 60px -15px rgba(82, 37, 145, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.1)`
					: '0 10px 40px -15px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
				transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
				// initial liquid origin
				['--mouse-x' as any]: '50%',
				['--mouse-y' as any]: '50%',
			}}
		>
			{/* Liquid overlay */}
			<motion.div
				className='absolute inset-0 rounded-2xl opacity-0 pointer-events-none'
				animate={{ opacity: isHovered ? 1 : 0 }}
				transition={{ duration: 0.2 }}
				style={{
					background:
						'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(82, 37, 145, 0.18), transparent 45%)',
				}}
			/>
			<div className='relative z-10'>{children}</div>
		</motion.div>
	)
}

export default function AboutHero() {
	const { scrollYProgress } = useScroll()
	const contentY = useTransform(scrollYProgress, [0, 1], [0, -50])
	const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

	return (
		<section
			className='relative overflow-hidden pt-24 sm:pt-32 pb-20 sm:pb-24'
			aria-labelledby='about-hero-title'
		>
			{/* Background */}
			<div className='absolute inset-0'>
				{/* Gradient like your screenshot (Purple -> Black -> Black -> Purple) */}
				<div
					className='absolute inset-0'
					style={{
						background: `
              linear-gradient(
                135deg,
                rgba(82, 37, 145, 0.90) 0%,
                rgba(9, 3, 15, 0.98) 35%,
                rgba(9, 3, 15, 0.98) 65%,
                rgba(82, 37, 145, 0.90) 100%
              )
            `,
					}}
				/>

				{/* Soft purple glows */}
				<div
					className='absolute inset-0'
					style={{
						background: `
              radial-gradient(circle at 20% 30%, rgba(82, 37, 145, 0.35), transparent 45%),
              radial-gradient(circle at 80% 70%, rgba(82, 37, 145, 0.25), transparent 40%),
              radial-gradient(circle at 50% 10%, rgba(82, 37, 145, 0.18), transparent 50%)
            `,
					}}
				/>

				<FloatingOrbs />

				{/* Grid */}
				<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]' />

				{/* Noise */}
				<div className='absolute inset-0 opacity-[0.015] mix-blend-overlay'>
					<svg width='100%' height='100%'>
						<filter id='noise'>
							<feTurbulence
								type='fractalNoise'
								baseFrequency='0.8'
								numOctaves='4'
							/>
						</filter>
						<rect width='100%' height='100%' filter='url(#noise)' />
					</svg>
				</div>
			</div>

			<motion.div
				style={{ y: contentY, opacity: contentOpacity }}
				className='relative z-10 max-w-7xl mx-auto px-6'
			>
				<div className='grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center'>
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, type: 'spring', bounce: 0.25 }}
					>
						{/* Badge */}
						<motion.div
							className='inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl mb-8 relative overflow-hidden group cursor-pointer'
							style={{
								background: 'rgba(255, 255, 255, 0.05)',
								border: '1px solid rgba(255, 255, 255, 0.1)',
							}}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<motion.div
								className='absolute inset-0 rounded-full'
								initial={{ x: '-100%' }}
								whileHover={{ x: '100%' }}
								transition={{ duration: 0.6 }}
								style={{
									background:
										'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.10), transparent)',
								}}
							/>
							<motion.div
								className='w-2 h-2 rounded-full'
								style={{ background: PURPLE }}
								animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
								transition={{ duration: 2, repeat: Infinity }}
							/>
							<span className='text-sm text-gray-200 font-medium relative z-10'>
								О нас
							</span>
							<Sparkles className='w-3 h-3' style={{ color: PURPLE }} />
						</motion.div>

						{/* Title */}
						<h1
							id='about-hero-title'
							className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'
						>
							<motion.span
								className='inline-block text-white'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								Мы превращаем карьерные амбиции в{' '}
							</motion.span>

							<motion.span
								className='inline-block bg-clip-text text-transparent bg-[length:200%_auto]'
								style={{
									backgroundImage: `linear-gradient(90deg, ${PURPLE}, rgba(255,255,255,0.92), ${PURPLE})`,
								}}
								initial={{ opacity: 0, y: 20 }}
								animate={{
									opacity: 1,
									y: 0,
									backgroundPosition: ['0%', '200%'],
								}}
								transition={{
									delay: 0.4,
									backgroundPosition: {
										duration: 3,
										repeat: Infinity,
										ease: 'linear',
									},
								}}
							>
								глобальные офферы
							</motion.span>
						</h1>

						<motion.p
							className='mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.6 }}
						>
							Hired Valley — экосистема для специалистов, которые хотят выйти на
							международный рынок, прокачать экспертизу и найти сильные команды
							по всему миру.
						</motion.p>

						{/* CTA */}
						<motion.div
							className='mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.8 }}
						>
							<motion.a
								href='https://t.me/hiredvalleymanager'
								className='group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-white text-sm sm:text-base font-semibold overflow-hidden'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								style={{
									background: `linear-gradient(135deg, ${PURPLE} 0%, ${BLACK} 100%)`,
									boxShadow: '0 20px 50px -22px rgba(82, 37, 145, 0.85)',
								}}
							>
								<motion.div
									className='absolute inset-0'
									initial={{ x: '-100%' }}
									whileHover={{ x: '100%' }}
									transition={{ duration: 0.5 }}
									style={{
										background:
											'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.20), transparent)',
									}}
								/>
								<span className='relative z-10'>Связаться с нами</span>
								<ArrowUpRight className='w-4 h-4 relative z-10 group-hover:rotate-45 transition-transform' />
							</motion.a>

							<motion.a
								href='#team'
								className='group relative inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-full text-white text-sm sm:text-base font-semibold backdrop-blur-xl overflow-hidden'
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								style={{
									background: 'rgba(255, 255, 255, 0.05)',
									border: '1px solid rgba(255, 255, 255, 0.15)',
								}}
							>
								<motion.div
									className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity'
									style={{
										background:
											'radial-gradient(circle at center, rgba(82, 37, 145, 0.22), transparent 70%)',
									}}
								/>
								<span className='relative z-10'>Наша команда</span>
							</motion.a>
						</motion.div>

						{/* Info badges */}
						<motion.div
							className='mt-8 sm:mt-10 flex flex-wrap items-center gap-6'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						>
							{[
								{
									dot: 'rgba(82, 37, 145, 1)',
									text: 'С 2021 года на рынке',
								},
								{
									dot: 'rgba(82, 37, 145, 0.75)',
									text: '87,000+ участников сообщества',
								},
							].map((item, i) => (
								<motion.div
									key={i}
									className='flex items-center gap-2 text-sm text-gray-300 px-3 py-1.5 rounded-full backdrop-blur-sm'
									style={{
										background: 'rgba(255, 255, 255, 0.03)',
										border: '1px solid rgba(255, 255, 255, 0.08)',
									}}
									whileHover={{ scale: 1.05 }}
								>
									<motion.span
										className='w-2 h-2 rounded-full'
										style={{ background: item.dot }}
										animate={{ scale: [1, 1.3, 1], opacity: [1, 0.65, 1] }}
										transition={{
											duration: 2,
											repeat: Infinity,
											delay: i * 0.5,
										}}
									/>
									<span>{item.text}</span>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Right */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 1,
							delay: 0.2,
							type: 'spring',
							bounce: 0.25,
						}}
						className='relative'
					>
						{/* Image card */}
						<motion.div
							className='relative rounded-3xl overflow-hidden backdrop-blur-xl aspect-[4/3] group'
							style={{
								border: '1px solid rgba(255, 255, 255, 0.1)',
								boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.55)',
							}}
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.4 }}
						>
							<Image
								src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80'
								alt='Команда Hired Valley'
								fill
								className='object-cover transition-transform duration-700 group-hover:scale-110'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent' />

							{/* Bottom info */}
							<motion.div
								className='absolute bottom-6 left-6 right-6 p-5 rounded-2xl backdrop-blur-2xl'
								style={{
									background: 'rgba(9, 3, 15, 0.55)',
									border: '1px solid rgba(255, 255, 255, 0.15)',
									boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
								}}
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<div className='text-white font-semibold text-lg flex items-center gap-2'>
									Глобальная карьерная экосистема
									<motion.div
										animate={{ rotate: 360 }}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: 'linear',
										}}
									>
										<Sparkles className='w-4 h-4' style={{ color: PURPLE }} />
									</motion.div>
								</div>
								<p className='text-sm text-gray-200 mt-2'>
									От карьерной диагностики до финального оффера.
								</p>
							</motion.div>
						</motion.div>

						{/* Stats */}
						<div className='grid grid-cols-2 gap-4 mt-6'>
							{stats.map((stat, index) => (
								<LiquidGlassCard
									key={stat.label}
									delay={0.9 + index * 0.1}
									className='p-4'
								>
									<div className='flex items-center gap-3'>
										<motion.div
											className='w-10 h-10 rounded-xl flex items-center justify-center'
											style={{
												background:
													'radial-gradient(circle, rgba(82, 37, 145, 0.40) 0%, rgba(82, 37, 145, 0.10) 100%)',
											}}
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											<stat.icon className='w-5 h-5 text-white' />
										</motion.div>

										<div>
											<motion.div
												className='text-white font-bold text-lg sm:text-xl'
												initial={{ opacity: 0, scale: 0.5 }}
												whileInView={{ opacity: 1, scale: 1 }}
												viewport={{ once: true }}
												transition={{
													delay: 1 + index * 0.1,
													type: 'spring',
													bounce: 0.25,
												}}
											>
												{stat.value}
											</motion.div>
											<div className='text-white/60 text-xs'>{stat.label}</div>
										</div>
									</div>
								</LiquidGlassCard>
							))}
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}
