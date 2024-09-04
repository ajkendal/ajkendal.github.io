import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'

import { Grid } from '@mui/material'
import PortfolioHeader from '../../components/portfolioHeader'
import PortfolioBody from '../../components/portfolioBody'

const csCert = [
  {
    title: 'Angular JS Certification Course',
    issuer: 'Programming Hub',
    issued: 'Jan 2021',
    id: '1610821777850',
    link: 'https://git.io/JtYvw',
  },
  {
    title: 'HTML Advanced Certification Course',
    issuer: 'Programming Hub',
    issued: 'Jan 2021',
    id: '1610823810015',
    link: 'https://git.io/JtYvI',
  },
  {
    title: 'HTML Certification Course',
    issuer: 'Programming Hub',
    issued: 'Jan 2021',
    id: '1610822982546',
    link: 'https://git.io/JtYej',
  },
  {
    title: 'React Development Certification Course',
    issuer: 'Programming Hub',
    issued: 'Jan 2021',
    id: '1610071931595',
    link: 'https://git.io/JLp2G',
  },
  {
    title: 'The Complete JavaScript Course - Beginner to Professional',
    issuer: 'Udemy',
    issued: 'Jan 2021',
    id: 'UC-8c1e0815-aa37-4180-ac2d-a5553ba83167',
    link:
      'https://www.udemy.com/certificate/UC-8c1e0815-aa37-4180-ac2d-a5553ba83167',
  },
  {
    title: 'JavaScript Advanced Certification Course ',
    issuer: 'Programming Hub',
    issued: 'Aug 2020',
    id: '1597003305646',
    link: 'https://git.io/JJMC2',
  },
  {
    title: 'JavaScript Certification Course',
    issuer: 'Programming Hub',
    issued: 'Aug 2020',
    id: '1596676590743',
    link: 'https://git.io/JJMcp',
  },
  {
    title: 'Python Advanced Certification Course',
    issuer: 'Programming Hub',
    issued: 'Aug 2020',
    id: '1597003975986',
    link: 'https://git.io/JJMCE',
  },
  {
    title: 'Python Certification Course',
    issuer: 'Programming Hub',
    issued: 'Aug 2020',
    id: '1597003864515',
    link: 'https://git.io/JJMcc',
  },
]

const uxCert = [
  {
    title: 'Google UX Design Specialization',
    issuer: 'Google',
    issued: 'Sep 2024',
    id: '44N444UAAEV2',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/44N444UAAEV2',
  },
  {
    title: 'Design a User Experience for Social Good & Prepare for Jobs',
    issuer: 'Google',
    issued: 'Sep 2024',
    id: 'Y4NKB4N0UU21',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/Y4NKB4N0UU21',
  },
  {
    title: 'Build Dynamic User Interfaces (UI) for Websites',
    issuer: 'Google',
    issued: 'Feb 2024',
    id: 'MKNTUR44D2AG',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/MKNTUR44D2AG',
  },
  {
    title: 'Create High-Fidelity Designs and Prototypes in Figma',
    issuer: 'Google',
    issued: 'Nov 2023',
    id: 'SW9N6BJLGD2Y',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/SW9N6BJLGD2Y',
  },
  {
    title: 'Conduct UX Research and Test Early Concepts',
    issuer: 'Google',
    issued: 'Mar 2023',
    id: '9WQYV4U23EPB',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/9WQYV4U23EPB',
  },
  {
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google',
    issued: 'Jan 2023',
    id: 'GTP37AXJ5T2Y',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/GTP37AXJ5T2Y',
  },
  {
    title: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    issued: 'Dec 2022',
    id: '4V5GSXJRXXWE',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/4V5GSXJRXXWE',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    issued: 'Nov 2022',
    id: 'DMRGE93KYZ8U',
    link:
      'https://www.coursera.org/account/accomplishments/certificate/DMRGE93KYZ8U',
  },
]

const CertificaitonsPage = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/certifications/certifications_header.png' />
      <PortfolioBody
        header='Certifications'
        smallText='Listed are certifications that I have aquired over the years.'
        links={
          <div>
            <a href='#cs'>Computer Science Certifications</a>
            <a href='#uxui'>UX/UI Certifications</a>
          </div>
        }>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='stretch'>
          <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
            <h2 id='cs' className='scroll-offset'>
              Computer Science Certifications
            </h2>
          </Grid>

          {csCert.map((cert, id) => (
            <Grid key={id} xl={6} lg={6} md={6} sm={12} xs={12} item>
              <p className='body-1 bold'>{cert.title}</p>
              <p className='body-2'>
                <b>Issuer:</b> {cert.issuer}
                <br />
                <b>Issued:</b> {cert.issued}
                <br />
                <div>
                  <b style={{ display: 'inline-block' }}>Credential ID:</b>{' '}
                  <a
                    style={{ display: 'inline-block' }}
                    href={cert.link}
                    target='_blank'
                    rel='noreferrer'>
                    {cert.id}
                  </a>
                </div>
              </p>
              <hr />
            </Grid>
          ))}

          <Grid xl={12} lg={12} md={12} sm={12} xs={12} item>
            <h2 id='uxui' className='scroll-offset'>
              UX/UI Certifications
            </h2>
          </Grid>
          {uxCert.map((cert, id) => (
            <Grid key={id} xl={6} lg={6} md={6} sm={12} xs={12} item>
              <p className='body-1 bold'>{cert.title}</p>
              <p className='body-2'>
                <b>Issuer:</b> {cert.issuer}
                <br />
                <b>Issued:</b> {cert.issued}
                <br />
                <div>
                  <b style={{ display: 'inline-block' }}>Credential ID:</b>{' '}
                  <a
                    style={{ display: 'inline-block' }}
                    href={cert.link}
                    target='_blank'
                    rel='noreferrer'>
                    {cert.id}
                  </a>
                </div>
              </p>
              <hr />
            </Grid>
          ))}
        </Grid>
      </PortfolioBody>

      <BottomLinks
        linkOne='/portfolio/graphic-design'
        linkOneText='Graphic Design Projects'
        linkTwo='/portfolio/coding-projects'
        linkTwoText='Coding Challenge'
      />
      <Interested />
    </div>
  )
}

export default CertificaitonsPage
