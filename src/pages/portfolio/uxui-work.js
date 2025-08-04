import PortfolioHeader from '../../components/portfolioHeader';
import PortfolioBody from '../../components/portfolioBody';
import BottomLinks from '../../components/portfolioBottomLinks';
import Interested from '../../components/interestedComponent';
import { Link } from 'react-router-dom';

const UXUIWork = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/uxui/uxui_header.png' />
      <PortfolioBody
        header='Unus'
        smallText='This group project, completed in collaboration with Emily Cheng for HCI 430 – Prototyping and Implementation at DePaul University, involved developing prototypes using Axure and creating the logo and marketing materials with Adobe Illustrator.'
        description='This project, completed during my time at DePaul University, involved collaboratively designing an original app concept. Our team developed sketches, brand guidelines, and both mid- and high-fidelity prototypes using Axure. Through this experience, I strengthened my skills in team collaboration, responsive web and mobile design, and industry-standard prototyping practices.'
        links={
          <div>
            <Link
              to='https://www.canva.com/design/DACta3TGNTE/jBXc8nR8LjZip1LCicscDg/view?utm_content=DACta3TGNTE&utm_campaign=designshare&utm_medium=link&utm_source=editor'
              target='_blank'
              rel='noreferrer'
            >
              Mood Board
            </Link>
            <Link
              to='https://3l6fi0.axshare.com'
              target='_blank'
              rel='noreferrer'
            >
              Mid-Fi Prototype
            </Link>
            <Link
              to='https://mn4fta.axshare.com'
              target='_blank'
              rel='noreferrer'
            >
              High-Fi Prototype
            </Link>
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
      <Interested />
    </div>
  );
};

export default UXUIWork;
