// src/components/FAQ/FAQ.tsx
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
	{
		question:
			'Как начать карьеру за рубежом без опыта работы в международных компаниях?',
		answer:
			'Мы рекомендуем начать с нашего гайда по офферу, который содержит пошаговую методологию выхода на международный рынок. Далее можно пройти воркшоп по LinkedIn и X для настройки профиля и привлечения внимания рекрутеров. Многие наши участники получают первые офферы уже через 3-6 месяцев работы по программе.',
	},
	{
		question: 'Какие компании нанимают через вашу платформу?',
		answer:
			'Мы работаем с компаниями из Кремниевой Долины, Нью-Йорка, Лондона, Сингапура, ОАЭ и других технологических хабов. Среди наших партнёров: стартапы из портфолио Y Combinator, a16z, Sequoia Capital, а также крупные корпорации из Fortune 500. В Talent Pool доступны вакансии от $80k до $250k+ в год.',
	},
	{
		question: 'Сколько времени занимает поиск работы за рубежом?',
		answer:
			'В среднем наши участники получают офферы через 3-6 месяцев активного поиска. Это зависит от вашего опыта, специализации и времени, которое вы готовы инвестировать. При работе с ментором 1:1 или в рамках карьерного интенсива процесс может быть значительно ускорен.',
	},
	{
		question: 'Нужно ли знать английский на уровне носителя?',
		answer:
			'Для большинства позиций достаточно уровня B2-C1 (Upper-Intermediate - Advanced). Важнее уверенное владение профессиональной лексикой и умение общаться в рабочем контексте. Мы помогаем подготовиться к интервью и даём шаблоны для коммуникации с рекрутерами.',
	},
	{
		question: 'Какая поддержка предоставляется после покупки продукта?',
		answer:
			'После покупки любого продукта вы получаете доступ к нашему комьюнити из 87,000+ участников, где можно задавать вопросы, делиться опытом и находить вакансии. При покупке консультации 1:1 или интенсива вы также получаете месяц в карьерном акселераторе с дополнительными материалами и поддержкой.',
	},
	{
		question: 'Могу ли я получить возврат средств?',
		answer:
			'Да, мы предоставляем 14-дневную гарантию возврата средств на все наши продукты. Если по какой-либо причине вы не удовлетворены покупкой, мы вернём деньги без лишних вопросов.',
	},
]

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	return (
		<section className='relative py-20 sm:py-24 overflow-hidden bg-black'>
			{/* Background */}
			<div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]' />

			<div className='relative z-10 max-w-4xl mx-auto px-6'>
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-10 sm:mb-14 lg:mb-16'
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						className='inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8'
					>
						<span className='text-gray-300 text-sm font-medium'>
							Частые вопросы
						</span>
					</motion.div>

					<h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight'>
						Ответы на ваши <span className='block'>главные вопросы</span>
					</h2>

					<p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto'>
						Всё, что нужно знать о международной карьере и наших программах
					</p>
				</motion.div>

				{/* FAQ Items */}
				<div className='space-y-4'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.05 }}
						>
							<button
								onClick={() => setOpenIndex(openIndex === index ? null : index)}
								className='w-full text-left p-5 sm:p-6 rounded-2xl border border-white/10 transition-all duration-300 relative overflow-hidden'
								style={{
									background:
										'radial-gradient(circle, rgba(42, 5, 82, 1) 0%, rgba(1, 1, 5, 1) 100%)',
								}}
							>
								<div className='relative flex items-center justify-between gap-4'>
									<h3 className='text-base sm:text-lg font-semibold text-white pr-4'>
										{faq.question}
									</h3>
									<motion.div
										animate={{ rotate: openIndex === index ? 180 : 0 }}
										transition={{ duration: 0.3 }}
										className='flex-shrink-0'
									>
										<ChevronDown className='w-5 h-5 text-gray-400' />
									</motion.div>
								</div>

								<AnimatePresence>
									{openIndex === index && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: 'auto', opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{ duration: 0.3 }}
											className='overflow-hidden'
										>
											<p className='mt-4 text-gray-300 leading-relaxed'>
												{faq.answer}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
