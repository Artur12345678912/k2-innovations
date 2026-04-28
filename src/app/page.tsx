import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { LiveDemo } from "@/components/sections/LiveDemo"
import { ProblemSolution } from "@/components/sections/ProblemSolution"
import { Benefits } from "@/components/sections/Benefits"
import { UseCases } from "@/components/sections/UseCases"
import { Stats } from "@/components/sections/Stats"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Testimonials } from "@/components/sections/Testimonials"
import { Team } from "@/components/sections/Team"
import { Process } from "@/components/sections/Process"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LiveDemo />
        <ProblemSolution />
        <Benefits />
        <UseCases />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <Team />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
