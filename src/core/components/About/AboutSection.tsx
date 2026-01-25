// src/components/About/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Briefcase, Globe, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

const PURPLE = '#522591'
const PURPLE_2 = '#8B2FC9'
const BLACK = '#05010A'

const MAIN_IMAGE =
	'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80'

const features = [
	{
		icon: Users,
		title: 'Активное комьюнити',
		description:
			'87,000+ участников со всего мира делятся опытом, вакансиями и поддерживают друг друга на пути к международной карьере',
	},
	{
		icon: Briefcase,
		title: 'Проверенные методологии',
		description:
			'Авторские программы от экспертов с опытом работы в Netflix, Amazon, Google и других ведущих компаниях',
	},
	{
		icon: Globe,
		title: 'Глобальные возможности',
		description:
			'Доступ к вакансиям и стажировкам в США, Европе, ОАЭ, Сингапуре и возможность работать удалённо из любой точки мира',
	},
	{
		icon: TrendingUp,
		title: 'Реальные результаты',
		description:
			'Наши участники получают офферы в среднем через 3-6 месяцев работы по нашим программам',
	},
]

const stats = [
	{ value: '87K+', label: 'Участников' },
	{ value: '50+', label: 'Компаний-партнёров' },
	{ value: '1500+', label: 'Успешных офферов' },
	{ value: '40+', label: 'Стран' },
]

const container = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
	hidden: { opacity: 0, y: 18 },
	show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function GradientBorder({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={`relative rounded-[28px] p-[1px] overflow-hidden ${className}`}
			style={{
				background:
					'linear-gradient(135deg, rgba(82,37,145,0.35), rgba(255,255,255,0.08), rgba(82,37,145,0.18))',
			}}
		>
			{children}
		</div>
	)
}

function Glass({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div
			className={`relative rounded-[28px] overflow-hidden ${className}`}
			style={{
				background: 'rgba(255,255,255,0.035)',
				border: '1px solid rgba(255,255,255,0.10)',
				backdropFilter: 'blur(18px)',
				boxShadow:
					'0 20px 60px -45px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.06)',
			}}
		>
			{/* subtle glow */}
			<div
				className='pointer-events-none absolute -inset-24 opacity-60'
				style={{
					background:
						'radial-gradient(circle, rgba(82,37,145,0.16), transparent 60%)',
				}}
			/>
			{children}
		</div>
	)
}

