import { useState, useRef } from 'react'
import { Link } from 'react-router'
import { chapters, prehistory, type Chapter } from '../../data/story'
import { Img } from './Img'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '../../lib/hooks'

export function TimelineTrack() {
  const allMilestones: Chapter[] = [...prehistory, ...chapters]
  const [selectedIdx, setSelectedIdx] = useState(2) // start at 1984 (index 2)
  const trackRef = useRef<HTMLDivElement>(null)

  const activeMilestone = allMilestones[selectedIdx]

  const scrollLeft = () => {
    if (selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1)
      scrollToIndex(selectedIdx - 1)
    }
  }

  const scrollRight = () => {
    if (selectedIdx < allMilestones.length - 1) {
      setSelectedIdx(selectedIdx + 1)
      scrollToIndex(selectedIdx + 1)
    }
  }

  const scrollToIndex = (idx: number) => {
    if (!trackRef.current) return
    const buttons = trackRef.current.querySelectorAll<HTMLButtonElement>('[data-timeline-btn]')
    const target = buttons[idx]
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  return (
    <div className="space-y-8">
      {/* Interactive Year Scrubber Bar */}
      <div className="relative border-b border-brown-800/80 pb-4">
        {/* Navigation arrows */}
        <div className="flex items-center justify-between pb-4">
          <span className="eyebrow text-gold-400">1984 — Present Chronicle</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollLeft}
              disabled={selectedIdx === 0}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brown-700 text-cream-200 hover:bg-gold-400 hover:text-brown-950 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous milestone"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              disabled={selectedIdx === allMilestones.length - 1}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brown-700 text-cream-200 hover:bg-gold-400 hover:text-brown-950 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next milestone"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Year Buttons Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2"
        >
          {allMilestones.map((m, idx) => {
            const isSelected = idx === selectedIdx
            return (
              <button
                key={m.year + idx}
                data-timeline-btn
                type="button"
                onClick={() => {
                  setSelectedIdx(idx)
                  scrollToIndex(idx)
                }}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 shrink-0 flex items-center gap-2 cursor-pointer',
                  isSelected
                    ? 'bg-gold-400 text-brown-950 shadow-glow font-bold'
                    : 'bg-brown-900/60 text-cream-300/70 hover:bg-brown-800 hover:text-cream-100 border border-brown-800',
                )}
              >
                <span className="font-sans">{m.year}</span>
                {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-brown-950" />}
              </button>
            )
          })}
        </div>
      </div>

      {/* Active Milestone Feature Spotlight Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-xs bg-brown-900/60 border border-brown-800 p-6 sm:p-10 lg:p-12 transition-all duration-500">
        {/* Left: Big Year & Story Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-light text-gold-400 tracking-tight leading-none">
              {activeMilestone.year}
            </span>
            <span className="eyebrow text-cream-300/60 uppercase">Milestone Chapter</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-cream-100 leading-tight">
            {activeMilestone.title}
          </h3>

          <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed font-sans max-w-xl">
            {activeMilestone.body}
          </p>

          {activeMilestone.slug && (
            <div className="pt-2">
              <Link
                to={`/projects/${activeMilestone.slug}`}
                className="btn btn-outline text-cream-100 hover:text-brown-950 !min-h-[2.8rem] !text-xs"
              >
                <span>View Project Landmark</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          )}
        </div>

        {/* Right: Architectural Photo / Sketch */}
        <div className="lg:col-span-5">
          {activeMilestone.image ? (
            <div className="plate rounded-xs overflow-hidden h-72 sm:h-84 lg:h-96 border border-cream-300/10 shadow-e3 bg-brown-950">
              <Img
                k={activeMilestone.image}
                alt={activeMilestone.title}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          ) : (
            <div className="h-72 sm:h-84 lg:h-96 rounded-xs border border-brown-800 bg-brown-950/60 flex flex-col items-center justify-center p-8 text-center space-y-3">
              <span className="font-display text-4xl text-gold-400/40 font-bold">1984</span>
              <p className="text-xs text-cream-300/60 uppercase tracking-widest">
                Rapid Construction Archive Record
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
