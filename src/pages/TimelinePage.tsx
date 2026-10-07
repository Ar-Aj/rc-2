import { useState } from 'react'
import { Link } from 'react-router'
import { chapters, prehistory } from '../data/story'
import { Img } from '../components/ui/Img'
import { ArrowRight } from 'lucide-react'
import { cn } from '../lib/hooks'

export function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState<'all' | 'origins' | '80s' | '90s' | '00s' | '10s' | '20s'>('all')

  const filterItem = (year: string) => {
    if (selectedEra === 'all') return true
    if (selectedEra === 'origins') return year.includes('1968') || year.includes('1971')
    if (selectedEra === '80s') return year.startsWith('198')
    if (selectedEra === '90s') return year.startsWith('199')
    if (selectedEra === '00s') return year.startsWith('200')
    if (selectedEra === '10s') return year.startsWith('201')
    if (selectedEra === '20s') return year.startsWith('202') || year === 'Next'
    return true
  }

  const allItems = [
    ...prehistory.map((p) => ({ ...p, isPrehistory: true })),
    ...chapters.map((c) => ({ ...c, isPrehistory: false })),
  ]

  const displayedItems = allItems.filter((item) => filterItem(item.year))

  return (
    <div className="space-y-0">
      {/* 1. Header */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Historical Chronicle</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Four Decades of <br />
            <span className="display-italic text-gold-300">Continuous Delivery</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            From cloth sales and logistics in 1968 to building a G+5 structure in 21 days in 1984, thirty-two floors in Pydhonie, and an expansive foothill township in Neral.
          </p>
        </div>
      </section>

      {/* 2. Decadal Filter Strip */}
      <section className="py-6 bg-cream-100 border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-cream-100/95">
        <div className="px-site flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Complete Timeline' },
              { id: 'origins', label: '1968 – 1983 (Origins)' },
              { id: '80s', label: '1984 – 1989 (Founding)' },
              { id: '90s', label: '1990s (Commercial)' },
              { id: '00s', label: '2000s (Expansion)' },
              { id: '10s', label: '2010s (Townships)' },
              { id: '20s', label: '2020s & Ahead' },
            ].map((tab) => {
              const active = selectedEra === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedEra(tab.id as typeof selectedEra)}
                  className={cn(
                    'px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer',
                    active
                      ? 'bg-brown-800 text-cream-100 shadow-e1'
                      : 'bg-cream-50 text-stone-700 hover:bg-cream-200/80 border border-stone-200/80',
                  )}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <span className="text-xs font-mono text-stone-500">
            {displayedItems.length} Milestones
          </span>
        </div>
      </section>

      {/* 3. Chronicle Feed */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-5xl mx-auto space-y-12">
          <div className="relative border-l-2 border-stone-300 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-16">
            {displayedItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[33px] sm:-left-[57px] top-1.5 h-6 w-6 rounded-full bg-cream-100 border-4 border-brown-700 group-hover:border-gold-500 group-hover:scale-125 transition-all shadow-sm" />

                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-e2 transition-all space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-cream-200/60 text-brown-900">
                        {item.year}
                      </span>
                      {item.isPrehistory && (
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                          Prehistory
                        </span>
                      )}
                    </div>
                    <span className="font-display text-2xl font-bold text-gold-600/40">
                      #{item.mark}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-brown-950 font-bold group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                    {item.body}
                  </p>

                  {item.image && (
                    <div className="pt-2">
                      <div className="aspect-16/9 max-w-lg rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
                        <Img
                          k={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  )}

                  {item.slug && (
                    <div className="pt-2">
                      <Link
                        to={`/projects/${item.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brown-800 hover:text-gold-600 transition-colors"
                      >
                        <span>View Project Profile</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow text-gold-400">The Next Milestone</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream-100">
            Be Part of Our Next Chapter
          </h2>
          <p className="text-cream-200/90 text-base sm:text-lg max-w-xl mx-auto font-light font-sans">
            Rapid Residency Phase IV is preparing to launch. Secure your residence at the foot of Matheran before public release.
          </p>
          <div className="pt-2">
            <Link
              to="/projects/rapid-residency-phase-4"
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
            >
              <span>Explore Rapid Residency Phase IV</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
