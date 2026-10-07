/**
 * Route-level SEO: titles, descriptions, canonical paths, OG images and JSON-LD.
 * Shared by <Seo> at runtime and by the Vite prerender plugin at build time,
 * so crawlers and social scrapers get correct metadata without executing JS.
 */
import { SITE_URL, company, offices } from './site'
import { pagedProjects, projectBySlug, type Project } from './projects'
import { homeFaqs } from './story'

export interface RouteMeta {
  path: string
  title: string
  description: string
  og?: string
  crumbs?: { name: string; path: string }[]
  schema?: Record<string, unknown>[]
  /** Short plain-text body for the <noscript> fallback in prerendered HTML */
  summary?: string
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  priority?: number
}

const abs = (p: string) => (p.startsWith('http') ? p : `${SITE_URL}${p}`)

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'HomeAndConstructionBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: company.name,
  alternateName: 'Rapid Constructions',
  description: `${company.name} — ${company.descriptor}. ${company.tagline}.`,
  url: SITE_URL,
  logo: abs('/icon-512.png'),
  image: abs('/og/default.jpg'),
  foundingDate: String(company.founded),
  founders: company.founders.map((name) => ({ '@type': 'Person', name })),
  email: company.email,
  telephone: '+91-9930420085',
  sameAs: [company.instagram],
  areaServed: ['Mumbai', 'Neral', 'Khopoli', 'Maharashtra'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '36/38 Narayan Dhuru Street, Mezzanine Floor',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    postalCode: '400003',
    addressCountry: 'IN',
  },
  department: offices.map((o) => ({
    '@type': 'HomeAndConstructionBusiness',
    name: `${company.name} — ${o.role}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.lines.slice(0, -1).join(', '),
      addressLocality: o.locality,
      addressRegion: o.region,
      postalCode: o.postalCode,
      addressCountry: 'IN',
    },
    telephone: '+91-9930420085',
  })),
})

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: company.name,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
})

export const breadcrumbSchema = (crumbs: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...crumbs].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
})

export const faqSchema = (faqs: readonly { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
})

export const projectSchema = (p: Project) => {
  const residential = /resid|township|bungalow/i.test(p.category)
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': residential ? 'ApartmentComplex' : p.category === 'Hospitality' ? 'Hotel' : 'Place',
    name: p.name,
    description: p.summary,
    url: abs(`/projects/${p.slug}`),
    image: abs(`/og/${ogFor(p.slug)}.jpg`),
    address: {
      '@type': 'PostalAddress',
      addressLocality: p.area,
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    containedInPlace: { '@type': 'City', name: p.city },
    additionalProperty: p.facts.map((f) => ({ '@type': 'PropertyValue', name: f.label, value: f.value })),
  }
  if (residential && p.amenities) {
    base.amenityFeature = p.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: a, value: true }))
  }
  const out: Record<string, unknown>[] = [base]
  if (p.status !== 'completed') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'RealEstateListing',
      name: `${p.name} — ${p.statusLabel}`,
      url: abs(`/projects/${p.slug}`),
      description: p.summary,
      provider: { '@id': `${SITE_URL}/#organization` },
      about: { '@type': 'Place', name: p.name },
    })
  }
  return out
}

