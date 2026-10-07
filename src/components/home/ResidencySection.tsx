import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowUpRight, CheckCircle2, Waves, Dumbbell, ShieldCheck, TreePine } from 'lucide-react'
import { BeforeAfterSlider } from '../ui/BeforeAfterSlider'
import { Img } from '../ui/Img'
import { cn } from '../../lib/hooks'

type PhaseTab = 'phase4' | 'phase3' | 'phase1-2'

export function ResidencySection() {
  const [activePhase, setActivePhase] = useState<PhaseTab>('phase4')

  return (
    <section className="py-section bg-cream-50 text-graphite relative overflow-hidden">
      <div className="px-site space-y-12">
        {/* Header with Phase Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-stone-300 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="eyebrow text-brown-700">Flagship Township · Neral (Foothills of Matheran)</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown-950 leading-[1.05]">
              Rapid Residency <span className="display-italic text-brown-600">Township</span>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              Twenty-five buildings, four phases, and four hundred families. Five minutes from Neral railway station,
              at the gateway to Matheran.
            </p>
          </div>

          {/* Phase Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActivePhase('phase4')}
              className={cn(
                'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer',
                activePhase === 'phase4'
                  ? 'bg-brown-800 text-cream-100 shadow-e2'
                  : 'bg-cream-100 text-brown-900 hover:bg-stone-200 border border-stone-300',
              )}
            >
              <span>Phase IV</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-gold-400 text-brown-950 font-bold">
                Upcoming
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActivePhase('phase3')}
              className={cn(
                'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer',
                activePhase === 'phase3'
                  ? 'bg-brown-800 text-cream-100 shadow-e2'
                  : 'bg-cream-100 text-brown-900 hover:bg-stone-200 border border-stone-300',
              )}
            >
              <span>Phase III</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-600 text-white font-bold">
                Ready to Move
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActivePhase('phase1-2')}
              className={cn(
                'px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer',
                activePhase === 'phase1-2'
                  ? 'bg-brown-800 text-cream-100 shadow-e2'
                  : 'bg-cream-100 text-brown-900 hover:bg-stone-200 border border-stone-300',
              )}
            >
              <span>Phases I & II</span>
              <span className="text-[10px] text-stone-500">Delivered</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        {activePhase === 'phase4' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Day / Night Slider */}
            <div className="lg:col-span-7 space-y-4">
              <BeforeAfterSlider
                beforeKey="projects/residency-phase-4/elevation-day"
                beforeLabel="Day View Elevation"
                afterKey="projects/residency-phase-4/elevation-night"
                afterLabel="Night View Elevation"
                alt="Rapid Residency Phase IV Architectural Elevation"
                aspectRatio="16 / 10"
              />
              <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                <span>Drag slider or use arrow keys to preview Day vs Night illumination</span>
                <span className="font-semibold text-brown-800">Provisional Elevation</span>
              </div>
            </div>

            {/* Right: Key Specs & Launch CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-gold-500 font-bold">
                  Next Evolution
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-brown-950">
                  Rapid Residency Phase IV
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A 3,332 sq.m sanctuary nestled near the Good Shepherd Church landmark. Featuring 1 BHK (397 sq.ft carpet)
                  and 2 BHK (501 sq.ft carpet) residences planned with premium amenities.
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                <div className="flex items-center gap-2 text-brown-900">
                  <Waves className="h-4 w-4 text-brown-600" />
                  <span>Swimming Pool</span>
                </div>
                <div className="flex items-center gap-2 text-brown-900">
                  <Dumbbell className="h-4 w-4 text-brown-600" />
                  <span>Fitness Gymnasium</span>
                </div>
                <div className="flex items-center gap-2 text-brown-900">
                  <TreePine className="h-4 w-4 text-brown-600" />
                  <span>Landscaped Garden</span>
                </div>
                <div className="flex items-center gap-2 text-brown-900">
                  <ShieldCheck className="h-4 w-4 text-brown-600" />
                  <span>24×7 Security & CCTV</span>
                </div>
              </div>

              {/* Transit & Key Facts */}
              <div className="p-4 rounded-xs bg-cream-100 border border-stone-200 space-y-2 text-xs">
                <div className="flex items-center justify-between font-medium">
                  <span className="text-stone-500">Neral Railway Station</span>
                  <span className="text-brown-900 font-semibold">5-minute quick walk</span>
                </div>
                <div className="flex items-center justify-between font-medium">
                  <span className="text-stone-500">Navi Mumbai Airport (NMIA)</span>
                  <span className="text-brown-900 font-semibold">≈ 45 minutes</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/projects/rapid-residency-phase-4" className="btn btn-primary">
                  <span>Explore Phase IV Showcase</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/book-site-visit" className="btn btn-outline text-brown-900 hover:text-cream-100">
                  <span>Book Site Visit</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activePhase === 'phase3' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Real Project Photography */}
            <div className="lg:col-span-7">
              <div className="plate rounded-xs overflow-hidden h-80 sm:h-96 lg:h-[460px] border border-stone-300 shadow-e3 bg-brown-950">
                <Img
                  k="projects/residency-phase-3/completed-wing"
                  alt="Rapid Residency Phase III Completed Building"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Actual photograph · Rapid Residency Phase III, completed G+7 building with ground-level shops.
              </p>
            </div>

            {/* Right: Phase III details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-emerald-600 font-bold">
                  Completed & Ready Possession
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-brown-950">
                  Rapid Residency Phase III
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  The township’s first mid-rise: a G+7 structure featuring 42 apartments and 19 shops at ground level.
                  Inspect the finished homes in person before you buy.
                </p>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Immediate possession available — move in without waiting</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>19 retail shops for daily convenience directly downstairs</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Lift access, power backup & open balcony views towards Matheran</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/projects/rapid-residency-phase-3" className="btn btn-primary">
                  <span>View Ready Homes</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/book-site-visit" className="btn btn-outline text-brown-900 hover:text-cream-100">
                  <span>Schedule Site Visit</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        {activePhase === 'phase1-2' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Township Aerial Photography */}
            <div className="lg:col-span-7">
              <div className="plate rounded-xs overflow-hidden h-80 sm:h-96 lg:h-[460px] border border-stone-300 shadow-e3 bg-brown-950">
                <Img
                  k="projects/rapid-residency/township-aerial"
                  alt="Rapid Residency Township Aerial View"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Actual photograph · Rapid Residency Phase II in foreground, Matheran foothills in background.
              </p>
            </div>

            {/* Right: Phases 1 & 2 details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-bold">
                  Township Foundations (2011–2016)
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-brown-950">
                  Rapid Residency Phases I & II
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  A grand residential township comprising 24 low-rise buildings and over 385 delivered homes.
                  Lush landscaped internal courts, safe play spaces, and an established family community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 rounded-xs bg-cream-100 border border-stone-200 text-xs">
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block">Phase I (2011–13)</span>
                  <span className="font-bold text-brown-950 text-sm">8 Buildings · 135 Flats</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-stone-500 block">Phase II (2013–16)</span>
                  <span className="font-bold text-brown-950 text-sm">16 Buildings · 250 Flats</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link to="/projects/rapid-residency" className="btn btn-primary">
                  <span>Explore Township Story</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn btn-outline text-brown-900 hover:text-cream-100">
                  <span>Contact Neral Desk</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
