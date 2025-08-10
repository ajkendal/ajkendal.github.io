import '../styles/global-text.scss';
import '../styles/global-page.scss';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/nav';
import Home from './home';
import Contact from './contact';
import NoPage from './404';
import Portfolio from './portfolio';
import Footer from '../components/footer';
import CertificaitonsPage from './portfolio/certifications';
import GraphicDesign from './portfolio/graphic-design';
import CodingProjects from './portfolio/coding-projects';
import UXUIWork from './portfolio/uxui-work';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
        <Route path='/portfolio/coding-projects' element={<CodingProjects />} />
        <Route path='/portfolio/graphic-design' element={<GraphicDesign />} />
        <Route path='/portfolio/uxui-work' element={<UXUIWork />} />
        <Route path='*' element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
