import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, Calendar } from 'lucide-react'
import { Img } from '../ui/Img'
import { type MediaKey } from '../../data/media.generated'
import { useFinePointer, usePrefersReducedMotion } from '../../lib/hooks'

interface HeroSlide {
  id: string
  title: string
  italicAccent: string
  subtitle: string
  tag: string
  badge: string
  image: MediaKey
  link: string
}

const slides: HeroSlide[] = [
  {
    id: 'residency-phase-4',
    title: 'Rapid Residency',
    italicAccent: 'Phase IV',
    subtitle: '1 & 2 BHK Residences · 5 Minutes from Neral Station · Swimming Pool & Gym',
    tag: 'Upcoming Launch · Neral Foothills',
    badge: 'New Launch',
    image: 'projects/residency-phase-4/elevation-night',
    link: '/projects/rapid-residency-phase-4',
  },
  {
    id: 'maimoon-tower',
    title: 'Maimoon',
    italicAccent: 'Tower',
    subtitle: 'Twenty-One Storeys of Quiet Authority in the Heart of Byculla',
    tag: 'Completed Landmark · South Mumbai',
    badge: 'Delivered',
    image: 'projects/maimoon-tower/elevation',
    link: '/projects/maimoon-tower',
  },
  {
    id: 'rapid-heights',
    title: 'Rapid',
    italicAccent: 'Heights',
    subtitle: 'G+32 Iconic Residential Tower with Sweeping City Views over Kolsa Mohalla',
    tag: 'Landmark Height · Pydhonie',
    badge: 'Delivered',
    image: 'projects/rapid-heights/tower',
    link: '/projects/rapid-heights',
  },
  {
    id: 'residency-phase-3',
    title: 'Rapid Residency',
    italicAccent: 'Phase III',
    subtitle: 'Completed G+7 Tower · Ready to Move Homes & Ground Retail Frontage',
    tag: 'Now Selling · Ready to Move',
    badge: 'Ready to Move',
    image: 'projects/residency-phase-3/completed-wing',
    link: '/projects/rapid-residency-phase-3',
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isFine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const heroRef = useRef<HTMLDivElement>(null)
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  // Auto rotate slides every 8 seconds if not reduced motion
  useEffect(() => {
    if (reduced) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8500)
    return () => clearInterval(timer)
  }, [reduced])

  // Mouse parallax on hero
  useEffect(() => {
    if (!isFine || reduced) return

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 20
      const y = (e.clientY / innerHeight - 0.5) * 20
      setMouseOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isFine, reduced])

  const active = slides[currentSlide]

  return (
    <section
      ref={heroRef}
      className="relative min-h-[100svh] w-full bg-brown-950 text-cream-100 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Image Plate with cross-fade & subtle mouse parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(1.05)`,
        }}
      >
        {slides.map((s, index) => {
          const isVisible = index === currentSlide
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Img
                k={s.image}
                alt={s.title}
                priority={index === 0}
                fill
                className="h-full w-full object-cover"
              />
            </div>
          )
        })}

        {/* Cinematic Film Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-brown-950/40 to-brown-950/70" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-brown-950/20 to-brown-950/80" />
        <div className="absolute inset-0 grain opacity-20 pointer-events-none" />
      </div>

      {/* Top spacing to account for fixed header */}
      <div className="h-28 sm:h-36" />

      {/* Hero Content (Expansive Full-Width Layout) */}
      <div className="px-site relative z-10 w-full py-12">
        <div className="space-y-6">
          {/* Eyebrow / Tag */}
          <div className="flex items-center gap-3">
            <span className="eyebrow text-cream-200 bg-brown-900/85 px-3.5 py-1 rounded-full border border-cream-300/30 backdrop-blur-md">
              {active.tag}
            </span>
            <span className="text-[11px] uppercase tracking-widest text-cream-300/80 font-medium hidden sm:inline-block">
              Est. 1984 · Mumbai Builders & Developers
            </span>
          </div>

          {/* Massive Display Title */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-cream-100 tracking-tight leading-[0.92]">
            {active.title}{' '}
            <span className="display-italic font-light text-cream-200">
              {active.italicAccent}
            </span>
          </h1>

          {/* Subtitle / Key Specs - constrained to readable max-w-2xl */}
          <p className="text-base sm:text-xl text-cream-200/90 max-w-2xl font-sans font-light leading-relaxed">
            {active.subtitle}
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link to={active.link} className="btn btn-primary !px-7">
              <span>Explore Residence</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <Link to="/book-site-visit" className="btn btn-outline text-cream-100 hover:text-brown-950 !px-7">
              <Calendar className="h-4 w-4 text-cream-300" />
              <span>Book Site Visit</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Slide Navigation Indicators & Scroll Cue */}
      <div className="px-site relative z-10 pb-8 pt-4 border-t border-cream-100/10 flex flex-wrap items-center justify-between gap-6 backdrop-blur-xs">
        {/* Slide Selector Buttons */}
        <div className="flex items-center gap-3">
          {slides.map((s, idx) => {
            const isSelected = idx === currentSlide
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`group flex items-center gap-2.5 py-1 text-left transition-all cursor-pointer ${
                  isSelected ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
                aria-label={`Go to slide: ${s.title}`}
              >
                <div
                  className={`h-1 transition-all duration-500 rounded-full ${
                    isSelected ? 'w-10 bg-gold-400' : 'w-4 bg-cream-100/40 group-hover:bg-cream-100/80'
                  }`}
                />
                <span className="text-[11px] font-sans font-semibold uppercase tracking-widest hidden md:inline-block">
                  0{idx + 1} {s.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Scroll Cue */}
        <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-cream-300/70">
          <span>Scroll to explore legacy</span>
          <div className="h-8 w-0.5 bg-cream-300/30 overflow-hidden relative">
            <div className="h-full w-full bg-gold-400 scroll-cue" />
          </div>
        </div>
      </div>
    </section>
  )
}
