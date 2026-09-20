import Interested from '../../components/interestedComponent'
import PortfolioIndexLayout from '../../components/portfolioIndexLayout'

const Portfolio = () => {
  return (
    <div className='desktop-width'>
      <PortfolioIndexLayout
        header='VibeKit'
        text='A theme builder for designing, previewing, and sharing UI design tokens. Craft colors, typography, and spacing with a live web and mobile preview, check WCAG contrast, and export to CSS, Tailwind, W3C Design Tokens, or SCSS.'
        image='/images/portfolio/vibekit-image.png'
        link='/portfolio/vibekit'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='BenchWitch'
        text='A real-time, tap-to-track stats app for roller derby coaches, built on Cloudflare Durable Objects, D1, and Workers AI. The repo is private, so this page shares the design deck and my DevFest DC talk.'
        image='/images/portfolio/benchwitch-image.png'
        link='/portfolio/benchwitch'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        header='Weather App'
        text='Built using React, Vite, and the Open-Meteo API, this weather app lets users search locations, toggle between metric/imperial units, view current, hourly, and 7-day forecast data, and enjoy responsive design with smooth UX.'
        image='/images/portfolio/coding_project-image.png'
        link='/portfolio/weather-app'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='Certifications'
        text='This collection of certifications represents my ongoing pursuit of excellence in UX/UI and Software Engineering throughout my career.'
        image='/images/portfolio/certifications-image.png'
        link='/portfolio/certifications'
        buttonText='View Certificates'
      />

      <Interested />
    </div>
  )
}

export default Portfolio
