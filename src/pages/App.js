import '../styles/global-text.scss'
import '../styles/global-page.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from '../components/nav'
import Home from './home'
import Contact from './contact'
import NoPage from './404'
import Portfolio from './portfolio'
import Footer from '../components/footer'
import CertificaitonsPage from './portfolio/certifications'
import GraphicDesign from './portfolio/graphic-design'
import CodingProjects from './portfolio/coding-projects'
import UXUIWork from './portfolio/uxui-work'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route
            path='/portfolio/certifications'
            element={<CertificaitonsPage />}
          />
          <Route
            path='/portfolio/coding-projects'
            element={<CodingProjects />}
          />
          <Route path='/portfolio/graphic-design' element={<GraphicDesign />} />
          <Route path='/portfolio/uxui-work' element={<UXUIWork />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
