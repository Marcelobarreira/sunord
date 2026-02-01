// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { JsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/lib/content'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Projetos e Construções com Tecnologia e Sustentabilidade`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Engenharia e construção civil em Fortaleza. Edificações, infraestrutura, instalações elétricas e hidráulicas, estruturas metálicas e locação de máquinas.',
  keywords: ['engenharia civil fortaleza', 'construção civil ceará', 'infraestrutura fortaleza', 'edificações fortaleza', 'SUNORD engenharia'],
  authors: [{ name: siteConfig.name }],
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Projetos e Construções com Tecnologia e Sustentabilidade`,
    description: 'Engenharia e construção civil em Fortaleza-CE.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd />
      </body>
    </html>
  )
}
