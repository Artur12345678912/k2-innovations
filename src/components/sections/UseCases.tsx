"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Bot, ArrowRight } from "lucide-react"

const useCases = [
  "KI-Chatbot für Kundensupport",
  "Voice Agent für Telefonanfragen",
  "WhatsApp Lead-Qualifizierung",
  "Automatische Terminbuchung",
  "E-Mail-Automatisierung",
  "Social Media KI-Agent",
  "Rechnungsverarbeitung",
  "CRM-Integration & Datenpflege",
  "KI-Textgenerierung für Content",
  "Bewerbermanagement",
  "Interne Wissensassistenten",
  "Dynamische Preisgestaltung",
  "Bestandsoptimierung",
  "SEO-Content-Automatisierung",
  "Kundenfeedback-Analyse",
  "Vertragsanalyse & Dokumentation",
  "Backoffice-Automatisierung",
  "Personalabrechnung (teilautomatisiert)",
  "KI-Produktbeschreibungen",
  "Lead-Scoring & Priorisierung",
]

export function UseCases() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Anwendungsfälle
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Unendlich viele Möglichkeiten mit KI
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
              className="flex items-center gap-2 glass-card border border-border/50 hover:border-primary/40 rounded-full px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground transition-all duration-200 cursor-default"
            >
              <Bot size={13} className="text-primary shrink-0" />
              {useCase}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity group"
          >
            Kostenlose Analyse sichern
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
