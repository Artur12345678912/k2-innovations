"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Clock } from "lucide-react"

export function FinalCTA() {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/25 via-card to-purple-600/15 border border-primary/25 p-12 md:p-20 text-center glow-blue">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-purple-500/10 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `radial-gradient(circle, oklch(0.65 0.19 252) 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-[var(--font-sora)] font-bold text-foreground mb-5"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Bereit, dein Unternehmen{" "}
            <span className="gradient-text">digital zu transformieren?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Starte jetzt mit einem kostenlosen Analysegespräch – unverbindlich, persönlich und ohne Risiko.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="mailto:info@k2-innovations.de"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-10 py-4 rounded-xl hover:opacity-90 transition-opacity group text-base"
            >
              Kostenlose Analyse sichern
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <Shield size={14} className="text-primary" />
              100% kostenlos & unverbindlich
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-primary" />
              Antwort in 24h
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
