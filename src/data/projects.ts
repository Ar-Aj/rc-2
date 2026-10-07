/**
 * Project portfolio — sourced from "Rapid Construction Portfolio (2).pdf",
 * "Phase 4 Proposal Rapid Construction..pdf" and the 2024 brochure.
 *
 * Anything not present in those sources is marked `sample: true` and rendered
 * with a visible "Sample content" tag so it can be replaced before launch.
 * Keep free of React/DOM imports (read by vite.config.ts for SEO prerendering).
 */
import type { MediaKey } from './media.generated'

export type ProjectStatus = 'completed' | 'current' | 'upcoming'
export type MapZone = 'south-mumbai' | 'andheri' | 'neral' | 'khopoli'

export interface Fact {
  label: string
  value: string
}

export interface SpecGroup {
  group: string
  items: string[]
}

export interface Nearby {
  name: string
  distance: string
  kind: 'education' | 'transit' | 'landmark' | 'health' | 'leisure'
}

export interface FloorPlan {
  name: string
  carpet: string
  saleable: string
  description: string
  plan: MediaKey
  plan3d: MediaKey
}

export interface Milestone {
  label: string
  date: string
  state: 'done' | 'active' | 'next'
  sample?: boolean
}

export interface Download {
  label: string
  href: string
  size: string
}

export interface Faq {
  q: string
  a: string
}

export interface GalleryItem {
  key: MediaKey
  caption: string
}

export interface Project {
  slug: string
  name: string
  status: ProjectStatus
  statusLabel: string
  category: string
  zone: MapZone
  area: string
  city: string
  years: string
  yearStart: number
  yearEnd: number
  storeys: string
  units: string[]
  tagline: string
  summary: string
  story: string[]
  hero?: MediaKey
  heroNote?: string
  gallery: GalleryItem[]
  facts: Fact[]
  amenities?: string[]
  specs?: SpecGroup[]
  connectivity?: Fact[]
  nearby?: Nearby[]
  floorPlans?: FloorPlan[]
  milestones?: Milestone[]
  downloads?: Download[]
  faqs?: Faq[]
  pricing?: { label: string; value: string; sample: boolean }[]
  rera?: { value: string; sample: boolean }
  /** Has its own landing page under /projects/:slug */
  hasPage: boolean
  featured?: boolean
  logo?: MediaKey
}

const PORTFOLIO_PDF: Download = {
  label: 'Rapid Construction — Company Portfolio',
  href: '/downloads/rapid-construction-portfolio.pdf',
  size: 'PDF · 7.5 MB',
}
const PHASE4_PDF: Download = {
  label: 'Rapid Residency Phase IV — Brochure',
  href: '/downloads/rapid-residency-phase-4-brochure.pdf',
  size: 'PDF · 8.6 MB',
}

const NERAL_CONNECTIVITY: Fact[] = [
  { label: 'Neral Railway Station', value: '5-minute walk' },
  { label: 'Navi Mumbai International Airport', value: '≈ 45 minutes' },
  { label: 'Rail & road', value: 'Linked to both Mumbai and Navi Mumbai' },
  { label: 'Matheran hill station', value: 'At the foothills' },
]

const NERAL_EDUCATION: Nearby[] = [
  { name: 'VidyaVikas Mandir School', distance: '1 km', kind: 'education' },
  { name: 'ICAR Business College', distance: '2 km', kind: 'education' },
  { name: 'Nav Jeevan Education (B.Ed. & D.Ed.)', distance: '2 km', kind: 'education' },
  { name: 'Upcoming MBA College', distance: '2 km (anticipated)', kind: 'education' },
  { name: 'Neral Vidya Mandir School & College', distance: '3 km', kind: 'education' },
  { name: 'A.V. Aacharya Engineering College', distance: '4 km', kind: 'education' },
  { name: 'Neral Railway Station', distance: '5-min walk', kind: 'transit' },
  { name: 'Good Shepherd Church', distance: 'Landmark', kind: 'landmark' },
]