const OG_AVAILABLE = new Set([
  'rapid-residency-phase-4',
  'rapid-residency-phase-3',
  'maimoon-tower',
  'rapid-heights',
  'hotel-elegant',
  'rapid-jewel',
  'rapid-royal',
  'rapid-residency',
])
const ogFor = (slug: string) => (OG_AVAILABLE.has(slug) ? slug : 'default')

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Rapid Construction — Builders & Developers in Mumbai since 1984',
    description:
      'Forty years of building Mumbai — from Narayan Dhuru Street to the G+32 Rapid Heights, Maimoon Tower and the Rapid Residency township in Neral. Explore homes, legacy and upcoming launches.',
    schema: [faqSchema(homeFaqs)],
    summary:
      'Rapid Construction, founded in 1984 by Mr. Mohammed Anwar Abbajumma and Mr. Shamim Abbajumma, has delivered landmark homes and commercial buildings across South Mumbai, Andheri, Neral and Khopoli.',
    changefreq: 'weekly',
    priority: 1,
  },
  {
    path: '/legacy',
    title: 'Our Legacy — Four Decades of Building Relations | Rapid Construction',
    description:
      'From a G+5 building completed in 21 days in 1984 to a G+32 tower and a Neral township: the family story behind Rapid Construction.',
    og: 'legacy',
    crumbs: [{ name: 'Our Legacy', path: '/legacy' }],
    priority: 0.8,
  },
  {
    path: '/leadership',
    title: 'Leadership — The Abbajumma Family | Rapid Construction',
    description:
      'Meet the founders and the leadership team of Rapid Construction: Aslam (CEO), Khurram (CMO), Ahmed (COO) and Mohammed Ali Abbajumma (CFO), and the next generation.',
    og: 'legacy',
    crumbs: [{ name: 'Leadership', path: '/leadership' }],
    priority: 0.7,
  },
  {
    path: '/projects',
    title: 'Project Archive — Every Rapid Construction Building since 1984',
    description:
      'Browse and compare all Rapid Construction projects — residential towers, townships, commercial centres, a hotel and a resort across Mumbai, Neral and Khopoli.',
    crumbs: [{ name: 'Project Archive', path: '/projects' }],
    priority: 0.9,
  },
  {
    path: '/projects/completed',
    title: 'Completed Projects — Landmarks Delivered | Rapid Construction',
    description:
      'Maimoon Tower, Rapid Heights (G+32), Hotel Elegant, Rapid Royal, Rapid Jewel, Shoppers Point and more: four decades of delivered buildings.',
    crumbs: [
      { name: 'Projects', path: '/projects' },
      { name: 'Completed', path: '/projects/completed' },
    ],
    priority: 0.8,
  },
  {
    path: '/projects/current',
    title: 'Current Projects — Ready-to-Move Homes in Neral | Rapid Construction',
    description:
      'Ready-to-move flats and shops at Rapid Residency Phase III, Neral — a G+7 building in a 25-building township, walking distance from Neral station.',
    og: 'rapid-residency-phase-3',
    crumbs: [
      { name: 'Projects', path: '/projects' },
      { name: 'Current', path: '/projects/current' },
    ],
    priority: 0.9,
  },
  {
    path: '/projects/upcoming',
    title: 'Upcoming Projects — Rapid Residency Phase IV, Neral | Rapid Construction',
    description:
      'Register interest in Rapid Residency Phase IV: 1 BHK (397 sq.ft carpet) and 2 BHK (501 sq.ft carpet) homes, five minutes from Neral station, with pool and gym.',
    og: 'rapid-residency-phase-4',
    crumbs: [
      { name: 'Projects', path: '/projects' },
      { name: 'Upcoming', path: '/projects/upcoming' },
    ],
    priority: 0.9,
  },
  {
    path: '/gallery',
    title: 'Gallery — Architecture, Interiors & Amenities | Rapid Construction',
    description: 'A visual archive of Rapid Construction buildings, interiors and amenities across Mumbai, Neral and Khopoli.',
    og: 'gallery',
    crumbs: [{ name: 'Gallery', path: '/gallery' }],
    priority: 0.6,
  },
  {
    path: '/construction-timeline',
    title: 'Construction Timeline 1984 – Today | Rapid Construction',
    description:
      'An interactive chronicle of every Rapid Construction milestone — from Amin Building in 1984 to Maimoon Tower in 2023 and Phase IV next.',
    crumbs: [{ name: 'Construction Timeline', path: '/construction-timeline' }],
    priority: 0.6,
  },
  {
    path: '/future-developments',
    title: 'Future Developments — 7.25 Lakh sq.ft Pipeline | Rapid Construction',
    description:
      'Upcoming Rapid Construction developments across Byculla (50,000–1,00,000 sq.ft), Andheri (1,50,000 sq.ft) and Neral (5,25,000 sq.ft).',
    crumbs: [{ name: 'Future Developments', path: '/future-developments' }],
    priority: 0.7,
  },
  {
    path: '/why-rapid',
    title: 'Why Rapid — Trust Built Over Four Decades | Rapid Construction',
    description:
      'Family-run since 1984, delivered across 20+ projects, with transparent specifications, trusted partners and homes you can visit before you buy.',
    crumbs: [{ name: 'Why Rapid', path: '/why-rapid' }],
    priority: 0.7,
  },
  {
    path: '/testimonials',
    title: 'Testimonials — Residents & Owners | Rapid Construction',
    description: 'What residents, homeowners and shop owners say about living and working in Rapid Construction buildings.',
    crumbs: [{ name: 'Testimonials', path: '/testimonials' }],
    priority: 0.5,
  },
  {
    path: '/careers',
    title: 'Careers — Build With Us | Rapid Construction',
    description:
      'Join a family-run Mumbai developer with four decades of delivery. Openings across site engineering, sales, architecture, interiors and finance.',
    crumbs: [{ name: 'Careers', path: '/careers' }],
    priority: 0.5,
  },
  {
    path: '/contact',
    title: 'Contact Rapid Construction — Mumbai, Andheri & Neral Offices',
    description:
      'Visit Rapid House on Narayan Dhuru Street, our Andheri office at Shoppers Point, or the Rapid Residency site office in Neral. Call +91 99304 20085.',
    crumbs: [{ name: 'Contact', path: '/contact' }],
    priority: 0.8,
  },
  {
    path: '/book-site-visit',
    title: 'Book a Site Visit — Rapid Residency, Neral | Rapid Construction',
    description:
      'Choose a project, date and time to visit Rapid Residency Phase III or preview Phase IV in Neral. Our team will confirm within one working day.',
    crumbs: [{ name: 'Book a Site Visit', path: '/book-site-visit' }],
    priority: 0.9,
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Rapid Construction',
    description: 'How Rapid Construction collects, uses and protects personal information submitted through this website.',
    crumbs: [{ name: 'Privacy Policy', path: '/privacy' }],
    changefreq: 'yearly',
    priority: 0.2,
  },
  {
    path: '/terms',
    title: 'Terms of Use | Rapid Construction',
    description: 'Terms governing use of the Rapid Construction website, project information, imagery and downloads.',
    crumbs: [{ name: 'Terms of Use', path: '/terms' }],
    changefreq: 'yearly',
    priority: 0.2,
  },
]

