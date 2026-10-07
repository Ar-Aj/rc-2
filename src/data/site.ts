/**
 * Company facts — every value here is sourced from the client's portfolio PDF,
 * Phase IV proposal or 2024 brochure. See docs/CONTENT_AUDIT.md.
 * Keep this file free of React/DOM imports: it is also read by vite.config.ts.
 */

export const SITE_URL = 'https://rapidconstruction.in'

export const company = {
  name: 'Rapid Construction',
  legalName: 'Rapid Construction',
  descriptor: 'Builders & Developers',
  founded: 1984,
  tagline: 'Building Relations Since 1984',
  brochureLine: 'We give you the best',
  founders: ['Mr. Mohammed Anwar Abbajumma', 'Mr. Shamim Abbajumma'],
  email: 'ali@rapidconstruction.in',
  instagram: 'https://www.instagram.com/rapidconstruction/',
  instagramHandle: '@rapidconstruction',
  phones: {
    office: [
      { label: '+91 99304 20085', href: 'tel:+919930420085' },
      { label: '+91 93230 38222', href: 'tel:+919323038222' },
    ],
    sales: [
      { label: '+91 97698 33123', href: 'tel:+919769833123' },
      { label: '+91 98675 55781', href: 'tel:+919867555781' },
    ],
  },
  /** WhatsApp number used for site-visit confirmations (Rapid Residency sales desk). */
  whatsapp: '919769833123',
} as const

export interface Office {
  id: string
  name: string
  role: string
  lines: string[]
  locality: string
  region: string
  postalCode: string
  mapQuery: string
}

export const offices: Office[] = [
  {
    id: 'head-office',
    name: 'Rapid House',
    role: 'Head Office',
    lines: ['36/38 Narayan Dhuru Street', 'Opp. Beg Mohammed Baug, Mezzanine Floor', 'Mumbai 400003'],
    locality: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400003',
    mapQuery: 'Rapid House, 36/38 Narayan Dhuru Street, Mumbai 400003',
  },
  {
    id: 'andheri',
    name: 'Shoppers Point',
    role: 'Andheri Office',
    lines: ['Next to Moti Mahal Hotel, S.V. Road', 'Opp. Andheri (West) Railway Station', 'Mumbai 400058'],
    locality: 'Mumbai',
    region: 'Maharashtra',
    postalCode: '400058',
    mapQuery: 'Shoppers Point, S.V. Road, Andheri West, Mumbai 400058',
  },
  {
    id: 'neral',
    name: 'Rapid Residency',
    role: 'Neral Site Office',
    lines: ['Matushree Nagar, near Ganga Nagar', 'Ahead of Railway Phatak', 'Neral (E) 410101'],
    locality: 'Neral',
    region: 'Maharashtra',
    postalCode: '410101',
    mapQuery: 'Rapid Residency, Matushree Nagar, Neral East 410101',
  },
]

export const partners = [
  { name: 'Sr. Design Cell Architect', role: 'Architectural planning and design support' },
  { name: 'Point to Point', role: 'Project coordination and execution strategy' },
  { name: 'Point Advisory', role: 'Strategic advisory for clients and projects' },
  { name: 'Affinity Design Studio', role: 'Interior concepts and design solutions' },
] as const

export const futureDevelopments = [
  { city: 'Byculla', area: '50,000 – 1,00,000 sq.ft', min: 50000, max: 100000, note: 'South Mumbai — continuing the Maimoon Tower address.' },
  { city: 'Andheri', area: '1,50,000 sq.ft', min: 150000, max: 150000, note: 'Western suburbs — home of Shoppers Point since 2000.' },
  { city: 'Neral', area: '5,25,000 sq.ft', min: 525000, max: 525000, note: 'The foothills of Matheran — where Rapid Residency grew into a township.' },
] as const

/** Derived from portfolio unit counts (flats across delivered residential projects). */
export const stats = {
  years: new Date().getFullYear() - 1984,
  homes: 600,
  commercial: 200,
  projects: 20,
  tallest: 32,
  pipelineSqft: 725000,
} as const
