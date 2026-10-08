import { type ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { SmoothScroll } from '../../lib/smooth-scroll'
import { Seo } from '../seo/Seo'
import { MessageSquare, Phone } from 'lucide-react'
import { company } from '../../data/site'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
    'Hello Rapid Construction team, I would like to inquire about your residential projects.',
  )}`

  return (
    <SmoothScroll>
      <Seo />

      {/* Accessible Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="relative min-h-screen flex flex-col bg-cream-50 text-graphite antialiased selection:bg-brown-700 selection:text-cream-100">
        <Header />

        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>

        <Footer />

        {/* Quick Contact Floater for Mobile / High Conversion */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 sm:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-e3 active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp with Rapid Construction"
          >
            <MessageSquare className="h-5 w-5" />
          </a>
          <a
            href="tel:+919930420085"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-brown-800 text-cream-100 shadow-e3 active:scale-95 transition-transform"
            aria-label="Call Rapid Construction"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </SmoothScroll>
  )
}
