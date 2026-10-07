import type { MediaKey } from './media.generated'

/** "Timeline of Projects — A Chronicle of Excellence and Milestone" (portfolio p.4) + founder story (p.2). */
export interface Chapter {
  year: string
  /** Large display numeral used in the horizontal timeline */
  mark: string
  title: string
  body: string
  slug?: string
  image?: MediaKey
}

export const prehistory: Chapter[] = [
  {
    year: '1968',
    mark: '68',
    title: 'A family carries on',
    body: 'After his father’s passing, Mr. Anwar Abbajumma supports the family through cloth sales, brick supplies and property brokerage.',
  },
  {
    year: '1971',
    mark: '71',
    title: 'Rajdeep Road Lines',
    body: 'Marriage fuels a greater ambition. With his brother Mr. Shamim Abbajumma, he launches a logistics venture that thrives until 1984.',
  },
]

export const chapters: Chapter[] = [
  {
    year: '1984',
    mark: '84',
    title: 'Twenty-one days',
    body: 'Rapid Construction is founded. Its first act: acquiring and completing a G+5 building in just 21 days. Amin Building rises on Narayan Dhuru Street.',
    slug: 'amin-building',
    image: 'projects/amin-building/sketch',
  },
  {
    year: '1985 – 86',
    mark: '85',
    title: 'The family name',
    body: 'S.K. Mansion in Kolsa Mohalla — 27 flats and 17 offices — and Abbajumma Mansion on Narayan Dhuru Street.',
    slug: 'abbajumma-mansion',
    image: 'projects/abbajumma-mansion/facade',
  },
  {
    year: '1987 – 89',
    mark: '87',
    title: 'Mazgaon & Zubeda Castle',
    body: 'Evergreen Building at Mazgaon (Wings A & B, G+7). Zubeda Castle (G+7) is delivered — the building that will one day become Hotel Elegant.',
    slug: 'hotel-elegant',
    image: 'projects/hotel-elegant/day',
  },
  {
    year: '1988 – 89',
    mark: '88',
    title: 'Haji Building',
    body: 'An iconic G+5 address of shops and offices in Kolsa Mohalla.',
    slug: 'haji-building',
    image: 'projects/haji-building/sketch',
  },
  {
    year: '1990 – 92',
    mark: '90',
    title: 'Rapid House',
    body: 'Official housing and the head office of Rapid Construction at 36/38 Narayan Dhuru Street.',
  },
  {
    year: '1995 – 2000',
    mark: '95',
    title: 'Shoppers Point, Andheri',
    body: 'The first major commercial project — 84 shops and offices opposite Andheri (W) station, launched in 1998.',
    slug: 'shoppers-point',
    image: 'projects/shoppers-point/sv-road',
  },
  {
    year: '2001 – 08',
    mark: '01',
    title: 'Burhani Park & Park View',
    body: 'Burhani Park (2001–03), then Park View A Wing (2004–06) and B Wing (2007–08) in Byculla.',
  },
  {
    year: '2008 – 12',
    mark: '08',
    title: 'Neral',
    body: 'Galaxy Apartment and Best Complex bring the company to Neral — the town that becomes its second home.',
    slug: 'galaxy-apartment',
    image: 'projects/galaxy-apartment/sketch',
  },
  {
    year: '2009 – 13',
    mark: '09',
    title: 'Thirty-two floors',
    body: 'Rapid Heights (G+32) transforms the Kolsa Mohalla skyline. Rapid Jewel’s three G+7 wings rise in Khopoli.',
    slug: 'rapid-heights',
    image: 'projects/rapid-heights/tower',
  },
  {
    year: '2011 – 19',
    mark: '11',
    title: 'A township',
    body: 'Rapid Residency — Phase I (8 buildings), Phase II (16 buildings), Phase III (G+7). Over 400 homes at the foot of Matheran.',
    slug: 'rapid-residency',
    image: 'projects/rapid-residency/township-aerial',
  },
  {
    year: '2014 – 17',
    mark: '14',
    title: 'Rapid Royal',
    body: 'A luxurious resort and 24 bungalows at Jite, Neral.',
    slug: 'rapid-royal',
    image: 'projects/rapid-royal/forecourt',
  },
  {
    year: '2016 – 18',
    mark: '16',
    title: 'Into hospitality',
    body: 'Hotel Elegant launches — 29 rooms and 8 shops — marking the company’s diversification.',
    slug: 'hotel-elegant',
    image: 'projects/hotel-elegant/night',
  },
  {
    year: '2017 – 18',
    mark: '17',
    title: 'A new generation',
    body: 'Mr. Shamim Abbajumma passes away in 2017; his legacy guides the family. In 2018 Mr. Khurram Abbajumma steps into his father Anwar’s shoes.',
  },
  {
    year: '2020 – 23',
    mark: '20',
    title: 'Maimoon Tower',
    body: 'A G+21 tower in Byculla with a high-tech gym and luxurious clubhouse.',
    slug: 'maimoon-tower',
    image: 'projects/maimoon-tower/elevation',
  },
  {
    year: 'Next',
    mark: '→',
    title: '7.25 lakh sq.ft ahead',
    body: 'Rapid Residency Phase IV, and future developments across Byculla, Andheri and Neral.',
    slug: 'rapid-residency-phase-4',
    image: 'projects/residency-phase-4/elevation-night',
  },
]

export interface Leader {
  name: string
  role: string
  title: string
  bio: string
  portrait?: MediaKey
  generation: 'founder' | 'leadership' | 'next'
}

