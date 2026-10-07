import { useState } from 'react'
import { Link } from 'react-router'
import { MapPin, ArrowUpRight, Building2, ExternalLink } from 'lucide-react'
import { projects, zones, type MapZone, type Project } from '../../data/projects'
import { Img } from './Img'
import { cn } from '../../lib/hooks'

interface PinData {
  id: MapZone
  name: string
  sub: string
  x: number // svg coord percentage 0 - 100
  y: number
  description: string
}

const pins: PinData[] = [
  {
    id: 'south-mumbai',
    name: 'South Mumbai Heritage & Towers',
    sub: 'Narayan Dhuru St · Pydhonie · Byculla · Mazgaon',
    x: 28,
    y: 72,
    description:
      'Where Rapid Construction was founded in 1984. From our head office at Rapid House to the 32-storey Rapid Heights and Maimoon Tower.',
  },
  {
    id: 'andheri',
    name: 'Western Suburbs — Andheri (W)',
    sub: 'S.V. Road, opposite Andheri Station',
    x: 24,
    y: 44,
    description:
      'Shoppers Point — 84 shops and commercial units opposite Andheri station, housing our Western Suburbs branch office since 2000.',
  },
  {
    id: 'neral',
    name: 'Neral Foothills Township',
    sub: 'Foothills of Matheran, 5 min from Neral Station',
    x: 74,
    y: 52,
    description:
      'The heart of our township vision. Over 400 delivered homes across Rapid Residency Phases I, II & III, and the upcoming Phase IV.',
  },
  {
    id: 'khopoli',
    name: 'Khopoli Foothills Gateway',
    sub: 'Gateway to the Sahyadri Ghats',
    x: 82,
    y: 78,
    description:
      'Rapid Jewel — three G+7 residential wings terraced against the Sahyadri hills with street-level retail.',
  },
]

