'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import type { ReactNode } from 'react'

const PURPLE = '#522591'
const BLACK = '#05010A' // глубокий черный

const teamMembers = [
	{
		name: 'Алия Салимова',
		role: 'Основатель и генеральный директор',
		image:
			'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
		location: 'Алматы · Дубай',
	},
	{
		name: 'Айдос Рахимов',
		role: 'Руководитель карьерной стратегии',
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
		location: 'Лондон',
	},
	{
		name: 'Екатерина Ли',
		role: 'Руководитель сообщества',
		image:
			'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?auto=format&fit=crop&w=900&q=80',
		location: 'Астана',
	},
	{
		name: 'Данияр Ким',
		role: 'Руководитель продукта',
		image:
			'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
		location: 'Сингапур',
	},
	{
		name: 'Мария Оспанова',
		role: 'Руководитель сети менторов',
		image:
			'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=900&q=80',
		location: 'Нью-Йорк',
	},
	{
		name: 'Тимур Ахметов',
		role: 'Руководитель по росту и партнерствам',
		image:
			'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
		location: 'Дубай',
	},
]

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 18 },
	show: { opacity: 1, y: 0 },
}

function GradientBorder({ children }: { children: ReactNode }) {
	return (
		<div
			className='relative rounded-[28px] p-[1px] overflow-hidden'
			style={{
				background:
					'linear-gradient(135deg, rgba(82,37,145,0.35), rgba(255,255,255,0.08), rgba(82,37,145,0.18))',
			}}
		>
			{children}
		</div>
	)
}

export default function AboutTeam() {
	return (
		<section
			id='team'
			className='relative py-20 sm:py-24 md:py-28 overflow-hidden'
			style={{ background: BLACK }}
		>
			{/* ultra dark background + very soft accents */}
			<div className='absolute inset-0 pointer-events-none'>
				<div
					className='absolute -top-40 left-[-10%] w-[520px] h-[520px] rounded-full blur-[90px] opacity-25'
					style={{
						background: `radial-gradient(circle, rgba(82,37,145,0.35), transparent 60%)`,
					}}
				/>
				<div
					className='absolute -bottom-52 right-[-12%] w-[620px] h-[620px] rounded-full blur-[100px] opacity-20'
					style={{
						background: `radial-gradient(circle, rgba(82,37,145,0.28), transparent 60%)`,
					}}
				/>

				<div className='absolute inset-0 opacity-[0.10] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:110px_110px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]' />
				<div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 18 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.35 }}
					transition={{ duration: 0.6 }}
					className='text-center'
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl'>
						<span
							className='w-2 h-2 rounded-full'
							style={{
								background: PURPLE,
								boxShadow: '0 0 18px rgba(82,37,145,0.65)',
							}}
						/>
						<span className='text-sm text-white/70 font-medium'>Команда</span>
					</div>

					<h2 className='mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-white'>
						Люди, которые строят Hired Valley
					</h2>

					<p className='mt-4 text-white/55 max-w-2xl mx-auto leading-relaxed'>
						Стратеги, аналитики и менторы с опытом в глобальных компаниях и
						стартапах.
					</p>
				</motion.div>

				{/* Grid */}
				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
					className='mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
				>
					{teamMembers.map((member, idx) => (
						<motion.div key={member.name} variants={item}>
							<GradientBorder>
								<motion.div
									whileHover={{ y: -8, scale: 1.01 }}
									transition={{ type: 'spring', stiffness: 260, damping: 18 }}
									className='group rounded-[28px] overflow-hidden'
									style={{
										background: 'rgba(255,255,255,0.035)',
										border: '1px solid rgba(255,255,255,0.10)',
										backdropFilter: 'blur(18px)',
										boxShadow:
											'0 20px 60px -40px rgba(0,0,0,0.9), inset 0 1px 0 rgba(255,255,255,0.06)',
									}}
								>
									{/* image */}
									<div className='relative aspect-[4/3] overflow-hidden'>
										<Image
											src={member.image}
											alt={member.name}
											fill
											sizes='(max-width: 768px) 100vw, 33vw'
											className='object-cover transition duration-700 group-hover:scale-[1.06] group-hover:grayscale-0 grayscale'
											priority={idx < 2}
										/>

										<div className='absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent' />

										<div
											className='absolute top-4 right-4 w-2.5 h-2.5 rounded-full opacity-80'
											style={{
												background: PURPLE,
												boxShadow: '0 0 18px rgba(82,37,145,0.8)',
											}}
										/>
									</div>

									{/* content */}
									<div className='p-5'>
										<div className='flex items-start justify-between gap-3'>
											<div>
												<h3 className='text-white font-semibold text-lg leading-snug'>
													{member.name}
												</h3>
												<p className='text-sm mt-1 text-white/60'>
													{member.role}
												</p>
											</div>

											<span className='text-xs text-white/40 whitespace-nowrap'>
												{member.location}
											</span>
										</div>

										{/* hover underline */}
										<div className='mt-4 h-[1px] w-full bg-white/10 overflow-hidden rounded-full'>
											<div
												className='h-full w-1/2 -translate-x-[120%] group-hover:translate-x-[240%] transition-transform duration-[900ms] ease-in-out'
												style={{
													background:
														'linear-gradient(90deg, transparent, rgba(82,37,145,0.9), transparent)',
												}}
											/>
										</div>
									</div>
								</motion.div>
							</GradientBorder>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}
