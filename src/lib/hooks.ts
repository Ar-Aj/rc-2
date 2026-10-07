import { useEffect, useState, useSyncExternalStore } from 'react'

function subscribeMedia(query: string) {
  return (cb: () => void) => {
    const mql = window.matchMedia(query)
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
  }
}

export function useMediaQuery(query: string, server = false) {
  return useSyncExternalStore(
    subscribeMedia(query),
    () => window.matchMedia(query).matches,
    () => server,
  )
}

export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)')
export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)')

/** True once the window has scrolled past `offset` px. */
export function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > offset)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [offset])
  return scrolled
}

/** 'up' | 'down' scroll direction with a small dead-zone. */
export function useScrollDirection(threshold = 8) {
  const [dir, setDir] = useState<'up' | 'down'>('up')
  useEffect(() => {
    let last = window.scrollY
    const on = () => {
      const y = window.scrollY
      if (Math.abs(y - last) < threshold) return
      setDir(y > last && y > 200 ? 'down' : 'up')
      last = y
    }
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [threshold])
  return dir
}

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ')
