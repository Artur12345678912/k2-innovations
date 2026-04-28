import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "K2 Innovations – Webdesign, SEO & KI-Automatisierung",
  description:
    "K2 Innovations begleitet Unternehmen bei ihrer digitalen Transformation – mit maßgeschneiderten Websites, bewährten SEO-Strategien und KI-Automatisierungen, die messbare Ergebnisse liefern.",
  keywords: "Webdesign, SEO, KI-Automatisierung, KI-Mitarbeiter, digitale Transformation, DACH",
  openGraph: {
    title: "K2 Innovations – Digitale Lösungen aus Webdesign, SEO und KI",
    description:
      "Maßgeschneiderte Websites, bewährte SEO-Strategien und KI-Automatisierungen für Unternehmen in der DACH-Region.",
    type: "website",
    locale: "de_DE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  )
}
