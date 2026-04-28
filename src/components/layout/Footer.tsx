import Link from "next/link"
import { Mail } from "lucide-react"

const footerLinks = [
  {
    title: "Leistungen",
    links: [
      { label: "Webdesign", href: "#leistungen" },
      { label: "SEO & Sichtbarkeit", href: "#leistungen" },
      { label: "KI-Mitarbeiter", href: "#leistungen" },
      { label: "Termin buchen", href: "#kontakt" },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#team" },
      { label: "Blog", href: "#" },
      { label: "Karriere", href: "#" },
      { label: "Presse", href: "#" },
    ],
  },
  {
    title: "Ressourcen",
    links: [
      { label: "KI-Tools", href: "#" },
      { label: "Glossar", href: "#" },
      { label: "Case Studies", href: "#cases" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Kontakt", href: "#kontakt" },
      { label: "Impressum", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Datenschutz", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="font-[var(--font-sora)] font-bold text-xl tracking-tight">
              <span className="text-primary">K2</span>
              <span className="text-foreground"> Innovations</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Digitale Lösungen aus Webdesign, SEO und KI für wachstumsorientierte Unternehmen.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { label: "FB", href: "#" },
                { label: "IG", href: "#" },
                { label: "LI", href: "#" },
              ].map(({ label, href }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors text-xs font-bold"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} />
            <span>Newsletter: </span>
            <form className="flex gap-2 ml-1">
              <input
                type="email"
                placeholder="deine@email.de"
                className="bg-muted/50 border border-border rounded-lg px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary w-44"
              />
              <button
                type="submit"
                className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                Anmelden
              </button>
            </form>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2025 K2 Innovations – Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  )
}