export function InteractiveMap() {
  const [activeZone, setActiveZone] = useState<MapZone>('neral')

  const zoneProjects = projects.filter((p) => p.zone === activeZone)
  const currentPin = pins.find((p) => p.id === activeZone) || pins[0]

  return (
    <div className="rounded-xs bg-brown-950 text-cream-100 border border-brown-800 shadow-e3 overflow-hidden">
      {/* Header bar */}
      <div className="px-6 py-5 border-b border-brown-800/80 flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="eyebrow text-gold-400 block mb-1">Geographic Footprint</span>
          <h3 className="font-display text-2xl uppercase tracking-wider text-cream-100">
            Mumbai Metropolitan Region & Beyond
          </h3>
        </div>

        {/* Zone switcher tabs */}
        <div className="flex flex-wrap gap-2">
          {pins.map((pin) => {
            const isSelected = pin.id === activeZone
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => setActiveZone(pin.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5',
                  isSelected
                    ? 'bg-gold-400 text-brown-950 shadow-glow'
                    : 'bg-brown-900/80 text-cream-300/80 hover:bg-brown-800 hover:text-cream-100 border border-brown-700/50',
                )}
              >
                <MapPin className="h-3 w-3" />
                <span>{zones[pin.id].label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Map SVG (Left) + Project Drawer (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Vector SVG Schematic Map */}
        <div className="lg:col-span-7 relative h-96 sm:h-[480px] lg:h-[560px] bg-brown-900/40 p-6 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-brown-800">
          {/* Subtle blueprint grid */}
          <div className="absolute inset-0 blueprint opacity-40 pointer-events-none" />

          {/* Stylized Coastal & Transit Lines SVG */}
          <svg
            viewBox="0 0 500 500"
            className="h-full w-full max-h-[500px] select-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Arabian Sea / Coastline indication */}
            <path
              d="M 60 20 Q 90 120 70 200 T 80 320 Q 90 420 50 490"
              stroke="rgba(201, 163, 91, 0.25)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <text x="35" y="240" fill="rgba(232, 210, 168, 0.2)" fontSize="10" letterSpacing="0.2em" transform="rotate(-90 35 240)">
              ARABIAN SEA
            </text>

            {/* Central Railway Line representation (connecting CST through Thane to Neral & Karjat) */}
            <path
              d="M 140 380 Q 180 300 240 250 T 360 250"
              stroke="rgba(245, 237, 224, 0.2)"
              strokeWidth="2.5"
            />
            {/* Western Railway line representation */}
            <path
              d="M 130 380 Q 120 280 125 180 T 130 50"
              stroke="rgba(245, 237, 224, 0.2)"
              strokeWidth="2"
              strokeDasharray="2 3"
            />

            {/* Highway Mumbai-Pune representation */}
            <path
              d="M 140 380 Q 260 360 410 400"
              stroke="rgba(201, 163, 91, 0.2)"
              strokeWidth="1.5"
            />

            {/* Geographic contours / hills for Matheran / Sahyadri */}
            <circle cx="370" cy="245" r="45" stroke="rgba(232, 210, 168, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="370" cy="245" r="28" stroke="rgba(232, 210, 168, 0.15)" strokeWidth="1" />
            <text x="370" y="215" fill="rgba(201, 163, 91, 0.5)" fontSize="9" textAnchor="middle" letterSpacing="0.1em">
              MATHERAN HILLS
            </text>

            {/* Interactive Region Pins */}
            {pins.map((pin) => {
              const cx = (pin.x / 100) * 500
              const cy = (pin.y / 100) * 500
              const isSelected = pin.id === activeZone

              return (
                <g
                  key={pin.id}
                  onClick={() => setActiveZone(pin.id)}
                  className="cursor-pointer group"
                >
                  {/* Pulse wave when selected */}
                  {isSelected && (
                    <circle cx={cx} cy={cy} r="26" fill="rgba(201, 163, 91, 0.2)" className="animate-ping" />
                  )}
                  {/* Outer ring */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={isSelected ? 16 : 10}
                    fill={isSelected ? 'var(--color-gold-400)' : 'var(--color-brown-800)'}
                    stroke="var(--color-cream-100)"
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    className="transition-all duration-300 group-hover:scale-125"
                  />
                  {/* Center Dot */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r="4"
                    fill={isSelected ? 'var(--color-brown-950)' : 'var(--color-gold-400)'}
                  />
                  {/* Text Label */}
                  <text
                    x={cx}
                    y={cy - 20}
                    textAnchor="middle"
                    fill={isSelected ? 'var(--color-cream-100)' : 'rgba(232, 210, 168, 0.7)'}
                    fontSize="11"
                    fontWeight={isSelected ? '700' : '500'}
                    letterSpacing="0.08em"
                    className="select-none"
                  >
                    {zones[pin.id].label}
                  </text>
                </g>
              )
            })}
          </svg>

          {/* Compass / Orientation */}
          <div className="absolute top-4 right-4 flex flex-col items-center gap-1 opacity-40 text-[10px] font-sans tracking-widest uppercase">
            <span>N</span>
            <div className="h-6 w-0.5 bg-cream-100" />
            <div className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          </div>
        </div>

        {/* Selected Zone Overview & Project List (Right) */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div>
              <span className="eyebrow text-gold-400 block mb-1">Active Region</span>
              <h4 className="font-display text-3xl text-cream-100">
                {currentPin.name}
              </h4>
              <p className="text-xs text-cream-300/70 tracking-wider uppercase mt-1">
                {currentPin.sub}
              </p>
            </div>

            <p className="text-sm text-cream-200/80 leading-relaxed">
              {currentPin.description}
            </p>

            {/* Projects in this zone */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-widest text-gold-400 font-semibold block mb-3">
                Key Developments in {zones[activeZone].label} ({zoneProjects.length})
              </span>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-2 no-scrollbar">
                {zoneProjects.map((proj: Project) => (
                  <div
                    key={proj.slug}
                    className="p-3 rounded-xs bg-brown-900/60 border border-brown-800 hover:border-gold-400/50 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      {proj.hero ? (
                        <div className="h-12 w-12 shrink-0 rounded-xs overflow-hidden bg-brown-950">
                          <Img k={proj.hero} alt={proj.name} className="h-full w-full object-cover" />
                        </div>
                      ) : (
                        <div className="h-12 w-12 shrink-0 rounded-xs bg-brown-800 flex items-center justify-center text-gold-400">
                          <Building2 className="h-5 w-5" />
                        </div>
                      )}
                      <div>
                        <h5 className="font-display text-base text-cream-100 font-medium">
                          {proj.name}
                        </h5>
                        <p className="text-[11px] text-cream-300/70">
                          {proj.storeys} · {proj.statusLabel}
                        </p>
                      </div>
                    </div>

                    {proj.hasPage && (
                      <Link
                        to={`/projects/${proj.slug}`}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brown-700 text-cream-200 hover:bg-gold-400 hover:text-brown-950 transition-colors"
                        title={`View ${proj.name}`}
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-brown-800 flex items-center justify-between">
            <Link
              to="/projects"
              className="link-draw text-xs text-gold-300 hover:text-cream-100"
            >
              <span>Explore All Projects Archive</span>
              <ExternalLink className="h-3 w-3" />
            </Link>
            <Link
              to="/book-site-visit"
              className="btn btn-light !min-h-[2.4rem] !px-4 !text-[10px]"
            >
              <span>Book Site Visit</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
