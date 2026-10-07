import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, CheckCircle2, MessageSquare } from 'lucide-react'
import { company } from '../../data/site'
import { cn } from '../../lib/hooks'

const bookVisitSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  project: z.string().min(1, 'Please select a project'),
  date: z.string().min(1, 'Please select your preferred visit date'),
  timeSlot: z.string().min(1, 'Please select a preferred time slot'),
  notes: z.string().optional(),
})

type BookVisitValues = z.infer<typeof bookVisitSchema>

interface BookVisitFormProps {
  defaultProject?: string
  className?: string
  dark?: boolean
}

export function BookVisitForm({ defaultProject = 'Rapid Residency Phase IV', className, dark = false }: BookVisitFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState<BookVisitValues | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookVisitValues>({
    resolver: zodResolver(bookVisitSchema),
    defaultValues: {
      project: defaultProject,
      timeSlot: 'Morning (10:00 AM – 1:00 PM)',
    },
  })

  const onSubmit = async (data: BookVisitValues) => {
    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800))
    setFormData(data)
    setSubmitted(true)
    reset()
  }

  const getWhatsAppBookingUrl = (data: BookVisitValues) => {
    const text = `Hello Rapid Construction Sales Desk,\n\nI would like to book a site visit:\n• Name: ${data.fullName}\n• Mobile: ${data.phone}\n• Project: ${data.project}\n• Preferred Date: ${data.date}\n• Time Slot: ${data.timeSlot}${data.notes ? `\n• Notes: ${data.notes}` : ''}`
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`
  }

  if (submitted && formData) {
    return (
      <div
        className={cn(
          'p-8 sm:p-10 rounded-xs border text-center space-y-6',
          dark ? 'bg-brown-900 border-gold-400/40 text-cream-100' : 'bg-cream-100 border-brown-700/30 text-brown-950',
          className,
        )}
      >
        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-600/20 text-emerald-500 border border-emerald-500/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-display text-3xl">Site Visit Request Received</h3>
          <p className="text-sm opacity-80 max-w-md mx-auto">
            Thank you, {formData.fullName}. Our Neral Site Desk will call you at{' '}
            <span className="font-semibold">{formData.phone}</span> within one business day to confirm your appointment for{' '}
            <span className="font-semibold">{formData.project}</span> on {formData.date}.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppBookingUrl(formData)}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-primary !bg-emerald-700 hover:!bg-emerald-800 text-white w-full sm:w-auto"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Confirm Instantly via WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="btn btn-outline text-xs !py-2.5 w-full sm:w-auto"
          >
            <span>Book Another Visit</span>
          </button>
        </div>
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
          Schedule a Private Site Tour
        </h3>
        <p className="text-xs sm:text-sm opacity-75">
          Visit Rapid Residency Phase III or preview Phase IV with our dedicated project managers.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="field" data-invalid={Boolean(errors.fullName)}>
          <input
            {...register('fullName')}
            id="visit-fullName"
            placeholder=" "
            className="field-input"
            autoComplete="name"
          />
          <label htmlFor="visit-fullName" className="field-label">
            Full Name *
          </label>
          <div className="field-bar" />
          {errors.fullName && <p className="field-error">{errors.fullName.message}</p>}
        </div>

        {/* Mobile Number */}
        <div className="field" data-invalid={Boolean(errors.phone)}>
          <input
            {...register('phone')}
            id="visit-phone"
            type="tel"
            placeholder=" "
            className="field-input"
            autoComplete="tel"
          />
          <label htmlFor="visit-phone" className="field-label">
            Mobile Number *
          </label>
          <div className="field-bar" />
          {errors.phone && <p className="field-error">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div className="field" data-invalid={Boolean(errors.email)}>
          <input
            {...register('email')}
            id="visit-email"
            type="email"
            placeholder=" "
            className="field-input"
            autoComplete="email"
          />
          <label htmlFor="visit-email" className="field-label">
            Email Address (Optional)
          </label>
          <div className="field-bar" />
          {errors.email && <p className="field-error">{errors.email.message}</p>}
        </div>

        {/* Project Selection */}
        <div className="field" data-invalid={Boolean(errors.project)}>
          <select
            {...register('project')}
            id="visit-project"
            className="field-input field-select cursor-pointer"
          >
            <option value="Rapid Residency Phase IV">Rapid Residency Phase IV (Upcoming Launch, Neral)</option>
            <option value="Rapid Residency Phase III">Rapid Residency Phase III (Ready to Move, Neral)</option>
            <option value="Rapid Residency Phase II">Rapid Residency Phase II (Resale / Ready, Neral)</option>
            <option value="Rapid Royal (Strikers)">Rapid Royal / Strikers Resort (Bungalows, Jite Neral)</option>
            <option value="Maimoon Tower">Maimoon Tower (Byculla, South Mumbai)</option>
            <option value="General Inquiries">Other / General Consultation</option>
          </select>
          <label htmlFor="visit-project" className="field-label">
            Select Development *
          </label>
          <div className="field-bar" />
        </div>

        {/* Visit Date */}
        <div className="field" data-invalid={Boolean(errors.date)}>
          <input
            {...register('date')}
            id="visit-date"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="field-input"
          />
          <label htmlFor="visit-date" className="field-label">
            Preferred Date *
          </label>
          <div className="field-bar" />
          {errors.date && <p className="field-error">{errors.date.message}</p>}
        </div>

        {/* Time Slot */}
        <div className="field" data-invalid={Boolean(errors.timeSlot)}>
          <select
            {...register('timeSlot')}
            id="visit-slot"
            className="field-input field-select cursor-pointer"
          >
            <option value="Morning (10:00 AM – 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
            <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
            <option value="Evening (4:00 PM – 6:30 PM)">Evening (4:00 PM – 6:30 PM)</option>
          </select>
          <label htmlFor="visit-slot" className="field-label">
            Time Window *
          </label>
          <div className="field-bar" />
        </div>
      </div>

      {/* Special Requests */}
      <div className="field">
        <textarea
          {...register('notes')}
          id="visit-notes"
          rows={2}
          placeholder=" "
          className="field-input resize-none"
        />
        <label htmlFor="visit-notes" className="field-label">
          Questions or special assistance (Optional)
        </label>
        <div className="field-bar" />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs opacity-70">
          Pickups from Neral Railway Station are available upon advance request.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full sm:w-auto !px-8 cursor-pointer"
        >
          {isSubmitting ? (
            <span>Securing Appointment...</span>
          ) : (
            <>
              <Calendar className="h-4 w-4" />
              <span>Confirm Site Visit</span>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
