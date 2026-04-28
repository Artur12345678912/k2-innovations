"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Bot, Zap, Shield } from "lucide-react"

export function KIHero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-primary text-sm font-semibold uppercase tracking-widest mb-4"
        >
          KI-Dienstleistungen
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[var(--font-sora)] font-bold text-foreground mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
        >
          KI-Lösungen, die dein
          <br />
          <span className="text-primary">Unternehmen automatisieren</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7 }}
        >
          Von KI-Chatbots über Voice Agents bis zu vollständigen Workflow-Automatisierungen –
          wir implementieren maßgeschneiderte KI-Lösungen, die messbar Zeit und Kosten sparen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#kontakt"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Kostenlose KI-Beratung sichern
          </Link>
          <Link
            href="tel:01787112811"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-muted/50 transition-colors"
          >
            📞 Direkt anrufen
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {[
            { icon: Bot, label: "KI-Lösungen für jeden Bedarf" },
            { icon: Zap, label: "Schnelle Implementierung" },
            { icon: Shield, label: "100% DSGVO-konform" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon size={16} className="text-primary" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
