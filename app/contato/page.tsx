// app/contato/page.tsx
import type { Metadata } from 'next'
import { AnimatedContato } from '@/components/AnimatedContato'

export const metadata: Metadata = {
  title: 'Contato - SUNORD Engenharia',
  description: 'Entre em contato com a SUNORD Engenharia. Solicite um orçamento para sua obra.',
}

export default function ContatoPage() {
  return <AnimatedContato />
}
