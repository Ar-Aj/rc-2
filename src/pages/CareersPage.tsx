import { openings } from '../data/story'
import { SampleBadge } from '../components/ui/SampleBadge'
import { SectionHeading } from '../components/ui/SectionHeading'
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Users,
  Building2,
  HeartHandshake,
} from 'lucide-react'

export function CareersPage() {

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Careers & Culture</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Build Mumbai <br />
            <span className="display-italic text-gold-300">With Our Family</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            Join a developer with forty years of unbroken delivery. We value craftsmanship, on-site problem solving, and long-term loyalty over corporate bureaucracy.
          </p>

          <div className="pt-2">
            <SampleBadge label="Sample Open Positions — Inquire Directly for Current Hiring Status" />
          </div>
        </div>
      </section>

      {/* 2. Values & Culture Grid */}
      <section className="py-24 bg-cream-50">
        <div className="px-site space-y-16">
          <SectionHeading
            eyebrow="Why Build With Us"
            title="Stability, Autonomy, and Generational Craft"
            description="At Rapid Construction, engineers and designers work directly with principals, not five layers of detached management."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-cream-200 flex items-center justify-center">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-brown-950 font-bold">
                Direct Field Exposure
              </h3>
              <p className="text-stone-600 font-sans text-sm leading-relaxed font-light">
                Whether you are managing casting cycles on our Neral sites or working with South Mumbai municipal authorities, you learn the real business of building from day one.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-cream-200 flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-brown-950 font-bold">
                Mentorship from Principals
              </h3>
              <p className="text-stone-600 font-sans text-sm leading-relaxed font-light">
                Our founders and second-generation directors (Aslam, Khurram, Ahmed, Mohammed Ali) actively visit site offices and design tables weekly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
              <div className="h-12 w-12 rounded-xl bg-brown-900 text-cream-200 flex items-center justify-center">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-brown-950 font-bold">
                Four Decades of Stability
              </h3>
              <p className="text-stone-600 font-sans text-sm leading-relaxed font-light">
                Many of our site supervisors, foremen, and administrative staff have worked with the Abbajumma family for 20+ years. We invest in people for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Positions List */}
      <section className="py-24 bg-cream-100 border-t border-stone-300">
        <div className="px-site space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="eyebrow text-brown-700">Opportunities</span>
              <h2 className="font-display text-3xl sm:text-5xl text-brown-950 mt-1">
                Current Opportunities
              </h2>
            </div>
            <span className="text-xs font-mono text-stone-500">
              {openings.length} Positions Listed
            </span>
          </div>

          <div className="space-y-4">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-sm hover:border-brown-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl sm:text-2xl text-brown-950 font-semibold">
                      {job.title}
                    </h3>
                    {job.sample && <SampleBadge label="Sample" />}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-stone-600">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brown-700" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-brown-700" />
                      {job.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brown-700" />
                      {job.type}
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:careers@rapidconstruction.in?subject=Application:%20${encodeURIComponent(
                    job.title,
                  )}`}
                  className="btn btn-outline border-brown-800 text-brown-900 hover:bg-brown-800 hover:text-cream-100 !py-2.5 !text-xs shrink-0"
                >
                  <span>Apply via Email</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Spontaneous Application CTA */}
      <section className="py-20 bg-brown-950 text-cream-100 border-t border-brown-800">
        <div className="px-site max-w-4xl mx-auto text-center space-y-6">
          <span className="eyebrow text-cream-300">Speculative Inquiries</span>
          <h2 className="font-display text-4xl sm:text-5xl text-cream-100">
            Don't See Your Specific Discipline?
          </h2>
          <p className="text-cream-200/90 text-base sm:text-lg max-w-xl mx-auto font-light font-sans">
            We are always interested in connecting with talented civil engineers, structural draughtsmen, interior stylists, and sales advisors.
          </p>
          <div className="pt-2">
            <a
              href="mailto:careers@rapidconstruction.in?subject=Speculative%20Application%20—%20Rapid%20Construction"
              className="btn btn-primary"
            >
              <span>Send Your Portfolio & CV</span>
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
