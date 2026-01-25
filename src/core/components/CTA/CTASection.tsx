// src/components/CTA/CTASection.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
	return (
		<section className='relative py-20 sm:py-24 overflow-hidden bg-black'>
			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='relative rounded-3xl overflow-hidden'
				>
					{/* Gradient Background - Purple from top-left and bottom-right, black in center */}
					<div
						className='absolute inset-0'
						style={{
							background: `
                radial-gradient(circle at top left, rgba(42, 5, 82, 0.8) 0%, transparent 50%),
                radial-gradient(circle at bottom right, rgba(42, 5, 82, 0.8) 0%, transparent 50%),
                radial-gradient(circle at center, rgba(0, 0, 0, 1) 0%, rgba(15, 2, 30, 1) 100%)
              `,
						}}
					/>

					{/* Grid Pattern */}
					<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]' />

					{/* Content */}
					<div className='relative z-10 px-6 py-14 sm:px-8 sm:py-20 md:px-16 md:py-24 text-center'>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight'
						>
							Начните свою международную карьеру{' '}
							<span className='block mt-2'>уже сегодня</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className='text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto'
						>
							Присоединяйтесь к 87,000+ профессионалам, которые уже строят
							карьеру в топовых компаниях мира
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							<a href='https://t.me/hiredvalleymanager'>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='group relative px-6 py-3 sm:px-8 sm:py-4 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2'
									style={{
										background:
											'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)',
										boxShadow: '0 10px 40px -10px rgba(42, 5, 82, 0.6)',
									}}
									onMouseEnter={e => {
										e.currentTarget.style.background =
											'radial-gradient(circle, rgba(55, 7, 100, 1) 0%, rgba(30, 4, 60, 1) 100%)'
										e.currentTarget.style.boxShadow =
											'0 10px 50px -5px rgba(42, 5, 82, 0.8)'
									}}
									onMouseLeave={e => {
										e.currentTarget.style.background =
											'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)'
										e.currentTarget.style.boxShadow =
											'0 10px 40px -10px rgba(42, 5, 82, 0.6)'
									}}
								>
									{/* Shimmer effect */}
									<motion.div
										className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
										animate={{
											x: ['-200%', '200%'],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											ease: 'linear',
										}}
									/>

									<span className='relative'>Записаться на консультацию</span>
									<ArrowRight className='relative w-5 h-5 group-hover:translate-x-1 transition-transform' />
								</motion.button>
							</a>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
