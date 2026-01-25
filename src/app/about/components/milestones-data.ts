export interface Milestone {
  year: string
  title: string
  description: string
  metric: string
  metricLabel: string
}

export const milestones: Milestone[] = [
  {
    year: '2021',
    title: 'Запуск комьюнити',
    description:
      'Стартовали с небольшой группы специалистов и первых менторских программ.',
    metric: '50+',
    metricLabel: 'участников',
  },
  {
    year: '2023',
    title: '50+ партнёров',
    description:
      'Подключили стартапы и корпорации, расширили охват до глобальных рынков.',
    metric: '50+',
    metricLabel: 'партнёров',
  },
  {
    year: '2024',
    title: 'Talent Pool 2.0',
    description:
      'Запустили AI-подбор и персональные траектории развития.',
    metric: 'AI',
    metricLabel: 'подбор',
  },
  {
    year: '2025',
    title: '1500+ офферов',
    description:
      'Закрепили позицию крупнейшего карьерного хаба в регионе.',
    metric: '1500+',
    metricLabel: 'офферов',
  },
]
