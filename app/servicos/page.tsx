// app/servicos/page.tsx
import type { Metadata } from 'next'
import { AnimatedServicos } from '@/components/AnimatedServicos'

export const metadata: Metadata = {
  title: 'Serviços de Engenharia Civil - SUNORD Engenharia',
  description: 'Infraestrutura, instalações elétricas e hidráulicas, estruturas metálicas e locação de máquinas.',
}

export default function ServicosPage() {
  return <AnimatedServicos />
}
