"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MessageCircle, Phone } from "lucide-react"

export function LiveDemo() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-purple-500/10 border border-primary/20 p-10 md:p-16 text-center glow-blue">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Kostenlos & unverbindlich
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            100% <span className="gradient-text">KOSTENLOSE</span> KI-Live-Demo
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto"
          >
            Klicke auf einen der Buttons und erlebe live, wie unsere KI-Lösungen für Unternehmen funktionieren.
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
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
            >
              <MessageCircle size={20} />
              WhatsApp KI-Agent
            </Link>
            <Link
              href="tel:073198423109"
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 border border-white/20 text-foreground font-semibold px-8 py-4 rounded-xl hover:bg-white/15 transition-colors text-base"
            >
              <Phone size={20} />
              Voice KI-Agent
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
