import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import ResearchSection from '@/components/ResearchSection'
import TalksSection from '@/components/TalksSection'
import BooksSection from '@/components/BooksSection'
import StarsBackground from '@/components/StarsBackground'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <StarsBackground />
      <Hero />
      <ProjectsSection />
      <ResearchSection />
      <TalksSection />
      <BooksSection />
    </main>
  )
}

