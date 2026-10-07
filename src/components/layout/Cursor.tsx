import { useEffect, useRef, useState } from 'react'
import { useFinePointer, usePrefersReducedMotion } from '../../lib/hooks'

export function Cursor() {
  const isFine = useFinePointer()
  const reduced = usePrefersReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  useEffect(() => {
    if (!isFine || reduced) return

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (!visible) setVisible(true)

      const target = e.target as HTMLElement | null
      const isInteractive = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"], [data-cursor="pointer"]'),
      )
      setHovered(isInteractive)
    }

    const onMouseDown = () => setActive(true)
    const onMouseUp = () => setActive(false)
    const onMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)

    let rafId: number
    const loop = () => {
      // Smooth lerp for outer ring
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`
      }
      rafId = requestAnimationFrame(loop)
    }
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      cancelAnimationFrame(rafId)
    }
  }, [isFine, reduced, visible])

  if (!isFine || reduced) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden transition-opacity duration-300"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 h-2 w-2 rounded-full bg-brown-700 transition-[transform,width,height,background-color] duration-150"
        style={{
          backgroundColor: hovered ? 'var(--color-gold-400)' : 'var(--color-brown-700)',
          transform: `scale(${active ? 0.6 : 1})`,
        }}
      />
      {/* Lerping ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -ml-4 -mt-4 h-8 w-8 rounded-full border border-brown-700/50 transition-[border-color,transform,width,height] duration-200"
        style={{
          transform: `scale(${hovered ? 1.7 : active ? 0.8 : 1})`,
          borderColor: hovered ? 'var(--color-gold-400)' : 'var(--color-brown-700)',
          backgroundColor: hovered ? 'rgba(201, 163, 91, 0.08)' : 'transparent',
        }}
      />
    </div>
  )
}
