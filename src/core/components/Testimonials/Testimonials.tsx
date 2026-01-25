// src/components/Testimonials/Testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface Testimonial {
	id: number
	rating: number
	text: string
	author: {
		name: string
		position: string
		avatar: string
	}
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		rating: 5,
		text: 'За 3 недели получила оффер от стартапа в Кремниевой Долине! AI-подготовка к интервью и персонализированный подбор вакансий сэкономили месяцы поиска.',
		author: {
			name: 'Айгерим Нурланова',
			position: 'Инженер-программист, выпускница КазНУ',
			avatar:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
		},
	},
	{
		id: 2,
		rating: 5,
		text: 'Voice AI для reference checks сократил время найма на 70%. Теперь мы фокусируемся на топ-кандидатах, а рутину делает автоматизация.',
		author: {
			name: 'Марат Жусупов',
			position: 'HR-директор, стартап в Алматы',
			avatar:
				'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
		},
	},
	{
		id: 3,
		rating: 5,
		text: 'AI-аналитика рынка труда показала, какие навыки развивать. За 2 месяца перешёл из Астаны в европейскую компанию с зарплатой в 3 раза выше!',
		author: {
			name: 'Данияр Касымов',
			position: 'Продакт-менеджер в TechCorp',
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
		},
	},
	{
		id: 4,
		rating: 5,
		text: 'Платформа автоматизировала скрининг резюме и первичные интервью. Качество кандидатов выросло, а время на закрытие вакансии сократилось вдвое.',
		author: {
			name: 'Асель Бекетова',
			position: 'Руководитель подбора, Kaspi.kz',
			avatar:
				'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
		},
	},
]

export default function TestimonialsSection() {
	return (
		<section
			className='relative py-20 sm:py-24 overflow-hidden bg-black'
			aria-labelledby='testimonials-title'
		>
			<div className='absolute inset-0'>
				<div
					className='absolute inset-0'
					style={{
						background: `
							linear-gradient(135deg, rgba(82, 37, 145, 0.35) 0%, rgba(9, 3, 15, 0.95) 35%, rgba(9, 3, 15, 0.95) 65%, rgba(82, 37, 145, 0.35) 100%)
						`,
					}}
				/>
				<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-10 sm:mb-14 lg:mb-16'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8'
					>
						<div
							className='w-1.5 h-1.5 rounded-full animate-pulse'
							style={{ background: '#522591' }}
						/>
						<span className='text-gray-300 text-sm font-medium'>Отзывы</span>
					</motion.div>

					<h2
						id='testimonials-title'
						className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight'
					>
						Истории, которые{' '}
						<span
							className='bg-clip-text text-transparent'
							style={{
								backgroundImage:
									'linear-gradient(135deg, #522591 0%, #09030F 100%)',
							}}
						>
							вдохновляют
						</span>
					</h2>

					<p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
						Что говорят участники о карьерном росте с Hired Valley
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8'>
					{testimonials.map((testimonial, index) => (
						<motion.article
							key={testimonial.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.08 }}
							whileHover={{ y: -6 }}
							className='group relative h-full rounded-2xl border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-500'
							style={{
								background:
									'linear-gradient(145deg, rgba(82, 37, 145, 0.2) 0%, rgba(9, 3, 15, 0.95) 55%, rgba(9, 3, 15, 0.98) 100%)',
							}}
							onMouseEnter={e => {
								e.currentTarget.style.borderColor = 'rgba(82, 37, 145, 0.6)'
								e.currentTarget.style.boxShadow =
									'0 25px 60px -30px rgba(82, 37, 145, 0.8)'
							}}
							onMouseLeave={e => {
								e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
								e.currentTarget.style.boxShadow = 'none'
							}}
						>
							<div
								className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
								style={{
									background:
										'radial-gradient(circle at top right, rgba(82, 37, 145, 0.35) 0%, transparent 65%)',
								}}
							/>

							<div className='relative p-6 sm:p-7 h-full flex flex-col'>
								<div className='flex items-center gap-1 mb-5'>
									{Array.from({ length: 5 }).map((_, starIndex) => (
										<Star
											key={starIndex}
											className='w-4 h-4'
											style={{
												color:
													starIndex < testimonial.rating
														? '#ffffff'
														: 'rgba(255, 255, 255, 0.2)',
												fill:
													starIndex < testimonial.rating
														? '#ffffff'
														: 'transparent',
											}}
										/>
									))}
								</div>

								<p className='text-gray-300 leading-relaxed flex-1'>
									{testimonial.text}
								</p>

								<div className='flex items-center gap-4 mt-6 sm:mt-8'>
									<div className='relative w-12 h-12 rounded-full overflow-hidden border border-white/10'>
										<Image
											src={testimonial.author.avatar}
											alt={testimonial.author.name}
											fill
											className='object-cover'
										/>
									</div>
									<div>
										<div className='text-white font-semibold'>
											{testimonial.author.name}
										</div>
										<div className='text-gray-400 text-sm'>
											{testimonial.author.position}
										</div>
									</div>
								</div>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}
