'use client'

import { motion } from 'framer-motion'
import MilestoneCard from './MilestoneCard'
import { milestones } from './milestones-data'

export default function AboutMilestones() {
	return (
		<section className='relative py-20 sm:py-24 overflow-hidden bg-[#09030F]'>
			{/* Фоновая сетка */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(82,37,145,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(82,37,145,0.03)_1px,transparent_1px)] bg-[size:80px_80px]' />

			{/* Градиентные пятна */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.3, 0.5, 0.3],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#522591]/30 rounded-full blur-3xl'
			/>
			<motion.div
				animate={{
					scale: [1.2, 1, 1.2],
					opacity: [0.2, 0.4, 0.2],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute bottom-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#522591]/20 rounded-full blur-3xl'
			/>

			<div className='relative z-10 max-w-5xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-12 sm:mb-16'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='inline-block mb-4'
					>
						<span className='px-4 py-2 rounded-full bg-[#522591]/20 border border-[#522591]/30 text-[#522591] text-sm font-semibold'>
							Наша история
						</span>
					</motion.div>

					<h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6'>
						Ключевые этапы{' '}
						<span className='bg-gradient-to-r from-[#522591] to-[#7d3bb5] bg-clip-text text-transparent'>
							роста
						</span>
					</h2>

					<p className='text-base sm:text-lg text-gray-400 max-w-2xl mx-auto'>
						Мы быстро масштабировались, сохранив фокус на качестве и
						результатах.
					</p>
				</motion.div>

				<div className='space-y-0'>
					{milestones.map((milestone, index) => (
						<MilestoneCard
							key={milestone.title}
							milestone={milestone}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
