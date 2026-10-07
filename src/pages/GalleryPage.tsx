import { useState, useMemo } from 'react'
import { Link } from 'react-router'
import { Img } from '../components/ui/Img'
import { type MediaKey } from '../data/media.generated'
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '../lib/hooks'

interface GalleryItemDef {
  key: MediaKey
  title: string
  category: 'south-mumbai' | 'neral' | 'interiors' | 'craft'
  projectName?: string
  projectSlug?: string
  year?: string
}

const GALLERY_ITEMS: GalleryItemDef[] = [
  // South Mumbai
  {
    key: 'projects/maimoon-tower/elevation',
    title: 'Maimoon Tower — Architectural Elevation',
    category: 'south-mumbai',
    projectName: 'Maimoon Tower',
    projectSlug: 'maimoon-tower',
    year: '2023',
  },
  {
    key: 'projects/maimoon-tower/render',
    title: 'Maimoon Tower — Byculla Street Frontage',
    category: 'south-mumbai',
    projectName: 'Maimoon Tower',
    projectSlug: 'maimoon-tower',
    year: '2023',
  },
  {
    key: 'projects/rapid-heights/tower',
    title: 'Rapid Heights — 32 Floors Above Kolsa Mohalla',
    category: 'south-mumbai',
    projectName: 'Rapid Heights',
    projectSlug: 'rapid-heights',
    year: '2013',
  },
  {
    key: 'projects/rapid-heights/sky',
    title: 'Rapid Heights — Crown Perspective',
    category: 'south-mumbai',
    projectName: 'Rapid Heights',
    projectSlug: 'rapid-heights',
    year: '2013',
  },
  {
    key: 'projects/hotel-elegant/night',
    title: 'Hotel Elegant — Warm Dusk Façade',
    category: 'south-mumbai',
    projectName: 'Hotel Elegant',
    projectSlug: 'hotel-elegant',
    year: '2018',
  },
  {
    key: 'projects/hotel-elegant/day',
    title: 'Hotel Elegant — Street Presence on Narayan Dhuru St',
    category: 'south-mumbai',
    projectName: 'Hotel Elegant',
    projectSlug: 'hotel-elegant',
    year: '2018',
  },
  {
    key: 'projects/amin-building/sketch',
    title: 'Amin Building — The 21-Day Genesis (1984)',
    category: 'south-mumbai',
    year: '1984',
  },
  {
    key: 'projects/abbajumma-mansion/facade',
    title: 'Abbajumma Mansion — Narayan Dhuru Street (1985)',
    category: 'south-mumbai',
    year: '1985',
  },
  {
    key: 'projects/haji-building/sketch',
    title: 'Haji Building — Pydhonie Landmark (1988)',
    category: 'south-mumbai',
    year: '1988',
  },

  // Neral & Beyond
  {
    key: 'projects/residency-phase-4/elevation-day',
    title: 'Rapid Residency Phase IV — Sunlight Façade',
    category: 'neral',
    projectName: 'Rapid Residency Phase IV',
    projectSlug: 'rapid-residency-phase-4',
    year: 'Upcoming',
  },
  {
    key: 'projects/residency-phase-4/elevation-night',
    title: 'Rapid Residency Phase IV — Illuminated Dusk',
    category: 'neral',
    projectName: 'Rapid Residency Phase IV',
    projectSlug: 'rapid-residency-phase-4',
    year: 'Upcoming',
  },
  {
    key: 'projects/residency-phase-3/completed-wing',
    title: 'Rapid Residency Phase III — G+7 Ready Mid-Rise',
    category: 'neral',
    projectName: 'Rapid Residency Phase III',
    projectSlug: 'rapid-residency-phase-3',
    year: '2019',
  },
  {
    key: 'projects/rapid-residency/township-aerial',
    title: 'Rapid Residency — 25 Buildings at Matheran Foothills',
    category: 'neral',
    projectName: 'Rapid Residency',
    projectSlug: 'rapid-residency',
    year: '2011–16',
  },
  {
    key: 'projects/rapid-residency/phase-2-aerial',
    title: 'Rapid Residency Phase II — Courtyard Layout',
    category: 'neral',
    projectName: 'Rapid Residency',
    projectSlug: 'rapid-residency',
    year: '2016',
  },
  {
    key: 'projects/rapid-royal/forecourt',
    title: 'Rapid Royal & Strikers Resort — Jite, Neral',
    category: 'neral',
    projectName: 'Rapid Royal',
    projectSlug: 'rapid-royal',
    year: '2017',
  },
  {
    key: 'projects/rapid-jewel/street',
    title: 'Rapid Jewel — Stepped Terraces in Khopoli',
    category: 'neral',
    projectName: 'Rapid Jewel',
    projectSlug: 'rapid-jewel',
    year: '2013',
  },

  // Interiors & Spaces
  {
    key: 'interiors/heritage-living',
    title: 'Living Hall — Warm Cream & Stone Tones',
    category: 'interiors',
  },
  {
    key: 'interiors/sunlit-living',
    title: 'Sunlit Living Room with Balcony Influx',
    category: 'interiors',
  },
  {
    key: 'interiors/city-view-living',
    title: 'City Panorama Penthouse Living',
    category: 'interiors',
  },
  {
    key: 'interiors/kitchen',
    title: 'Modular Granite Countertop Kitchen',
    category: 'interiors',
  },
  {
    key: 'interiors/dining',
    title: 'Curated Family Dining Suite',
    category: 'interiors',
  },
  {
    key: 'interiors/contemporary-villa',
    title: 'Villa Living Room — Rapid Royal Bungalow',
    category: 'interiors',
  },
  {
    key: 'interiors/bath',
    title: 'Designer Ceramic & Chrome Bath Suite',
    category: 'interiors',
  },

  // Craft & Atmosphere
  {
    key: 'atmosphere/craft-materials',
    title: 'Natural Stones, Brass Joinery & Concrete Craft',
    category: 'craft',
  },
  {
    key: 'atmosphere/architect-studio',
    title: 'The Design Atelier — Draughting Rapid Horizons',
    category: 'craft',
  },
  {
    key: 'atmosphere/mumbai-blue-hour',
    title: 'Mumbai Horizon at Blue Hour',
    category: 'craft',
  },
  {
    key: 'atmosphere/stairwell-light',
    title: 'Shadow and Geometry — Architectural Stairwell',
    category: 'craft',
  },
]

