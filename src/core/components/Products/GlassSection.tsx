// src/components/Products/GlassSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function GlassSection() {
	return (
		<div className='absolute inset-0 overflow-hidden pointer-events-none'>
			{/* Animated blobs - цвет #2a0552 */}
			<motion.div
				className='absolute w-[500px] h-[500px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(42, 5, 82, 0.25) 0%, transparent 70%)',
					filter: 'blur(60px)',
					top: '10%',
					left: '10%',
				}}
				animate={{
					x: [0, 50, 0],
					y: [0, 30, 0],
					scale: [1, 1.1, 1],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<motion.div
				className='absolute w-[400px] h-[400px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(42, 5, 82, 0.2) 0%, transparent 70%)',
					filter: 'blur(60px)',
					bottom: '20%',
					right: '15%',
				}}
				animate={{
					x: [0, -40, 0],
					y: [0, 40, 0],
					scale: [1, 1.2, 1],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'easeInOut',
					delay: 2,
				}}
			/>

			<motion.div
				className='absolute w-[350px] h-[350px] rounded-full'
				style={{
					background:
						'radial-gradient(circle, rgba(42, 5, 82, 0.2) 0%, transparent 70%)',
					filter: 'blur(60px)',
					top: '50%',
					left: '50%',
					translateX: '-50%',
					translateY: '-50%',
				}}
				animate={{
					scale: [1, 1.3, 1],
					rotate: [0, 180, 360],
				}}
				transition={{
					duration: 30,
					repeat: Infinity,
					ease: 'linear',
				}}
			/>
		</div>
	)
}