export default function AboutSection() {
	return (
		<section
			className='relative py-20 sm:py-24 md:py-28 overflow-hidden'
			style={{ background: BLACK }}
		>
			{/* Background */}
			<div className='absolute inset-0 pointer-events-none'>
				<div
					className='absolute -top-44 left-[-12%] w-[560px] h-[560px] rounded-full blur-[110px] opacity-25'
					style={{
						background: `radial-gradient(circle, rgba(82,37,145,0.35), transparent 60%)`,
					}}
				/>
				<div
					className='absolute -bottom-56 right-[-12%] w-[650px] h-[650px] rounded-full blur-[120px] opacity-20'
					style={{
						background: `radial-gradient(circle, rgba(82,37,145,0.28), transparent 60%)`,
					}}
				/>

				<div className='absolute inset-0 opacity-[0.10] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]' />
				<div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				{/* Header (кнопка справа на десктопе, слева на мобилке) */}
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.6 }}
					className='flex flex-col gap-8 md:flex-row md:items-end md:justify-between'
				>
					<div className='max-w-3xl'>
						<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl'>
							<span
								className='w-2 h-2 rounded-full'
								style={{
									background: PURPLE,
									boxShadow: '0 0 18px rgba(82,37,145,0.65)',
								}}
							/>
							<span className='text-sm text-white/70 font-medium'>
								О платформе
							</span>
						</div>

						<h2 className='mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
							Что такое{' '}
							<span
								className='bg-clip-text text-transparent'
								style={{
									backgroundImage: `linear-gradient(135deg, ${PURPLE_2} 0%, ${PURPLE} 100%)`,
								}}
							>
								Hired Valley
							</span>
						</h2>

						<p className='mt-4 sm:mt-5 text-white/55 text-sm sm:text-base md:text-lg leading-relaxed'>
							Карьерная платформа и комьюнити для профессионалов, которые хотят
							построить международную карьеру в топовых компаниях и стартапах.
						</p>
					</div>

					<div className='flex justify-start md:justify-end'>
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
					</div>
				</motion.div>

				{/* Main */}
				<div className='mt-10 sm:mt-14 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center'>
					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.25 }}
						transition={{ duration: 0.6 }}
						className='relative'
					>
						<GradientBorder>
							<Glass className='group'>
								<div className='relative aspect-[4/3]'>
									<Image
										src={MAIN_IMAGE}
										alt='Команда Hired Valley'
										fill
										sizes='(max-width: 1024px) 100vw, 50vw'
										className='object-cover transition-transform duration-700 group-hover:scale-[1.06]'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent' />

									{/* Floating stat */}
									<div className='absolute bottom-5 left-5 right-5'>
										<div
											className='rounded-2xl p-5'
											style={{
												background: 'rgba(0,0,0,0.35)',
												border: '1px solid rgba(255,255,255,0.14)',
												backdropFilter: 'blur(14px)',
											}}
										>
											<div className='flex items-center gap-4'>
												<div
													className='w-12 h-12 rounded-2xl flex items-center justify-center'
													style={{
														background:
															'radial-gradient(circle, rgba(82,37,145,0.55), rgba(82,37,145,0.15))',
														border: '1px solid rgba(255,255,255,0.12)',
													}}
												>
													<TrendingUp className='w-6 h-6 text-white/90' />
												</div>
												<div>
													<div className='text-2xl font-bold text-white'>
														1500+
													</div>
													<div className='text-sm text-white/65'>
														Успешных офферов в 2025
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Accent dot */}
									<div
										className='absolute top-4 right-4 w-2.5 h-2.5 rounded-full opacity-80'
										style={{
											background: PURPLE,
											boxShadow: '0 0 18px rgba(82,37,145,0.8)',
										}}
									/>
								</div>
							</Glass>
						</GradientBorder>
					</motion.div>

					{/* Features */}
					<motion.div
						variants={container}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.35 }}
						className='space-y-4 sm:space-y-5'
					>
						{features.map((feature, index) => {
							const Icon = feature.icon
							return (
								<motion.div
									key={feature.title}
									variants={item}
									whileHover={{ y: -6, scale: 1.015 }}
									transition={{ type: 'spring', stiffness: 260, damping: 18 }}
									className='relative group'
								>
									<div
										className='absolute -inset-[1px] rounded-3xl opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100'
										style={{
											background: `conic-gradient(from 180deg,
                        rgba(82,37,145,0.55),
                        rgba(9,3,15,0.35),
                        rgba(82,37,145,0.55))`,
										}}
									/>

									<div
										className='relative rounded-3xl border overflow-hidden backdrop-blur-2xl'
										style={{
											borderColor: 'rgba(255,255,255,0.10)',
											background: 'rgba(255,255,255,0.05)',
										}}
									>
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

										<motion.div
											className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
											style={{
												background:
													'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.12) 20%, transparent 40%)',
											}}
											animate={{ x: ['-40%', '140%'] }}
											transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
										/>

										<div className='relative p-6 md:p-7'>
											<div className='flex items-start gap-4'>
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
														{feature.title}
													</h3>
													<p className='mt-1 text-white/60 text-sm sm:text-[15px] leading-relaxed'>
														{feature.description}
													</p>
												</div>
											</div>

											<div className='mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent' />
										</div>
									</div>
								</motion.div>
							)
						})}
					</motion.div>
				</div>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.25 }}
					transition={{ duration: 0.6 }}
					className='mt-10 sm:mt-14'
				>
					<GradientBorder>
						<Glass className='p-8 sm:p-10 md:p-12'>
							<div className='relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8'>
								{stats.map((stat, i) => (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, scale: 0.92 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true }}
										transition={{ delay: i * 0.08 }}
										className='text-center'
									>
										<div
											className='text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent'
											style={{
												backgroundImage: `linear-gradient(135deg, ${PURPLE_2} 0%, ${PURPLE} 100%)`,
											}}
										>
											{stat.value}
										</div>
										<div className='mt-2 text-white/45 text-sm font-medium'>
											{stat.label}
										</div>
									</motion.div>
								))}
							</div>
						</Glass>
					</GradientBorder>
				</motion.div>
			</div>
		</section>
	)
}
