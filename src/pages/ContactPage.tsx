import { offices, company } from '../data/site'
import { ContactForm } from '../components/forms/ContactForm'
import { MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react'

export function ContactPage() {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    'Hello Rapid Construction team, I would like to make an inquiry regarding your properties.',
  )}`

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Direct Inquiries</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            Contact Our <br />
            <span className="display-italic text-gold-300">Executive Desks</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            Visit Rapid House in South Mumbai, our suburban hub in Andheri West, or our site headquarters at Rapid Residency in Neral.
          </p>
        </div>
      </section>

      {/* 2. Interactive Contact Grid & Form */}
      <section className="py-24 bg-cream-50">
        <div className="px-site max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Offices & Direct Lines */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <span className="eyebrow text-brown-700">Office Addresses</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown-950 mt-1">
                Three Addresses in Mumbai & Beyond
              </h2>
            </div>

            <div className="space-y-6">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4 hover:border-gold-400 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="text-xs uppercase tracking-widest font-bold text-gold-600 font-mono">
                      {office.role}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      {office.locality}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-brown-950 font-bold">
                    {office.name}
                  </h3>

                  <div className="space-y-1 text-sm text-stone-600 font-sans">
                    {office.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        office.mapQuery,
                      )}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brown-800 hover:text-gold-600 transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5 text-gold-500" />
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Phone Lines Strip */}
            <div className="bg-cream-100 p-6 sm:p-8 rounded-2xl border border-stone-300 space-y-6">
              <h3 className="font-display text-2xl text-brown-950">
                Direct Communication Channels
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                    Corporate Office Lines
                  </span>
                  {company.phones.office.map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      className="block text-brown-950 font-semibold hover:text-gold-600 transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold block">
                    Neral Sales & Site Desk
                  </span>
                  {company.phones.sales.map((p, i) => (
                    <a
                      key={i}
                      href={p.href}
                      className="block text-brown-950 font-semibold hover:text-gold-600 transition-colors"
                    >
                      {p.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-wrap gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white !py-2.5 !text-xs gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="btn btn-outline border-brown-700 text-brown-950 hover:bg-brown-800 hover:text-cream-100 !py-2.5 !text-xs gap-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>{company.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-e2 space-y-6">
            <div>
              <span className="eyebrow text-brown-700">Digital Dispatch</span>
              <h2 className="font-display text-3xl sm:text-4xl text-brown-950 mt-1">
                Send an Inquiry
              </h2>
              <p className="text-stone-600 text-sm font-sans font-light mt-2">
                Whether inquiring about upcoming units at Rapid Residency Phase IV, ready flats at Phase III, or commercial joint ventures, our team replies within 24 business hours.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
