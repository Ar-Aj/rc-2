import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router'
import { projectBySlug } from '../data/projects'
import { Img } from '../components/ui/Img'
import { SampleBadge } from '../components/ui/SampleBadge'
import { SectionHeading } from '../components/ui/SectionHeading'
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import type { MediaKey } from '../data/media.generated'
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  Download,
  Phone,
  ArrowRight,
  CheckCircle2,
  Train,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  Sparkles,
} from 'lucide-react'
import { cn } from '../lib/hooks'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projectBySlug(slug ?? '')

  // State for floor plan viewer
  const [activePlanIdx, setActivePlanIdx] = useState(0)
  const [planMode, setPlanMode] = useState<'2d' | '3d'>('2d')
  const [selectedGalleryKey, setSelectedGalleryKey] = useState<MediaKey | null>(null)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const hasDayNight =
    project.gallery.some((g) => g.key.includes('elevation-day')) &&
    project.gallery.some((g) => g.key.includes('elevation-night'))

  const dayImgKey = project.gallery.find((g) => g.key.includes('elevation-day'))?.key
  const nightImgKey = project.gallery.find((g) => g.key.includes('elevation-night'))?.key

  return (
    <div className="space-y-0">
      {/* 1. Cinematic Project Hero */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-end pb-16 pt-32 bg-brown-950 text-cream-100 overflow-hidden">
        {project.hero && (
          <div className="absolute inset-0 z-0">
            <Img
              k={project.hero}
              alt={project.name}
              priority
              className="w-full h-full object-cover scale-105 animate-[kenburns_24s_ease-out_infinite_alternate] opacity-40 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-brown-950/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-brown-950/90 via-brown-950/40 to-transparent" />
          </div>
        )}

        <div className="px-site relative z-10 w-full max-w-7xl mx-auto space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-cream-300/70 uppercase tracking-widest font-sans">
            <Link to="/projects" className="hover:text-gold-300 transition-colors">
              Projects
            </Link>
            <ChevronRight className="h-3 w-3 text-gold-400" />
            <Link to={`/projects/${project.status}`} className="hover:text-gold-300 transition-colors capitalize">
              {project.status}
            </Link>
            <ChevronRight className="h-3 w-3 text-gold-400" />
            <span className="text-cream-100 font-semibold">{project.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className={cn(
                'px-3 py-1 text-xs tracking-wider uppercase font-semibold rounded-full border',
                project.status === 'upcoming'
                  ? 'bg-gold-500/20 text-gold-300 border-gold-400/40'
                  : project.status === 'current'
                  ? 'bg-emerald-950/50 text-emerald-300 border-emerald-500/40'
                  : 'bg-cream-100/10 text-cream-200 border-cream-200/20',
              )}
            >
              {project.statusLabel}
            </span>
            <span className="text-xs uppercase tracking-wider text-cream-300/80">
              {project.category} · {project.area}, {project.city}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.94]">
            {project.name}
          </h1>

          <p className="font-display text-xl sm:text-2xl lg:text-3xl italic text-gold-300/90 max-w-3xl leading-snug">
            "{project.tagline}"
          </p>

          <p className="text-cream-200/90 text-base sm:text-lg max-w-2xl font-light font-sans leading-relaxed">
            {project.summary}
          </p>

          {/* Quick CTA strip */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link
              to={`/book-site-visit?project=${project.slug}`}
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 border-none shadow-glow font-semibold"
            >
              <span>Schedule a Site Visit</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {project.downloads?.[0] && (
              <a
                href={project.downloads[0].href}
                download
                className="btn btn-outline border-cream-200/40 text-cream-100 hover:bg-cream-100/10"
              >
                <Download className="h-4 w-4 text-gold-400" />
                <span>Brochure ({project.downloads[0].size})</span>
              </a>
            )}

            <a
              href="tel:+919930420085"
              className="btn btn-ghost text-cream-300 hover:text-cream-100 gap-2"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>+91 99304 20085</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Key Facts Strip */}
      <section className="bg-brown-900 border-y border-brown-800/80 text-cream-100 py-8">
        <div className="px-site max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {project.facts.map((fact, idx) => (
            <div key={idx} className="space-y-1 border-l border-brown-800 pl-4">
              <span className="text-[11px] uppercase tracking-wider text-gold-400/80 font-medium font-sans">
                {fact.label}
              </span>
              <p className="text-base sm:text-lg font-display font-medium text-cream-100">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Architectural Narrative & Story */}
      <section className="py-24 bg-cream-50 text-graphite">
        <div className="px-site max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <span className="eyebrow text-brown-700">Architectural Context</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-brown-950 leading-[1.05]">
              Designed with Integrity, <br />
              <span className="display-italic text-gold-500">Built to Endure.</span>
            </h2>

            <div className="space-y-4 pt-4 border-t border-stone-200 text-sm font-sans text-stone-600">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brown-700 shrink-0" />
                <span>
                  <strong>Location:</strong> {project.area}, {project.city}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-brown-700 shrink-0" />
                <span>
                  <strong>Structure:</strong> {project.storeys}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-brown-700 shrink-0" />
                <span>
                  <strong>Timeline:</strong> {project.years}
                </span>
              </div>
              {project.rera && (
                <div className="flex items-center gap-2 pt-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-700 shrink-0" />
                  <span className="text-xs text-stone-700">
                    {project.rera.value}
                  </span>
                  {project.rera.sample && <SampleBadge label="MahaRERA Pending" />}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-stone-700 font-sans text-base sm:text-lg leading-relaxed font-light">
            {project.story.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {project.units.length > 0 && (
              <div className="pt-6">
                <h3 className="font-display text-xl text-brown-950 mb-3">Configurations & Units</h3>
                <div className="flex flex-wrap gap-2">
                  {project.units.map((u, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/60 border border-stone-200 text-xs font-medium text-brown-900"
                    >
                      <Layers className="h-3.5 w-3.5 text-gold-500" />
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Day / Night Interactive Elevation Comparison (if available) */}
      {hasDayNight && dayImgKey && nightImgKey && (
        <section className="py-20 bg-brown-950 text-cream-100 overflow-hidden border-y border-brown-800">
          <div className="px-site max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="eyebrow text-gold-400">Signature Elevation</span>
              <h2 className="font-display text-3xl sm:text-5xl text-cream-100">
                Daylight Radiance vs. <span className="display-italic text-gold-300">Dusk Illumination</span>
              </h2>
              <p className="text-cream-300/80 text-sm font-sans">
                Drag the interactive slider to view the façade transition between bright sunlit daylight and ambient warm night lighting.
              </p>
            </div>

            <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-e4 border border-brown-800">
              <BeforeAfterSlider
                beforeKey={dayImgKey}
                afterKey={nightImgKey}
                beforeLabel="Daylight Elevation"
                afterLabel="Night Architecture"
                alt={`${project.name} Elevation Day vs Night`}
              />
            </div>
          </div>
        </section>
      )}

      {/* 5. Floor Plans Showcase (if available) */}
      {project.floorPlans && project.floorPlans.length > 0 && (
        <section className="py-24 bg-cream-100 border-b border-stone-300/70">
          <div className="px-site max-w-7xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-brown-700">Considered Layouts</span>
                <h2 className="font-display text-3xl sm:text-5xl text-brown-950 mt-2">
                  Spatial Masterplans & Floor Plans
                </h2>
                <p className="text-stone-600 text-sm sm:text-base max-w-xl font-sans mt-2 font-light">
                  Engineered for maximum light penetration, cross-ventilation, zero wasted passage space, and comfortable family living.
                </p>
              </div>

              {/* Plan Switchers */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex rounded-lg bg-cream-200/80 p-1 border border-stone-300">
                  {project.floorPlans.map((plan, idx) => (
                    <button
                      key={plan.name}
                      type="button"
                      onClick={() => setActivePlanIdx(idx)}
                      className={cn(
                        'px-4 py-1.5 text-xs font-semibold rounded-md transition-all',
                        activePlanIdx === idx
                          ? 'bg-brown-800 text-cream-100 shadow-sm'
                          : 'text-stone-700 hover:text-brown-900',
                      )}
                    >
                      {plan.name}
                    </button>
                  ))}
                </div>

                <div className="inline-flex rounded-lg bg-cream-200/80 p-1 border border-stone-300">
                  <button
                    type="button"
                    onClick={() => setPlanMode('2d')}
                    className={cn(
                      'px-3 py-1.5 text-xs font-semibold rounded-md transition-all',
                      planMode === '2d'
                        ? 'bg-brown-800 text-cream-100 shadow-sm'
                        : 'text-stone-700 hover:text-brown-900',
                    )}
                  >
                    2D Plan
                  </button>
                  <button
                    type="button"
                    onClick={() => setPlanMode('3d')}
                    className={cn(
                      'px-3 py-1.5 text-xs font-semibold rounded-md transition-all',
                      planMode === '3d'
                        ? 'bg-brown-800 text-cream-100 shadow-sm'
                        : 'text-stone-700 hover:text-brown-900',
                    )}
                  >
                    3D Isometric
                  </button>
                </div>
              </div>
            </div>

            {/* Active Floor Plan Display */}
            {project.floorPlans[activePlanIdx] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-cream-50 p-6 sm:p-10 rounded-2xl border border-stone-200 shadow-e2">
                <div className="lg:col-span-7 bg-white p-4 rounded-xl border border-stone-200 overflow-hidden flex items-center justify-center min-h-[380px]">
                  <Img
                    k={
                      planMode === '2d'
                        ? project.floorPlans[activePlanIdx].plan
                        : project.floorPlans[activePlanIdx].plan3d
                    }
                    alt={`${project.floorPlans[activePlanIdx].name} ${planMode.toUpperCase()} floor plan`}
                    className="max-h-[500px] w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-gold-600 font-semibold">
                      Residence Spec
                    </span>
                    <h3 className="font-display text-3xl sm:text-4xl text-brown-950">
                      {project.floorPlans[activePlanIdx].name} Configuration
                    </h3>
                  </div>

                  <p className="text-stone-600 text-sm font-sans font-light leading-relaxed">
                    {project.floorPlans[activePlanIdx].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-stone-200">
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-sans">
                        Carpet Area
                      </span>
                      <p className="text-2xl font-display text-brown-950 font-bold">
                        {project.floorPlans[activePlanIdx].carpet}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-sans">
                        Saleable Area
                      </span>
                      <p className="text-2xl font-display text-brown-950 font-bold">
                        {project.floorPlans[activePlanIdx].saleable}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <Link
                      to={`/book-site-visit?project=${project.slug}&flat=${project.floorPlans[activePlanIdx].name}`}
                      className="btn btn-primary bg-brown-800 text-cream-100 hover:bg-brown-900 !py-2.5 !text-xs"
                    >
                      <span>Inquire for {project.floorPlans[activePlanIdx].name}</span>
                      <ArrowRight className="h-4 w-4 text-gold-400" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 6. Technical Specifications Breakdown */}
      {project.specs && project.specs.length > 0 && (
        <section className="py-24 bg-cream-50">
          <div className="px-site max-w-7xl mx-auto space-y-12">
            <SectionHeading
              eyebrow="Craft & Engineering"
              title="Technical Specifications & Materials"
              description="Transparent standards adhering to strict building codes. Every detail is curated for structural longevity and safety."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.specs.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-sm space-y-4 hover:border-gold-400/60 transition-colors"
                >
                  <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
                    <Sparkles className="h-4 w-4 text-gold-500" />
                    <h3 className="font-display text-xl text-brown-950 font-semibold">
                      {group.group}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600 font-sans">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Curated Amenities */}
      {project.amenities && project.amenities.length > 0 && (
        <section className="py-24 bg-brown-950 text-cream-100">
          <div className="px-site max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3">
              <span className="eyebrow text-gold-400">Lifestyle & Leisure</span>
              <h2 className="font-display text-3xl sm:text-5xl text-cream-100">
                Resort-Grade Amenities Within Your Gates
              </h2>
              <p className="text-cream-300/80 text-sm sm:text-base font-sans font-light">
                Designed to nurture wellbeing, recreation, and family moments every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.amenities.map((amenity, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-lg bg-brown-900/60 border border-brown-800 hover:border-gold-400/50 transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-gold-500/10 border border-gold-400/30 flex items-center justify-center text-gold-300 shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-sans text-cream-100 font-medium">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Visual Gallery Lightbox Section */}
      {project.gallery.length > 0 && (
        <section className="py-24 bg-cream-50 border-t border-stone-200">
          <div className="px-site max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="eyebrow text-brown-700">Visual Record</span>
                <h2 className="font-display text-3xl sm:text-5xl text-brown-950 mt-1">
                  Project Gallery & Perspectives
                </h2>
              </div>
              <span className="text-xs font-sans text-stone-500">
                Click any image to view high resolution
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedGalleryKey(item.key)}
                  className="group relative cursor-pointer rounded-xl overflow-hidden bg-stone-200 border border-stone-300 shadow-sm"
                >
                  <Img
                    k={item.key}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center justify-between w-full text-cream-100 text-xs">
                      <span>{item.caption}</span>
                      <Maximize2 className="h-4 w-4 text-gold-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {selectedGalleryKey && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-brown-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryKey(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <Img
              k={selectedGalleryKey}
              alt="Gallery Preview"
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedGalleryKey(null)}
              className="mt-4 px-6 py-2 rounded-full bg-cream-100 text-brown-950 text-xs font-semibold hover:bg-gold-300 transition-colors"
            >
              Close Preview (ESC)
            </button>
          </div>
        </div>
      )}

      {/* 9. Location, Connectivity & Landmarks */}
      {(project.connectivity || project.nearby) && (
        <section className="py-24 bg-cream-100 border-t border-stone-300">
          <div className="px-site max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <span className="eyebrow text-brown-700">Strategic Geography</span>
              <h2 className="font-display text-3xl sm:text-5xl text-brown-950 leading-tight">
                Connected to Mumbai, <br />
                <span className="display-italic text-gold-500">Close to Nature.</span>
              </h2>
              <p className="text-stone-600 text-sm sm:text-base font-sans font-light leading-relaxed">
                Positioned in {project.area}, {project.city} with direct access to arterial rail and highway networks.
              </p>

              {project.connectivity && (
                <div className="space-y-3 pt-4 border-t border-stone-300">
                  <h3 className="text-xs uppercase tracking-wider text-brown-900 font-bold font-sans">
                    Transit & Key Distances
                  </h3>
                  {project.connectivity.map((c, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-stone-200 text-xs sm:text-sm">
                      <span className="text-stone-600 font-sans flex items-center gap-2">
                        <Train className="h-4 w-4 text-brown-700" />
                        {c.label}
                      </span>
                      <span className="font-semibold text-brown-950">{c.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-6">
              {project.nearby && project.nearby.length > 0 && (
                <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm space-y-6">
                  <h3 className="font-display text-2xl text-brown-950">
                    Nearby Educational & Social Infrastructure
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.nearby.map((n, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-lg bg-cream-50 border border-stone-200 flex items-start justify-between gap-2"
                      >
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-brown-900 line-clamp-1">
                            {n.name}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-stone-500 capitalize">
                            {n.kind}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-medium text-gold-600 shrink-0">
                          {n.distance}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 10. Frequently Asked Questions */}
      {project.faqs && project.faqs.length > 0 && (
        <section className="py-24 bg-cream-50 border-t border-stone-200">
          <div className="px-site max-w-4xl mx-auto space-y-10">
            <SectionHeading
              eyebrow="Clarifications"
              title={`Frequently Asked About ${project.name}`}
              align="center"
            />
            <FaqAccordion faqs={project.faqs} />
          </div>
        </section>
      )}

      {/* 11. Bottom Site Visit Call to Action */}
      <section className="py-20 bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site max-w-5xl mx-auto text-center space-y-8">
          <span className="eyebrow text-gold-400">Experience Firsthand</span>
          <h2 className="font-display text-4xl sm:text-6xl text-cream-100">
            Visit {project.name} in Person
          </h2>
          <p className="text-cream-200/90 text-base sm:text-lg max-w-2xl mx-auto font-light font-sans">
            We offer complimentary pickup and drop services from Neral railway station for prospective homeowners. Walk through the site with our engineers and verify everything.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to={`/book-site-visit?project=${project.slug}`}
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
            >
              <span>Book Your Visit Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919930420085"
              className="btn btn-outline border-cream-200/30 text-cream-100 hover:bg-cream-100/10"
            >
              <Phone className="h-4 w-4 text-gold-400" />
              <span>Call Us: +91 99304 20085</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
