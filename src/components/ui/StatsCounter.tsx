import { useState, useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../../lib/hooks'

interface CounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number // ms
  decimals?: number
  label: string
  sublabel?: string
}

function CounterItem({ end, prefix = '', suffix = '', duration = 2000, decimals = 0, label, sublabel }: CounterProps) {
  const [value, setValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const elRef = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) {
      setValue(end)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.25 },
    )

    if (elRef.current) observer.observe(elRef.current)
    return () => observer.disconnect()
  }, [hasStarted, reduced, end])

  useEffect(() => {
    if (!hasStarted || reduced) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // Ease out quart
      const ease = 1 - Math.pow(1 - progress, 4)
      setValue(parseFloat((ease * end).toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    requestAnimationFrame(step)
  }, [hasStarted, end, duration, decimals, reduced])

  return (
    <div ref={elRef} className="flex flex-col border-l border-brown-800/80 pl-6 sm:pl-8 py-2">
      <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-cream-100 flex items-baseline gap-0.5">
        {prefix && <span className="text-3xl sm:text-4xl text-gold-400 font-sans">{prefix}</span>}
        <span className="tabular-nums">{value.toLocaleString()}</span>
        {suffix && <span className="text-3xl sm:text-4xl text-gold-400 font-sans ml-1">{suffix}</span>}
      </div>
      <div className="mt-2">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-cream-200 block">
          {label}
        </span>
        {sublabel && (
          <span className="text-[11px] text-cream-300/60 font-sans block mt-0.5">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  )
}

export function StatsCounter() {
  const years = new Date().getFullYear() - 1984

  return (
    <section className="bg-brown-950 text-cream-100 py-20 border-y border-brown-800 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="px-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <CounterItem
            end={years}
            suffix="+"
            label="Years of Excellence"
            sublabel="Family heritage since 1984"
          />
          <CounterItem
            end={20}
            suffix="+"
            label="Delivered Projects"
            sublabel="Across Mumbai, Neral & Khopoli"
          />
          <CounterItem
            end={600}
            suffix="+"
            label="Homes & Units"
            sublabel="Built with enduring quality"
          />
          <CounterItem
            end={7.25}
            suffix="L"
            decimals={2}
            label="Sq.ft Development Pipeline"
            sublabel="Byculla · Andheri · Neral"
          />
        </div>
      </div>
    </section>
  )
}
