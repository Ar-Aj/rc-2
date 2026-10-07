import { useState, useRef, useCallback, type MouseEvent, type TouchEvent, type KeyboardEvent } from 'react'
import { Img } from './Img'
import type { MediaKey } from '../../data/media.generated'
import { cn } from '../../lib/hooks'

interface BeforeAfterSliderProps {
  beforeKey: MediaKey
  beforeLabel?: string
  afterKey: MediaKey
  afterLabel?: string
  alt: string
  aspectRatio?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeKey,
  beforeLabel = 'Day View',
  afterKey,
  afterLabel = 'Night View',
  alt,
  aspectRatio = '16 / 10',
  className,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = useState(50) // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const onMouseDown = () => setIsDragging(true)
  const onMouseUp = () => setIsDragging(false)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX)
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      setSliderPos((p) => Math.max(0, p - 5))
    } else if (e.key === 'ArrowRight') {
      setSliderPos((p) => Math.min(100, p + 5))
    }
  }

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label={`${alt} comparison between ${beforeLabel} and ${afterLabel}`}
      aria-valuenow={Math.round(sliderPos)}
      aria-valuemin={0}
      aria-valuemax={100}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
      onKeyDown={onKeyDown}
      className={cn(
        'group relative overflow-hidden select-none cursor-ew-resize rounded-xs border border-stone-300 shadow-e3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400',
        className,
      )}
      style={{ aspectRatio }}
    >
      {/* "After" Image (Underneath, full width) - usually Night View */}
      <div className="absolute inset-0 h-full w-full">
        <Img k={afterKey} alt={`${alt} - ${afterLabel}`} fill className="h-full w-full object-cover" />
        <span className="absolute bottom-5 right-5 z-10 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold glass-dark text-cream-100">
          {afterLabel}
        </span>
      </div>

      {/* "Before" Image (Clipped by slider position) - usually Day View */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Img k={beforeKey} alt={`${alt} - ${beforeLabel}`} fill className="h-full w-full object-cover" />
        <span className="absolute bottom-5 left-5 z-10 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold glass-light text-brown-950">
          {beforeLabel}
        </span>
      </div>

      {/* Divider Line & Magnetic Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-0.5 bg-cream-100 shadow-[0_0_12px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-cream-100 text-brown-900 border border-brown-700/40 shadow-e3 transition-transform duration-200 group-hover:scale-110">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
