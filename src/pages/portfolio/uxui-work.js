import PortfolioHeader from '../../components/portfolioHeader'
import PortfolioBody from '../../components/portfolioBody'
import BottomLinks from '../../components/portfolioBottomLinks'

const UXUIWork = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/uxui/uxui_header.png' />
      <PortfolioBody
        header='Unus'
        smallText='This was a group project with Emily Cheng for HCI 430 - Prototyping and Implementing at DePaul. Prototypes put together using Axure, Logo and marketing material created with Adobe Illustrator.'
        description='This project was a prototyping project during my stint at DePaul. The group had to design an app of their choosing, build sketches, brand guidlines, as well as Mid-Fi and High-Fi Prototypes using Axure. Creating this project helped me learn to work as a team, designing responsive web and mobile applications, and the different prototyping skills used in the industry.'
        links={
          <div>
            <a
              href='https://3l6fi0.axshare.com'
              target='_blank'
              rel='noreferrer'>
              Mid-Fi Prototype
            </a>
            <a
              href='https://mn4fta.axshare.com'
              target='_blank'
              rel='noreferrer'>
              High-Fi Prototype
            </a>
          </div>
        }
        imageOne='/images/portfolio/uxui/uxui_static_1.png'
        imageTwo='/images/portfolio/uxui/uxui_static_2.png'
      />
      <BottomLinks
        linkOne='/portfolio/coding-projects'
        linkOneText='Coding Challenge'
        linkTwo='/portfolio/graphic-design'
        linkTwoText='Graphic Design Projects'
      />
    </div>
  )
}

export default UXUIWork
