"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "64%", text: "der Geschäftsinhaber erwarten deutliche KI-Produktivitätssteigerungen", source: "Forbes" },
  { value: "40%", text: "Effizienzsteigerung durch KI in Unternehmen", source: "McKinsey" },
  { value: "72%", text: "der Unternehmen erhöhen 2025 ihre KI-Investitionen", source: "KPMG" },
  { value: "79%", text: "der Unternehmen fehlt internes KI-Know-how", source: "McKinsey" },
  { value: "3x", text: "schneller wachsen KI-gestützte Unternehmen als der Markt", source: "IBM" },
  { value: "86%", text: "der Branchenexperten rechnen mit massivem Anstieg von Voice Agents", source: "Studie" },
  { value: "30%", text: "Kosteneinsparung durch Sprachdialogsysteme im Kundensupport", source: "Studie" },
  { value: "57%", text: "der Internetnutzer verwenden bereits digitale Sprachsteuerungen", source: "Studie" },
]

export function Stats() {
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
            Zahlen die überzeugen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            KI verändert die Geschäftswelt –{" "}
            <span className="gradient-text">jetzt</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map(({ value, text, source }, i) => (
            <motion.div
              key={value + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div
                className="font-[var(--font-sora)] font-bold gradient-text mb-2"
                style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
              >
                {value}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{text}</p>
              <span className="text-[10px] text-primary/60 font-medium uppercase tracking-wider border border-primary/20 rounded-full px-2 py-0.5">
                {source}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
