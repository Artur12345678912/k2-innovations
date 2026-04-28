"use client"

import { motion } from "framer-motion"
import { Globe, Search, Bot, Plug, Zap, HeartHandshake } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Webdesign & Webentwicklung",
    text: "Moderne, responsive Websites für deine Marke – optimiert für jedes Gerät und konversionsstark von Tag 1.",
  },
  {
    icon: Search,
    title: "SEO & Sichtbarkeit",
    text: "Steigere dein Suchranking und gewinne qualifizierte Leads mit bewährten SEO-Strategien und datenbasierter Optimierung.",
  },
  {
    icon: Bot,
    title: "KI-Mitarbeiter & Automatisierung",
    text: "Automatisiere wiederkehrende Aufgaben und skaliere schneller mit maßgeschneiderten KI-Lösungen – DSGVO-konform.",
  },
  {
    icon: Plug,
    title: "Systemintegrationen",
    text: "Verbinde deine Tools und Plattformen für nahtlose, einheitliche Workflows ohne manuelle Reibungsverluste.",
  },
  {
    icon: Zap,
    title: "Schnell & Mobile-first",
    text: "Blitzschnelle Ladezeiten und reibungslose Erlebnisse auf jedem Gerät – für maximale Nutzerzufriedenheit.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Beratung",
    text: "Expertenunterstützung von der Planung bis zum Launch und darüber hinaus – persönlich und auf Augenhöhe.",
  },
]

export function Features() {
  return (
    <section id="leistungen" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Was wir liefern
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Leistungen für dein digitales Wachstum
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-7 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <Icon size={22} className="text-primary" />
              </div>
              <h3 className="font-[var(--font-sora)] font-semibold text-foreground text-lg mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
