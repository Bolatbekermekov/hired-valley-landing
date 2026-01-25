'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function AboutCTA() {
	return (
		<section className='relative py-20 sm:py-24 overflow-hidden bg-black'>
			<div className='relative z-10 max-w-5xl mx-auto px-6'>
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='relative rounded-3xl border border-white/10 overflow-hidden'
				>
					<div
						className='absolute inset-0'
						style={{
							background: `
								linear-gradient(135deg, rgba(82, 37, 145, 0.7) 0%, rgba(9, 3, 15, 0.95) 60%)
							`,
						}}
					/>
					<div className='relative z-10 px-6 py-12 sm:px-10 sm:py-16 text-center'>
						<h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
							Готовы стать частью Hired Valley?
						</h3>
						<p className='text-gray-300 text-base sm:text-lg max-w-2xl mx-auto'>
							Свяжитесь с нашей командой и получите персональный план развития.
						</p>
						<a
							href='https://t.me/hiredvalleymanager'
							className='inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 mt-8 rounded-full text-white text-sm sm:text-base font-semibold'
							style={{
								background:
									'radial-gradient(circle, rgba(82, 37, 145, 1) 0%, rgba(29, 12, 56, 1) 100%)',
								boxShadow: '0 18px 45px -20px rgba(82, 37, 145, 0.8)',
							}}
						>
							Записаться на консультацию
							<ArrowUpRight className='w-4 h-4' />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
