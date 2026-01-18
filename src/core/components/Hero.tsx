// src/components/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import AnimatedBackground from './AnimatedBackground'
import TrustedBy from './TrustedBy'

export default function Hero() {
	return (
		<>
			<section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
				{/* Живой анимированный фон */}
				<AnimatedBackground />

				{/* Content */}
				<div className='relative z-10 max-w-7xl mx-auto px-6 text-center'>
					{/* Main Heading */}
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className='hero-title'
					>
						<span className='block text-white mb-4'>Карьерная платформа</span>
						<span className='block bg-gradient-to-r from-purple-200 via-purple-100 to-purple-200 bg-clip-text text-transparent'>
							для выхода на международный рынок
						</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className='mt-8 text-xl md:text-2xl text-gray-200 font-light'
					>
						Удаленка | Стажировки | Карьера за рубежом
					</motion.p>

					{/* Stats Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className='mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20'
					>
						<div className='w-2 h-2 bg-green-400 rounded-full animate-pulse' />
						<span className='text-white font-medium'>
							87,000+ участников уже в нашем комьюнити
						</span>
					</motion.div>

					{/* CTA Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className='mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center'
					>
						{/* Простой текст "Начать карьеру" с анимацией */}
						<motion.div whileTap={{ scale: 0.95 }}>
							<Link
								href='#services'
								className='group inline-flex items-center gap-2 text-white text-lg font-semibold hover:text-purple-300 transition-colors duration-300'
							>
								<span className='relative'>
									Начать карьеру
									{/* Подчёркивание при hover */}
									<span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300' />
								</span>
								<motion.span
									animate={{ x: [0, 4, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									→
								</motion.span>
							</Link>
						</motion.div>

						<Link
							href='#about'
							className='px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105'
						>
							Узнать больше
						</Link>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 1 }}
					className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10'
				>
					<div className='w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2'>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 1.5, repeat: Infinity }}
							className='w-1.5 h-1.5 bg-white rounded-full'
						/>
					</div>
				</motion.div>
			</section>

			<TrustedBy />
		</>
	)
}