export const projects: Project[] = [
  // ───────────────────────────── CURRENT / UPCOMING ─────────────────────────────
  {
    slug: 'rapid-residency-phase-4',
    name: 'Rapid Residency Phase IV',
    status: 'upcoming',
    statusLabel: 'Upcoming launch',
    category: 'Residential',
    zone: 'neral',
    area: 'Neral (E)',
    city: 'Neral, Maharashtra',
    years: 'Launching soon',
    yearStart: 2025,
    yearEnd: 2028,
    storeys: 'Mid-rise residential',
    units: ['1 BHK · 397 sq.ft carpet', '2 BHK · 501 sq.ft carpet'],
    tagline: 'Five minutes from the station. A lifetime from the city noise.',
    summary:
      'The next chapter of the Rapid Residency township — refined 1 and 2 BHK homes a five-minute walk from Neral station, with a fitness centre, swimming pool, landscaped garden and a kids’ play area within the gates.',
    story: [
      'Rapid Residency began in 2011 with eight buildings on the edge of Neral. Twenty-four buildings and three phases later, it has become one of the town’s defining neighbourhoods — a place where families from Mumbai found more space without giving up the train home.',
      'Phase IV takes everything residents have asked for over those years and puts it in one address. Homes are planned for light and cross-ventilation, finished with vitrified floors and granite kitchens, and wrapped in amenities that used to belong only to city towers: a gymnasium, a swimming pool, a landscaped garden with seating and a safe, open play area for children.',
      'The plot spans 3,332 sq.m beside the Good Shepherd Church landmark, with schools and colleges between one and four kilometres away and the Navi Mumbai International Airport about forty-five minutes by road.',
    ],
    hero: 'projects/residency-phase-4/elevation-day',
    heroNote: 'Provisional elevation — artist’s impression',
    gallery: [
      { key: 'projects/residency-phase-4/elevation-day', caption: 'Day view — provisional elevation' },
      { key: 'projects/residency-phase-4/elevation-night', caption: 'Night view — provisional elevation' },
      { key: 'projects/residency-phase-4/entrance-lobby', caption: 'Entrance lobby' },
      { key: 'projects/residency-phase-4/entrance-gate', caption: 'Entrance gate' },
      { key: 'projects/residency-phase-4/fitness-centre', caption: 'Fitness centre' },
      { key: 'projects/residency-phase-4/garden-seating', caption: 'Garden with seating' },
      { key: 'projects/residency-phase-4/kids-play', caption: 'Kids’ play area' },
      { key: 'interiors/heritage-living', caption: 'Living room — representative interior' },
      { key: 'interiors/kitchen', caption: 'Kitchen — representative interior' },
      { key: 'interiors/bath', caption: 'Bath — representative interior' },
    ],
    facts: [
      { label: 'Configurations', value: '1 BHK & 2 BHK' },
      { label: '1 BHK', value: '397 sq.ft carpet · 615 sq.ft saleable' },
      { label: '2 BHK', value: '501 sq.ft carpet · 770 sq.ft saleable' },
      { label: 'Plot area', value: '3,332.13 sq.m' },
      { label: 'Station', value: '5-minute walk to Neral' },
      { label: 'Airport', value: '≈ 45 min to NMIA' },
    ],
    amenities: [
      'Fully equipped gymnasium',
      'Swimming pool',
      'Landscaped garden with seating',
      'Kids’ play area',
      'Designer entrance lobby',
      'Grand entrance gate',
      'Power back-up for common areas & lifts',
      'Round-the-clock security',
      'Private balcony in every apartment',
    ],
    specs: [
      {
        group: 'Electrical',
        items: [
          'Concealed copper wiring with designer modular switches',
          'Points for water filter, exhaust fan and refrigerator in kitchen',
          'Exhaust fan point in WC / bathroom',
          'TV point in the living room',
          'ELCB and MCB in every apartment',
        ],
      },
      {
        group: 'Doors & windows',
        items: ['Specially designed main door with quality fittings', 'High-quality internal doors, windows and ventilators'],
      },
      {
        group: 'Kitchen',
        items: ['Granite platform with stainless-steel sink & tap', 'Ceramic tile cladding 2 ft above the platform'],
      },
      {
        group: 'Bath & toilets',
        items: ['Ceramic tile dado up to 7 ft', 'High-quality wash basin', 'Water-efficient 6/3 litre dual-flush EWC'],
      },
      {
        group: 'Flooring',
        items: [
          'Vitrified tiles in bedroom and kitchen',
          'Matt / glossy ceramic tiles in stilt & lift lobby',
          'Anti-skid ceramic tiles in bath, WC and balcony',
        ],
      },
    ],
    connectivity: NERAL_CONNECTIVITY,
    nearby: NERAL_EDUCATION,
    floorPlans: [
      {
        name: '1 BHK',
        carpet: '397 sq.ft',
        saleable: '615 sq.ft',
        description:
          'A stylish living area, modern kitchen, serene bedroom and a well-appointed bath — compact, considered and steps from the station.',
        plan: 'projects/residency-phase-4/plan-1bhk',
        plan3d: 'projects/residency-phase-4/plan-1bhk-3d',
      },
      {
        name: '2 BHK',
        carpet: '501 sq.ft',
        saleable: '770 sq.ft',
        description:
          'Two bedrooms, a vibrant living room, a modern kitchen and sleek bath — space and sophistication for young families and couples.',
        plan: 'projects/residency-phase-4/plan-2bhk',
        plan3d: 'projects/residency-phase-4/plan-2bhk-3d',
      },
    ],
    milestones: [
      { label: 'Land & approved plan', date: 'Complete', state: 'done' },
      { label: 'Design & elevation', date: 'Provisional', state: 'active' },
      { label: 'Launch & bookings open', date: 'Q1 2026', state: 'next', sample: true },
      { label: 'Foundation', date: 'Q3 2026', state: 'next', sample: true },
      { label: 'Superstructure', date: '2027', state: 'next', sample: true },
      { label: 'Possession', date: 'Dec 2028', state: 'next', sample: true },
    ],
    pricing: [
      { label: '1 BHK', value: 'From ₹ 32 L*', sample: true },
      { label: '2 BHK', value: 'From ₹ 41 L*', sample: true },
    ],
    rera: { value: 'MahaRERA registration — to be updated', sample: true },
    downloads: [PHASE4_PDF, PORTFOLIO_PDF],
    faqs: [
      {
        q: 'How far is Rapid Residency Phase IV from Neral station?',
        a: 'About a five-minute walk. The project sits in Matushree Nagar, Neral (E), with rail and road links to both Mumbai and Navi Mumbai.',
      },
      {
        q: 'What apartment sizes are available?',
        a: '1 BHK homes of 397 sq.ft carpet (615 sq.ft saleable) and 2 BHK homes of 501 sq.ft carpet (770 sq.ft saleable).',
      },
      {
        q: 'Which amenities are planned?',
        a: 'A fully equipped gymnasium, swimming pool, landscaped garden with seating, kids’ play area, power back-up for common areas and lifts, and round-the-clock security.',
      },
      {
        q: 'Which schools and colleges are nearby?',
        a: 'VidyaVikas Mandir School (1 km), ICAR Business College (2 km), Nav Jeevan Education for B.Ed. & D.Ed. (2 km), Neral Vidya Mandir School & College (3 km) and A.V. Aacharya Engineering College (4 km).',
      },
    ],
    hasPage: true,
    featured: true,
  },
  {
    slug: 'rapid-residency-phase-3',
    name: 'Rapid Residency Phase III',
    status: 'current',
    statusLabel: 'Now selling · Ready to move',
    category: 'Residential & Retail',
    zone: 'neral',
    area: 'Neral (E)',
    city: 'Neral, Maharashtra',
    years: '2016 – 2019',
    yearStart: 2016,
    yearEnd: 2019,
    storeys: 'G + 7',
    units: ['42 flats', '19 shops'],
    tagline: 'The township rises. Seven storeys above the foothills.',
    summary:
      'The first mid-rise of the Rapid Residency township — a G+7 building of 42 homes and 19 shops, completed and ready for families who want to move in, not wait.',
    story: [
      'After two phases of low-rise G+3 buildings, Phase III lifted Rapid Residency to seven storeys — opening up views of the Matheran range and giving the township its first street-facing retail frontage.',
      'Nineteen shops at ground level turned the building into a daily destination for the whole neighbourhood, while 42 apartments above offer residents the quiet of Neral with the convenience of everything at their doorstep.',
      'It is a completed, lived-in building — which means you can walk the corridors, stand on the balcony and see exactly what you are buying.',
    ],
    hero: 'projects/residency-phase-3/completed-wing',
    gallery: [
      { key: 'projects/residency-phase-3/completed-wing', caption: 'Phase III — completed G+7 building' },
      { key: 'projects/rapid-residency/township-aerial', caption: 'Phase II (foreground) and Phase III (top right)' },
      { key: 'projects/rapid-residency/phase-2-aerial', caption: 'The Rapid Residency township' },
      { key: 'projects/rapid-residency/phase-1-aerial', caption: 'Phase I — eight G+3 buildings' },
      { key: 'interiors/sunlit-living', caption: 'Living room — representative interior' },
    ],
    facts: [
      { label: 'Structure', value: 'G + 7, one building' },
      { label: 'Homes', value: '42 flats' },
      { label: 'Retail', value: '19 shops' },
      { label: 'Built', value: '2016 – 2019' },
      { label: 'Status', value: 'Completed · ready to move' },
      { label: 'Station', value: 'Walk to Neral station' },
    ],
    amenities: [
      'Ground-floor retail frontage',
      'Lift access to all floors',
      'Part of a 25-building township',
      'Walking distance to Neral station',
      'Schools within 1–4 km',
      'Views towards the Matheran range',
    ],
    connectivity: NERAL_CONNECTIVITY,
    nearby: NERAL_EDUCATION,
    milestones: [
      { label: 'Construction begins', date: '2016', state: 'done' },
      { label: 'Structure complete', date: '2018', state: 'done' },
      { label: 'Completion', date: '2019', state: 'done' },
      { label: 'Ready-to-move sales', date: 'Now', state: 'active' },
    ],
    pricing: [
      { label: 'Flats', value: 'Price on request', sample: false },
      { label: 'Shops', value: 'Price on request', sample: false },
      { label: 'Available inventory', value: '6 flats · 3 shops*', sample: true },
    ],
    rera: { value: 'MahaRERA registration — to be updated', sample: true },
    downloads: [PORTFOLIO_PDF],
    faqs: [
      {
        q: 'Is Rapid Residency Phase III ready to move in?',
        a: 'Yes. The G+7 building was completed in 2019. Remaining homes and shops can be visited before you book.',
      },
      {
        q: 'How many homes and shops are in Phase III?',
        a: 'Phase III has 42 flats and 19 shops in a single G+7 building within the Rapid Residency township.',
      },
    ],
    hasPage: true,
    featured: true,
  },

  // ───────────────────────────── SIGNATURE COMPLETED ─────────────────────────────
  {
    slug: 'maimoon-tower',
    name: 'Maimoon Tower',
    status: 'completed',
    statusLabel: 'Completed 2023',
    category: 'Luxury Residential',
    zone: 'south-mumbai',
    area: 'Byculla',
    city: 'Mumbai',
    years: '2020 – 2023',
    yearStart: 2020,
    yearEnd: 2023,
    storeys: 'G + 21',
    units: ['Luxury residences', 'High-tech gym', 'Clubhouse'],
    tagline: 'Twenty-one storeys of quiet authority in the heart of Byculla.',
    summary:
      'A G+21 residential tower in the heart of Byculla with a high-tech gym and a luxurious clubhouse — high-class living with the refinement of hospitality.',
    story: [
      'Byculla is old Mumbai — mills, markets and mansions. Maimoon Tower rises from that texture with a crown that catches the evening light and a base designed to sit gracefully on the street.',
      'Inside, the tower brings resort-grade amenities to the city: a high-tech gymnasium and a luxurious clubhouse, so the best parts of the day can happen without leaving home.',
      'Completed in 2023, it is the most recent statement of what four decades of building in South Mumbai has taught us.',
    ],
    hero: 'projects/maimoon-tower/elevation',
    heroNote: 'Architectural elevation',
    gallery: [
      { key: 'projects/maimoon-tower/elevation', caption: 'Maimoon Tower — elevation' },
      { key: 'projects/maimoon-tower/render', caption: 'Street view' },
      { key: 'interiors/city-view-living', caption: 'City-view living — representative interior' },
      { key: 'interiors/dining', caption: 'Dining — representative interior' },
    ],
    facts: [
      { label: 'Height', value: 'G + 21' },
      { label: 'Location', value: 'Byculla, Mumbai' },
      { label: 'Built', value: '2020 – 2023' },
      { label: 'Amenities', value: 'High-tech gym · Clubhouse' },
    ],
    amenities: ['High-tech gymnasium', 'Luxurious clubhouse', 'Landscaped podium', 'Secure entrance lobby'],
    connectivity: [
      { label: 'Byculla Station', value: 'Central line' },
      { label: 'South Mumbai', value: 'Minutes to Fort & Colaba' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
  },
  {
    slug: 'rapid-heights',
    name: 'Rapid Heights',
    status: 'completed',
    statusLabel: 'Completed 2013',
    category: 'Residential Tower',
    zone: 'south-mumbai',
    area: 'Kolsa Mohalla, Pydhonie',
    city: 'Mumbai',
    years: '2009 – 2013',
    yearStart: 2009,
    yearEnd: 2013,
    storeys: 'G + 32',
    units: ['114 flats', '5 shops', '76,800 sq.ft'],
    tagline: 'Thirty-two floors. One of the tallest addresses in old Mumbai.',
    summary:
      'Standing majestically at 32 floors, Rapid Heights is a landmark in Kolsa Mohalla — 114 flats and 5 shops across 76,800 sq.ft, with sweeping city views.',
    story: [
      'For a neighbourhood of narrow lanes and low rooflines, Rapid Heights changed the skyline. Rising thirty-two floors above Kolsa Mohalla, it gave families who had lived in Pydhonie for generations the chance to stay — and to look out over the city they grew up in.',
      '114 homes and 5 shops spread across 76,800 sq.ft make it the tallest building in the Rapid Construction portfolio, and a new era of residential living for the area.',
    ],
    hero: 'projects/rapid-heights/tower',
    gallery: [
      { key: 'projects/rapid-heights/tower', caption: 'Rapid Heights, G+32' },
      { key: 'projects/rapid-heights/sky', caption: 'Looking up from Kolsa Mohalla' },
      { key: 'interiors/city-view-living', caption: 'City-view living — representative interior' },
    ],
    facts: [
      { label: 'Height', value: 'G + 32' },
      { label: 'Homes', value: '114 flats' },
      { label: 'Retail', value: '5 shops' },
      { label: 'Built-up', value: '76,800 sq.ft' },
      { label: 'Built', value: '2009 – 2013' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
    logo: 'brand/logo-rapid-heights',
  },
  {
    slug: 'rapid-residency',
    name: 'Rapid Residency',
    status: 'completed',
    statusLabel: 'Phases I & II complete',
    category: 'Township',
    zone: 'neral',
    area: 'Neral (E)',
    city: 'Neral, Maharashtra',
    years: '2011 – 2016',
    yearStart: 2011,
    yearEnd: 2016,
    storeys: '24 buildings · G + 3',
    units: ['385 flats', '19 shops'],
    tagline: 'A township at the foot of Matheran, built one phase at a time.',
    summary:
      'A grand residential township in Neral — Phase I with 135 flats and 5 shops across 8 buildings, Phase II with 250 flats and 14 shops across 16 buildings.',
    story: [
      'In 2011 Rapid Construction broke ground on eight G+3 buildings in Neral, a railway town at the base of the Matheran hills. Within two years Phase I was home to 135 families.',
      'Phase II followed with sixteen more buildings and 250 homes, laid around open green courts so that every block looks onto trees rather than walls. Together they form a thriving community with everything residents need for modern living, all in one place.',
      'Ready-to-move homes in Phase II are still occasionally available, with home-loan assistance and a simple booking amount.',
    ],
    hero: 'projects/rapid-residency/township-aerial',
    gallery: [
      { key: 'projects/rapid-residency/township-aerial', caption: 'The township with the Matheran range behind' },
      { key: 'projects/rapid-residency/phase-2-aerial', caption: 'Phase II — sixteen G+3 buildings' },
      { key: 'projects/rapid-residency/phase-1-aerial', caption: 'Phase I — eight G+3 buildings' },
      { key: 'projects/residency-phase-3/completed-wing', caption: 'Phase III — the township’s first G+7' },
    ],
    facts: [
      { label: 'Phase I', value: '8 buildings · 135 flats · 5 shops · 2011–13' },
      { label: 'Phase II', value: '16 buildings · 250 flats · 14 shops · 2013–16' },
      { label: 'Structure', value: 'G + 3' },
      { label: 'Location', value: 'Matushree Nagar, Neral (E)' },
    ],
    amenities: ['Open green courts', 'Walk to Neral station', 'Ground-floor retail', 'Gated community'],
    connectivity: NERAL_CONNECTIVITY,
    nearby: NERAL_EDUCATION,
    pricing: [
      { label: 'Booking amount', value: '₹ 51,000', sample: false },
      { label: 'Home loan', value: 'Up to 90–100% assistance*', sample: false },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
    logo: 'brand/logo-residency-phase-2',
  },
  {
    slug: 'hotel-elegant',
    name: 'Hotel Elegant',
    status: 'completed',
    statusLabel: 'Completed 2018',
    category: 'Hospitality',
    zone: 'south-mumbai',
    area: 'Narayan Dhuru Street',
    city: 'Mumbai',
    years: '2016 – 2018',
    yearStart: 2016,
    yearEnd: 2018,
    storeys: 'G + 7',
    units: ['29 rooms', '8 shops'],
    tagline: 'Where Zubeda Castle became a hotel — and we became hoteliers.',
    summary:
      'A G+7 hospitality development with 29 luxurious rooms and 8 shops in the heart of Narayan Dhuru Street — the project that marked Rapid Construction’s move into hospitality.',
    story: [
      'In 1987 we built Zubeda Castle, a G+7 building a few doors from what would become our own head office. Three decades later, we reimagined it.',
      'Between 2016 and 2018 the building was transformed into Hotel Elegant — 29 rooms above 8 street-level shops, its warm façade washed in light every evening. It was the company’s first step into hospitality, and a sign of the diversification that defines the next generation.',
    ],
    hero: 'projects/hotel-elegant/night',
    gallery: [
      { key: 'projects/hotel-elegant/night', caption: 'Hotel Elegant at night' },
      { key: 'projects/hotel-elegant/day', caption: 'Hotel Elegant by day' },
    ],
    facts: [
      { label: 'Height', value: 'G + 7' },
      { label: 'Rooms', value: '29' },
      { label: 'Retail', value: '8 shops' },
      { label: 'Originally', value: 'Zubeda Castle, 1987–88' },
      { label: 'Relaunched', value: '2016 – 2018' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
  },
  {
    slug: 'rapid-royal',
    name: 'Rapid Royal',
    status: 'completed',
    statusLabel: 'Completed 2017',
    category: 'Resort & Bungalows',
    zone: 'neral',
    area: 'Jite, Neral',
    city: 'Neral, Maharashtra',
    years: '2014 – 2017',
    yearStart: 2014,
    yearEnd: 2017,
    storeys: '24 bungalows',
    units: ['24 bungalows', 'Strikers resort'],
    tagline: 'Twenty-four bungalows and a resort, made for slower weekends.',
    summary:
      'An exclusive collection of 24 bungalows with the Strikers resort in the peaceful surroundings of Jite, Neral — a royal retreat amidst nature that stays connected to the city.',
    story: [
      'Rapid Royal is the portfolio’s most personal project: a luxurious resort and an exclusive enclave of 24 bungalows near Neral, where weekends are measured in cricket matches, long lunches and evening walks.',
      'Known locally as Strikers, the resort brings sport and leisure to the doorstep, while the bungalows offer the privacy of a home in nature within easy reach of Mumbai.',
    ],
    hero: 'projects/rapid-royal/forecourt',
    gallery: [
      { key: 'projects/rapid-royal/forecourt', caption: 'Rapid Royal — the Strikers forecourt' },
      { key: 'projects/rapid-royal/entrance', caption: 'Arrival court' },
      { key: 'interiors/contemporary-villa', caption: 'Bungalow living — representative' },
    ],
    facts: [
      { label: 'Bungalows', value: '24' },
      { label: 'Resort', value: 'Strikers' },
      { label: 'Location', value: 'Jite, Neral' },
      { label: 'Built', value: '2014 – 2017' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
    logo: 'brand/logo-rapid-royal',
  },
  {
    slug: 'rapid-jewel',
    name: 'Rapid Jewel',
    status: 'completed',
    statusLabel: 'Completed 2013',
    category: 'Residential',
    zone: 'khopoli',
    area: 'Khopoli',
    city: 'Khopoli, Maharashtra',
    years: '2009 – 2013',
    yearStart: 2009,
    yearEnd: 2013,
    storeys: '3 wings · G + 7',
    units: ['3 residential wings', 'Ground-floor shops'],
    tagline: 'Three wings, stepped like terraces, on the road to the ghats.',
    summary:
      'Three G+7 residential wings in Khopoli — a grand development with homes above and shops at street level, at the gateway to the Sahyadri ghats.',
    story: [
      'Khopoli sits where the Mumbai–Pune route begins its climb into the ghats. Rapid Jewel brought the company’s Mumbai standards here with three G+7 wings, their stepped balconies catching the light and the breeze off the hills.',
      'Shops along the base serve the neighbourhood, while the homes above look out to green slopes in almost every direction.',
    ],
    hero: 'projects/rapid-jewel/street',
    gallery: [
      { key: 'projects/rapid-jewel/street', caption: 'Rapid Jewel — street elevation' },
      { key: 'projects/rapid-jewel/elevation', caption: 'Stepped balconies, Khopoli' },
    ],
    facts: [
      { label: 'Structure', value: '3 wings, G + 7 each' },
      { label: 'Location', value: 'Khopoli' },
      { label: 'Built', value: '2009 – 2013' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
    featured: true,
    logo: 'brand/logo-rapid-jewel',
  },
  {
    slug: 'shoppers-point',
    name: 'Shoppers Point',
    status: 'completed',
    statusLabel: 'Completed 2000',
    category: 'Commercial',
    zone: 'andheri',
    area: 'S.V. Road, Andheri (W)',
    city: 'Mumbai',
    years: '1995 – 2000',
    yearStart: 1995,
    yearEnd: 2000,
    storeys: 'G + 6',
    units: ['84 shops & offices'],
    tagline: 'Our first major commercial address — opposite Andheri station.',
    summary:
      'An iconic commercial project on S.V. Road, Andheri (W) — 84 shops and office units across six floors, with unmatched footfall opposite Andheri station.',
    story: [
      'Launched in 1998 as the company’s first major commercial project, Shoppers Point stands directly opposite Andheri (West) station on S.V. Road — one of the busiest stretches in Mumbai.',
      'Its 84 shops and offices have been a bustling commercial centre for more than two decades, and the building is home to Rapid Construction’s Andheri office.',
    ],
    hero: 'projects/shoppers-point/sv-road',
    gallery: [{ key: 'projects/shoppers-point/sv-road', caption: 'Shoppers Point, S.V. Road, Andheri (W)' }],
    facts: [
      { label: 'Height', value: 'G + 6' },
      { label: 'Units', value: '84 shops & offices' },
      { label: 'Location', value: 'Opp. Andheri (W) station' },
      { label: 'Built', value: '1995 – 2000' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'galaxy-apartment',
    name: 'Galaxy Apartment',
    status: 'completed',
    statusLabel: 'Completed 2012',
    category: 'Residential & Retail',
    zone: 'neral',
    area: 'Near Neral Station',
    city: 'Neral, Maharashtra',
    years: '2008 – 2012',
    yearStart: 2008,
    yearEnd: 2012,
    storeys: '2 wings · G + 3',
    units: ['20 flats', '30 shops'],
    tagline: 'Where our Neral story began.',
    summary:
      'Two G+3 wings near Neral station with 20 flats and 30 shops — peaceful suburban living with easy access to daily necessities.',
    story: [
      'Galaxy Apartment was Rapid Construction’s first step into Neral — two G+3 wings close to the station, combining homes with a busy row of shops.',
      'Its success set the stage for everything that followed in the town, from Best Complex to the Rapid Residency township.',
    ],
    hero: 'projects/galaxy-apartment/sketch',
    heroNote: 'Architectural sketch',
    gallery: [{ key: 'projects/galaxy-apartment/sketch', caption: 'Galaxy Apartment — architectural sketch' }],
    facts: [
      { label: 'Structure', value: '2 wings, G + 3' },
      { label: 'Homes', value: '20 flats' },
      { label: 'Retail', value: '30 shops' },
      { label: 'Built', value: '2008 – 2012' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'best-complex',
    name: 'Best Complex',
    status: 'completed',
    statusLabel: 'Completed 2012',
    category: 'Commercial & Residential',
    zone: 'neral',
    area: 'Neral',
    city: 'Neral, Maharashtra',
    years: '2008 – 2012',
    yearStart: 2008,
    yearEnd: 2012,
    storeys: '2 buildings · G + 2',
    units: ['20 flats', '30 shops'],
    tagline: 'A working address for a growing town.',
    summary:
      'Best Enterprise is a two-winged development in Neral with 20 flats and 30 shops — modern infrastructure for businesses establishing themselves in a growing suburban locale.',
    story: [
      'As Neral grew, so did the need for places to work and trade. Best Complex answered with two wings of shops and homes, built for function and modern infrastructure.',
    ],
    hero: 'projects/best-complex/sketch',
    heroNote: 'Architectural sketch',
    gallery: [{ key: 'projects/best-complex/sketch', caption: 'Best Complex — architectural sketch' }],
    facts: [
      { label: 'Structure', value: '2 buildings, G + 2' },
      { label: 'Homes', value: '20 flats' },
      { label: 'Retail', value: '30 shops' },
      { label: 'Built', value: '2008 – 2012' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'haji-building',
    name: 'Haji Building',
    status: 'completed',
    statusLabel: 'Completed 1989',
    category: 'Residential & Commercial',
    zone: 'south-mumbai',
    area: 'Kolsa Mohalla',
    city: 'Mumbai',
    years: '1988 – 1989',
    yearStart: 1988,
    yearEnd: 1989,
    storeys: 'G + 5',
    units: ['4 shops / offices'],
    tagline: 'A residential hub with a historical touch.',
    summary:
      'An iconic G+5 building in Kolsa Mohalla with shops and offices — prime business space in one of the city’s most bustling areas.',
    story: [
      'Delivered in 1989, Haji Building brought residential and business space together in the heart of Kolsa Mohalla, ideal for small and growing businesses in one of Mumbai’s busiest neighbourhoods.',
    ],
    hero: 'projects/haji-building/sketch',
    heroNote: 'Architectural sketch',
    gallery: [{ key: 'projects/haji-building/sketch', caption: 'Haji Building — architectural sketch' }],
    facts: [
      { label: 'Height', value: 'G + 5' },
      { label: 'Commercial', value: '4 shops / offices' },
      { label: 'Built', value: '1988 – 1989' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'sk-mansion',
    name: 'S.K. Mansion',
    status: 'completed',
    statusLabel: 'Completed 1986',
    category: 'Residential & Offices',
    zone: 'south-mumbai',
    area: 'Kolsa Mohalla',
    city: 'Mumbai',
    years: '1985 – 1986',
    yearStart: 1985,
    yearEnd: 1986,
    storeys: 'G + 5',
    units: ['27 flats', '17 offices'],
    tagline: 'Home and work, under one roof.',
    summary:
      'A G+5 building in Kolsa Mohalla combining 27 flats with 17 office units — a perfect blend of work and home in one prime location.',
    story: [
      'S.K. Mansion was one of the company’s earliest buildings and one of its most practical: homes above, offices below, all within walking distance of Mumbai’s wholesale markets.',
    ],
    hero: 'projects/sk-mansion/illustration',
    heroNote: 'Illustration',
    gallery: [{ key: 'projects/sk-mansion/illustration', caption: 'S.K. Mansion — illustration' }],
    facts: [
      { label: 'Height', value: 'G + 5' },
      { label: 'Homes', value: '27 flats' },
      { label: 'Offices', value: '17 units' },
      { label: 'Built', value: '1985 – 1986' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'abbajumma-mansion',
    name: 'Abbajumma Mansion',
    status: 'completed',
    statusLabel: 'Completed 1986',
    category: 'Residential',
    zone: 'south-mumbai',
    area: 'Narayan Dhuru Street',
    city: 'Mumbai',
    years: '1985 – 1986',
    yearStart: 1985,
    yearEnd: 1986,
    storeys: 'G + 5',
    units: ['10 flats', '2 shops'],
    tagline: 'The family name, carved above the door.',
    summary:
      'Nestled in Narayan Dhuru Street, Abbajumma Mansion offers 10 cosy flats and 2 commercial shops — a cornerstone of the community.',
    story: [
      'Few buildings carry the family name. Abbajumma Mansion, completed in 1986 on Narayan Dhuru Street, is one of them — ten homes and two shops, built for those seeking a quiet yet connected life in the heart of the city.',
    ],
    hero: 'projects/abbajumma-mansion/facade',
    gallery: [{ key: 'projects/abbajumma-mansion/facade', caption: 'Abbajumma Mansion, Narayan Dhuru Street' }],
    facts: [
      { label: 'Height', value: 'G + 5' },
      { label: 'Homes', value: '10 flats' },
      { label: 'Retail', value: '2 shops' },
      { label: 'Built', value: '1985 – 1986' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },
  {
    slug: 'amin-building',
    name: 'Amin Building',
    status: 'completed',
    statusLabel: 'Completed 1986',
    category: 'Residential & Retail',
    zone: 'south-mumbai',
    area: 'Narayan Dhuru Street',
    city: 'Mumbai',
    years: '1984 – 1986',
    yearStart: 1984,
    yearEnd: 1986,
    storeys: 'G + 5',
    units: ['14 flats', '7 shops'],
    tagline: 'Where it all began.',
    summary:
      'A timeless G+5 structure in the heart of Narayan Dhuru Street with 14 flats and 7 shops — a reliable, community-centric residence.',
    story: [
      'The first building of Rapid Construction. Amin Building on Narayan Dhuru Street set the tone for everything that followed — honest construction, a strong community at street level, and homes built to last.',
    ],
    hero: 'projects/amin-building/sketch',
    heroNote: 'Architectural sketch',
    gallery: [{ key: 'projects/amin-building/sketch', caption: 'Amin Building — architectural sketch' }],
    facts: [
      { label: 'Height', value: 'G + 5' },
      { label: 'Homes', value: '14 flats' },
      { label: 'Retail', value: '7 shops' },
      { label: 'Built', value: '1984 – 1986' },
    ],
    downloads: [PORTFOLIO_PDF],
    hasPage: true,
  },

  // ───────────────────────────── ARCHIVE-ONLY ENTRIES ─────────────────────────────
  {
    slug: 'evergreen-building',
    name: 'Evergreen Building',
    status: 'completed',
    statusLabel: 'Completed',
    category: 'Residential',
    zone: 'south-mumbai',
    area: 'Mazgaon',
    city: 'Mumbai',
    years: '1987 – 1989',
    yearStart: 1987,
    yearEnd: 1989,
    storeys: 'Wings A & B · G + 7',
    units: ['Two wings'],
    tagline: 'Two G+7 wings at Mazgaon.',
    summary: 'Evergreen Building at Mazgaon — Wings A & B, G+7.',
    story: [],
    gallery: [],
    facts: [
      { label: 'Structure', value: 'Wings A & B, G + 7' },
      { label: 'Location', value: 'Mazgaon' },
    ],
    hasPage: false,
  },
  {
    slug: 'rapid-house',
    name: 'Rapid House',
    status: 'completed',
    statusLabel: 'Head office',
    category: 'Headquarters',
    zone: 'south-mumbai',
    area: 'Narayan Dhuru Street',
    city: 'Mumbai',
    years: '1990 – 1992',
    yearStart: 1990,
    yearEnd: 1992,
    storeys: '—',
    units: ['Official housing', 'Head office'],
    tagline: 'Our own address.',
    summary: 'Official housing and head office of Rapid Construction, 36/38 Narayan Dhuru Street.',
    story: [],
    gallery: [],
    facts: [{ label: 'Use', value: 'Head office & official housing' }],
    hasPage: false,
  },
  {
    slug: 'burhani-park',
    name: 'Burhani Park',
    status: 'completed',
    statusLabel: 'Completed',
    category: 'Residential',
    zone: 'south-mumbai',
    area: 'Mumbai',
    city: 'Mumbai',
    years: '2001 – 2003',
    yearStart: 2001,
    yearEnd: 2003,
    storeys: '—',
    units: [],
    tagline: 'A new millennium project.',
    summary: 'Constructed Burhani Park, 2001 – 2003.',
    story: [],
    gallery: [],
    facts: [],
    hasPage: false,
  },
  {
    slug: 'park-view-a-wing',
    name: 'Park View — A Wing',
    status: 'completed',
    statusLabel: 'Completed',
    category: 'Residential',
    zone: 'south-mumbai',
    area: 'Byculla',
    city: 'Mumbai',
    years: '2004 – 2006',
    yearStart: 2004,
    yearEnd: 2006,
    storeys: '—',
    units: [],
    tagline: 'Byculla, first wing.',
    summary: 'Park View A Wing, Byculla.',
    story: [],
    gallery: [],
    facts: [],
    hasPage: false,
  },
  {
    slug: 'park-view-b-wing',
    name: 'Park View — B Wing',
    status: 'completed',
    statusLabel: 'Completed',
    category: 'Residential',
    zone: 'south-mumbai',
    area: 'Byculla',
    city: 'Mumbai',
    years: '2007 – 2008',
    yearStart: 2007,
    yearEnd: 2008,
    storeys: '—',
    units: [],
    tagline: 'Byculla, second wing.',
    summary: 'Park View B Wing, Byculla.',
    story: [],
    gallery: [],
    facts: [],
    hasPage: false,
  },
]

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
export const pagedProjects = projects.filter((p) => p.hasPage)
export const featuredProjects = projects.filter((p) => p.featured && p.status === 'completed')

export const zones: Record<MapZone, { label: string; sub: string }> = {
  'south-mumbai': { label: 'South Mumbai', sub: 'Narayan Dhuru St · Kolsa Mohalla · Byculla · Mazgaon' },
  andheri: { label: 'Andheri (W)', sub: 'S.V. Road, opposite the station' },
  neral: { label: 'Neral', sub: 'At the foothills of Matheran' },
  khopoli: { label: 'Khopoli', sub: 'Gateway to the Sahyadri ghats' },
}
