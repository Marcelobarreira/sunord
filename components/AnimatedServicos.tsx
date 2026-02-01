// components/AnimatedServicos.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { services, siteConfig } from '@/lib/content'
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  HoverScale,
  StaggerContainer,
  StaggerItem
} from '@/components/animations/MotionComponents'

// Mapeamento de imagens para cada serviço
const serviceImages: Record<string, string> = {
  edificacoes: '/images/edificacoes.jpg',
  infraestrutura: '/images/infraestrutura.jpg',
  locacao: '/images/obra-04.jpg',
  instalacoes: '/images/instalacoes-eletricas.png',
  estruturas: '/images/estruturas-metalicas.jpg',
  manutencao: '/images/edificacoes-thumb.jpg',
}

// Cores alternadas para os serviços
const serviceColors = [
  { gradient: 'from-primary to-teal', bg: 'bg-primary-50', text: 'text-primary', border: 'border-primary/20' },
  { gradient: 'from-secondary to-cyan', bg: 'bg-secondary-50', text: 'text-secondary', border: 'border-secondary/20' },
  { gradient: 'from-teal to-cyan', bg: 'bg-teal-light/20', text: 'text-teal', border: 'border-teal/20' },
  { gradient: 'from-cyan to-primary', bg: 'bg-cyan-light/20', text: 'text-cyan-dark', border: 'border-cyan/20' },
  { gradient: 'from-primary-light to-secondary', bg: 'bg-primary-100', text: 'text-primary-light', border: 'border-primary-light/20' },
  { gradient: 'from-accent to-teal', bg: 'bg-accent/10', text: 'text-accent-dark', border: 'border-accent/20' },
]

export function AnimatedServicos() {
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da SUNORD Engenharia.')
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <>
      {/* Header com gradiente vibrante */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-teal-dark" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/20 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-secondary-light text-sm font-medium mb-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            O que fazemos
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nossos{' '}
            <span className="bg-gradient-to-r from-secondary via-teal-light to-cyan bg-clip-text text-transparent">
              Serviços
            </span>
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soluções completas em engenharia civil, infraestrutura e construção.
          </motion.p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center">
            {services.map((service, index) => {
              const colors = serviceColors[index % serviceColors.length]
              return (
                <StaggerItem key={service.id} className="w-full flex justify-center">
                  <motion.a
                    href={`#${service.id}`}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r ${colors.gradient} text-white text-sm font-medium shadow-md w-full max-w-[220px]`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="truncate">{service.title}</span>
                  </motion.a>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Services List com cores vibrantes */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const colors = serviceColors[index % serviceColors.length]
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
                >
                  {isEven ? (
                    <>
                      <SlideInLeft delay={0.1} className="flex-1">
                        <div className={`relative p-6 md:p-8 rounded-2xl ${colors.bg} border ${colors.border}`}>
                          {/* Decorative elements */}
                          <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />

                          <motion.div
                            className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-white mb-4 shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <span className="text-xl font-bold">{index + 1}</span>
                          </motion.div>
                          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text} mb-4`}>{service.title}</h2>
                          <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>

                          <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-gradient-to-r ${colors.gradient} text-white font-medium text-sm shadow-md`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Solicitar este serviço
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        </div>
                      </SlideInLeft>
                      <SlideInRight delay={0.2} className="flex-1 w-full">
                        <HoverScale scale={1.03}>
                          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                              src={serviceImages[service.id] || '/images/image-05.png'}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                          </div>
                        </HoverScale>
                      </SlideInRight>
                    </>
                  ) : (
                    <>
                      <SlideInRight delay={0.1} className="flex-1">
                        <div className={`relative p-6 md:p-8 rounded-2xl ${colors.bg} border ${colors.border}`}>
                          {/* Decorative elements */}
                          <div className={`absolute top-0 left-0 w-24 h-24 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-2xl`} />

                          <motion.div
                            className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-white mb-4 shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                          >
                            <span className="text-xl font-bold">{index + 1}</span>
                          </motion.div>
                          <h2 className={`text-2xl md:text-3xl font-bold ${colors.text} mb-4`}>{service.title}</h2>
                          <p className="text-gray-600 leading-relaxed text-lg">{service.fullDescription}</p>

                          <motion.a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-gradient-to-r ${colors.gradient} text-white font-medium text-sm shadow-md`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Solicitar este serviço
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </motion.a>
                        </div>
                      </SlideInRight>
                      <SlideInLeft delay={0.2} className="flex-1 w-full">
                        <HoverScale scale={1.03}>
                          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group">
                            <Image
                              src={serviceImages[service.id] || '/images/image-05.png'}
                              alt={service.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                          </div>
                        </HoverScale>
                      </SlideInLeft>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA vibrante */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-teal-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Precisa de algum desses serviços?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato e solicite um orçamento personalizado para sua empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-4 text-lg font-bold text-white shadow-2xl"
                whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Solicitar Orçamento
              </motion.a>
              <motion.a
                href="/"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white border border-white/30"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Voltar ao Início
              </motion.a>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
