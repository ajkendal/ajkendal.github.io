import '../styles/global-text.scss'
import '../styles/global-page.scss'
import { Routes, Route } from 'react-router-dom'
import Navigation from '../components/nav'
import Home from './home'
import Contact from './contact'
import NoPage from './404'
import Portfolio from './portfolio'
import Footer from '../components/footer'
import CertificaitonsPage from './portfolio/certifications'
import VibeKit from './portfolio/vibekit'
import BenchWitch from './portfolio/benchwitch'
import WeatherApp from './portfolio/weather-app'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route
          path='/portfolio/certifications'
          element={<CertificaitonsPage />}
        />
        <Route path='/portfolio/vibekit' element={<VibeKit />} />
        <Route path='/portfolio/benchwitch' element={<BenchWitch />} />
        <Route path='/portfolio/weather-app' element={<WeatherApp />} />
        <Route path='/404' element={<NoPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
