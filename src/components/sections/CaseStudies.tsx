"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const cases = [
  {
    name: "Konstantin Radevski",
    company: "Meze Bar",
    avatar: "KR",
    problem: "Tische blieben leer, kaum Online-Buchungen",
    solution: "Voice Agent für Reservierungen + SEO-optimierte Website",
    result: "70% der Plätze dauerhaft ausgebucht",
    tag: "Gastronomie",
  },
  {
    name: "Larissa Vögel",
    company: "KI-Wandel",
    avatar: "LV",
    problem: "Manuelle Kommunikation mit Kunden zu zeitaufwändig",
    solution: "Automatisierter WhatsApp-Agent + E-Mail-Workflows",
    result: "Bearbeitungszeit um 60% reduziert",
    tag: "Beratung",
  },
  {
    name: "Luis Schneider",
    company: "JOVENTI",
    avatar: "LS",
    problem: "Hohe Kosten durch manuelle Prozesse",
    solution: "End-to-End Workflow-Automatisierung mit n8n",
    result: "Kosten und Zeitaufwände deutlich reduziert",
    tag: "E-Commerce",
  },
  {
    name: "Leon Schröther",
    company: "Schröther GmbH",
    avatar: "LS",
    problem: "Telefonische Erstanfragen fraßen Ressourcen",
    solution: "KI-Telefonassistent für Erstgespräche",
    result: "Gespräche werden zuverlässig übernommen, Team entlastet",
    tag: "Handwerk",
  },
  {
    name: "Alex Bernthaler",
    company: "Fotograf",
    avatar: "AB",
    problem: "Keine Online-Präsenz, kaum Neukunden",
    solution: "Professionelle Website + Local SEO",
    result: "Starke Website, deutlich mehr Kundenanfragen",
    tag: "Kreativ",
  },
]

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Erfolgsgeschichten
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Was unsere Kunden erreicht haben
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map(({ name, company, avatar, problem, solution, result, tag }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm font-[var(--font-sora)]">
                    {avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{name}</div>
                    <div className="text-xs text-muted-foreground">{company}</div>
                  </div>
                </div>
                <span className="text-[10px] text-primary/70 border border-primary/20 rounded-full px-2 py-1 font-medium">
                  {tag}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="bg-red-500/8 border border-red-500/15 rounded-xl p-3">
                  <span className="text-red-400 font-semibold block mb-1">Problem</span>
                  <span className="text-foreground/70">{problem}</span>
                </div>
                <div className="bg-primary/8 border border-primary/15 rounded-xl p-3">
                  <span className="text-primary font-semibold block mb-1">Lösung</span>
                  <span className="text-foreground/70">{solution}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border/50">
                <ArrowUpRight size={14} className="text-green-400 shrink-0" />
                <span className="text-sm font-semibold text-green-400">{result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
