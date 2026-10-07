import { Link } from 'react-router'
import { ArrowUpRight, MapPin, Building2 } from 'lucide-react'
import { type Project } from '../../data/projects'
import { Img } from './Img'
import { cn } from '../../lib/hooks'

interface ProjectCardProps {
  project: Project
  className?: string
  priority?: boolean
  variant?: 'featured' | 'standard' | 'compact'
}

export function ProjectCard({ project, className, priority = false, variant = 'standard' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'
  const isCompact = variant === 'compact'

  const statusColors = {
    upcoming: 'bg-gold-500/20 text-gold-300 border-gold-400/50',
    current: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/50',
    completed: 'bg-brown-900/60 text-cream-200 border-cream-300/30',
  }

  const content = (
    <div
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xs bg-cream-100 border border-stone-200/80 transition-all duration-500 hover:shadow-e3 hover:border-brown-700/40',
        isFeatured && 'lg:grid lg:grid-cols-12 lg:items-center',
        className,
      )}
    >
      {/* Image Plate */}
      <div
        className={cn(
          'plate relative overflow-hidden bg-brown-950',
          isFeatured ? 'lg:col-span-7 h-72 sm:h-96 lg:h-[480px]' : isCompact ? 'h-52' : 'h-72 sm:h-80',
        )}
      >
        {project.hero ? (
          <Img
            k={project.hero}
            alt={project.name}
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes={isFeatured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-brown-900 text-cream-300/40 font-display text-2xl uppercase">
            {project.name}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-brown-950/75 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Floating Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span
            className={cn(
              'px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase font-semibold rounded-full border backdrop-blur-md',
              statusColors[project.status],
            )}
          >
            {project.statusLabel}
          </span>
          <span className="px-2.5 py-1 text-[10px] tracking-[0.18em] uppercase font-medium rounded-full bg-brown-950/70 text-cream-200 border border-white/10 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Bottom image overlay meta */}
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-cream-100">
          <div className="flex items-center gap-1.5 opacity-90">
            <MapPin className="h-3.5 w-3.5 text-gold-400" />
            <span className="font-sans text-[11px] tracking-wider uppercase">{project.area}</span>
          </div>
          <span className="font-display tracking-widest text-cream-300/90 text-sm">{project.years}</span>
        </div>
      </div>

      {/* Content Plate */}
      <div
        className={cn(
          'flex flex-col justify-between p-6 sm:p-8',
          isFeatured ? 'lg:col-span-5 lg:p-10 xl:p-12' : '',
        )}
      >
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-brown-600 font-semibold block mb-1">
                {project.city}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-950 group-hover:text-brown-700 transition-colors">
                {project.name}
              </h3>
            </div>
            {project.hasPage && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brown-700/30 text-brown-800 transition-all duration-300 group-hover:bg-brown-700 group-hover:text-cream-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            )}
          </div>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Quick Specifications */}
          <div className="pt-3 border-t border-stone-200/80 grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium">Height</span>
              <span className="font-semibold text-brown-900 flex items-center gap-1 mt-0.5">
                <Building2 className="h-3 w-3 text-brown-600" />
                {project.storeys}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium">Configuration</span>
              <span className="font-semibold text-brown-900 truncate block mt-0.5" title={project.units.join(', ')}>
                {project.units.length > 0 ? project.units[0] : 'Landmark Address'}
              </span>
            </div>
          </div>
        </div>

        {project.hasPage ? (
          <div className="pt-6">
            <span className="link-draw text-brown-800 group-hover:text-brown-950">
              <span>Explore Residence Details</span>
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        ) : (
          <div className="pt-4 text-[11px] text-stone-500 italic">
            Delivered project archive · Rapid Construction
          </div>
        )}
      </div>
    </div>
  )

  if (project.hasPage) {
    return (
      <Link to={`/projects/${project.slug}`} className="block focus:outline-none">
        {content}
      </Link>
    )
  }

  return content
}
