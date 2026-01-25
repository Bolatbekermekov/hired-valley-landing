// src/components/Products/Services.tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'

const products = [
	{
		title: 'Гайд по офферу',
		price: '49',
		description:
			'Авторская методология «Как получить оффер в 2026 году» для выхода на международный рынок и получения оффера в $ / € / AED',
		features: [
			'Полная методология получения оффера',
			'Запись вебинара со спикером Netflix и Amazon',
			'Пошаговый план действий',
			'Доступ навсегда',
			'Обновления материалов',
		],
		cta: 'Получить гайд',
		ctaLink: 'https://t.me/hiredvalleymanager',
		popular: false,
	},
	{
		title: 'Воркшоп по LinkedIn и X',
		price: '19',
		description:
			'Как с помощью LinkedIn и X получать офферы из стартапов Кремниевой Долины, Нью-Йорка, Бостона, Лондона и Сингапура',
		features: [
			'PDF гайд с воркшопом',
			'Настройка алгоритмов LinkedIn 2026',
			'Полное руководство по X (Twitter)',
			'Шаблоны постов и контент-план',
			'Формулы роста аудитории',
		],
		cta: 'Начать обучение',
		ctaLink: 'https://t.me/hiredvalleymanager',
		popular: true,
	},
	{
		title: 'Консультация 1:1',
		price: '299',
		originalPrice: '499',
		description:
			'Часовая онлайн-сессия с ментором, аудит резюме и LinkedIn, подборка вакансий + стратегия на 3–6 месяцев',
		features: [
			'Консультация с сертифицированным ментором',
			'Аудит резюме и LinkedIn профиля',
			'Индивидуальная подборка вакансий',
			'Стратегия на 3-6 месяцев',
			'Месяц в карьерном акселераторе',
		],
		cta: 'Записаться',
		ctaLink: 'https://t.me/hiredvalleymanager',
		popular: false,
	},
	{
		title: 'Карьерный интенсив',
		price: '1499',
		originalPrice: '1800',
		description:
			'4 индивидуальных сессии с ментором: стратегия, подборки вакансий, подготовка к интервью, упаковка резюме и LinkedIn',
		features: [
			'4 индивидуальные сессии с ментором',
			'Работа со стратегией карьеры',
			'2 индивидуальные подборки вакансий',
			'Подготовка к интервью',
			'Упаковка резюме и LinkedIn',
			'Месяц в карьерном акселераторе',
		],
		cta: 'Начать интенсив',
		ctaLink: 'https://t.me/hiredvalleymanager',
		popular: false,
	},
]

export default function Services() {
	return (
		<section className='relative py-20 sm:py-24 overflow-hidden bg-black'>
			{/* Minimal subtle background - ваш цвет */}
			<div
				className='absolute inset-0'
				style={{
					background:
						'radial-gradient(ellipse at top, rgba(42, 5, 82, 0.15), transparent 50%)',
				}}
			/>

			{/* Grid pattern */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]' />

			<div className='relative z-10 max-w-7xl mx-auto px-6'>
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className='text-center mb-12 sm:mb-16 lg:mb-20'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8'
					>
						<div
							className='w-1.5 h-1.5 rounded-full animate-pulse'
							style={{ background: 'rgba(42, 5, 82, 1)' }}
						/>
						<span className='text-gray-300 text-sm font-medium'>
							Наши продукты
						</span>
					</motion.div>

					<h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight'>
						Начните свою{' '}
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white'>
							международную карьеру
						</span>
					</h2>

					<p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed'>
						Выберите подходящий формат обучения и поддержки для достижения ваших
						карьерных целей
					</p>
				</motion.div>

				{/* Products Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8'>
					{products.map((product, index) => (
						<ProductCard key={index} {...product} />
					))}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className='mt-12 sm:mt-16 lg:mt-20 text-center'
				>
					<p className='text-gray-500 mb-4 sm:mb-6 text-base sm:text-lg'>
						Не уверены, какой продукт выбрать?
					</p>
					<a
						href='https://t.me/hiredvalleymanager'
						className='inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group'
					>
						Получить консультацию
						<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
					</a>
				</motion.div>
			</div>
		</section>
	)
}
