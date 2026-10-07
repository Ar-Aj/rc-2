import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router'
import { Layout } from './components/layout/Layout'

// Page Components
import { HomePage } from './pages/HomePage'
import { LegacyPage } from './pages/LegacyPage'
import { LeadershipPage } from './pages/LeadershipPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { GalleryPage } from './pages/GalleryPage'
import { TimelinePage } from './pages/TimelinePage'
import { FutureDevelopmentsPage } from './pages/FutureDevelopmentsPage'
import { WhyRapidPage } from './pages/WhyRapidPage'
import { TestimonialsPage } from './pages/TestimonialsPage'
import { CareersPage } from './pages/CareersPage'
import { ContactPage } from './pages/ContactPage'
import { BookSiteVisitPage } from './pages/BookSiteVisitPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'
import { NotFoundPage } from './pages/NotFoundPage'

/** Scroll restoration to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/completed" element={<ProjectsPage />} />
          <Route path="/projects/current" element={<ProjectsPage />} />
          <Route path="/projects/upcoming" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />

          {/* Direct aliases for flagship township phases */}
          <Route path="/rapid-residency-phase-3" element={<Navigate to="/projects/rapid-residency-phase-3" replace />} />
          <Route path="/rapid-residency-phase-4" element={<Navigate to="/projects/rapid-residency-phase-4" replace />} />

          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/construction-timeline" element={<TimelinePage />} />
          <Route path="/future-developments" element={<FutureDevelopmentsPage />} />
          <Route path="/why-rapid" element={<WhyRapidPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/book-site-visit" element={<BookSiteVisitPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
