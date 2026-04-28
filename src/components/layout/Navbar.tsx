"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  {
    label: "Leistungen",
    dropdown: [
      { label: "Webdesign", href: "#leistungen" },
      { label: "SEO & Sichtbarkeit", href: "#leistungen" },
      { label: "KI-Mitarbeiter", href: "#leistungen" },
    ],
  },
  { label: "KI-Dienstleistungen", href: "/ki-dienstleistungen" },
  { label: "Über uns", href: "#team" },
  { label: "Blog", href: "#" },
  { label: "Kontakt", href: "#kontakt" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-18">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="K2 Innovations"
            width={120}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50">
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 glass-card rounded-xl py-2 shadow-xl"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href!}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:01787112811"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            📞 0178 711 2811
          </Link>
          <Link
            href="#kontakt"
            className="bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Kostenlose Analyse
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <div className="px-3 py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2.5 text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-border mt-2">
                <Link
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-xl"
                >
                  Kostenlose Analyse sichern
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