const projectRoutes: RouteMeta[] = pagedProjects.map((p) => ({
  path: `/projects/${p.slug}`,
  title: `${p.name} — ${p.area} | Rapid Construction`,
  description: `${p.summary}`.slice(0, 158),
  og: ogFor(p.slug),
  crumbs: [
    { name: 'Projects', path: '/projects' },
    { name: p.name, path: `/projects/${p.slug}` },
  ],
  summary: [p.summary, ...p.story].join(' '),
  priority: p.status === 'completed' ? 0.7 : 0.95,
  changefreq: p.status === 'completed' ? 'monthly' : 'weekly',
}))

export const routes: RouteMeta[] = [...staticRoutes, ...projectRoutes]

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Page not found | Rapid Construction',
  description: 'This floor hasn’t been built yet. Return to the Rapid Construction homepage.',
}

export function metaFor(path: string): RouteMeta | undefined {
  const clean = path.replace(/\/+$/, '') || '/'
  return routes.find((r) => r.path === clean)
}

/** All JSON-LD for a route (site-wide graph + breadcrumbs + page-specific). */
export function schemaFor(meta: RouteMeta): Record<string, unknown>[] {
  const out: Record<string, unknown>[] = []
  if (meta.path === '/') out.push(organizationSchema(), websiteSchema())
  if (meta.crumbs) out.push(breadcrumbSchema(meta.crumbs))
  const m = meta.path.match(/^\/projects\/([^/]+)$/)
  if (m) {
    const p = projectBySlug(m[1])
    if (p) {
      out.push(...projectSchema(p))
      if (p.faqs) out.push(faqSchema(p.faqs))
    }
  }
  if (meta.schema) out.push(...meta.schema)
  return out
}

export const absoluteUrl = abs
