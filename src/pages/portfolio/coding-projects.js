import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'
import PortfolioBody from '../../components/portfolioBody'
import PortfolioHeader from '../../components/portfolioHeader'
import { Link } from 'react-router-dom'

const CodingProjects = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/codingproject/codingproject_header.png' />

      <PortfolioBody
        header='Weather App'
        smallText='Built with React, TypeScript, SCSS Modules, and Vite, this weather app integrates the Google Maps Autocomplete API for location search and the Open-Meteo API for weather data, combining responsive UI design with efficient data handling.'
        description='As part of the Frontend Mentor 30-Day Hackathon, I built this Weather App with a focus on usability, performance, and clean architecture. The app is powered by React and TypeScript, styled with SCSS modules, and uses Vite for fast builds. It allows users to search for locations using the Google Maps Autocomplete API or detect their current position via geolocation, then fetches weather data from the Open-Meteo API, including current conditions, hourly updates adjusted for timezones, and a seven-day forecast. The interface is fully responsive and offers features like toggling between metric and imperial units for temperature, wind speed, and precipitation, as well as smooth vertical drag-to-scroll for hourly forecasts on smaller screens. I created a Mermaid diagram to map how user input and geolocation flow into API requests and update the UI, which helped me plan data flow and state management effectively. Through this project, I gained experience with accurate timezone handling to prevent off-by-one-day errors, optimizing user interactions for different devices, and structuring code in a way that makes it easy to extend with future features like saved locations and voice search.'
        links={
          <div>
            <Link
              to='https://weather-app-frontend-mentor.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              Live Site
            </Link>
            <Link
              to='https://github.com/ajkendal/weather-app-frontend-mentor'
              target='_blank'
              rel='noreferrer'
            >
              GitHub Repo
            </Link>
            <Link
              to='https://www.frontendmentor.io/solutions/weather-app-with-google-autocomplete-api-ev6Km1tDgY'
              target='_blank'
              rel='noreferrer'
            >
              Frontend Mentor Submission
            </Link>
          </div>
        }
        imageOne='/images/portfolio/codingproject/codingproject_static_1.png'
        imageTwo='/images/portfolio/codingproject/codingproject_static_2.png'
      />

      <BottomLinks
        linkOne='/portfolio/certifications'
        linkOneText='Certifications'
        linkTwo='/portfolio/uxui-work'
        linkTwoText='UX/UI Work'
      />
      <Interested />
    </div>
  )
}

export default CodingProjects
