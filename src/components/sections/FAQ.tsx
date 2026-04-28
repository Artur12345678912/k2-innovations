"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Welche Leistungen bietet ihr an?",
    a: "Wir liefern maßgeschneidertes Webdesign, bewährte SEO-Strategien und KI-Automatisierungen für Unternehmen jeder Größe – alles aus einer Hand, perfekt aufeinander abgestimmt.",
  },
  {
    q: "Wie läuft ein Projekt ab?",
    a: "Wir starten mit einem kostenlosen Analysegespräch, entwickeln eine maßgeschneiderte Strategie und setzen diese Schritt für Schritt um – transparent, termingerecht und mit messbaren Ergebnissen.",
  },
  {
    q: "Mit wem arbeitet ihr typischerweise?",
    a: "Wir unterstützen KMUs, Selbstständige, Agenturen und wachstumsorientierte Unternehmen in der DACH-Region, die digital wachsen wollen.",
  },
  {
    q: "Was kostet eine Website?",
    a: "Websites starten ab 2.000 €. Die genauen Kosten hängen von Umfang und Anforderungen ab – im kostenlosen Erstgespräch erstellen wir dir ein individuelles Angebot.",
  },
  {
    q: "Wie schnell wird mein Projekt umgesetzt?",
    a: "Standardprojekte dauern 4 Wochen bis 3 Monate. KI-Implementierungen sind oft schneller einsatzbereit. Im Erstgespräch legen wir gemeinsam einen realistischen Zeitplan fest.",
  },
  {
    q: "Ist der Einsatz von KI DSGVO-konform?",
    a: "Ja. Alle unsere KI-Lösungen werden DSGVO-konform implementiert. Datenschutz ist bei uns kein Nachgedanke, sondern Standard.",
  },
  {
    q: "Wie starte ich ein Projekt?",
    a: "Fülle unser Kontaktformular aus oder ruf direkt an – wir melden uns innerhalb von 24 Stunden für ein kostenloses Erstgespräch.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Häufige Fragen – schnell beantwortet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            Klare Informationen zu unseren Leistungen, Prozessen und digitalen Lösungen.
          </motion.p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="font-semibold text-foreground text-sm md:text-base">{q}</span>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
