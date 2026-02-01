// app/sobre/page.tsx
import type { Metadata } from 'next'
import { AnimatedSobre } from '@/components/AnimatedSobre'

export const metadata: Metadata = {
  title: 'Sobre a SUNORD Engenharia - Institucional',
  description: 'Conheça a SUNORD Engenharia. Projetos e construções com tecnologia e sustentabilidade.',
}

export default function SobrePage() {
  return <AnimatedSobre />
}
