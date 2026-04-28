"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, Star, TrendingUp, Users, CheckCircle, Zap } from "lucide-react"

const trustBadges = [
  { icon: Users, label: "30+ Projekte", sub: "erfolgreich abgeschlossen" },
  { icon: TrendingUp, label: "+280%", sub: "Wachstum für Kunden" },
  { icon: Zap, label: "5+ Jahre", sub: "Online-Marketing-Erfahrung" },
  { icon: CheckCircle, label: "100%", sub: "zufriedene Kunden" },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.65 0.19 252) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Futuristic hero image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 -z-10 hidden lg:block pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1760629863094-5b1e8d1aae74?w=900&q=80&auto=format&fit=crop"
            alt="Futuristic AI"
            fill
            className="object-cover object-center opacity-25"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-foreground/80 font-medium">Ø 5/5 Sternen | 30+ Rezensionen</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-[var(--font-sora)] font-bold leading-[1.1] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)" }}
          >
            Digitale Lösungen aus{" "}
            <span className="gradient-text">Webdesign, SEO und KI</span>{" "}
            für Unternehmen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            K2 Innovations begleitet Unternehmen ganzheitlich bei ihrer digitalen Transformation – mit
            maßgeschneiderten Websites, bewährten SEO-Strategien und KI-Automatisierungen, die messbare
            Ergebnisse liefern.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity group text-base"
            >
              Angebot einholen
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:01787112811"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-xl hover:bg-muted/50 transition-colors text-base"
            >
              <Phone size={17} />
              Jetzt anrufen
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustBadges.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="glass-card rounded-2xl p-5 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Icon size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-[var(--font-sora)] font-bold text-foreground text-lg leading-tight">{label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
