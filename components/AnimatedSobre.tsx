// components/AnimatedSobre.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutContent, siteConfig } from '@/lib/content'
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ScaleIn
} from '@/components/animations/MotionComponents'

// Dados da equipe com imagens reais
const teamWithImages = [
  {
    name: 'Engenheiro Responsável',
    role: 'Diretor Técnico',
    credentials: [
      'Engenharia Civil',
      'Gestão de Projetos',
      'Sustentabilidade na Construção',
    ],
    image: '/images/obra-01.jpg',
    color: 'from-primary to-teal',
  },
  {
    name: 'Equipe Técnica',
    role: 'Engenharia e Projetos',
    credentials: [
      'Edificações e Infraestrutura',
      'Instalações Elétricas e Hidráulicas',
      'Estruturas Metálicas',
    ],
    image: '/images/obra-02.jpg',
    color: 'from-secondary to-cyan',
  },
]

export function AnimatedSobre() {
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre a SUNORD Engenharia.')
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <>
      {/* Header com gradiente vibrante */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-teal-dark" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-secondary-light text-sm font-medium mb-4 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Conheça a SUNORD Engenharia
          </motion.span>
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre{' '}
            <span className="bg-gradient-to-r from-secondary via-teal-light to-cyan bg-clip-text text-transparent">
              Nós
            </span>
          </motion.h1>
          <motion.p
            className="text-white/80 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça a SUNORD Engenharia e nossa equipe de especialistas em engenharia civil.
          </motion.p>
        </div>
      </section>

      {/* Quem Somos - com gradiente de fundo */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-teal/10 text-primary text-sm font-medium mb-4">
                  Nossa História
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                    Quem Somos
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {aboutContent.quemSomos}
                </p>
              </div>
            </SlideInLeft>
            <SlideInRight delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal/20 z-10" />
                <HoverScale scale={1.03}>
                  <Image
                    src="/images/edificacoes.jpg"
                    alt="SUNORD Engenharia Obras"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </HoverScale>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Missão e Visão - com cards coloridos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-secondary/10 to-teal/10 text-secondary text-sm font-medium mb-4">
                Nossos Valores
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-primary via-teal to-cyan bg-clip-text text-transparent">
                  Missão e Visão
                </span>
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StaggerItem>
              <HoverScale scale={1.02}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-teal-light/10 border border-primary/10 shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal/10 rounded-full blur-2xl" />
                  <motion.div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-teal text-white mb-4 shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
                  <p className="text-gray-600 relative z-10">{aboutContent.missao}</p>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.02}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-secondary-50 to-cyan-light/10 border border-secondary/10 shadow-lg overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl" />
                  <motion.div
                    className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-cyan text-white mb-4 shadow-lg"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-secondary mb-4">Visão</h3>
                  <p className="text-gray-600 relative z-10">{aboutContent.visao}</p>
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Team - seção vibrante */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-teal-light/20" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal/10 to-cyan/10 text-teal text-sm font-medium mb-4">
                Especialistas
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-teal to-secondary bg-clip-text text-transparent">
                  Nossa Equipe
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Profissionais especializados em engenharia civil e infraestrutura.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.2} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {teamWithImages.map((member, index) => (
              <StaggerItem key={index} className="h-full">
                <HoverScale scale={1.02} className="h-full">
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full flex flex-col overflow-hidden">
                    {/* Decorative gradient corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${member.color} opacity-10 rounded-bl-full`} />

                    <div className="flex items-start gap-4 flex-1 relative z-10">
                      <motion.div
                        className={`relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-offset-2 ${index === 0 ? 'ring-primary/30' : 'ring-secondary/30'}`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                        <p className={`text-sm font-medium mb-3 ${index === 0 ? 'text-primary' : 'text-secondary'}`}>{member.role}</p>
                        <ul className="text-gray-600 text-sm space-y-2">
                          {member.credentials.map((credential, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-teal' : 'bg-cyan'}`} />
                              <span>{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Galeria de Atuação */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium mb-4">
                Galeria
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-secondary via-teal to-primary bg-clip-text text-transparent">
                  Nossa Atuação
                </span>
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/obra-05.jpg"
                    alt="Infraestrutura Urbana"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Infraestrutura Urbana
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/obra-06.jpg"
                    alt="Pavimentação"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Pavimentação
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
            <StaggerItem>
              <HoverScale scale={1.03}>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg group">
                  <Image
                    src="/images/obra-07.jpg"
                    alt="Terraplenagem"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Terraplenagem
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-teal-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Quer conhecer mais sobre nosso trabalho?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato e descubra como podemos ajudar sua empresa.
            </p>
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
              Fale Conosco
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
