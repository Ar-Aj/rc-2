import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/hooks'

type FilterKey = 'all' | 'upcoming' | 'current' | 'completed'

export function FeaturedShowcase() {
  const [filter, setFilter] = useState<FilterKey>('all')

  const filtered = projects
    .filter((p) => p.hasPage)
    .filter((p) => {
      if (filter === 'all') return true
      return p.status === filter
    })

  return (
    <section className="py-section bg-cream-100/60 border-t border-stone-200">
      <div className="px-site space-y-12">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-stone-300 pb-8">
          <SectionHeading
            eyebrow="Architectural Showcase"
            title="Landmarks of"
            italicAccent="Distinction"
            description="From South Mumbai towers to foothill townships — every development designed with permanence, verified materials, and meticulous execution."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Developments' },
              { id: 'upcoming', label: 'Upcoming Launch' },
              { id: 'current', label: 'Ready to Move' },
              { id: 'completed', label: 'Completed Portfolio' },
            ].map((tab) => {
              const active = filter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id as FilterKey)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer',
                    active
                      ? 'bg-brown-800 text-cream-100 shadow-e1'
                      : 'bg-cream-50 text-stone-600 hover:text-brown-950 border border-stone-300',
                  )}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((proj, idx) => (
            <ProjectCard
              key={proj.slug}
              project={proj}
              priority={idx < 2}
              variant={idx === 0 && filter === 'all' ? 'standard' : 'standard'}
            />
          ))}
        </div>

        {/* Bottom link to complete 20+ archive */}
        <div className="pt-8 text-center border-t border-stone-300/80">
          <Link
            to="/projects"
            className="btn btn-outline text-brown-950 hover:text-cream-100 !px-8"
          >
            <span>View Complete Project Archive (20+ Developments)</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
