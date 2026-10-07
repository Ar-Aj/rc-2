import { Link } from 'react-router'
import { HeroSection } from '../components/home/HeroSection'
import { FeaturedShowcase } from '../components/home/FeaturedShowcase'
import { ResidencySection } from '../components/home/ResidencySection'
import { StatsCounter } from '../components/ui/StatsCounter'
import { InteractiveMap } from '../components/ui/InteractiveMap'
import { TimelineTrack } from '../components/ui/TimelineTrack'
import { FaqAccordion } from '../components/ui/FaqAccordion'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Img } from '../components/ui/Img'
import { homeFaqs } from '../data/story'
import { ArrowUpRight, Calendar, Download, ShieldCheck, Award, Landmark } from 'lucide-react'

export function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Editorial Philosophy Statement */}
      <section className="py-24 bg-cream-50 text-graphite border-b border-stone-200">
        <div className="px-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="eyebrow text-brown-700">The Philosophy of Permanence</span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-brown-950 leading-[1.08]">
                We do not build for the next quarter.{' '}
                <span className="display-italic text-brown-600">
                  We build for the next forty years.
                </span>
              </h2>
              <p className="text-stone-600 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
                Founded in 1984 by Mr. Mohammed Anwar Abbajumma and Mr. Shamim Abbajumma, Rapid Construction
                has remained an uncompromised family-led developer in Mumbai. From completing our first G+5 building
                in just 21 days to erecting the G+32 Rapid Heights and creating the Rapid Residency township, our
                creed has never changed: honest materials, precise execution, and enduring relationships.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4 border-l border-stone-300 pl-8">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="h-5 w-5 text-brown-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-brown-950 font-semibold">150+ Years Mumbai Roots</h3>
                  <p className="text-xs text-stone-600 mt-0.5">Generations of heritage and commercial integrity in the city.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Landmark className="h-5 w-5 text-brown-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-brown-950 font-semibold">Ready Inspection</h3>
                  <p className="text-xs text-stone-600 mt-0.5">Finished residences you can physically walk before booking.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <Award className="h-5 w-5 text-brown-700 shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-lg text-brown-950 font-semibold">Zero Compromise</h3>
                  <p className="text-xs text-stone-600 mt-0.5">Concealed copper wiring, modular fixtures, vitrified stonework.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Flagship Showcase Grid */}
      <FeaturedShowcase />

      {/* 4. Township Split Experience (Rapid Residency IV & III) */}
      <ResidencySection />

      {/* 5. Animated Statistics Band */}
      <StatsCounter />

      {/* 6. Interactive Geographical Explorer */}
      <section className="py-section bg-brown-900 text-cream-100">
        <div className="px-site space-y-12">
          <SectionHeading
            dark
            eyebrow="Interactive Regional Map"
            title="Strategic Footprint Across"
            italicAccent="Western India"
            description="Explore our residential developments and commercial assets spanning South Mumbai, the Western Suburbs, Neral foothills, and Khopoli."
          />
          <InteractiveMap />
        </div>
      </section>

      {/* 7. Milestone Chronicle (1984 to Today) */}
      <section className="py-section bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site space-y-12">
          <SectionHeading
            dark
            eyebrow="Chronicle of Excellence"
            title="Four Decades of"
            italicAccent="Milestones"
            description="Every landmark tells the story of a city evolving — and the family that built along with it."
          />
          <TimelineTrack />
        </div>
      </section>

      {/* 8. Founder Spotlight & Material Craft */}
      <section className="py-section bg-cream-50 text-brown-950">
        <div className="px-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="plate rounded-xs overflow-hidden h-96 sm:h-[480px] border border-stone-300 shadow-e3 bg-cream-200">
                <Img
                  k="leadership/anwar-abbajumma"
                  alt="Mr. Mohammed Anwar Abbajumma — Founder, Rapid Construction"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-6 p-4 rounded-xs glass-dark text-cream-100 border border-gold-400/30 max-w-xs shadow-e3">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block">
                  Founding Principle · 1984
                </span>
                <p className="text-xs leading-relaxed mt-1 italic">
                  “A building is not steel and mortar; it is the trust of families who entrust their lives to your walls.”
                </p>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <span className="eyebrow text-brown-700">The Founders’ Story</span>
              <h2 className="font-display text-4xl sm:text-5xl text-brown-950 leading-[1.08]">
                From Humble Beginnings to an{' '}
                <span className="display-italic text-brown-600">Architectural Empire</span>
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Following their father’s passing in 1968, Mr. Anwar supported the family through cloth sales, brick
                supplies, and property brokerage. In 1971, marriage fueled greater ambition, and alongside his brother
                Mr. Shamim, they launched Rajdeep Road Lines until 1984. That same year, they laid the foundation for
                Rapid Construction.
              </p>
              <p className="text-stone-600 text-base leading-relaxed">
                Their first test: acquiring and completing a G+5 building in just 21 days through relentless, around-the-clock
                effort. The passing of Mr. Shamim Abbajumma in 2017 was a significant loss, but his legacy continues to
                inspire the current executive team.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/legacy" className="btn btn-primary">
                  <span>Read The Full Heritage Story</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link to="/leadership" className="btn btn-outline text-brown-900 hover:text-cream-100">
                  <span>Meet The Leadership Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="py-24 bg-cream-100/60 border-t border-stone-200">
        <div className="px-site max-w-4xl mx-auto space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Frequently Asked Questions"
            title="Inquiries &"
            italicAccent="Clarifications"
            description="Clear answers about our developments, site visits, and possession procedures."
          />
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 10. Call to Action Banner */}
      <section className="py-24 bg-brown-950 text-cream-100 relative overflow-hidden border-t border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="eyebrow text-gold-400">Reserve Your Appointment</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-cream-100">
            Experience Rapid Construction in Person
          </h2>
          <p className="text-cream-200/80 text-base sm:text-lg leading-relaxed">
            Schedule a private tour of Rapid Residency Phase III or preview the upcoming Phase IV plans with our
            senior project advisors.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/book-site-visit" className="btn btn-light !px-8">
              <Calendar className="h-4 w-4" />
              <span>Book a Site Visit</span>
            </Link>
            <a
              href="/downloads/rapid-construction-portfolio.pdf"
              download
              className="btn btn-outline text-cream-100 hover:text-brown-950 !px-8"
            >
              <Download className="h-4 w-4" />
              <span>Download Company Portfolio</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
