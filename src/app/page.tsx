// src/app/page.tsx

import AboutSection from '../core/components/About/AboutSection'
import CTASection from '../core/components/CTA/CTASection'
import FAQ from '../core/components/FAQ/FAQ'
import Hero from '../core/components/Hero'
import Services from '../core/components/Products/Services'
import TestimonialsSection from '../core/components/Testimonials/Testimonials'

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Hero />
			<AboutSection />
			<Services />
			<TestimonialsSection/>
			<FAQ />
      <CTASection />
		</main>
	)
}
