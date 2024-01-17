import styled from 'styled-components'
import Interested from '../../components/interestedComponent'
import PortfolioIndexLayout from '../../components/portfolioIndexLayout'

const Portfolio = () => {
  return (
    <PortfolioIndex className='desktop-width'>
      <PortfolioIndexLayout
        header='Coding Projects'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris. Laoreet id donec ultrices tincidunt arcu non sodales. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.'
        link='/portfolio/coding-projects'
        buttonText='View Projects'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='UX/UI Work'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris. Laoreet id donec ultrices tincidunt arcu non sodales. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.'
        link='/portfolio/uxui-work'
        buttonText='View Projects'
      />
      <PortfolioIndexLayout
        header='Graphic Design Work'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris. Laoreet id donec ultrices tincidunt arcu non sodales. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.'
        link='/portfolio/graphic-design'
        buttonText='View Projects'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='Certifications'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc congue nisi vitae suscipit tellus mauris. Laoreet id donec ultrices tincidunt arcu non sodales. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.'
        link='/portfolio/certifications'
        buttonText='View Certificates'
      />

      <Interested />
    </PortfolioIndex>
  )
}

const PortfolioIndex = styled.div``

export default Portfolio
