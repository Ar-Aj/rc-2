import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/hooks'

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  faqs: readonly FaqItem[]
  className?: string
  dark?: boolean
}

export function FaqAccordion({ faqs, className, dark = false }: FaqAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className={cn('space-y-3', className)}>
      {faqs.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <div
            key={idx}
            className={cn(
              'rounded-xs transition-all duration-300 border',
              dark
                ? isOpen
                  ? 'bg-brown-900/90 border-gold-400/40 text-cream-100'
                  : 'bg-brown-950/60 border-brown-800 text-cream-200/90 hover:border-brown-700'
                : isOpen
                  ? 'bg-cream-100 border-brown-700/40 text-brown-950 shadow-e1'
                  : 'bg-cream-50 border-stone-200 text-stone-700 hover:border-stone-300',
            )}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl font-medium tracking-tight">
                {item.q}
              </span>
              <div
                className={cn(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300',
                  dark ? 'bg-brown-800 text-gold-300' : 'bg-stone-200/80 text-brown-800',
                  isOpen && 'rotate-180',
                )}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed opacity-90 border-t border-current/10 font-sans">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
