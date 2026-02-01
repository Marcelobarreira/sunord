// components/AnimatedHome.tsx
'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/ContactForm'
import { ServiceCard } from '@/components/ServiceCard'
import { services, diferenciais, siteConfig } from '@/lib/content'
import {
  FadeInUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverScale
} from '@/components/animations/MotionComponents'

// Cores verde/teal/cyan
const iconColors = [
  'from-primary to-teal',
  'from-secondary to-cyan',
  'from-teal to-primary-light',
  'from-cyan to-secondary',
]

export function AnimatedHome() {
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da SUNORD Engenharia.')
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${message}`

  return (
    <>
      {/* Por que contratar + Form Section */}
      <section className="py-16 md:py-24 section-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Por que contratar */}
            <SlideInLeft>
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-primary/10 to-teal/10 text-primary text-sm font-medium mb-4">
                  Excelência em Engenharia
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="text-gray-800">Por que contratar a </span>
                  <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">SUNORD Engenharia</span>
                  <span className="text-gray-800"> para sua Obra?</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Contratar a SUNORD Engenharia é assegurar excelência em projetos e construções, com foco em qualidade, sustentabilidade e inovação. Com experiência comprovada, utilizamos tecnologias avançadas e seguimos rigorosos padrões de qualidade e segurança.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Como contratar nossos serviços?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Entre em contato pelo telefone{' '}
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="text-secondary font-semibold hover:text-teal transition-colors">
                    {siteConfig.phone}
                  </a>
                  , ou utilize o formulário para solicitar uma avaliação personalizada!
                </p>

                {/* Services list */}
                <StaggerContainer staggerDelay={0.15} className="space-y-4">
                  {services.slice(0, 4).map((service, index) => (
                    <StaggerItem key={service.id}>
                      <motion.div
                        className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                        whileHover={{ x: 5 }}
                      >
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${iconColors[index]} flex items-center justify-center shadow-lg`}>
                          <span className="text-white font-bold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">{service.title}</h4>
                          <p className="text-gray-500 text-sm">{service.shortDescription}</p>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <motion.a
                  href="/servicos"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-teal text-white font-semibold shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Ver todos os serviços
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </SlideInLeft>

            {/* Right - Form */}
            <SlideInRight delay={0.2}>
              <div className="lg:sticky lg:top-24">
                <ContactForm />
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-secondary/10 to-teal/10 text-secondary text-sm font-medium mb-4">
                O que fazemos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-teal to-cyan bg-clip-text text-transparent">
                  Nossos Serviços
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Soluções completas em engenharia civil, infraestrutura e construção.
              </p>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <StaggerItem key={service.id}>
                <HoverScale scale={1.03}>
                  <ServiceCard
                    id={service.id}
                    title={service.title}
                    shortDescription={service.shortDescription}
                    icon={service.icon}
                    colorIndex={index}
                  />
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-16 md:py-24 section-gradient-alt">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-teal/10 to-cyan/10 text-teal text-sm font-medium mb-4">
                Nossos Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-secondary via-teal to-cyan bg-clip-text text-transparent">
                  Por que escolher a SUNORD Engenharia?
                </span>
              </h2>
            </div>
          </FadeInUp>
          <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <StaggerItem key={index}>
                <HoverScale scale={1.05}>
                  <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                    <motion.div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${iconColors[index % iconColors.length]} text-white mb-4 shadow-lg`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary overflow-hidden relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Pronto para iniciar sua obra?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Entre em contato e solicite um orçamento para seu projeto.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-secondary px-8 py-4 text-lg font-bold text-white shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(0,0,0,0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Fale Conosco pelo WhatsApp
            </motion.a>
          </FadeInUp>
        </div>
      </section>
    </>
  )
}
