import styled from 'styled-components'
import Interested from '../../components/interestedComponent'
import PortfolioIndexLayout from '../../components/portfolioIndexLayout'

const Portfolio = () => {
  return (
    <PortfolioIndex className='desktop-width'>
      <PortfolioIndexLayout
        header='Coding Challenge'
        text='A challenge provided by Frontend Mentor to integrate the REST Countries API data and display them using whichever JavaScript Framework/library of choosing.'
        image='/images/portfolio/coding-project.png'
        link='/portfolio/coding-projects'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='Unus'
        text='This is a project I worked on for HCI 430 - Prototyping and Implementation while at DePaul. The creation of an App called Unis from Sketches all the way to HiFi Prototypes including Marketing Material.'
        image='/images/portfolio/uxui_platform-image.png'
        link='/portfolio/uxui-work'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        header='Graphic Design Projects'
        text='A small collection of different projects created for HCI 402 - Foundations of Digital Design at DePaul using Adobe Illustrator and Adobe Photoshop.'
        image='/images/portfolio/graphic_design-image.png'
        link='/portfolio/graphic-design'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='Certifications'
        text='A current list of Certifications that I have earned within UX/UI and Computer Science throughout my career.'
        image='/images/portfolio/certifications-image.png'
        link='/portfolio/certifications'
        buttonText='View Certificates'
      />

      <Interested />
    </PortfolioIndex>
  )
}

const PortfolioIndex = styled.div``

export default Portfolio
