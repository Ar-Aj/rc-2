import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './gsap'
import { usePrefersReducedMotion } from './hooks'

const LenisContext = createContext<Lenis | null>(null)

/** Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion()
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const raf = useRef<((t: number) => void) | null>(null)

  useEffect(() => {
    if (reduced) return
    const instance = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4), smoothWheel: true, wheelMultiplier: 0.95 })
    instance.on('scroll', ScrollTrigger.update)
    raf.current = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(raf.current)
    gsap.ticker.lagSmoothing(0)
    setLenis(instance)
    return () => {
      if (raf.current) gsap.ticker.remove(raf.current)
      instance.destroy()
      setLenis(null)
    }
  }, [reduced])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}

export const useLenis = () => useContext(LenisContext)
