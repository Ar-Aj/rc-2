import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, ArrowUpRight, Phone, Calendar, ChevronDown } from 'lucide-react'
import { useScrolled, useScrollDirection, cn } from '../../lib/hooks'

interface NavItem {
  label: string
  href: string
  badge?: string
  children?: { label: string; href: string; note: string; badge?: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Upcoming Launch', href: '/projects/upcoming', note: 'Rapid Residency Phase IV, Neral', badge: 'New' },
      { label: 'Current / Ready to Move', href: '/projects/current', note: 'Rapid Residency Phase III, Neral' },
      { label: 'Completed Landmarks', href: '/projects/completed', note: 'Maimoon Tower, Rapid Heights, Hotel Elegant & more' },
      { label: 'All Projects Archive', href: '/projects', note: '20+ developments since 1984' },
    ],
  },
  { label: 'Our Legacy', href: '/legacy' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Timeline', href: '/construction-timeline' },
  { label: 'Future Developments', href: '/future-developments' },
  { label: 'Why Rapid', href: '/why-rapid' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)
  const scrolled = useScrolled(30)
  const scrollDir = useScrollDirection()
  const location = useLocation()

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false)
    setProjectsOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isHome = location.pathname === '/'
  // On home at top, header blends into hero; once scrolled or on inner pages, subtle glass
  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
          scrollDir === 'down' && scrolled && !mobileOpen ? '-translate-y-full' : 'translate-y-0',
          isTransparent
            ? 'bg-transparent py-5 text-cream-100'
            : scrolled
              ? 'glass-dark py-3.5 text-cream-100 shadow-e2'
              : 'bg-brown-950/95 py-4 text-cream-100 backdrop-blur-md',
        )}
      >
        <div className="px-site flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="group flex items-center gap-3.5 transition-transform duration-300 hover:scale-[1.01]"
            aria-label="Rapid Construction — Home"
          >
            {/* Architectural brick house mark */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xs bg-brown-900 border border-cream-300/30 p-1.5 transition-colors group-hover:border-cream-300">
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
                  <rect x="30" y="50" width="12" height="6" />
                  <rect x="44" y="50" width="20" height="6" />
                  <rect x="66" y="50" width="24" height="6" />
                  <rect x="30" y="42" width="20" height="6" />
                  <rect x="52" y="42" width="16" height="6" />
                  <rect x="70" y="42" width="20" height="6" />
                  <rect x="30" y="34" width="14" height="6" />
                  <rect x="46" y="34" width="22" height="6" />
                  <rect x="70" y="34" width="20" height="6" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl tracking-[0.06em] uppercase font-bold text-cream-100 group-hover:text-cream-200 transition-colors">
                Rapid Construction
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-cream-300/80 font-sans -mt-0.5">
                Builders & Developers · 1984
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-[0.16em] uppercase font-medium">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setProjectsOpen(true)}
                    onMouseLeave={() => setProjectsOpen(false)}
                  >
                    <button
                      type="button"
                      className="nav-link flex items-center gap-1.5 text-cream-200 hover:text-cream-50 transition-colors cursor-pointer"
                      aria-expanded={projectsOpen}
                      onClick={() => setProjectsOpen(!projectsOpen)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Mega Dropdown */}
                    <div
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 w-80 rounded-sm glass-dark border border-cream-300/20 p-2 shadow-e3 transition-all duration-300',
                        projectsOpen
                          ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                          : 'opacity-0 -translate-y-2 pointer-events-none invisible',
                      )}
                    >
                      <div className="flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="group/child flex flex-col p-3 rounded-xs hover:bg-brown-800/80 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold tracking-wider text-cream-100 group-hover/child:text-cream-50">
                                {child.label}
                              </span>
                              {child.badge && (
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-cream-300/15 text-cream-200 border border-cream-300/30">
                                  {child.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] normal-case tracking-normal text-cream-300/70 mt-0.5">
                              {child.note}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              const isActive = location.pathname === item.href
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'nav-link transition-colors py-1',
                    isActive ? 'text-cream-50 font-semibold border-b border-cream-300/60' : 'text-cream-200 hover:text-cream-50',
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919930420085"
              className="flex items-center gap-2 text-xs tracking-wider uppercase text-cream-200 hover:text-cream-50 transition-colors px-2 py-1"
              title="Call Rapid Construction"
            >
              <Phone className="h-3.5 w-3.5 text-cream-300" />
              <span className="font-sans font-medium">+91 99304 20085</span>
            </a>

            <Link
              to="/book-site-visit"
              className="btn btn-light !min-h-[2.65rem] !px-5 !text-[11px] !tracking-[0.18em]"
            >
              <Calendar className="h-3.5 w-3.5 text-brown-900" />
              <span>Book Site Visit</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="xl:hidden p-2 text-cream-100 hover:text-cream-50 transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Architectural Navigation Drawer */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-brown-950/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-500 xl:hidden overflow-y-auto',
          mobileOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full',
        )}
      >
        <div className="flex flex-col gap-5 pt-4">
          <span className="eyebrow text-cream-300">Navigation</span>
          <nav className="flex flex-col gap-3 font-display text-2xl tracking-tight text-cream-100">
            <Link
              to="/projects"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Projects Archive</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <div className="pl-4 flex flex-col gap-2 text-base font-sans text-cream-300/80 -mt-1 pb-2">
              <Link to="/projects/upcoming" className="hover:text-cream-50 transition-colors">
                • Upcoming: Rapid Residency Phase IV
              </Link>
              <Link to="/projects/current" className="hover:text-cream-50 transition-colors">
                • Ready: Rapid Residency Phase III
              </Link>
              <Link to="/projects/completed" className="hover:text-cream-50 transition-colors">
                • Completed Landmarks
              </Link>
            </div>
            <Link
              to="/legacy"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Our Legacy (1984)</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/leadership"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Leadership Team</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/construction-timeline"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Construction Timeline</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/future-developments"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Future Developments</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/gallery"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Visual Gallery</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/why-rapid"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Why Rapid</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/testimonials"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Testimonials</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
            <Link
              to="/contact"
              className="hover:text-cream-50 transition-colors py-1 flex items-center justify-between border-b border-brown-800"
            >
              <span>Contact & Offices</span>
              <ArrowUpRight className="h-4 w-4 opacity-50" />
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 border-t border-brown-800/80">
          <Link to="/book-site-visit" className="btn btn-primary w-full text-center">
            <Calendar className="h-4 w-4 text-cream-100" />
            <span>Book a Site Visit</span>
          </Link>
          <div className="flex items-center justify-between text-xs text-cream-300/80">
            <span>Direct Desk:</span>
            <a href="tel:+919930420085" className="text-cream-100 font-semibold hover:underline">
              +91 99304 20085
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
