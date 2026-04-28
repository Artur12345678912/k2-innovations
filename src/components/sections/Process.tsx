"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Du erkennst den Bedarf",
    text: "Dein Unternehmen verdient mehr – mehr Sichtbarkeit, mehr Effizienz, mehr Umsatz.",
  },
  {
    number: "02",
    title: "Formular ausfüllen",
    text: "Beschreibe kurz dein Anliegen – wir melden uns innerhalb von 24 Stunden.",
  },
  {
    number: "03",
    title: "Wir sprechen über alles",
    text: "Kostenloses Analysegespräch: Wir analysieren deine Situation und entwickeln eine maßgeschneiderte Strategie.",
  },
  {
    number: "04",
    title: "Du lehnst dich zurück",
    text: "Wir setzen um, du siehst die Ergebnisse. Transparent, termingerecht, messbar.",
  },
]

export function Process() {
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
            So einfach geht's
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            In 4 Schritten zu deiner digitalen Erfolgsstrategie
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map(({ number, title, text }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative text-center"
            >
              <div className="relative w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                <span className="font-[var(--font-sora)] font-bold text-primary text-lg">{number}</span>
              </div>
              <h3 className="font-[var(--font-sora)] font-bold text-foreground mb-3 text-lg">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
