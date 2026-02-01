// app/page.tsx
import { ImageCarousel } from '@/components/ImageCarousel'
import { AnimatedHome } from '@/components/AnimatedHome'

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <ImageCarousel />

      {/* Animated Sections */}
      <AnimatedHome />
    </>
  )
}
