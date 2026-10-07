import { AlertCircle } from 'lucide-react'
import { cn } from '../../lib/hooks'

interface SampleBadgeProps {
  label?: string
  className?: string
  light?: boolean
}

export function SampleBadge({ label = 'Sample Content', className, light = false }: SampleBadgeProps) {
  return (
    <span
      className={cn(
        'sample-tag select-none',
        light
          ? 'text-cream-300/80 border-cream-300/40 bg-brown-950/40'
          : 'text-brown-700/80 border-brown-700/40 bg-cream-100/60',
        className,
      )}
      title="Placeholder content clearly marked for client verification before production launch"
    >
      <AlertCircle className="h-2.5 w-2.5" />
      <span>{label}</span>
    </span>
  )
}
