// src/components/Products/ProductCard.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

interface ProductCardProps {
	title: string
	price: string
	originalPrice?: string
	description: string
	features: string[]
	cta: string
	ctaLink: string
	popular?: boolean
}

export default function ProductCard({
	title,
	price,
	originalPrice,
	description,
	features,
	cta,
	ctaLink,
	popular = false,
}: ProductCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			whileHover={{ y: -8 }}
			className='group relative'
		>
			{/* Popular Badge */}
			{popular && (
				<div className='absolute -top-4 left-1/2 -translate-x-1/2 z-20'>
					<div
						className='px-4 py-1.5 rounded-full text-white text-xs font-semibold'
						style={{
							background:
								'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)',
							boxShadow: '0 10px 40px -10px rgba(42, 5, 82, 0.5)',
						}}
					>
						⭐ Популярно
					</div>
				</div>
			)}

			{/* Glass Card */}
			<div className='relative h-full p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-500 overflow-hidden'>
				{/* Subtle glow on hover */}
				<div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
					<div
						className='absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px'
						style={{
							background:
								'linear-gradient(90deg, transparent, rgba(42, 5, 82, 0.8), transparent)',
						}}
					/>
				</div>

				{/* Content */}
				<div className='relative z-10'>
					{/* Title */}
					<h3 className='text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors duration-300'>
						{title}
					</h3>

					{/* Price */}
					<div className='flex items-baseline gap-2 mb-4'>
						<span className='text-4xl sm:text-5xl font-bold text-white'>
							${price}
						</span>
						{originalPrice && (
							<span className='text-lg text-gray-500 line-through'>
								${originalPrice}
							</span>
						)}
					</div>

					{/* Description */}
					<p className='text-gray-400 mb-6 sm:mb-8 leading-relaxed'>
						{description}
					</p>

					{/* Features */}
					<ul className='space-y-3 mb-6 sm:mb-8'>
						{features.map((feature, index) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.05 }}
								className='flex items-start gap-3'
							>
								<div
									className='flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5'
									style={{
										background:
											'radial-gradient(circle, rgba(42, 5, 82, 0.4) 0%, rgba(42, 5, 82, 0.2) 100%)',
									}}
								>
									<Check
										className='w-3 h-3'
										style={{ color: '#a855f7' }}
										strokeWidth={3}
									/>
								</div>
								<span className='text-gray-300 text-sm leading-relaxed'>
									{feature}
								</span>
							</motion.li>
						))}
					</ul>

					{/* CTA Button */}
					<Link href={ctaLink}>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full group/btn relative px-6 py-3.5 sm:py-4 text-white font-semibold rounded-xl transition-all duration-300 overflow-hidden'
							style={{
								background:
									'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)',
								boxShadow: '0 10px 40px -10px rgba(42, 5, 82, 0.4)',
							}}
							onMouseEnter={e => {
								e.currentTarget.style.background =
									'radial-gradient(circle, rgba(55, 7, 100, 1) 0%, rgba(30, 4, 60, 1) 100%)'
								e.currentTarget.style.boxShadow =
									'0 10px 40px -5px rgba(42, 5, 82, 0.6)'
							}}
							onMouseLeave={e => {
								e.currentTarget.style.background =
									'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)'
								e.currentTarget.style.boxShadow =
									'0 10px 40px -10px rgba(42, 5, 82, 0.4)'
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

							<span className='relative flex items-center justify-center gap-2'>
								{cta}
								<ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
							</span>
						</motion.button>
					</Link>
				</div>
			</div>
		</motion.div>
	)
}
