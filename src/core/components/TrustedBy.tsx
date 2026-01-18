// src/components/TrustedBy.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const companies = [
	{ name: 'Qfc', logo: '/companies/qfc-qatar.png' },
	{ name: 'Astana-Hub', logo: '/companies/astana-hub.png' },
	{ name: 'Draper-Accociates', logo: '/companies/draper-accociates.png' },
	{ name: 'Gitex-Global', logo: '/companies/gitex-global.png' },
	{ name: 'Inmerge', logo: '/companies/inmerge.png' },
	{
		name: 'Qatar-Science-And-Technology-Park',
		logo: '/companies/qatar-science-and-technology-park.png',
	},
	{ name: 'Web-Summit', logo: '/companies/web-summit.png' },
]

export default function TrustedBy() {
	return (
		<div className='relative w-full py-12 overflow-hidden bg-black/30 backdrop-blur-sm border-y border-white/10'>
			<div className='max-w-7xl mx-auto px-6'>
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center text-white/70 text-sm font-medium mb-8 tracking-wide uppercase'
				>
					Over 50+ companies trust us
				</motion.h3>

				<div className='relative'>
					<div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none' />
					<div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none' />

					<Marquee speed={50} gradient={false} pauseOnHover>
						{companies.map((company, index) => (
							<div
								key={index}
								className='mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300'
							>
								<Image
									src={company.logo}
									alt={company.name}
									width={120}
									height={40}
									className='h-10 w-auto object-contain'
								/>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	)
}
