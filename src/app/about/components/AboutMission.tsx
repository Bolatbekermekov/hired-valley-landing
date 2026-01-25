'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Sparkles, Users2 } from 'lucide-react'

const PURPLE = '#522591'
const BLACK = '#09030F'

const highlights = [
	{
		title: 'Сильное комьюнити',
		description:
			'Объединяем специалистов из СНГ, Европы, США и Ближнего Востока.',
		icon: Users2,
	},
	{
		title: 'AI-инфраструктура',
		description:
			'Поддерживаем карьерный рост с помощью персональных треков и аналитики.',
		icon: Sparkles,
	},
	{
		title: 'Менторы-практики',
		description:
			'Эксперты из топовых компаний помогают закрывать ключевые пробелы.',
		icon: ShieldCheck,
	},
]

const container = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
	hidden: { opacity: 0, y: 18 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55 },
	},
}

const LiquidBlob = ({
	className,
	delay = 0,
}: {
	className: string
	delay?: number
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{
				opacity: 1,
				scale: [0.95, 1.06, 0.95],
				x: [0, 18, -14, 0],
				y: [0, -14, 12, 0],
			}}
			transition={{
				duration: 12,
				repeat: Infinity,
				ease: 'easeInOut',
				delay,
			}}
		/>
	)
}

function GlassCard({
	title,
	description,
	Icon,
	index,
}: {
	title: string
	description: string
	Icon: any
	index: number
}) {
	return (
		<motion.div
			variants={item}
			whileHover={{ y: -6, scale: 1.015 }}
			transition={{ type: 'spring', stiffness: 260, damping: 18 }}
			className='relative group'
		>
			{/* Gradient glass border (только фиол + чёрный) */}
			<div
				className='absolute -inset-[1px] rounded-3xl opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100'
				style={{
					background: `conic-gradient(from 180deg,
            rgba(82,37,145,0.55),
            rgba(9,3,15,0.35),
            rgba(82,37,145,0.55))`,
				}}
			/>

			{/* Body */}
			<div
				className='relative rounded-3xl border overflow-hidden backdrop-blur-2xl'
				style={{
					borderColor: 'rgba(255,255,255,0.10)',
					background: 'rgba(255,255,255,0.05)',
				}}
			>
				{/* Liquid glow */}
				<motion.div
					className='absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl'
					style={{
						background: `radial-gradient(circle at 30% 30%,
              rgba(82,37,145,0.45),
              rgba(9,3,15,0) 70%)`,
					}}
					animate={{ x: [0, 10, 0], y: [0, 6, 0] }}
					transition={{
						duration: 6,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: index * 0.2,
					}}
				/>

				{/* Shimmer */}
				<motion.div
					className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
					style={{
						background:
							'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 20%, transparent 40%)',
					}}
					animate={{ x: ['-40%', '140%'] }}
					transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
				/>

				<div className='relative p-5 sm:p-6'>
					<div className='flex items-start gap-4'>
						{/* Icon */}
						<div className='relative flex-shrink-0'>
							<div
								className='absolute -inset-2 rounded-2xl blur-xl opacity-60'
								style={{
									background: `radial-gradient(circle,
                    rgba(82,37,145,0.55),
                    rgba(9,3,15,0) 70%)`,
								}}
							/>
							<div
								className='relative w-12 h-12 rounded-2xl border flex items-center justify-center'
								style={{
									borderColor: 'rgba(255,255,255,0.10)',
									background: 'rgba(255,255,255,0.06)',
									backdropFilter: 'blur(18px)',
								}}
							>
								<Icon className='w-[18px] h-[18px] text-white/90' />
							</div>
						</div>

						<div className='min-w-0'>
							<h3 className='text-white font-semibold text-base sm:text-lg leading-tight'>
								{title}
							</h3>
							<p className='mt-1 text-white/60 text-sm leading-relaxed'>
								{description}
							</p>
						</div>
					</div>

					<div className='mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent' />
				</div>
			</div>
		</motion.div>
	)
}

