'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, Globe2, Layers3, Rocket } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode } from 'react'

const PURPLE = '#522591'
const BLACK = '#09030F'

const IMAGES = {
	topLeft:
		'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
	topRight:
		'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
	centerBottom:
		'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
}

type ValueItem = {
	title: string
	description: string
	icon: LucideIcon
}

const values: ValueItem[] = [
	{
		title: 'Прозрачность',
		description:
			'Показываем реальную картину рынка и помогаем сформировать ожидания.',
		icon: BadgeCheck,
	},
	{
		title: 'Скорость',
		description: 'Сокращаем путь к офферу через системный подход и фокус.',
		icon: Rocket,
	},
	{
		title: 'Глубина',
		description:
			'Разбираем каждый шаг: от позиционирования до финального оффера.',
		icon: Layers3,
	},
	{
		title: 'Глобальность',
		description: 'Открываем доступ к международным вакансиям и нетворку.',
		icon: Globe2,
	},
]

function GradientBorder({
	children,
	className = '',
}: {
	children: ReactNode
	className?: string
}) {
	return (
		<div
			className={`relative rounded-[26px] p-[1px] overflow-hidden ${className}`}
			style={{
				background:
					'linear-gradient(135deg, rgba(82,37,145,0.65), rgba(255,255,255,0.10), rgba(82,37,145,0.25))',
			}}
		>
			{children}
		</div>
	)
}

function GlassCard({
	children,
	delay = 0,
	className = '',
}: {
	children: ReactNode
	delay?: number
	className?: string
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 18, scale: 0.985 }}
			whileInView={{ opacity: 1, y: 0, scale: 1 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ delay, duration: 0.55, type: 'spring', bounce: 0.18 }}
			whileHover={{ y: -6, scale: 1.01 }}
			className={`relative w-full h-full rounded-[26px] overflow-hidden ${className}`}
			style={{
				background: 'rgba(255, 255, 255, 0.035)',
				border: '1px solid rgba(255, 255, 255, 0.10)',
				backdropFilter: 'blur(18px)',
			}}
		>
			{/* subtle glow */}
			<div
				className='pointer-events-none absolute -inset-24 opacity-70'
				style={{
					background:
						'radial-gradient(circle, rgba(82,37,145,0.18), transparent 60%)',
				}}
			/>
			{children}
		</motion.div>
	)
}

function ImageCard({
	src,
	alt,
	delay = 0,
	badge,
}: {
	src: string
	alt: string
	delay?: number
	badge?: string
}) {
	return (
		<GradientBorder>
			<GlassCard delay={delay} className='group min-h-[240px]'>
				<div className='relative w-full h-full'>
					<Image
						src={src}
						alt={alt}
						fill
						sizes='(max-width: 768px) 100vw, 33vw'
						className='object-cover transition-transform duration-700 group-hover:scale-[1.06]'
					/>

					<div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent' />

					{badge && (
						<div
							className='absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold'
							style={{
								background: 'rgba(0,0,0,0.35)',
								border: '1px solid rgba(255,255,255,0.14)',
								color: 'rgba(255,255,255,0.9)',
								backdropFilter: 'blur(10px)',
							}}
						>
							{badge}
						</div>
					)}
				</div>
			</GlassCard>
		</GradientBorder>
	)
}

function ValueCardDark({
	item,
	delay = 0,
}: {
	item: ValueItem
	delay?: number
}) {
	const Icon = item.icon

	return (
		<GradientBorder>
			<GlassCard delay={delay} className='p-6 md:p-7 min-h-[240px]'>
				<div className='relative z-10 h-full flex flex-col'>
					<div className='flex items-start justify-between gap-4'>
						<div
							className='w-11 h-11 rounded-2xl flex items-center justify-center'
							style={{
								background:
									'radial-gradient(circle at 30% 30%, rgba(82,37,145,0.45), rgba(82,37,145,0.10))',
								border: '1px solid rgba(255,255,255,0.10)',
							}}
						>
							<Icon className='w-5 h-5 text-white/90' />
						</div>

						<div
							className='w-2.5 h-2.5 rounded-full'
							style={{
								background: PURPLE,
								boxShadow: '0 0 22px rgba(82,37,145,0.75)',
							}}
						/>
					</div>

					<h3 className='mt-5 text-white font-semibold text-lg md:text-xl'>
						{item.title}
					</h3>
					<p className='mt-2 text-sm md:text-[15px] leading-relaxed text-white/65'>
						{item.description}
					</p>

					<div className='mt-auto' />
				</div>
			</GlassCard>
		</GradientBorder>
	)
}

function ValueCardLight({
	item,
	delay = 0,
}: {
	item: ValueItem
	delay?: number
}) {
	const Icon = item.icon

	return (
		<GradientBorder>
			<motion.div
				initial={{ opacity: 0, y: 18, scale: 0.985 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, amount: 0.25 }}
				transition={{ delay, duration: 0.55, type: 'spring', bounce: 0.18 }}
				whileHover={{ y: -6, scale: 1.01 }}
				className='relative w-full h-full min-h-[240px] rounded-[26px] overflow-hidden p-6 md:p-7'
				style={{
					background:
						'linear-gradient(135deg, rgba(245,242,255,0.92), rgba(235,230,255,0.86))',
					border: '1px solid rgba(255,255,255,0.65)',
				}}
			>
				<div
					className='pointer-events-none absolute -inset-20 opacity-70'
					style={{
						background:
							'radial-gradient(circle, rgba(82,37,145,0.22), transparent 62%)',
					}}
				/>

				<div className='relative z-10 h-full flex flex-col'>
					<div className='flex items-start justify-between gap-4'>
						<div
							className='w-11 h-11 rounded-2xl flex items-center justify-center'
							style={{
								background:
									'radial-gradient(circle at 30% 30%, rgba(82,37,145,0.22), rgba(82,37,145,0.06))',
								border: '1px solid rgba(82,37,145,0.22)',
							}}
						>
							<Icon className='w-5 h-5' style={{ color: BLACK }} />
						</div>

						<div
							className='w-2.5 h-2.5 rounded-full'
							style={{
								background: PURPLE,
								boxShadow: '0 0 22px rgba(82,37,145,0.55)',
							}}
						/>
					</div>

					<h3 className='mt-5 font-semibold text-lg md:text-xl text-[#09030F]'>
						{item.title}
					</h3>
					<p className='mt-2 text-sm md:text-[15px] leading-relaxed text-black/70'>
						{item.description}
					</p>

					<div className='mt-auto' />
				</div>
			</motion.div>
		</GradientBorder>
	)
}

