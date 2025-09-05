import Interested from '../../components/interestedComponent';
import PortfolioIndexLayout from '../../components/portfolioIndexLayout';

const Portfolio = () => {
  return (
    <div className='desktop-width'>
      <PortfolioIndexLayout
        header='Coding Project'
        text='AI Travel Agent is a project I built as part of the Scrimba AI Engineer Certification. My goal was to take the core assignment further and demonstrate how AI and real-time APIs can be combined into a practical, user-friendly travel planning app.'
        image='/images/portfolio/coding_project-image.png'
        link='/portfolio/coding-projects'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='UX/UI Project'
        text='This project, completed for HCI 430 – Prototyping and Implementation at DePaul University, involved developing an app called Unus from initial sketches through high-fidelity prototypes, including the creation of supporting marketing materials.'
        image='/images/portfolio/uxui_platform-image.png'
        link='/portfolio/uxui-work'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        header='Graphic Design Projects'
        text='A curated selection of projects developed for HCI 402 – Foundations of Digital Design at DePaul University, showcasing skills in Adobe Illustrator and Adobe Photoshop.'
        image='/images/portfolio/graphic_design-image.png'
        link='/portfolio/graphic-design'
        buttonText='View Project'
      />
      <PortfolioIndexLayout
        leftText={true}
        header='Certifications'
        text='This collection of certifications represents my ongoing pursuit of excellence in UX/UI and Computer Science throughout my career.'
        image='/images/portfolio/certifications-image.png'
        link='/portfolio/certifications'
        buttonText='View Certificates'
      />

      <Interested />
    </div>
  );
};

export default Portfolio;
