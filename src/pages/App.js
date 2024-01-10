import '../styles/global-text.scss'
import '../styles/global-page.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from '../components/nav'
import Home from './home'
import Contact from './contact'
import NoPage from './404'
import Portfolio from './portfolio'
import Footer from '../components/footer'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
