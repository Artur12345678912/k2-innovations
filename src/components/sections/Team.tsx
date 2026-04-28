"use client"

import { motion } from "framer-motion"

const TEAM = [
  { id: "1", name: "Artur Knaub", role: "CEO | Webdesign & KI-Experte" },
  { id: "2", name: "Kevin Kreuz", role: "CEO | Webdesign & SEO/SEA" },
  { id: "3", name: "Mila Bergmann", role: "Support | Design" },
]

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Dein Team für digitales Wachstum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Unsere Experten verbinden Webdesign, SEO und KI – damit dein Unternehmen messbar wächst.
          </motion.p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
          {TEAM.map(({ id, name, role }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-8 text-center w-full sm:max-w-[260px] hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-5 rounded-full ring-2 ring-primary/30 bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl font-[var(--font-sora)]">
                {name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)}
              </div>
              <h3 className="font-[var(--font-sora)] font-bold text-foreground text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
