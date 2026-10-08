import { Link } from 'react-router'
import { ArrowUpRight, MapPin, Download, Instagram } from 'lucide-react'
import { company, offices } from '../../data/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brown-950 text-cream-100 overflow-hidden pt-20 pb-12 border-t border-brown-800">
      {/* Massive Faint Typographic Watermark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none opacity-[0.035] leading-none whitespace-nowrap font-display text-[26vw] font-black uppercase text-cream-100"
        aria-hidden="true"
      >
        RAPID
      </div>

      <div className="px-site relative z-10">
        {/* Top Tier: Brand Statement & Primary CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brown-800/80">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xs bg-brown-900 border border-cream-300/30 p-1 flex items-center justify-center">
                  <svg viewBox="0 0 120 84" fill="none" className="h-full w-full">
                    <path d="M6 30 L60 4 L114 30" stroke="var(--color-cream-300)" strokeWidth="4" strokeLinejoin="round" />
                    <g fill="var(--color-cream-300)">
                      <rect x="10" y="74" width="31" height="6" />
                      <rect x="43" y="74" width="34" height="6" />
                      <rect x="79" y="74" width="31" height="6" />
                      <rect x="10" y="66" width="18" height="6" />
                      <rect x="30" y="66" width="28" height="6" />
                      <rect x="60" y="66" width="28" height="6" />
                      <rect x="90" y="66" width="20" height="6" />
                      <rect x="30" y="58" width="18" height="6" />
                      <rect x="50" y="58" width="20" height="6" />
                      <rect x="72" y="58" width="18" height="6" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-2xl uppercase tracking-wider text-cream-100">
                    Rapid Construction
                  </h3>
                  <p className="text-xs uppercase tracking-[0.24em] text-cream-300/70">
                    Builders & Developers · Est. 1984
                  </p>
                </div>
              </div>

              <p className="text-cream-200/80 max-w-md text-sm leading-relaxed pt-2">
                Building relations and architectural landmarks across Mumbai, Neral, and Khopoli for over four decades.
                Grounded in integrity, executed with precision.
              </p>
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
              <Link to="/book-site-visit" className="btn btn-light !text-[11px] !py-2.5">
                <span>Book a Site Visit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="/downloads/rapid-construction-portfolio.pdf"
                download
                className="btn btn-outline text-cream-200 hover:text-brown-950 !text-[11px] !py-2.5"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Company Portfolio (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1: Projects */}
            <div className="space-y-4">
              <span className="eyebrow text-cream-300">Projects</span>
              <ul className="space-y-2.5 text-xs text-cream-200/90 font-sans">
                <li>
                  <Link to="/projects/upcoming" className="hover:text-cream-50 transition-colors">
                    Rapid Residency Phase IV
                  </Link>
                </li>
                <li>
                  <Link to="/projects/current" className="hover:text-cream-50 transition-colors">
                    Rapid Residency Phase III
                  </Link>
                </li>
                <li>
                  <Link to="/projects/maimoon-tower" className="hover:text-cream-50 transition-colors">
                    Maimoon Tower, Byculla
                  </Link>
                </li>
                <li>
                  <Link to="/projects/rapid-heights" className="hover:text-cream-50 transition-colors">
                    Rapid Heights (G+32)
                  </Link>
                </li>
                <li>
                  <Link to="/projects/hotel-elegant" className="hover:text-cream-50 transition-colors">
                    Hotel Elegant, Mumbai
                  </Link>
                </li>
                <li>
                  <Link to="/projects/rapid-royal" className="hover:text-cream-50 transition-colors">
                    Rapid Royal (Strikers)
                  </Link>
                </li>
                <li>
                  <Link to="/projects/rapid-jewel" className="hover:text-cream-50 transition-colors">
                    Rapid Jewel, Khopoli
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-cream-200 font-medium hover:text-white hover:underline inline-flex items-center gap-1">
                    <span>Complete Archive (20+)</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Company */}
            <div className="space-y-4">
              <span className="eyebrow text-cream-300">Company</span>
              <ul className="space-y-2.5 text-xs text-cream-200/90 font-sans">
                <li>
                  <Link to="/legacy" className="hover:text-cream-50 transition-colors">
                    Our Legacy (1984)
                  </Link>
                </li>
                <li>
                  <Link to="/leadership" className="hover:text-cream-50 transition-colors">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link to="/construction-timeline" className="hover:text-cream-50 transition-colors">
                    Milestone Timeline
                  </Link>
                </li>
                <li>
                  <Link to="/future-developments" className="hover:text-cream-50 transition-colors">
                    Future Pipeline (7.25L sq.ft)
                  </Link>
                </li>
                <li>
                  <Link to="/why-rapid" className="hover:text-cream-50 transition-colors">
                    Why Rapid
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="hover:text-cream-50 transition-colors">
                    Resident Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-cream-50 transition-colors">
                    Visual Archive
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-cream-50 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Direct Desk */}
            <div className="space-y-4 col-span-2 md:col-span-1">
              <span className="eyebrow text-cream-300">Direct Inquiries</span>
              <div className="space-y-3 text-xs text-cream-200/90">
                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream-300/60 mb-0.5">
                    Head Office Phones
                  </span>
                  <a href="tel:+919930420085" className="block hover:text-cream-50 font-medium">
                    +91 99304 20085
                  </a>
                  <a href="tel:+919323038222" className="block hover:text-cream-50 font-medium">
                    +91 93230 38222
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream-300/60 mb-0.5">
                    Residency Sales Desk
                  </span>
                  <a href="tel:+919769833123" className="block hover:text-cream-50 font-medium">
                    +91 97698 33123
                  </a>
                  <a href="tel:+919867555781" className="block hover:text-cream-50 font-medium">
                    +91 98675 55781
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-widest text-cream-300/60 mb-0.5">
                    Email & Social
                  </span>
                  <a href={`mailto:${company.email}`} className="block hover:text-cream-50">
                    {company.email}
                  </a>
                  <a
                    href={company.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 hover:text-cream-50 mt-1"
                  >
                    <Instagram className="h-3.5 w-3.5 text-cream-300" />
                    <span>{company.instagramHandle}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: 3 Office Addresses */}
        <div className="py-12 border-b border-brown-800/80 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-cream-300/80">
          {offices.map((office) => (
            <div key={office.id} className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-cream-200 font-semibold tracking-wider uppercase text-[11px]">
                <MapPin className="h-3.5 w-3.5 text-cream-300" />
                <span>{office.name} — {office.role}</span>
              </div>
              <address className="not-italic leading-relaxed text-cream-200/80">
                {office.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          ))}
        </div>

        {/* Bottom Tier: Copyright, MahaRERA disclaimer & Legal links */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-cream-300/60">
          <p>
            © 1984 – {currentYear} {company.name}. All rights reserved. Building Relations Since 1984.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-cream-100 transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-30">/</span>
            <Link to="/terms" className="hover:text-cream-100 transition-colors">
              Terms & Legal
            </Link>
            <span className="opacity-30">/</span>
            <Link to="/contact" className="hover:text-cream-100 transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
