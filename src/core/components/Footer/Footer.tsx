// src/components/Footer/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
	products: {
		title: 'Продукты',
		links: [
			{ name: 'Job Offer Guide', href: '/products' },
			{ name: 'LinkedIn & X Workshop', href: '/products' },
			{ name: 'Консультация 1:1', href: '/products' },
			{ name: 'Карьерный интенсив', href: '/products' },
		],
	},
	company: {
		title: 'Компания',
		links: [
			{ name: 'О нас', href: '/about' },
			{ name: 'Блог', href: '/blog' },
			{ name: 'Контакты', href: '/contact' },
			{ name: 'FAQ', href: '#faq' },
		],
	},
	resources: {
		title: 'Ресурсы',
		links: [
			{ name: 'Комьюнити', href: 'https://t.me/hiredvalley' },
			{ name: 'Telegram', href: 'https://t.me/hiredvalleymanager' },
			{ name: 'Вакансии', href: '/jobs' },
			{ name: 'Истории успеха', href: '/success-stories' },
		],
	},
}

const socialLinks = [
	{ name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
	{ name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
	{ name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
	{ name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
]

export default function Footer() {
	return (
		<footer className='relative border-t border-white/10 overflow-hidden'>
			{/* Gradient Background */}
			<div
				className='absolute inset-0'
				style={{
					background: `
            radial-gradient(circle at top left, rgba(42, 5, 82, 0.3) 0%, transparent 50%),
            radial-gradient(circle at bottom right, rgba(42, 5, 82, 0.2) 0%, transparent 50%),
            #000000
          `,
				}}
			/>

			{/* Background pattern */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50' />

			<div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
				<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8'>
					{/* Left Section - Brand & Telegram CTA */}
					<div className='lg:col-span-5'>
						{/* Logo */}
						<Link href='/' className='inline-block mb-6'>
							<div className='flex items-center gap-3'>
								<div
									className='w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xl'
									style={{
										background:
											'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)',
									}}
								>
									HV
								</div>
								<span className='text-2xl font-bold text-white'>
									Hired Valley
								</span>
							</div>
						</Link>

						{/* Description */}
						<p className='text-gray-300 mb-8 leading-relaxed max-w-md text-lg'>
							Присоединяйтесь к крупнейшему комьюнити профессионалов в СНГ
						</p>

						{/* Telegram CTA Button */}
						<a
							href='https://t.me/hiredvalley'
							target='_blank'
							rel='noopener noreferrer'
						>
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className='group relative px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 overflow-hidden inline-flex items-center gap-3 w-full sm:w-auto justify-center'
								style={{
									background:
										'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)',
									boxShadow: '0 10px 40px -10px rgba(42, 5, 82, 0.5)',
								}}
								onMouseEnter={e => {
									e.currentTarget.style.background =
										'radial-gradient(circle, rgba(55, 7, 100, 1) 0%, rgba(30, 4, 60, 1) 100%)'
									e.currentTarget.style.boxShadow =
										'0 10px 50px -5px rgba(42, 5, 82, 0.7)'
								}}
								onMouseLeave={e => {
									e.currentTarget.style.background =
										'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(25, 3, 50, 1) 100%)'
									e.currentTarget.style.boxShadow =
										'0 10px 40px -10px rgba(42, 5, 82, 0.5)'
								}}
							>
								{/* Shimmer effect */}
								<motion.div
									className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
									animate={{
										x: ['-200%', '200%'],
									}}
									transition={{
										duration: 3,
										repeat: Infinity,
										ease: 'linear',
									}}
								/>

								<Send className='relative w-5 h-5 group-hover:translate-x-0.5 transition-transform' />
								<span className='relative'>Присоединиться к Telegram</span>
							</motion.button>
						</a>

						{/* Stats */}
						<p className='mt-4 text-gray-400 text-sm'>
							<span className='text-white font-semibold'>87,000+</span>{' '}
							участников уже с нами
						</p>
					</div>

					{/* Right Section - Links */}
					<div className='lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8'>
						{/* Products */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								{footerLinks.products.title}
							</h3>
							<ul className='space-y-3'>
								{footerLinks.products.links.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className='text-gray-400 hover:text-white transition-colors text-sm'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Company */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								{footerLinks.company.title}
							</h3>
							<ul className='space-y-3'>
								{footerLinks.company.links.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className='text-gray-400 hover:text-white transition-colors text-sm'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Resources */}
						<div>
							<h3 className='text-white font-semibold mb-4'>
								{footerLinks.resources.title}
							</h3>
							<ul className='space-y-3'>
								{footerLinks.resources.links.map((link, index) => (
									<li key={index}>
										<Link
											href={link.href}
											className='text-gray-400 hover:text-white transition-colors text-sm'
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Socials */}
						<div>
							<h3 className='text-white font-semibold mb-4'>Соцсети</h3>
							<ul className='space-y-3'>
								{socialLinks.map((social, index) => (
									<li key={index}>
										<a
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm group'
										>
											<social.icon className='w-4 h-4' />
											<span>{social.name}</span>
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4'>
					<p className='text-gray-500 text-sm'>
						© {new Date().getFullYear()} Hired Valley. Все права защищены.
					</p>
					<div className='flex gap-6'>
						<Link
							href='/privacy'
							className='text-gray-500 hover:text-white transition-colors text-sm'
						>
							Политика конфиденциальности
						</Link>
						<Link
							href='/terms'
							className='text-gray-500 hover:text-white transition-colors text-sm'
						>
							Условия использования
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
