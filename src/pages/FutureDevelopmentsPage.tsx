import { Link } from 'react-router'
import { Img } from '../components/ui/Img'
import { SectionHeading } from '../components/ui/SectionHeading'
import { futureDevelopments } from '../data/site'
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, Handshake } from 'lucide-react'

export function FutureDevelopmentsPage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Development Pipeline</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            7.25 Lakh sq.ft <br />
            <span className="display-italic text-gold-300">Under Preparation</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            From prime redevelopments in South Mumbai's Byculla to strategic hubs in Andheri and masterplanned phases in Neral, our forthcoming pipeline builds upon forty years of proven delivery.
          </p>
        </div>
      </section>

      {/* 2. Pipeline Overview Cards */}
      <section className="py-24 bg-cream-50">
        <div className="px-site space-y-16">
          <SectionHeading
            eyebrow="Planned Footprint"
            title="Strategic Deployments Across Maharashtra"
            description="Our land bank and upcoming projects are strategically distributed across Mumbai's highest-demand residential and commercial corridors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureDevelopments.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-e2 transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brown-700">
                      Phase 0{idx + 1}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-cream-100 text-brown-900 text-xs font-semibold">
                      {item.area}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-brown-950 font-bold">
                    {item.city}
                  </h3>

                  <div className="space-y-1">
                    <span className="text-[11px] uppercase tracking-wider text-stone-500 font-sans">
                      Anticipated Built-Up Footprint
                    </span>
                    <p className="text-2xl font-display text-brown-700 font-bold">
                      {item.area}
                    </p>
                  </div>

                  <p className="text-stone-600 font-sans text-sm leading-relaxed font-light">
                    {item.note}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brown-800 hover:text-brown-600 transition-colors"
                  >
                    <span>Register Early Interest</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sustainable & Institutional Vision */}
      <section className="py-24 bg-cream-100 border-y border-stone-300">
        <div className="px-site grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-brown-700">Engineering Philosophy</span>
            <h2 className="font-display text-3xl sm:text-5xl text-brown-950 leading-tight">
              Building for the Next <br />
              <span className="display-italic text-brown-600">Fifty Years</span>
            </h2>
            <p className="text-stone-700 font-sans text-base sm:text-lg leading-relaxed font-light">
              As Rapid Construction accelerates into its fifth decade under next-generation leadership, each new square foot adheres to three non-negotiable principles:
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-brown-800 text-cream-200 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-brown-950 font-semibold">
                    100% Clear Land Titles & Legal Rigor
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                    Zero speculative ambiguities. Every project is anchored on clean, unencumbered land with full municipal and environmental clearances.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-brown-800 text-cream-200 shrink-0">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-brown-950 font-semibold">
                    Climate-Responsive Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                    Cross-ventilated layouts, rainwater harvesting systems, and energy-efficient lighting across all common lobbies and transit spines.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-brown-800 text-cream-200 shrink-0">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-brown-950 font-semibold">
                    Transit-Oriented Livability
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans mt-0.5">
                    Prioritizing locations within walking distance of railway hubs and expressways, minimizing commuting strain for modern families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-e3 bg-stone-200">
              <Img
                k="atmosphere/architect-studio"
                alt="Architectural studio drafting future developments"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Landowners & Institutional Partners Section */}
      <section className="py-24 bg-brown-950 text-cream-100">
        <div className="px-site text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-300/15 text-cream-200 border border-cream-300/30 text-xs">
            <Handshake className="h-3.5 w-3.5" />
            <span>Joint Ventures & Redevelopment</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl text-cream-100">
            Partner With Rapid Construction
          </h2>

          <p className="text-cream-200/90 text-base sm:text-lg max-w-2xl mx-auto font-light font-sans leading-relaxed">
            Are you a housing society considering redevelopment in South Mumbai, or a landowner seeking an experienced, family-backed joint venture partner? Speak directly with our executive leadership.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
            >
              <span>Submit Land / Society Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="mailto:contact@rapidconstruction.in"
              className="btn btn-outline border-cream-200/30 text-cream-100 hover:bg-cream-100/10"
            >
              <span>contact@rapidconstruction.in</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
