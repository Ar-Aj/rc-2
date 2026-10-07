import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Send, MessageSquare } from 'lucide-react'
import { company } from '../../data/site'
import { cn } from '../../lib/hooks'

const contactSchema = z.object({
  fullName: z.string().min(2, 'Please enter your name'),
  phone: z.string().min(10, 'Please enter your phone number'),
  email: z.string().email('Please enter a valid email address'),
  interest: z.string().min(1, 'Please select an area of interest'),
  message: z.string().min(5, 'Please enter your message or question'),
})

type ContactValues = z.infer<typeof contactSchema>

interface ContactFormProps {
  className?: string
  dark?: boolean
}

export function ContactForm({ className, dark = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: 'Rapid Residency Phase IV (Upcoming Launch)',
    },
  })

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    setSubmitted(true)
    reset()
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'p-8 sm:p-10 rounded-xs border text-center space-y-5',
          dark ? 'bg-brown-900 border-gold-400/40 text-cream-100' : 'bg-cream-100 border-brown-700/30 text-brown-950',
          className,
        )}
      >
        <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-600/20 text-emerald-500 border border-emerald-500/30">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl">Inquiry Transmitted</h3>
        <p className="text-sm opacity-80 max-w-md mx-auto">
          Thank you for writing to Rapid Construction. Our management desk will review your message and reply via
          phone or email promptly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="btn btn-outline text-xs !py-2"
        >
          <span>Send Another Message</span>
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        'p-6 sm:p-10 rounded-xs border space-y-6',
        dark ? 'bg-brown-900/80 border-brown-800 text-cream-100 on-dark' : 'bg-cream-100/90 border-stone-200 text-brown-950 on-light',
        className,
      )}
    >
      <div className="space-y-1">
        <h3 className="font-display text-2xl sm:text-3xl font-medium">
          Direct Management Inquiry
        </h3>
        <p className="text-xs sm:text-sm opacity-75">
          Reach our head office at Rapid House or our project desks directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="field" data-invalid={Boolean(errors.fullName)}>
          <input {...register('fullName')} id="contact-name" placeholder=" " className="field-input" />
          <label htmlFor="contact-name" className="field-label">
            Full Name *
          </label>
          <div className="field-bar" />
          {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
        </div>

        <div className="field" data-invalid={Boolean(errors.phone)}>
          <input {...register('phone')} id="contact-phone" type="tel" placeholder=" " className="field-input" />
          <label htmlFor="contact-phone" className="field-label">
            Phone Number *
          </label>
          <div className="field-bar" />
          {errors.phone && <p className="field-error">{errors.phone.message}</p>}
        </div>

        <div className="field sm:col-span-2" data-invalid={Boolean(errors.email)}>
          <input {...register('email')} id="contact-email" type="email" placeholder=" " className="field-input" />
          <label htmlFor="contact-email" className="field-label">
            Email Address *
          </label>
          <div className="field-bar" />
          {errors.email && <p className="field-error">{errors.email.message}</p>}
        </div>

        <div className="field sm:col-span-2">
          <select {...register('interest')} id="contact-interest" className="field-input field-select cursor-pointer">
            <option value="Rapid Residency Phase IV (Upcoming Launch)">Rapid Residency Phase IV (Upcoming Launch)</option>
            <option value="Rapid Residency Phase III (Ready to Move)">Rapid Residency Phase III (Ready to Move)</option>
            <option value="Retail & Commercial Inquiries">Retail & Commercial Inquiries</option>
            <option value="Land Development & Partnerships">Land Development & Partnerships</option>
            <option value="General Management Inquiry">General Management Inquiry</option>
          </select>
          <label htmlFor="contact-interest" className="field-label">
            Area of Inquiry
          </label>
          <div className="field-bar" />
        </div>

        <div className="field sm:col-span-2" data-invalid={Boolean(errors.message)}>
          <textarea
            {...register('message')}
            id="contact-message"
            rows={3}
            placeholder=" "
            className="field-input resize-none"
          />
          <label htmlFor="contact-message" className="field-label">
            Your Message or Inquiry *
          </label>
          <div className="field-bar" />
          {errors.message && <p className="field-error">{errors.message.message}</p>}
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={`https://wa.me/${company.whatsapp}`}
          target="_blank"
          rel="noreferrer noopener"
          className="text-xs text-gold-400 hover:underline flex items-center gap-1.5"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Need immediate assistance? Chat on WhatsApp</span>
        </a>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full sm:w-auto !px-8 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send className="h-4 w-4" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
