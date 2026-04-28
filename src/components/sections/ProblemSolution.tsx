"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { X, Check, ArrowRight } from "lucide-react"

const problems = [
  "Zeitaufwändige manuelle Prozesse",
  "Kunden finden dich nicht online",
  "Veraltete Website ohne Conversions",
  "Mitarbeiter mit repetitiven Aufgaben überlastet",
  "Konkurrenz überholt dich täglich",
]

const solutions = [
  "KI-Automatisierungen sparen 90+ Stunden/Woche",
  "SEO bringt qualifizierte Leads automatisch",
  "Moderne Website konvertiert Besucher zu Kunden",
  "KI-Mitarbeiter übernehmen Routineaufgaben",
  "Du fokussierst dich auf das Wesentliche",
]

export function ProblemSolution() {
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
            Der Status quo
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Wie digital ist dein Unternehmen wirklich?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl bg-red-500/8 border border-red-500/20 p-8"
          >
            <h3 className="font-[var(--font-sora)] font-bold text-red-400 text-xl mb-6">
              Ohne KI & Digitalisierung
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X size={11} className="text-red-400" />
                  </div>
                  <span className="text-foreground/75 text-sm leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl bg-primary/8 border border-primary/20 p-8"
          >
            <h3 className="font-[var(--font-sora)] font-bold text-primary text-xl mb-6">
              Mit K2 Innovations
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-primary" />
                  </div>
                  <span className="text-foreground/90 text-sm leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
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
