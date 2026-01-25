import AboutCTA from './components/AboutCTA'
import AboutHero from './components/AboutHero'
import AboutLogos from './components/AboutLogos'
import AboutMilestones from './components/AboutMilestones'
import AboutMission from './components/AboutMission'
import AboutTeam from './components/AboutTeam'
import AboutValues from './components/AboutValues'

export default function AboutPage() {
	return (
		<main className='min-h-screen bg-black'>
			<AboutHero />
			<AboutLogos />
			<AboutMission />
			<AboutValues />
			<AboutTeam />
			<AboutMilestones />
			<AboutCTA />
		</main>
	)
}
