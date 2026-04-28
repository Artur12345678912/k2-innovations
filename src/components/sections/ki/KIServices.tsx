"use client"

import { motion } from "framer-motion"
import { MessageSquare, Phone, Mail, Calendar, Users, FileText, BarChart2, Headphones } from "lucide-react"

const SERVICES = [
  {
    icon: MessageSquare,
    title: "KI-Chatbot",
    subtitle: "Kundensupport",
    description:
      "24/7 verfügbarer KI-Chatbot für deine Website. Beantwortet Fragen, qualifiziert Leads und bucht Termine – vollautomatisch.",
    highlights: ["Mehrsprachig", "Nahtlose CRM-Integration", "Individuelle Wissensbasis"],
  },
  {
    icon: Phone,
    title: "Voice Agent",
    subtitle: "Telefonanfragen",
    description:
      "Ein KI-Telefonassistent übernimmt eingehende Anrufe, qualifiziert Anfragen und leitet wichtige Gespräche weiter.",
    highlights: ["Natürliche Sprache", "24/7 erreichbar", "Gesprächsprotokoll"],
  },
  {
    icon: Users,
    title: "WhatsApp Agent",
    subtitle: "Lead-Qualifizierung",
    description:
      "Automatisiere deine WhatsApp-Kommunikation. Qualifiziere Leads, beantworte Fragen und pflege Kundenbeziehungen.",
    highlights: ["WhatsApp Business API", "Automatische Antworten", "Lead-Scoring"],
  },
  {
    icon: Calendar,
    title: "Terminbuchung",
    subtitle: "Automatisierung",
    description:
      "Vollautomatische Terminbuchung ohne manuellen Aufwand. Synchronisiert mit deinem Kalender und sendet Erinnerungen.",
    highlights: ["Kalender-Sync", "Erinnerungen", "Kein Back-and-Forth"],
  },
  {
    icon: Mail,
    title: "E-Mail-Automatisierung",
    subtitle: "Workflows",
    description:
      "Intelligente E-Mail-Workflows, die zur richtigen Zeit die richtige Nachricht senden – personalisiert und skalierbar.",
    highlights: ["Personalisiert", "Trigger-basiert", "A/B-Testing"],
  },
  {
    icon: FileText,
    title: "Dokumentenverarbeitung",
    subtitle: "KI-Analyse",
    description:
      "Automatische Verarbeitung von Rechnungen, Verträgen und Formularen. Spart Stunden manueller Arbeit täglich.",
    highlights: ["OCR & Extraktion", "Validierung", "ERP-Integration"],
  },
  {
    icon: BarChart2,
    title: "Workflow-Automatisierung",
    subtitle: "End-to-End",
    description:
      "Verbinde alle deine Tools zu einem durchgängigen, automatisierten Workflow. Mit n8n, Make oder Zapier.",
    highlights: ["200+ Integrationen", "No-Code/Low-Code", "Echtzeit-Monitoring"],
  },
  {
    icon: Headphones,
    title: "Interne KI-Assistenten",
    subtitle: "Team-Produktivität",
    description:
      "KI-Assistenten für dein Team: Wissensmanagement, interne Anfragen und Onboarding – alles automatisiert.",
    highlights: ["Eigene Wissensbasis", "Slack/Teams-Integration", "DSGVO-konform"],
  },
]

export function KIServices() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Unsere Lösungen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-[var(--font-sora)] font-bold text-foreground mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
          >
            Alle KI-Dienstleistungen im Überblick
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-xl mx-auto"
          >
            Maßgeschneidert auf dein Unternehmen – von der Beratung bis zur Implementierung.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, title, subtitle, description, highlights }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">{subtitle}</p>
                <h3 className="font-[var(--font-sora)] font-bold text-foreground text-lg">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
              <ul className="space-y-1">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