export function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'south-mumbai' | 'neral' | 'interiors' | 'craft'>('all')
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    if (filter === 'all') return GALLERY_ITEMS
    return GALLERY_ITEMS.filter((item) => item.category === filter)
  }, [filter])

  const handleNext = () => {
    if (activeIdx === null) return
    setActiveIdx((activeIdx + 1) % filteredItems.length)
  }

  const handlePrev = () => {
    if (activeIdx === null) return
    setActiveIdx((activeIdx - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <div className="space-y-0">
      {/* 1. Header */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Architectural Archive</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Visual Record <br />
            <span className="display-italic text-gold-300">1984 to Tomorrow</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            A photographic and architectural journey through four decades of structural execution — South Mumbai high-rises, expansive foothill townships, and precision interior spaces.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="py-6 bg-cream-100 border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-cream-100/95">
        <div className="px-site flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Curations' },
              { id: 'south-mumbai', label: 'South Mumbai Towers' },
              { id: 'neral', label: 'Neral Foothills & Beyond' },
              { id: 'interiors', label: 'Interiors & Living' },
              { id: 'craft', label: 'Atmosphere & Craft' },
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
            {filteredItems.length} records displayed
          </span>
        </div>
      </section>

      {/* 3. Image Grid */}
      <section className="py-20 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={`${item.key}-${idx}`}
                onClick={() => setActiveIdx(idx)}
                className="group relative cursor-pointer rounded-xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-e2 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
                  <Img
                    k={item.key}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brown-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100/90 text-brown-950 text-xs font-semibold backdrop-blur-sm">
                      <Maximize2 className="h-3.5 w-3.5" />
                      View High-Res
                    </span>
                  </div>
                  {item.year && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-brown-950/70 text-gold-300 text-[10px] font-mono backdrop-blur-sm">
                      {item.year}
                    </span>
                  )}
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-display text-lg text-brown-950 group-hover:text-gold-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between pt-2 border-t border-stone-100 text-xs text-stone-500">
                    <span className="capitalize">{item.category.replace('-', ' ')}</span>
                    {item.projectSlug && (
                      <Link
                        to={`/projects/${item.projectSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-brown-700 hover:text-gold-600 font-medium underline-offset-2 hover:underline"
                      >
                        Project Details →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {activeIdx !== null && filteredItems[activeIdx] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-brown-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between text-cream-100 z-10">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-mono">
              Archive Item {activeIdx + 1} of {filteredItems.length}
            </span>
            <button
              type="button"
              onClick={() => setActiveIdx(null)}
              className="p-2 rounded-full bg-cream-100/10 hover:bg-cream-100/20 text-cream-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Main Visual */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-brown-900/80 hover:bg-gold-500 hover:text-brown-950 text-cream-100 transition-all border border-brown-700"
              aria-label="Previous item"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="max-h-[75vh] max-w-5xl w-full flex items-center justify-center">
              <Img
                k={filteredItems[activeIdx].key}
                alt={filteredItems[activeIdx].title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-e4"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-brown-900/80 hover:bg-gold-500 hover:text-brown-950 text-cream-100 transition-all border border-brown-700"
              aria-label="Next item"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Footer Caption */}
          <div className="text-center text-cream-100 max-w-2xl mx-auto space-y-2 z-10">
            <h4 className="font-display text-xl sm:text-2xl text-cream-100">
              {filteredItems[activeIdx].title}
            </h4>
            {filteredItems[activeIdx].projectSlug && (
              <Link
                to={`/projects/${filteredItems[activeIdx].projectSlug}`}
                className="inline-block text-xs uppercase tracking-wider text-gold-300 hover:text-gold-200 underline underline-offset-4"
              >
                Go to {filteredItems[activeIdx].projectName} →
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
