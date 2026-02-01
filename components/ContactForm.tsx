// components/ContactForm.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/content'

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

function maskCNPJ(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 14)
  if (digits.length <= 2) return digits
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`
  if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    cnpj: '',
    assunto: '',
    mensagem: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
      }
    } catch (error) {
      console.error('Erro ao salvar:', error)
    }

    // Preparar e abrir WhatsApp
    const message = `*CONTATO PELO SITE*
━━━━━━━━━━━━━━━━━━━━

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.telefone || 'Não informado'}
*CNPJ:* ${formData.cnpj || 'Não informado'}
*Assunto:* ${formData.assunto || 'Não informado'}

*Mensagem:*
${formData.mensagem || 'Sem mensagem'}

━━━━━━━━━━━━━━━━━━━━
_Enviado pelo site SUNORD Engenharia_`

    const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')

    setFormData({ name: '', email: '', telefone: '', cnpj: '', assunto: '', mensagem: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-800" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative p-6 md:p-8">
        <div className="text-center mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary-light text-xs font-medium mb-3">
            Fale Conosco
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Solicite um <span className="text-secondary-light">Orçamento</span>
          </h3>
          <p className="text-white/70 text-sm">
            Preencha o formulário e entraremos em contato!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-white/80 text-sm mb-1 block">Seu nome (obrigatório)</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-1 block">Seu e-mail (obrigatório)</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-1 block">Telefone</label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: maskPhone(e.target.value) })}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-1 block">CNPJ</label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              value={formData.cnpj}
              onChange={(e) => setFormData({ ...formData, cnpj: maskCNPJ(e.target.value) })}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-1 block">Assunto</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              value={formData.assunto}
              onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
            />
          </div>

          <div>
            <label className="text-white/80 text-sm mb-1 block">Sua mensagem</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-vertical"
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-secondary to-accent text-white font-bold py-4 px-6 rounded-xl shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={isSubmitting ? {} : { scale: 1.02, boxShadow: '0 20px 40px rgba(232, 120, 42, 0.3)' }}
            whileTap={isSubmitting ? {} : { scale: 0.98 }}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </motion.button>

          {submitStatus === 'success' && (
            <motion.p
              className="text-green-300 text-sm text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Mensagem enviada com sucesso!
            </motion.p>
          )}
        </form>
      </div>
    </div>
  )
}
