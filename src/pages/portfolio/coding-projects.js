import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'

const CodingProjects = () => {
  return (
    <div className='desktop-width'>
      <h1>Coding Challenge</h1>

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