export const leaders: Leader[] = [
  {
    name: 'Mr. Mohammed Anwar Abbajumma',
    role: 'Founder',
    title: 'Co-founder',
    bio: 'From cloth sales, brick supplies and brokerage in 1968 to Rajdeep Road Lines in 1971 and Rapid Construction in 1984 — the founder whose first building was completed in 21 days.',
    portrait: 'leadership/anwar-abbajumma',
    generation: 'founder',
  },
  {
    name: 'Mr. Shamim Abbajumma',
    role: 'Founder',
    title: 'Co-founder (1984 – 2017)',
    bio: 'Co-founder of Rajdeep Road Lines and Rapid Construction. His passing in 2017 was a significant loss; his standards continue to inspire the next generation.',
    generation: 'founder',
  },
  {
    name: 'Mr. Aslam Abbajumma',
    role: 'CEO',
    title: 'Chief Executive Officer',
    bio: 'With a clear vision, he continues to guide the company towards steady growth and diversification.',
    portrait: 'leadership/aslam-abbajumma',
    generation: 'leadership',
  },
  {
    name: 'Mr. Khurram Abbajumma',
    role: 'CMO',
    title: 'Chief Marketing Officer',
    bio: 'Stepping into his father Anwar’s shoes in 2018, he leads marketing and project negotiations with great insight.',
    portrait: 'leadership/khurram-abbajumma',
    generation: 'leadership',
  },
  {
    name: 'Mr. Ahmed Abbajumma',
    role: 'COO',
    title: 'Chief Operating Officer',
    bio: 'Ensures smooth operations and high-quality project execution on every site.',
    portrait: 'leadership/ahmed-abbajumma',
    generation: 'leadership',
  },
  {
    name: 'Mr. Mohammed Ali Abbajumma',
    role: 'CFO',
    title: 'Chief Financial Officer',
    bio: 'Manages the financials with care, maintaining the high standards set by his uncle, Shamim.',
    portrait: 'leadership/mohammed-ali-abbajumma',
    generation: 'leadership',
  },
  {
    name: 'Mr. Anas Abbajumma',
    role: 'Digital',
    title: 'Digital Marketing · Rapid Construction & AJ Digital Realty',
    bio: 'Leads digital marketing, leveraging technology to elevate the company’s presence.',
    generation: 'next',
  },
  {
    name: 'Mr. Abdullah Abbajumma',
    role: 'Architecture',
    title: 'Architect',
    bio: 'Joining under Khurram as an architect, bringing fresh creativity into every space.',
    generation: 'next',
  },
  {
    name: 'Mr. Mohammed Abbajumma',
    role: 'Interiors',
    title: 'Interior Designer',
    bio: 'Joining under Khurram as an interior designer, shaping how every home feels inside.',
    generation: 'next',
  },
]

/** SAMPLE — no testimonials exist in the source material. Replace with verified resident reviews. */
export const testimonials = [
  {
    quote:
      'We moved from Dongri to Neral for the space, and stayed for the people. The station is a five-minute walk — my commute barely changed, but my children finally have a garden.',
    name: 'Resident family',
    project: 'Rapid Residency Phase II',
    sample: true,
  },
  {
    quote:
      'Our family has bought from Rapid Construction twice in thirty years. What we value is simple: the building you are shown is the building you get.',
    name: 'Homeowner',
    project: 'Rapid Heights',
    sample: true,
  },
  {
    quote:
      'Our shop at Shoppers Point has been open for over twenty years. Footfall opposite Andheri station is something you cannot buy twice.',
    name: 'Retail owner',
    project: 'Shoppers Point',
    sample: true,
  },
  {
    quote:
      'The team walked us through every finish before handover. Small things — the switches, the tiles, the balcony drains — were done properly.',
    name: 'First-time buyer',
    project: 'Rapid Residency Phase III',
    sample: true,
  },
  {
    quote: 'Weekends at Rapid Royal feel like a different state, not a short drive from Mumbai.',
    name: 'Bungalow owner',
    project: 'Rapid Royal',
    sample: true,
  },
] as const

/** SAMPLE — no openings are listed in the source material. */
export const openings = [
  { title: 'Site Engineer — Civil', location: 'Neral', type: 'Full-time', team: 'Projects', sample: true },
  { title: 'Sales Manager — Residential', location: 'Neral', type: 'Full-time', team: 'Sales', sample: true },
  { title: 'Junior Architect', location: 'Mumbai (Narayan Dhuru St)', type: 'Full-time', team: 'Design', sample: true },
  { title: 'Interior Design Intern', location: 'Mumbai', type: 'Internship', team: 'Interiors', sample: true },
  { title: 'Accounts Executive', location: 'Mumbai', type: 'Full-time', team: 'Finance', sample: true },
] as const

export const homeFaqs = [
  {
    q: 'When was Rapid Construction founded?',
    a: 'Rapid Construction was founded in 1984 in Mumbai by Mr. Mohammed Anwar Abbajumma and Mr. Shamim Abbajumma. Its first act was completing a G+5 building in just 21 days.',
  },
  {
    q: 'Where has Rapid Construction built?',
    a: 'Across South Mumbai (Narayan Dhuru Street, Kolsa Mohalla, Mazgaon, Byculla), Andheri (W), Neral and Khopoli — from the G+32 Rapid Heights to the Rapid Residency township.',
  },
  {
    q: 'Which projects are available now?',
    a: 'Ready-to-move homes and shops at Rapid Residency Phase III in Neral, and the upcoming Rapid Residency Phase IV with 1 BHK and 2 BHK homes a five-minute walk from Neral station.',
  },
  {
    q: 'How can I book a site visit?',
    a: 'Use the Book a Site Visit page to choose a project, date and time, or call the Neral sales desk on +91 97698 33123.',
  },
]
