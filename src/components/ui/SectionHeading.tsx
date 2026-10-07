import { type ReactNode } from 'react'
import { cn } from '../../lib/hooks'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  italicAccent?: string
  description?: string | ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
  badge?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  italicAccent,
  description,
  align = 'left',
  dark = false,
  className,
  badge,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <div
      className={cn(
        'space-y-4',
        isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl',
        className,
      )}
    >
      <div className={cn('flex items-center gap-3', isCenter && 'justify-center')}>
        {eyebrow && (
          <span
            className={cn(
              'eyebrow',
              dark ? 'text-gold-400' : 'text-brown-700',
            )}
          >
            {eyebrow}
          </span>
        )}
        {badge}
      </div>

      <h2
        className={cn(
          'font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]',
          dark ? 'text-cream-100' : 'text-brown-950',
        )}
      >
        {title}{' '}
        {italicAccent && (
          <span
            className={cn(
              'display-italic font-normal',
              dark ? 'text-gold-300' : 'text-brown-600',
            )}
          >
            {italicAccent}
          </span>
        )}
      </h2>

      {description && (
        <div
          className={cn(
            'text-base sm:text-lg leading-relaxed pt-1',
            dark ? 'text-cream-200/80' : 'text-stone-600',
          )}
        >
          {description}
        </div>
      )}
    </div>
  )
}
