import { useSearchParams } from 'react-router'
import { BookVisitForm } from '../components/forms/BookVisitForm'
import { Car, Compass, ShieldCheck, Phone } from 'lucide-react'

export function BookSiteVisitPage() {
  const [searchParams] = useSearchParams()
  const projectParam = searchParams.get('project')

  const defaultProjectName =
    projectParam === 'rapid-residency-phase-3'
      ? 'Rapid Residency Phase III'
      : projectParam === 'rapid-residency-phase-4'
      ? 'Rapid Residency Phase IV'
      : 'Rapid Residency Phase IV'

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Personalized Inspection</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Book a <br />
            <span className="display-italic text-gold-300">Site Experience</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            Walk through real homes, stand on balconies overlooking the Matheran hills, and inspect materials firsthand. We provide complimentary pickup from Neral station.
          </p>
        </div>
      </section>

      {/* 2. Interactive Booking Grid */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: What to Expect */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="eyebrow text-brown-700">The Rapid Difference</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown-950 mt-1">
                What to Expect on Your Visit
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brown-800 text-gold-300 shrink-0">
                  <Car className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg text-brown-950 font-bold">
                    Free Station Pickup & Drop
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Arrive at Neral Railway Station (Central Line), and our dedicated escort vehicle will receive you and your family right outside Platform 1.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brown-800 text-gold-300 shrink-0">
                  <Compass className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg text-brown-950 font-bold">
                    Guided Engineer Walkthrough
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    You aren't guided by high-pressure brokers. A Rapid Construction site supervisor walks you through RCC columns, plumbing shafts, and ventilation axes.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-brown-800 text-gold-300 shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-display text-lg text-brown-950 font-bold">
                    Direct Title & Plan Verification
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Review approved municipal layouts, carpet area calculations, and bank pre-approval schedules directly at our Neral site office.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Support */}
            <div className="bg-cream-100 p-6 rounded-2xl border border-stone-300 space-y-3">
              <h4 className="font-display text-lg text-brown-950 font-semibold">
                Prefer to schedule by telephone?
              </h4>
              <p className="text-xs text-stone-600 font-sans">
                Call our Neral site concierge directly to confirm same-day or weekend slots:
              </p>
              <div className="flex flex-wrap gap-4 pt-1">
                <a
                  href="tel:+919769833123"
                  className="font-mono text-sm font-bold text-brown-950 hover:text-gold-600 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span>+91 97698 33123</span>
                </a>
                <a
                  href="tel:+919867555781"
                  className="font-mono text-sm font-bold text-brown-950 hover:text-gold-600 flex items-center gap-2"
                >
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span>+91 98675 55781</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-e2 space-y-6">
            <div>
              <span className="eyebrow text-brown-700">Reservation Desk</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown-950 mt-1">
                Reserve Date & Arrival Slot
              </h2>
              <p className="text-stone-600 text-sm font-sans font-light mt-1">
                Please select your preferred project and visit timing. Our site coordinator will confirm within 2 hours.
              </p>
            </div>

            <BookVisitForm defaultProject={defaultProjectName} />
          </div>
        </div>
      </section>
    </div>
  )
}
