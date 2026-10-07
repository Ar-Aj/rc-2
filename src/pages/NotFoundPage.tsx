import { Link } from 'react-router'
import { Img } from '../components/ui/Img'
import { Home, Building2 } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="relative min-h-[85vh] flex items-center justify-center bg-brown-950 text-cream-100 overflow-hidden py-32">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        <Img
          k="atmosphere/stairwell-light"
          alt="Architectural stairwell and shadows"
          fill
          className="opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brown-950 via-brown-950/80 to-brown-950/60" />
      </div>

      <div className="px-site relative z-10 max-w-2xl mx-auto text-center space-y-6">
        <span className="eyebrow text-gold-400">Error 404</span>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-cream-100 tracking-tight leading-[0.95]">
          This Floor Has <br />
          <span className="display-italic text-gold-300">Not Been Built</span>
        </h1>

        <p className="text-cream-200/90 text-base sm:text-lg font-light font-sans max-w-lg mx-auto leading-relaxed">
          The elevation or archive link you requested does not exist or has been relocated to another wing of the estate.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="btn btn-primary bg-gold-400 text-brown-950 hover:bg-gold-300 shadow-glow font-semibold"
          >
            <Home className="h-4 w-4" />
            <span>Return to Flagship Home</span>
          </Link>

          <Link
            to="/projects"
            className="btn btn-outline border-cream-200/30 text-cream-100 hover:bg-cream-100/10"
          >
            <Building2 className="h-4 w-4 text-gold-400" />
            <span>Browse All Projects</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-brown-800 text-xs font-sans text-cream-300/70">
          Need immediate assistance? Call our corporate desk at{' '}
          <a href="tel:+919930420085" className="text-gold-300 underline font-mono">
            +91 99304 20085
          </a>
        </div>
      </div>
    </div>
  )
}
