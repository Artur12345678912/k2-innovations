"use client"

import { motion } from "framer-motion"

const USE_CASES = [
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

const STATS = [
  { value: "90+", label: "Stunden/Woche gespart" },
  { value: "60%", label: "Weniger Bearbeitungszeit" },
  { value: "24/7", label: "KI-Verfügbarkeit" },
  { value: "100%", label: "DSGVO-konform" },
]

export function KIUseCases() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-20">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div
                className="font-[var(--font-sora)] font-bold text-primary mb-1"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                {value}
              </div>
              <div className="text-sm text-muted-foreground">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
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

        <div className="flex flex-wrap gap-3 justify-center">
          {USE_CASES.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass-card rounded-full px-5 py-2.5 text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
