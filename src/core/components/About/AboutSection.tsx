// src/components/About/AboutSection.tsx
'use client'

import { motion } from 'framer-motion'
import { Briefcase, Globe, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'

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

export default function AboutSection() {
	return (
		<section className='relative py-32 overflow-hidden bg-black'>
			{/* Animated Background */}
			<div className='absolute inset-0'>
				<motion.div
					className='absolute w-[600px] h-[600px] rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(42, 5, 82, 0.4) 0%, rgba(1, 1, 5, 0.1) 100%)',
						filter: 'blur(80px)',
						top: '20%',
						left: '-10%',
					}}
					animate={{
						x: [0, 100, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className='absolute w-[500px] h-[500px] rounded-full'
					style={{
						background:
							'radial-gradient(circle, rgba(42, 5, 82, 0.3) 0%, rgba(1, 1, 5, 0.1) 100%)',
						filter: 'blur(80px)',
						bottom: '10%',
						right: '-10%',
					}}
					animate={{
						x: [0, -80, 0],
						y: [0, 60, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-20'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='inline-block px-4 py-2 rounded-full border'
						style={{
							background:
								'radial-gradient(circle, rgba(42, 5, 82, 0.3) 0%, rgba(1, 1, 5, 0.5) 100%)',
							borderColor: 'rgba(42, 5, 82, 0.5)',
						}}
					>
						<span className='text-purple-300 text-sm font-medium'>
							О платформе
						</span>
					</motion.div>

					<h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
						Что такое{' '}
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage:
									'linear-gradient(135deg, rgba(80, 20, 120, 1) 0%, rgba(42, 5, 82, 1) 100%)',
							}}
						>
							Hired Valley
						</span>
					</h2>

					<p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
						Карьерная платформа и комьюнити для профессионалов, которые хотят
						построить международную карьеру в топовых компаниях и стартапах
					</p>
				</motion.div>

				{/* Main Content with Image */}
				<div className='grid lg:grid-cols-2 gap-12 items-center mb-20'>
					{/* Left: Image */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className='relative'
					>
						<div
							className='relative rounded-3xl overflow-hidden aspect-[4/3] backdrop-blur-xl border border-white/10'
							style={{
								background:
									'radial-gradient(circle, rgba(42, 5, 82, 0.4) 0%, rgba(1, 1, 5, 0.8) 100%)',
							}}
						>
							<Image
								src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
								alt='Hired Valley Team'
								fill
								className='object-cover'
							/>
							{/* Overlay gradient */}
							<div
								className='absolute inset-0'
								style={{
									background:
										'radial-gradient(circle at bottom, rgba(42, 5, 82, 0.9) 0%, transparent 70%)',
								}}
							/>

							{/* Floating stat card */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3 }}
								className='absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20'
							>
								<div className='flex items-center gap-4'>
									<div className='p-3 rounded-full bg-green-500/20'>
										<TrendingUp className='w-6 h-6 text-green-400' />
									</div>
									<div>
										<div className='text-2xl font-bold text-white'>1500+</div>
										<div className='text-sm text-gray-300'>
											Успешных офферов в 2025
										</div>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Decorative elements */}
						<motion.div
							animate={{
								rotate: 360,
							}}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: 'linear',
							}}
							className='absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl'
							style={{
								background:
									'radial-gradient(circle, rgba(42, 5, 82, 0.6) 0%, transparent 70%)',
							}}
						/>
					</motion.div>

					{/* Right: Features */}
					<div className='space-y-6'>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ x: 5 }}
								className='group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300'
								style={{
									borderColor: 'rgba(255, 255, 255, 0.1)',
								}}
								onMouseEnter={e => {
									e.currentTarget.style.borderColor = 'rgba(42, 5, 82, 0.5)'
								}}
								onMouseLeave={e => {
									e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
								}}
							>
								<div className='flex gap-4'>
									<div className='flex-shrink-0'>
										<div
											className='p-3 rounded-xl transition-all duration-300'
											style={{
												background:
													'radial-gradient(circle, rgba(42, 5, 82, 0.3) 0%, rgba(42, 5, 82, 0.1) 100%)',
											}}
										>
											<feature.icon
												className='w-6 h-6'
												style={{ color: 'rgb(147, 51, 234)' }}
											/>
										</div>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-white mb-2'>
											{feature.title}
										</h3>
										<p className='text-gray-400 leading-relaxed'>
											{feature.description}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='relative'
				>
					<div
						className='p-12 rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden'
						style={{
							background:
								'radial-gradient(circle, rgba(42, 5, 82, 0.4) 0%, rgba(1, 1, 5, 0.6) 100%)',
						}}
					>
						{/* Background pattern */}
						<div className='absolute inset-0 opacity-5'>
							<div
								className='absolute inset-0'
								style={{
									backgroundImage:
										'radial-gradient(circle, white 1px, transparent 1px)',
									backgroundSize: '30px 30px',
								}}
							/>
						</div>

						<div className='relative grid grid-cols-2 md:grid-cols-4 gap-8'>
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									className='text-center'
								>
									<div
										className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2'
										style={{
											backgroundImage:
												'linear-gradient(135deg, rgba(100, 30, 150, 1) 0%, rgba(42, 5, 82, 1) 100%)',
										}}
									>
										{stat.value}
									</div>
									<div className='text-gray-400 text-sm font-medium'>
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
