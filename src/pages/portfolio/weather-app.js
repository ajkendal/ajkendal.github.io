import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'
import PortfolioBody from '../../components/portfolioBody'
import PortfolioHeader from '../../components/portfolioHeader'
import { Link } from 'react-router-dom'

const WeatherApp = () => {
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
        techStack={{
          coding: [
            'React',
            'TypeScript',
            'Vite',
            'SCSS Modules',
            'Google Maps Autocomplete API',
            'Open-Meteo API',
            'Geolocation API',
            'Vercel',
          ],
          design: [
            'Design system',
            'Responsive design',
            'Component-based UI',
            'Mermaid data-flow diagrams',
          ],
        }}
        images={[
          {
            src: '/images/portfolio/codingproject/weather_live_desktop.png',
            alt: 'The live Weather Now app on desktop, showing current conditions for Berlin, Germany in metric units, an hourly forecast, and a seven-day forecast',
          },
          {
            src: '/images/portfolio/codingproject/weather_live_search.png',
            alt: 'The live Weather Now app with the location search open, showing Google Places suggestions for Berlin',
          },
          {
            src: '/images/portfolio/codingproject/weather_live_mobile.png',
            alt: 'The live Weather Now app on a phone, showing the search and current conditions screen beside the hourly forecast with the day selector open',
          },
          {
            src: '/images/portfolio/codingproject/weather_style_color.png',
            alt: 'Weather Now design system color palette: neutral, orange, and blue swatches with HEX, RGB, and HSL values',
          },
          {
            src: '/images/portfolio/codingproject/weather_components.png',
            alt: 'Weather Now design system components: the city search dropdown, the units menu with metric and imperial options, and the day-of-week selector',
          },
        ]}
      />

      <BottomLinks
        linkOne='/portfolio/benchwitch'
        linkOneText='BenchWitch'
        linkTwo='/portfolio/certifications'
        linkTwoText='Certifications'
      />
      <Interested />
    </div>
  )
}

export default WeatherApp
