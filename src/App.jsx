import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import WorkDetail from './pages/WorkDetail.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { useSecurityProtection } from './hooks/useSecurityProtection.js'

// Lazy-loaded: LiveTV pulls in hls.js (~600KB) and a ~20MB third-party
// channel index. Neither should cost anyone visiting the actual agency
// pages a single byte, so this chunk only loads for someone who actually
// navigates to /live-tv.
const LiveTV = lazy(() => import('./pages/LiveTV.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  useSecurityProtection()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<WorkDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/live-tv"
            element={
              <Suspense fallback={<div className="container" style={{ paddingBlock: 'var(--space-6)' }} />}>
                <LiveTV />
              </Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
