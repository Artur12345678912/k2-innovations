"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "K2 hat unsere Geschäftsprozesse vollständig automatisiert. Wir sparen über 30 Stunden pro Woche und haben unseren Umsatz um 70% gesteigert – in nur 3 Monaten.",
    name: "Konstantin Radevski",
    role: "Inhaber, Meze Bar",
    avatar: "KR",
  },
  {
    quote: "Transparent, effizient und auf gegenseitigem Vertrauen basierend – K2 Innovations hat genau das geliefert was ich mir vorgestellt habe.",
    name: "Larissa Vögel",
    role: "KI-Wandel",
    avatar: "LV",
  },
  {
    quote: "Kosten und Zeitaufwände deutlich reduziert. Die Zusammenarbeit mit K2 war von Anfang an professionell und strukturiert.",
    name: "Luis Schneider",
    role: "JOVENTI",
    avatar: "LS",
  },
  {
    quote: "Der KI-Telefonassistent übernimmt meine Gespräche zuverlässig. Ich kann mich endlich auf das Wesentliche konzentrieren.",
    name: "Leon Schröther",
    role: "Schröther GmbH",
    avatar: "LS",
  },
  {
    quote: "K2 hat eine starke Website für mich erstellt – und damit direkt mehr Kunden gewonnen. Absolut empfehlenswert.",
    name: "Alex Bernthaler",
    role: "Fotograf",
    avatar: "AB",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Das sagen unsere Kunden
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, avatar }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-5 hover:border-primary/30 transition-all duration-300"
            >
              <Quote size={24} className="text-primary/40" />
              <p className="text-foreground/80 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs font-[var(--font-sora)]">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
