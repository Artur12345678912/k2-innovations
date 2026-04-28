import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { KIHero } from "@/components/sections/ki/KIHero"
import { KIServices } from "@/components/sections/ki/KIServices"
import { KIUseCases } from "@/components/sections/ki/KIUseCases"
import { KICTA } from "@/components/sections/ki/KICTA"

export const metadata: Metadata = {
  title: "KI-Dienstleistungen – K2 Innovations",
  description:
    "Maßgeschneiderte KI-Lösungen für Unternehmen: Chatbots, Voice Agents, Automatisierungen und mehr. DSGVO-konform, schnell implementiert.",
}

export default function KIDienstleistungenPage() {
  return (
    <>
      <Navbar />
      <main>
        <KIHero />
        <KIServices />
        <KIUseCases />
        <KICTA />
      </main>
      <Footer />
    </>
  )
}
