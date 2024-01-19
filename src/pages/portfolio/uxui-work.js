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
        imageOne=''
        imageTwo=''
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
