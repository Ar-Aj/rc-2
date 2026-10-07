import { Link } from 'react-router'
import { Img } from '../components/ui/Img'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatsCounter } from '../components/ui/StatsCounter'
import { testimonials } from '../data/story'
import { SampleBadge } from '../components/ui/SampleBadge'
import {
  Zap,
  FileCheck,
  Users,
  CheckCircle2,
  ArrowRight,
  Clock,
} from 'lucide-react'

export function WhyRapidPage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Institutional Credibility</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Why Rapid <br />
            <span className="display-italic text-gold-300">Four Decades of Trust</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            In an industry of transient developers and shifting promises, Rapid Construction has delivered twenty-four landmarks across Mumbai and Maharashtra without compromising a single commitment.
          </p>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <StatsCounter />

      {/* 3. The 4 Non-Negotiable Pillars */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto space-y-16">
          <SectionHeading
            eyebrow="The Four Foundations"
            title="The Principles That Govern Every Square Foot"
            description="Our company was not formed as a financial vehicle, but as a family enterprise dedicated to generational relationships."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-5 hover:border-gold-400/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-gold-300 flex items-center justify-center">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-950 font-bold">
                1. Four Decades of Unbroken Delivery
              </h3>
              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                Established in 1984 by Mr. Mohammed Anwar and Mr. Shamim Abbajumma, backed by a family lineage exceeding 150 years in Mumbai trade. We have weathered multiple economic cycles while consistently handing over keys to our homeowners.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-5 hover:border-gold-400/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-gold-300 flex items-center justify-center">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-950 font-bold">
                2. Speed as Engineering Precision
              </h3>
              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                Our name was forged when our founders completed a G+5 building in just 21 days in 1984. That legendary execution speed isn't about haste; it stems from deep supply-chain integration, proprietary scheduling, and on-site oversight.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-5 hover:border-gold-400/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-gold-300 flex items-center justify-center">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-950 font-bold">
                3. Clean Titles & Legal Transparency
              </h3>
              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                Every Rapid Construction development is built on clear, undisputed titles with all municipal and environmental sanctions in order. Leading nationalized and private banks pre-approve our projects for maximum financing ease.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm space-y-5 hover:border-gold-400/80 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-gold-300 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-brown-950 font-bold">
                4. Principal-Level Family Accountability
              </h3>
              <p className="text-stone-600 font-sans text-sm sm:text-base leading-relaxed font-light">
                "Building Relations Since 1984" is our lived reality. Unlike faceless corporate conglomerates, our leadership team—Aslam, Khurram, Ahmed, and Mohammed Ali—remain directly accessible to our residents, buyers, and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Craft & Materials Spotlight */}
      <section className="py-24 bg-cream-100 border-y border-stone-300">
        <div className="px-site max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-brown-700">Material Integrity</span>
            <h2 className="font-display text-3xl sm:text-5xl text-brown-950 leading-tight">
              Materials Chosen for <br />
              <span className="display-italic text-gold-600">Longevity & Grace</span>
            </h2>
            <p className="text-stone-700 font-sans text-base sm:text-lg leading-relaxed font-light">
              From heavy-gauge anodized aluminium sliding frames to high-grade vitrified ceramic flooring and certified copper conduit wiring, we select finishes that withstand coastal humidity and decades of daily family use.
            </p>

            <ul className="space-y-3 pt-2 text-sm text-stone-700 font-sans">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                <span>Earthquake-resistant RCC framed structures designed to seismic standards</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                <span>ISI-certified concealed copper cabling with circuit breakers in every apartment</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
                <span>Precision polished granite kitchen platforms with stainless steel sinks</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-stone-300 shadow-e3 bg-stone-200">
              <Img
                k="atmosphere/craft-materials"
                alt="Architectural craft, stone, and brass materials"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Homeowners Say */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-brown-700">Resident Testimonies</span>
              <h2 className="font-display text-3xl sm:text-5xl text-brown-950 mt-1">
                Generations of Homeowners
              </h2>
            </div>
            <Link
              to="/testimonials"
              className="text-xs uppercase tracking-wider font-semibold text-brown-800 hover:text-gold-600 inline-flex items-center gap-1.5"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gold-600">
                      {item.project}
                    </span>
                    {item.sample && <SampleBadge label="Sample voice" />}
                  </div>
                  <p className="font-display text-lg sm:text-xl text-brown-950 italic leading-snug">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 text-xs font-sans text-stone-500">
                  <span className="font-semibold text-brown-900 block">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Site Visit CTA */}
      <section className="py-20 bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow text-gold-400">Verify For Yourself</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream-100">
            See the Quality on the Ground
          </h2>
          <p className="text-cream-200/90 text-base sm:text-lg max-w-xl mx-auto font-light font-sans">
            We invite prospective buyers to inspect our finished buildings, walk the corridors, and review structural certificates before booking.
          </p>
          <div className="pt-2">
            <Link
              to="/book-site-visit"
              className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
            >
              <span>Schedule an On-Site Inspection</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
