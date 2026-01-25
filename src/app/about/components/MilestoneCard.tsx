'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Milestone } from './milestones-data'

interface MilestoneCardProps {
	milestone: Milestone
	index: number
}

export default function MilestoneCard({
	milestone,
	index,
}: MilestoneCardProps) {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, amount: 0.5 })
	const isLast = index === 3 // Можно сделать динамически

	return (
		<div ref={ref} className='relative flex gap-4 sm:gap-8 group'>
			{/* Вертикальная линия */}
			<div className='relative flex flex-col items-center'>
				<motion.div
					initial={{ scale: 0 }}
					animate={isInView ? { scale: 1 } : { scale: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					className='relative z-10 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#522591] to-[#7d3bb5] flex items-center justify-center shadow-lg shadow-[#522591]/50'
				>
					<motion.div
						animate={
							isInView
								? {
										scale: [1, 1.2, 1],
										rotate: [0, 180, 360],
									}
								: {}
						}
						transition={{
							duration: 2,
							delay: index * 0.2 + 0.5,
							repeat: Infinity,
							repeatDelay: 3,
						}}
						className='w-6 h-6 sm:w-8 sm:h-8 border-4 border-white/30 border-t-white rounded-lg'
					/>
				</motion.div>

				{!isLast && (
					<motion.div
						initial={{ height: 0 }}
						animate={isInView ? { height: '100%' } : { height: 0 }}
						transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
						className='w-0.5 flex-1 bg-gradient-to-b from-[#522591] via-[#522591]/50 to-transparent mt-4'
					/>
				)}
			</div>

			{/* Контент карточки */}
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
				transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
				className='flex-1 pb-10 sm:pb-16'
			>
				<div className='relative rounded-2xl border border-[#522591]/20 bg-gradient-to-br from-[#09030F] to-[#522591]/10 p-6 sm:p-8 backdrop-blur-xl overflow-hidden group-hover:border-[#522591]/50 transition-all duration-300'>
					{/* Анимированный фон */}
					<motion.div
						className='absolute inset-0 bg-gradient-to-br from-[#522591]/0 to-[#522591]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
						animate={{
							backgroundPosition: ['0% 0%', '100% 100%'],
						}}
						transition={{
							duration: 3,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					/>

					<div className='relative z-10'>
						<div className='flex items-start justify-between mb-4'>
							<div>
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
									}
									transition={{ delay: index * 0.2 + 0.4 }}
									className='text-[#522591] font-bold text-sm mb-2'
								>
									{milestone.year}
								</motion.div>
								<motion.h3
									initial={{ opacity: 0, y: 10 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
									}
									transition={{ delay: index * 0.2 + 0.5 }}
									className='text-xl sm:text-2xl font-bold text-white mb-3'
								>
									{milestone.title}
								</motion.h3>
							</div>

							<motion.div
								initial={{ opacity: 0, scale: 0.5 }}
								animate={
									isInView
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.5 }
								}
								transition={{ delay: index * 0.2 + 0.6 }}
								className='text-right'
							>
								<div className='text-2xl sm:text-3xl font-bold bg-gradient-to-br from-white to-[#522591] bg-clip-text text-transparent'>
									{milestone.metric}
								</div>
								<div className='text-xs text-gray-400 mt-1'>
									{milestone.metricLabel}
								</div>
							</motion.div>
						</div>

						<motion.p
							initial={{ opacity: 0 }}
							animate={isInView ? { opacity: 1 } : { opacity: 0 }}
							transition={{ delay: index * 0.2 + 0.7 }}
							className='text-gray-400 leading-relaxed'
						>
							{milestone.description}
						</motion.p>
					</div>

					{/* Декоративные элементы */}
					<div className='absolute top-0 right-0 w-32 h-32 bg-[#522591]/10 rounded-full blur-3xl' />
					<div className='absolute bottom-0 left-0 w-24 h-24 bg-[#522591]/5 rounded-full blur-2xl' />
				</div>
			</motion.div>
		</div>
	)
}