function GlobalCtaCard({
	item,
	delay = 0,
}: {
	item: ValueItem
	delay?: number
}) {
	const Icon = item.icon

	return (
		<GradientBorder>
			<GlassCard delay={delay} className='group min-h-[240px]'>
				<div className='relative w-full h-full'>
					<Image
						src={IMAGES.centerBottom}
						alt='Глобальное сообщество'
						fill
						sizes='(max-width: 768px) 100vw, 33vw'
						className='object-cover transition-transform duration-700 group-hover:scale-[1.06]'
					/>

					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15' />

					{/* top mini header */}
					<div className='absolute top-5 left-5 right-5'>
						<div className='flex items-center justify-between gap-3'>
							<div
								className='flex items-center gap-2 px-3 py-1.5 rounded-full'
								style={{
									background: 'rgba(0,0,0,0.32)',
									border: '1px solid rgba(255,255,255,0.14)',
									backdropFilter: 'blur(10px)',
								}}
							>
								<div
									className='w-8 h-8 rounded-xl flex items-center justify-center'
									style={{
										background:
											'radial-gradient(circle, rgba(82,37,145,0.55), rgba(82,37,145,0.15))',
										border: '1px solid rgba(255,255,255,0.12)',
									}}
								>
									<Icon className='w-4 h-4 text-white/95' />
								</div>
								<div className='text-white'>
									<div className='text-sm font-semibold'>{item.title}</div>
									<div className='text-xs text-white/70'>Глобальная сеть</div>
								</div>
							</div>

							<div
								className='w-2.5 h-2.5 rounded-full'
								style={{
									background: PURPLE,
									boxShadow: '0 0 22px rgba(82,37,145,0.75)',
								}}
							/>
						</div>
					</div>

					{/* bottom bar */}
					<div className='absolute bottom-0 left-0 right-0 p-4 md:p-5'>
						<div
							className='rounded-2xl p-4 md:p-5'
							style={{
								background: 'rgba(0,0,0,0.38)',
								border: '1px solid rgba(255,255,255,0.14)',
								backdropFilter: 'blur(14px)',
							}}
						>
							<p className='text-sm md:text-[15px] text-white/70 leading-relaxed'>
								{item.description}
							</p>

							<motion.a
								href='https://t.me/hiredvalleymanager'
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white'
								style={{
									background: `linear-gradient(135deg, ${PURPLE} 0%, rgba(139,47,201,1) 100%)`,
									boxShadow: '0 18px 40px -22px rgba(82,37,145,0.95)',
								}}
							>
								Отправить резюме <span className='text-white/80'>→</span>
							</motion.a>
						</div>
					</div>
				</div>
			</GlassCard>
		</GradientBorder>
	)
}

export default function AboutValues() {
	return (
		<section
			className='relative py-20 sm:py-24 md:py-28 overflow-hidden'
			style={{ background: BLACK }}
		>
			{/* background glow */}
			<div
				className='absolute inset-0'
				style={{
					background: `
            radial-gradient(circle at 18% 22%, rgba(82,37,145,0.42), transparent 58%),
            radial-gradient(circle at 82% 78%, rgba(82,37,145,0.30), transparent 60%),
            radial-gradient(circle at 55% 10%, rgba(255,255,255,0.07), transparent 45%)
          `,
				}}
			/>

			{/* subtle grid */}
			<div className='absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:90px_90px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]' />

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.6 }}
					className='text-center'
				>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
						Наши{' '}
						<span className='relative inline-block'>
							ценности
							<span
								className='absolute left-0 -bottom-2 h-[6px] w-full rounded-full'
								style={{
									background:
										'linear-gradient(90deg, rgba(82,37,145,0.2), rgba(82,37,145,0.95), rgba(82,37,145,0.2))',
									boxShadow: '0 10px 30px rgba(82,37,145,0.35)',
								}}
							/>
						</span>
					</h2>
					<p className='mt-5 text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed'>
						Мы строим систему, где важно качество решений, скорость результата и
						честное сопровождение до финального оффера.
					</p>
				</motion.div>

				{/* Grid как на примере: 2 ряда × 3 колонки */}
				<div className='mt-10 sm:mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 md:auto-rows-[260px]'>
					{/* row 1 */}
					<ImageCard
						src={IMAGES.topLeft}
						alt='Командная работа Hired Valley'
						delay={0.05}
						badge='Команда'
					/>

					<ValueCardLight item={values[0]} delay={0.12} />

					<ImageCard
						src={IMAGES.topRight}
						alt='Сообщество Hired Valley'
						delay={0.18}
						badge='Сообщество'
					/>

					{/* row 2 */}
					<ValueCardDark item={values[1]} delay={0.24} />

					<GlobalCtaCard item={values[3]} delay={0.3} />

					<ValueCardDark item={values[2]} delay={0.36} />
				</div>
			</div>
		</section>
	)
}
