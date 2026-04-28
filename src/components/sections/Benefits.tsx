"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Clock, TrendingUp, DollarSign, BarChart2, Cpu, Layers, ShieldCheck, Moon, ArrowRight } from "lucide-react"

const benefits = [
  { icon: Clock, title: "Mehr Zeit", text: "Automatisierung befreit dein Team von repetitiven Aufgaben" },
  { icon: TrendingUp, title: "Mehr Umsatz", text: "SEO und Webdesign bringen mehr qualifizierte Kunden" },
  { icon: DollarSign, title: "Geringere Kosten", text: "KI-Mitarbeiter ersetzen teure Routineprozesse" },
  { icon: BarChart2, title: "Höhere Margen", text: "Effizienz steigert den Gewinn ohne Mehrkosten" },
  { icon: Cpu, title: "Smarte Prozesse", text: "Systeme arbeiten automatisch zusammen" },
  { icon: Layers, title: "Schnelle Skalierung", text: "Wächst mit deinem Unternehmen mit" },
  { icon: ShieldCheck, title: "Höhere Effizienz", text: "Weniger Fehler, mehr Verlässlichkeit" },
  { icon: Moon, title: "24/7 Verfügbar", text: "KI-Mitarbeiter kennen keine Pausen" },
]

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Warum K2?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Messbare Ergebnisse für dein Business
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-[var(--font-sora)] font-bold text-foreground mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
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
