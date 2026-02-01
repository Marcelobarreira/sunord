// components/ImageCarousel.tsx
'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselImages = [
  { src: '/images/foto1.png', alt: 'SUNORD Engenharia' },
  { src: '/images/foto2.png', alt: 'Projetos e Construções' },
  { src: '/images/foto3.png', alt: 'Engenharia Civil' },
  { src: '/images/obra-01.jpg', alt: 'Obras de Engenharia' },
  { src: '/images/obra-02.jpg', alt: 'Galpão MRO Logistics' },
  { src: '/images/obra-05.jpg', alt: 'Infraestrutura' },
  { src: '/images/obra-07.jpg', alt: 'Projetos e Construções' },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function ImageCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const imageIndex = ((page % carouselImages.length) + carouselImages.length) % carouselImages.length

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }, [page])

  const goToSlide = useCallback((index: number) => {
    const newDirection = index > imageIndex ? 1 : -1
    setPage([index, newDirection])
  }, [imageIndex])

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [paginate])

  return (
    <section className="relative w-full h-[520px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary-900" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0"
        >
          <Image
            src={carouselImages[imageIndex].src}
            alt={carouselImages[imageIndex].alt}
            fill
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          {/* Gradient overlay - tons de verde/teal */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/75 to-teal-dark/65" />
          {/* Accent decorativo */}
          <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-secondary/15 to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-cyan/15 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-6 md:px-4 z-10">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary/20 backdrop-blur-sm text-secondary-light text-xs sm:text-sm font-semibold mb-3 sm:mb-6 border border-secondary/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SUNORD Engenharia
          </motion.span>

          {/* Mobile Title */}
          <motion.h1
            className="block sm:hidden text-xl font-bold text-white mb-3 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Projetos e Construções com{' '}
            <span className="text-secondary-light">Tecnologia e Sustentabilidade</span>

          </motion.h1>

          {/* Desktop Title */}
          <motion.h1
            className="hidden sm:block text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Projetos e Construções com{' '}
            <span className="bg-gradient-to-r from-secondary via-teal-light to-cyan bg-clip-text text-transparent">
              Tecnologia e Sustentabilidade
            </span>

          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-white/90 drop-shadow mb-5 sm:mb-8 leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Soluções integradas de engenharia com agilidade, qualidade e preços competitivos.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#form"
              className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-secondary to-teal text-white font-semibold shadow-lg text-sm sm:text-base"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Orçamento
            </motion.a>
            <motion.a
              href="/servicos"
              className="px-6 sm:px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/30 hover:bg-white/20 transition-colors text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Nossos Serviços
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <motion.button
        onClick={() => paginate(-1)}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors z-20 border border-white/20"
        aria-label="Anterior"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={() => paginate(1)}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-colors z-20 border border-white/20"
        aria-label="Próximo"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Dots indicator - hidden on mobile/tablet */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-20">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === imageIndex
                ? 'w-8 bg-gradient-to-r from-secondary to-teal'
                : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </section>
  )
}
