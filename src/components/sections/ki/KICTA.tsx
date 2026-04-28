"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function KICTA() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-[var(--font-sora)] font-bold text-foreground mb-4"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
        >
          Bereit für deine KI-Transformation?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Starte mit einer kostenlosen KI-Analyse – wir zeigen dir konkret, wo KI in deinem
          Unternehmen sofort Wirkung entfaltet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="https://wa.me/4915567016354"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            💬 WhatsApp KI-Demo starten
          </Link>
          <Link
            href="tel:073198423109"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-muted/50 transition-colors"
          >
            📞 Voice Agent testen
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs text-muted-foreground mt-6"
        >
          100% kostenlos & unverbindlich · Antwort in 24h
        </motion.p>
      </div>
    </section>
  )
}
