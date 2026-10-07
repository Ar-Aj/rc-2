import { Link } from 'react-router'
import { Img } from '../components/ui/Img'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TimelineTrack } from '../components/ui/TimelineTrack'
import { ArrowUpRight } from 'lucide-react'

export function LegacyPage() {
  return (
    <div className="space-y-0">
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Our Heritage & Genesis</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            A Legacy Built on <br />
            <span className="display-italic text-gold-300">Vision & Determination</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            Over 150 years of family history in Mumbai, four decades of architectural permanence, and a creed
            forged in integrity since 1984.
          </p>
        </div>
      </section>

      {/* 2. The Early Journey (1968 – 1984) */}
      <section className="py-24 bg-cream-50 text-brown-950">
        <div className="px-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow text-brown-700">1968 — The Humble Origins</span>
              <h2 className="font-display text-4xl sm:text-5xl text-brown-950 leading-[1.08]">
                From Cloth Sales and Brick Supplies to Building Landmarks
              </h2>
              <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
                <p>
                  Rapid Construction stands as a testament to the determination and vision of its founders,
                  Mr. Anwar Abbajumma and Mr. Shamim Abbajumma. With over 150 years of family history in Mumbai,
                  their journey began with humble origins.
                </p>
                <p>
                  Following their father’s passing in 1968, Mr. Anwar supported the family through cloth sales,
                  brick supplies, and property brokerage. Every rupee was saved with intention; every relationship
                  was treated as sacred.
                </p>
                <p>
                  In 1971, marriage fueled greater ambition, and alongside his brother Mr. Shamim, they launched
                  <strong> Rajdeep Road Lines</strong>, a thriving logistics venture that moved goods across the nation
                  until 1984. That same year, they laid the foundation for the Rapid Construction empire.
                </p>
              </div>
            </div>

            {/* Media plate: Craft Materials */}
            <div className="lg:col-span-5">
              <div className="plate rounded-xs overflow-hidden h-96 sm:h-[460px] border border-stone-300 shadow-e3 bg-stone-200">
                <Img
                  k="atmosphere/craft-materials"
                  alt="Architectural craft materials — brick, lime mortar and blueprints"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-stone-500 mt-2 italic text-center">
                Raw materials, honest masonry, and architectural blueprints — the bedrock of Rapid Construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 21-Day Miracle & First Decade */}
      <section className="py-24 bg-cream-100/70 border-y border-stone-200 text-brown-950">
        <div className="px-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="plate rounded-xs overflow-hidden h-96 sm:h-[480px] border border-stone-300 shadow-e3 bg-cream-200">
                <Img
                  k="leadership/anwar-abbajumma"
                  alt="Mr. Mohammed Anwar Abbajumma"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-xs text-stone-500 mt-2 text-center">
                Mr. Mohammed Anwar Abbajumma — Co-founder, Rapid Construction (Est. 1984)
              </p>
            </div>

            {/* Text details */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="eyebrow text-brown-700">1984 — The 21-Day Genesis</span>
              <h2 className="font-display text-4xl sm:text-5xl text-brown-950 leading-[1.08]">
                Relentless Effort Under Pressure
              </h2>
              <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed">
                <p>
                  In 1984, the brothers acquired their first site: an incomplete G+5 building. Working in round-the-clock
                  shifts alongside masons, engineers, and suppliers, they completed the building in just{' '}
                  <span className="font-bold text-brown-900">21 days</span> — a feat of willpower that proved their
                  capacity to deliver under extraordinary deadlines.
                </p>
                <p>
                  From 1984 to 1986, they constructed the landmark <strong>Amin Building (G+5)</strong> on Narayan Dhuru
                  Street. In 1986, they completed the <strong>Evergreen Building (Wings A & B, G+7)</strong> at Mazgaon,
                  followed by <strong>Zubeda Castle (G+7)</strong> in 1987 (later reimagined as Hotel Elegant) and the
                  iconic <strong>Haji Building</strong> in 1988.
                </p>
                <p>
                  In 1998, they launched their first major commercial development, <strong>Shoppers Point</strong> in
                  Andheri, which today houses over 84 business units opposite the railway terminal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Milestone Chronicle */}
      <section className="py-section bg-brown-950 text-cream-100">
        <div className="px-site space-y-12">
          <SectionHeading
            dark
            eyebrow="Milestone Timeline"
            title="The Chronicle of"
            italicAccent="Excellence"
            description="Explore our four-decade progression from Narayan Dhuru Street tenements to 32-storey residential towers."
          />
          <TimelineTrack />
        </div>
      </section>

      {/* 5. Continuing The Legacy */}
      <section className="py-24 bg-cream-50 text-brown-950 border-t border-stone-200">
        <div className="px-site">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="eyebrow text-brown-700">The Next Generation</span>
            <h2 className="font-display text-4xl sm:text-5xl text-brown-950">
              Honoring Memory Through Modernity
            </h2>
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
              The passing of Mr. Shamim Abbajumma in 2017 was a significant loss for the family and company. Yet his
              strict standards for financial integrity and material honesty continue to guide the new leadership team —
              Mr. Aslam (CEO), Mr. Khurram (CMO), Mr. Ahmed (COO), and Mr. Mohammed Ali (CFO) — alongside the third
              generation in architecture, interior design, and digital innovation.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <Link to="/leadership" className="btn btn-primary">
                <span>Meet The Executive Leadership</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="btn btn-outline text-brown-900 hover:text-cream-100">
                <span>Explore All Delivered Projects</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
