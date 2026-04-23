import { LangProvider } from '@/components/LangProvider'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TechMarquee from '@/components/TechMarquee'
import About from '@/components/About'
import Projects from '@/components/Projects'
import GitHubActivity from '@/components/GitHubActivity'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <LangProvider>
      <Nav />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <GitHubActivity />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