export default function AboutMission() {
	return (
		<section className='relative w-full overflow-hidden py-14 sm:py-16 lg:py-28'>
			{/* Background */}
			<div className='absolute inset-0'>
				{/* ГЛАВНЫЙ градиент как на твоей картинке */}
				<div
					className='absolute inset-0'
					style={{
						background: `linear-gradient(135deg,
              ${PURPLE} 0%,
              ${BLACK} 31%,
              ${BLACK} 59%,
              ${PURPLE} 100%)`,
					}}
				/>

				{/* Soft vignette */}
				<div
					className='absolute inset-0'
					style={{
						background:
							'radial-gradient(circle at center, rgba(9,3,15,0) 0%, rgba(9,3,15,0.65) 72%, rgba(9,3,15,0.92) 100%)',
					}}
				/>

				{/* Liquid blobs (только фиол/черный) */}
				<LiquidBlob className='absolute -top-28 -left-28 w-[360px] h-[360px] rounded-full blur-3xl bg-[#522591]/25' />
				<LiquidBlob
					className='absolute top-10 -right-24 w-[420px] h-[420px] rounded-full blur-3xl bg-[#522591]/20'
					delay={0.9}
				/>
				<LiquidBlob
					className='absolute -bottom-32 left-1/3 w-[520px] h-[520px] rounded-full blur-3xl bg-[#522591]/14'
					delay={1.6}
				/>

				{/* Grid */}
				<div
					className='absolute inset-0 opacity-[0.12]'
					style={{
						backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
						backgroundSize: '44px 44px',
						maskImage:
							'radial-gradient(circle at center, black 60%, transparent 82%)',
					}}
				/>
			</div>

			<div className='relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='grid items-center gap-8 sm:gap-10 lg:gap-16 lg:grid-cols-[1.05fr_0.95fr]'>
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, x: -24 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.35 }}
						transition={{ duration: 0.7, ease: 'easeOut' }}
						className='relative'
					>
						{/* Pill */}
						<div
							className='inline-flex items-center gap-2 rounded-full border px-3 py-1 backdrop-blur-xl'
							style={{
								borderColor: 'rgba(255,255,255,0.10)',
								background: 'rgba(255,255,255,0.05)',
							}}
						>
							<span
								className='inline-block w-1.5 h-1.5 rounded-full'
								style={{
									background: PURPLE,
									boxShadow: '0 0 18px rgba(82,37,145,0.75)',
								}}
							/>
							<span className='text-xs text-white/70 tracking-wide'>
								Наша миссия
							</span>
						</div>

						<h2 className='mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white'>
							Наша миссия —{' '}
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage: `linear-gradient(90deg, ${PURPLE}, rgba(255,255,255,0.9), ${PURPLE})`,
								}}
							>
								ускорить ваш выход
							</span>{' '}
							на международный рынок
						</h2>

						<p className='mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl'>
							Мы строим карьерные дорожные карты, которые соединяют навыки,
							персональные цели и запросы рынка. В основе — прозрачная
							стратегия, реальные данные и постоянная поддержка на каждом шаге.
						</p>

						<p className='mt-4 text-sm sm:text-base text-white/55 leading-relaxed max-w-xl'>
							Можно добавить кратко: что именно ты получишь за 2–4 недели и
							какой будет результат.
						</p>

						{/* CTA */}
						<div className='mt-8 flex flex-col sm:flex-row gap-3 sm:items-center'>
							<motion.a
								href='#'
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
								className='relative inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white overflow-hidden'
								style={{
									background: `linear-gradient(135deg, ${PURPLE}, ${BLACK})`,
									boxShadow:
										'0 18px 45px rgba(82,37,145,0.22), 0 12px 30px rgba(0,0,0,0.35)',
								}}
							>
								<span className='relative z-10'>Начать путь</span>

								<motion.span
									className='absolute inset-0 opacity-55'
									animate={{ x: ['-40%', '140%'] }}
									transition={{
										duration: 1.6,
										repeat: Infinity,
										ease: 'linear',
									}}
									style={{
										background:
											'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.20) 20%, transparent 40%)',
									}}
								/>
							</motion.a>

							<motion.a
								href='#'
								whileHover={{ y: -2 }}
								whileTap={{ scale: 0.98 }}
								className='inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium text-white/80 backdrop-blur-xl transition'
								style={{
									borderColor: 'rgba(255,255,255,0.10)',
									background: 'rgba(255,255,255,0.05)',
								}}
							>
								Посмотреть программу
							</motion.a>
						</div>
					</motion.div>

					{/* Right cards */}
					<motion.div
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.35 }}
						className='relative'
					>
						{/* Glass plate */}
						<div
							className='absolute -inset-4 rounded-[32px] border backdrop-blur-2xl'
							style={{
								borderColor: 'rgba(255,255,255,0.06)',
								background: 'rgba(255,255,255,0.03)',
							}}
						/>

						<div className='relative grid gap-4 sm:gap-5'>
							{highlights.map((h, index) => (
								<GlassCard
									key={h.title}
									title={h.title}
									description={h.description}
									Icon={h.icon}
									index={index}
								/>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
