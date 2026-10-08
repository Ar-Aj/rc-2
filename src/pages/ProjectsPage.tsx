import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router'
import { projects, type Project, type ProjectStatus, type MapZone } from '../data/projects'
import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ArrowUpRight, Download } from 'lucide-react'
import { cn } from '../lib/hooks'

export function ProjectsPage() {
  const location = useLocation()

  // Determine initial status filter from URL path
  const getInitialFilter = (): ProjectStatus | 'all' => {
    if (location.pathname.includes('/completed')) return 'completed'
    if (location.pathname.includes('/current')) return 'current'
    if (location.pathname.includes('/upcoming')) return 'upcoming'
    return 'all'
  }

  const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>(getInitialFilter)
  const [zoneFilter, setZoneFilter] = useState<MapZone | 'all'>('all')

  useEffect(() => {
    setStatusFilter(getInitialFilter())
  }, [location.pathname])

  const filteredProjects = projects.filter((p: Project) => {
    if (statusFilter !== 'all' && p.status !== statusFilter) return false
    if (zoneFilter !== 'all' && p.zone !== zoneFilter) return false
    return true
  })

  return (
    <div className="space-y-0">
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-cream-300">Architectural Archive</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Portfolio of <br />
            <span className="display-italic text-cream-200">Enduring Landmarks</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            Twenty-four projects delivered across Mumbai, Neral, and Khopoli since 1984. Explore ready-to-move
            residences, upcoming launches, and four decades of delivered structures.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="/downloads/rapid-construction-portfolio.pdf"
              download
              className="btn btn-outline text-cream-100 hover:text-brown-950 !py-2.5 !text-xs"
            >
              <Download className="h-4 w-4 text-cream-300" />
              <span>Download Complete Portfolio (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Controls */}
      <section className="py-8 bg-cream-100 border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-cream-100/95">
        <div className="px-site flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mr-2 hidden sm:inline-block">
              Status:
            </span>
            {[
              { id: 'all', label: 'All Developments' },
              { id: 'upcoming', label: 'Upcoming Launch' },
              { id: 'current', label: 'Ready to Move' },
              { id: 'completed', label: 'Completed Portfolio' },
            ].map((tab) => {
              const active = statusFilter === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id as ProjectStatus | 'all')}
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

          {/* Region / Zone Filter */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-bold mr-1 hidden lg:inline-block">
              Region:
            </span>
            <select
              value={zoneFilter}
              onChange={(e) => setZoneFilter(e.target.value as MapZone | 'all')}
              className="px-3 py-2 rounded-xs bg-cream-50 border border-stone-300 text-xs font-semibold text-brown-900 tracking-wider uppercase cursor-pointer focus:outline-none focus:border-brown-700"
            >
              <option value="all">All Regions (Mumbai & Beyond)</option>
              <option value="south-mumbai">South Mumbai (Narayan Dhuru, Byculla, Mazgaon)</option>
              <option value="andheri">Western Suburbs (Andheri West)</option>
              <option value="neral">Neral (Foothills of Matheran)</option>
              <option value="khopoli">Khopoli (Sahyadri Gateway)</option>
            </select>
          </div>
        </div>
      </section>

      {/* 3. Primary Projects Grid (Showcased Developments) */}
      <section className="py-20 bg-cream-50">
        <div className="px-site space-y-12">
          <div className="flex items-baseline justify-between border-b border-stone-200 pb-4">
            <span className="text-xs uppercase tracking-widest text-brown-700 font-bold">
              Showing {filteredProjects.length} of {projects.length} Total Records
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p: Project) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete 24-Record Historical Chronology Table */}
      <section className="py-20 bg-cream-100 border-t border-stone-300">
        <div className="px-site space-y-8">
          <SectionHeading
            eyebrow="Complete Historical Index"
            title="The Comprehensive"
            italicAccent="Delivery Record"
            description="Every building completed, owned, and delivered by Rapid Construction from 1984 to today."
          />

          <div className="overflow-x-auto rounded-xs border border-stone-300 bg-cream-50 shadow-e1">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-brown-950 text-cream-100 font-sans tracking-wider uppercase text-[10px]">
                  <th className="py-3.5 px-4">#</th>
                  <th className="py-3.5 px-4">Project Name</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Years</th>
                  <th className="py-3.5 px-4">Height / Structure</th>
                  <th className="py-3.5 px-4">Units / Scale</th>
                  <th className="py-3.5 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-sans text-stone-700">
                {projects.map((proj: Project, idx: number) => (
                  <tr key={proj.slug} className="hover:bg-cream-100/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono text-stone-400">{String(idx + 1).padStart(2, '0')}</td>
                    <td className="py-3.5 px-4 font-semibold text-brown-950">
                      {proj.name}
                    </td>
                    <td className="py-3.5 px-4">{proj.area}, {proj.city}</td>
                    <td className="py-3.5 px-4">{proj.years}</td>
                    <td className="py-3.5 px-4">{proj.storeys}</td>
                    <td className="py-3.5 px-4">{proj.units.join(' · ') || '—'}</td>
                    <td className="py-3.5 px-4 text-right">
                      {proj.hasPage ? (
                        <Link
                          to={`/projects/${proj.slug}`}
                          className="inline-flex items-center gap-1 font-semibold text-brown-800 hover:text-brown-700 transition-colors"
                        >
                          <span>View</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </Link>
                      ) : (
                        <span className="text-stone-400 italic">Archive Record</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
