import { useState } from 'react'
import { Link } from 'react-router'
import { testimonials } from '../data/story'
import { SampleBadge } from '../components/ui/SampleBadge'
import { Quote, ArrowRight } from 'lucide-react'
import { cn } from '../lib/hooks'

export function TestimonialsPage() {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'resort'>('all')

  const filterItem = (t: (typeof testimonials)[number]) => {
    if (filter === 'all') return true
    if (filter === 'residential') return t.project.includes('Residency') || t.project.includes('Heights')
    if (filter === 'commercial') return t.project.includes('Shoppers')
    if (filter === 'resort') return t.project.includes('Royal')
    return true
  }

  const displayedTestimonials = testimonials.filter(filterItem)

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Community Voices</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Stories of <br />
            <span className="display-italic text-gold-300">Living & Thriving</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            What residents, shop owners, and multi-generational families have experienced across four decades of Rapid Construction developments.
          </p>

          <div className="pt-2">
            <SampleBadge label="Representative Resident Reviews — Verified Profiles Pending Launch" />
          </div>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="py-6 bg-cream-100 border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-cream-100/95">
        <div className="px-site flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Reviews' },
              { id: 'residential', label: 'Residential Families' },
              { id: 'commercial', label: 'Retail & Commercial' },
              { id: 'resort', label: 'Resorts & Bungalows' },
            ].map((tab) => {
              const active = filter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as typeof filter)}
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
            {displayedTestimonials.length} Stories
          </span>
        </div>
      </section>

      {/* 3. Testimonial Cards */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm hover:shadow-e2 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="h-8 w-8 text-gold-400/50" />
                    {item.sample && <SampleBadge label="Sample Voice" />}
                  </div>

                  <p className="font-display text-xl sm:text-2xl text-brown-950 italic leading-snug">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-1">
                  <h4 className="font-sans font-bold text-sm text-brown-900">
                    {item.name}
                  </h4>
                  <p className="font-mono text-xs text-gold-600 font-medium">
                    {item.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow text-gold-400">Join the Community</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream-100">
            Find Your Home in Our Next Community
          </h2>
          <p className="text-cream-200/90 text-base sm:text-lg max-w-xl mx-auto font-light font-sans">
            Ready-to-move homes are currently available at Rapid Residency Phase III, and reservations are opening for Phase IV.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects/current"
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
            >
              <span>Explore Ready Homes (Phase III)</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/book-site-visit"
              className="btn btn-outline border-cream-200/30 text-cream-100 hover:bg-cream-100/10"
            >
              <span>Book Site Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
