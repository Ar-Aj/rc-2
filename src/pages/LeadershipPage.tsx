import { Link } from 'react-router'
import { leaders, type Leader } from '../data/story'
import { partners } from '../data/site'
import { Img } from '../components/ui/Img'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ArrowUpRight } from 'lucide-react'

export function LeadershipPage() {
  const founders = leaders.filter((l: Leader) => l.generation === 'founder')
  const executive = leaders.filter((l: Leader) => l.generation === 'leadership')
  const nextGen = leaders.filter((l: Leader) => l.generation === 'next')

  return (
    <div className="space-y-0">
      {/* 1. Header Hero */}
      <section className="relative pt-36 pb-20 bg-brown-950 text-cream-100 overflow-hidden border-b border-brown-800">
        <div className="absolute inset-0 blueprint opacity-20 pointer-events-none" />
        <div className="px-site relative z-10 max-w-4xl space-y-6">
          <span className="eyebrow text-gold-400">Guiding Vision</span>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
            The Leadership <br />
            <span className="display-italic text-gold-300">& Guardians of Legacy</span>
          </h1>
          <p className="text-cream-200/90 text-lg sm:text-xl font-light font-sans max-w-2xl leading-relaxed">
            At Rapid Construction, leadership has gracefully transitioned to a new generation of forward-thinking
            leaders committed to carrying the family legacy with pride and purpose.
          </p>
        </div>
      </section>

      {/* 2. Executive Leadership Grid */}
      <section className="py-24 bg-cream-50 text-brown-950">
        <div className="px-site space-y-16">
          <SectionHeading
            eyebrow="Executive Directorate"
            title="Current Leadership"
            italicAccent="Team"
            description="Guiding steady growth, transparent marketing, operational rigor, and financial discipline across all developments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {executive.map((person: Leader) => (
              <div
                key={person.name}
                className="group flex flex-col rounded-xs bg-cream-100 border border-stone-200 overflow-hidden shadow-e1 hover:shadow-e3 transition-all duration-500"
              >
                {/* Studio Portrait Plate */}
                <div className="plate relative h-80 sm:h-96 bg-cream-200 overflow-hidden">
                  {person.portrait ? (
                    <Img
                      k={person.portrait}
                      alt={person.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-brown-900 text-cream-300/40 font-display text-2xl uppercase">
                      {person.name}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info Plate */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-brown-600 font-bold block mb-1">
                      {person.title}
                    </span>
                    <h3 className="font-display text-2xl text-brown-950 font-medium">
                      {person.name}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-2.5 font-sans">
                      {person.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-[11px] text-brown-700 font-medium">
                    <span>Executive Board</span>
                    <span className="font-semibold text-gold-600">{person.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Founders (Honorary Pillars) */}
      <section className="py-24 bg-brown-950 text-cream-100 border-y border-brown-800">
        <div className="px-site space-y-12">
          <SectionHeading
            dark
            eyebrow="Founding Visionaries"
            title="The Bedrock of"
            italicAccent="Rapid Construction"
            description="Established in 1984 by two brothers whose determination carved out four decades of trust in Mumbai."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {founders.map((founder: Leader, i: number) => (
              <div
                key={founder.name}
                className={`lg:col-span-6 p-8 sm:p-10 rounded-xs bg-brown-900/60 border border-brown-800 space-y-6 ${
                  i === 0 ? 'border-gold-400/30' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  {founder.portrait ? (
                    <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-gold-400/50 shrink-0 bg-cream-200">
                      <Img k={founder.portrait} alt={founder.name} className="h-full w-full object-cover" />
                    </div>
                  ) : (
                    <div className="h-20 w-20 rounded-full border-2 border-cream-300/30 shrink-0 bg-brown-850 flex items-center justify-center font-display text-xl text-gold-400">
                      RC
                    </div>
                  )}
                  <div>
                    <span className="eyebrow text-gold-400 block mb-1">{founder.title}</span>
                    <h3 className="font-display text-2xl sm:text-3xl text-cream-100">{founder.name}</h3>
                  </div>
                </div>

                <p className="text-cream-200/85 text-sm sm:text-base leading-relaxed font-sans">
                  {founder.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Next Generation of Innovators */}
      <section className="py-24 bg-cream-50 text-brown-950">
        <div className="px-site space-y-12">
          <SectionHeading
            eyebrow="Youth & Innovation"
            title="The Next Generation of"
            italicAccent="Craftsmen"
            description="The family legacy grows stronger with the involvement of the younger generation blending tradition with fresh architectural and digital innovation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextGen.map((member: Leader) => (
              <div
                key={member.name}
                className="p-8 rounded-xs bg-cream-100 border border-stone-200 space-y-4 hover:border-brown-700/40 transition-colors shadow-e1"
              >
                <span className="text-[10px] uppercase tracking-[0.24em] font-bold text-brown-700 block">
                  {member.role}
                </span>
                <h3 className="font-display text-2xl text-brown-950 font-medium">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                  {member.title}
                </p>
                <p className="text-sm text-stone-600 leading-relaxed font-sans pt-1">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Legal & Architectural Partners */}
      <section className="py-20 bg-cream-100/70 border-t border-stone-200 text-brown-950">
        <div className="px-site space-y-10">
          <SectionHeading
            align="center"
            eyebrow="Collaborative Excellence"
            title="Strategic Architecture &"
            italicAccent="Advisory Partners"
            description="Rapid Construction is proud to collaborate with industry-leading planners, advisors, and interior studios."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {partners.map((partner: { name: string; role: string }) => (
              <div
                key={partner.name}
                className="p-6 rounded-xs bg-cream-50 border border-stone-300/80 text-center space-y-2"
              >
                <h4 className="font-display text-lg text-brown-950 font-bold">{partner.name}</h4>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="pt-8 text-center">
            <Link to="/contact" className="btn btn-primary">
              <span>Initiate Inquiries With Management</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
