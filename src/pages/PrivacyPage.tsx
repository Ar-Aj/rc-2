import { company } from '../data/site'

export function PrivacyPage() {
  return (
    <div className="space-y-0">
      <section className="relative pt-36 pb-16 bg-brown-950 text-cream-100 border-b border-brown-800">
        <div className="px-site max-w-4xl mx-auto space-y-4">
          <span className="eyebrow text-gold-400">Legal Governance</span>
          <h1 className="font-display text-4xl sm:text-6xl text-cream-100">
            Privacy Policy
          </h1>
          <p className="text-cream-300 text-sm font-sans">
            Effective Date: January 1, 2025 · Last Updated: October 2026
          </p>
        </div>
      </section>

      <section className="py-20 bg-cream-50 text-stone-700">
        <div className="px-site max-w-4xl mx-auto space-y-10 font-sans text-sm sm:text-base leading-relaxed font-light">
          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              1. Overview & Scope
            </h2>
            <p>
              This Privacy Policy explains how <strong>Rapid Construction</strong> ("we," "our," or "us"), established in 1984 in Mumbai, collects, utilizes, stores, and protects personal information submitted across our digital platforms, including our website at <a href="https://rapidconstruction.in" className="text-brown-700 underline">rapidconstruction.in</a>, on-site visitor registers, and official inquiry forms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              2. Information We Collect
            </h2>
            <p>
              When you submit an inquiry, request a downloadable brochure, or schedule an on-site visit for Rapid Residency or any Rapid Construction development, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
              <li>Full Name and contact details (mobile number, email address, postal address).</li>
              <li>Property preferences (configuration, budget, timeline, intended occupancy).</li>
              <li>Site visit scheduling details and transportation requests (e.g., station pickup).</li>
              <li>Technical usage data (browser type, anonymous session cookies, IP address).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              3. Purpose of Processing
            </h2>
            <p>
              Information gathered is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
              <li>Coordinate site visit logistics, walkthroughs, and customer support.</li>
              <li>Transmit requested brochures, price schedules, and statutory approvals.</li>
              <li>Verify customer identity in compliance with applicable MahaRERA and KYC guidelines.</li>
              <li>Facilitate home loan eligibility consultations with partner banking institutions upon your express request.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              4. Non-Disclosure & Third-Party Protection
            </h2>
            <p>
              Rapid Construction will <strong>never</strong> sell, rent, or trade your personal information to third-party telemarketers or external advertising databases. Your data is accessed only by authorized Rapid Construction personnel and licensed channel partners directly engaged in servicing your property requirements.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              5. Data Security & Retention
            </h2>
            <p>
              We enforce administrative, electronic, and physical safeguards to prevent unauthorized access or disclosure of personal data. Information is retained only as long as necessary to fulfill the inquiry or satisfy statutory real estate records compliance in Maharashtra.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-2xl text-brown-950 font-bold">
              6. Contact & Grievance Officer
            </h2>
            <p>
              For any queries regarding this Privacy Policy or to request correction or removal of your details, please contact:
            </p>
            <div className="p-4 bg-white rounded-lg border border-stone-200 text-xs sm:text-sm space-y-1">
              <p className="font-bold text-brown-950">Rapid Construction — Compliance Desk</p>
              <p>Rapid House, 36/38 Narayan Dhuru Street, Mezzanine Floor, Mumbai 400003</p>
              <p>Email: <a href={`mailto:${company.email}`} className="text-brown-700 underline">{company.email}</a></p>
              <p>Telephone: +91 99304 20085</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
