import BottomLinks from '../../components/portfolioBottomLinks';
import Interested from '../../components/interestedComponent';

import { Grid } from '@mui/material';
import PortfolioHeader from '../../components/portfolioHeader';
import PortfolioBody from '../../components/portfolioBody';
import { HashLink } from 'react-router-hash-link';

const csCert = [
  {
    title: 'Intro to Dall-E and GPT Vision',
    issuer: 'Scrimba',
    issued: 'Sep 2025',
    id: 'U2823L4N0IWF',
    link: 'https://www.coursera.org/account/accomplishments/certificate/U2823L4N0IWF',
  },
  {
    title: 'Learn AI Agents',
    issuer: 'Scrimba',
    issued: 'Aug 2025',
    id: 'S6N0YJ8DZBP1',
    link: 'https://www.coursera.org/account/accomplishments/certificate/S6N0YJ8DZBP1',
  },
  {
    title:
      'Retrieval-Augmented Generation (RAG) with Embeddings & Vector Databases',
    issuer: 'Scrimba',
    issued: 'Aug 2025',
    id: 'W3AVQQWSZQJ1',
    link: 'https://www.coursera.org/account/accomplishments/certificate/W3AVQQWSZQJ1',
  },
  {
    title: 'Open-source AI Models',
    issuer: 'Scrimba',
    issued: 'Aug 2025',
    id: 'KGWF53AB39A9',
    link: 'https://www.coursera.org/account/accomplishments/certificate/KGWF53AB39A9',
  },
  {
    title: 'Deploy AI Apps with Cloudflare',
    issuer: 'Scrimba',
    issued: 'Aug 2025',
    id: 'XLVPHCDMGR1H',
    link: 'https://www.coursera.org/account/accomplishments/certificate/XLVPHCDMGR1H',
  },
  {
    title: 'Intro to AI Engineering',
    issuer: 'Scrimba',
    issued: 'Aug 2025',
    id: 'SR85Y4R2L05Z',
    link: 'https://www.coursera.org/account/accomplishments/certificate/SR85Y4R2L05Z',
  },
  {
    title: 'Meta Front-End Developer Certification',
    issuer: 'Meta',
    issued: 'Apr 2025',
    id: 'U82W9O43ICKK',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/U82W9O43ICKK',
  },
  {
    title: 'Coding Interview Preparation',
    issuer: 'Meta',
    issued: 'Apr 2025',
    id: 'Z3TLYL1DXNBJ',
    link: 'https://www.coursera.org/account/accomplishments/certificate/Z3TLYL1DXNBJ',
  },
  {
    title: 'Front-End Developer Capstone',
    issuer: 'Meta',
    issued: 'Mar 2025',
    id: 'AAG6FR7ZOS30',
    link: 'https://www.coursera.org/account/accomplishments/certificate/AAG6FR7ZOS30',
  },
  {
    title: 'Advanced React',
    issuer: 'Meta',
    issued: 'Jan 2025',
    id: '4E399ZJOS4W7',
    link: 'https://www.coursera.org/account/accomplishments/certificate/4E399ZJOS4W7',
  },
  {
    title: 'Principles of UX/UI Design',
    issuer: 'Meta',
    issued: 'Jan 2025',
    id: 'YEBLSMEUM0TN',
    link: 'https://www.coursera.org/account/accomplishments/certificate/YEBLSMEUM0TN',
  },
  {
    title: 'React Basics',
    issuer: 'Meta',
    issued: 'Jan 2025',
    id: 'TKNSGOS95JIA',
    link: 'https://www.coursera.org/account/accomplishments/certificate/TKNSGOS95JIA',
  },
  {
    title: 'HTML and CSS in depth',
    issuer: 'Meta',
    issued: 'Dec 2024',
    id: 'MMTVENVML2NO',
    link: 'https://www.coursera.org/account/accomplishments/certificate/MMTVENVML2NO',
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    issued: 'Dec 2024',
    id: 'M9GBQMWJTW9X',
    link: 'https://www.coursera.org/account/accomplishments/certificate/M9GBQMWJTW9X',
  },
  {
    title: 'Version Control',
    issuer: 'Meta',
    issued: 'Dec 2024',
    id: 'K31UYUXWEY7E',
    link: 'https://www.coursera.org/account/accomplishments/certificate/K31UYUXWEY7E',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    issued: 'Nov 2024',
    id: 'GP5JSKAXQCXJ',
    link: 'https://www.coursera.org/account/accomplishments/certificate/GP5JSKAXQCXJ',
  },
  // {
  //   title: 'Angular JS Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Jan 2021',
  //   id: '1610821777850',
  //   link: 'https://git.io/JtYvw',
  // },
  // {
  //   title: 'HTML Advanced Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Jan 2021',
  //   id: '1610823810015',
  //   link: 'https://git.io/JtYvI',
  // },
  // {
  //   title: 'HTML Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Jan 2021',
  //   id: '1610822982546',
  //   link: 'https://git.io/JtYej',
  // },
  // {
  //   title: 'React Development Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Jan 2021',
  //   id: '1610071931595',
  //   link: 'https://git.io/JLp2G',
  // },
  {
    title: 'The Complete JavaScript Course - Beginner to Professional',
    issuer: 'Udemy',
    issued: 'Jan 2021',
    id: 'UC-8c1e0815-aa37-4180-ac2d-a5553ba83167',
    link: 'https://www.udemy.com/certificate/UC-8c1e0815-aa37-4180-ac2d-a5553ba83167',
  },
  // {
  //   title: 'JavaScript Advanced Certification Course ',
  //   issuer: 'Programming Hub',
  //   issued: 'Aug 2020',
  //   id: '1597003305646',
  //   link: 'https://git.io/JJMC2',
  // },
  // {
  //   title: 'JavaScript Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Aug 2020',
  //   id: '1596676590743',
  //   link: 'https://git.io/JJMcp',
  // },
  // {
  //   title: 'Python Advanced Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Aug 2020',
  //   id: '1597003975986',
  //   link: 'https://git.io/JJMCE',
  // },
  // {
  //   title: 'Python Certification Course',
  //   issuer: 'Programming Hub',
  //   issued: 'Aug 2020',
  //   id: '1597003864515',
  //   link: 'https://git.io/JJMcc',
  // },
];

const uxCert = [
  {
    title: 'Google UX Design Specialization',
    issuer: 'Google',
    issued: 'Sep 2024',
    id: '44N444UAAEV2',
    link: 'https://www.coursera.org/account/accomplishments/certificate/44N444UAAEV2',
  },
  {
    title: 'Design a User Experience for Social Good & Prepare for Jobs',
    issuer: 'Google',
    issued: 'Sep 2024',
    id: 'Y4NKB4N0UU21',
    link: 'https://www.coursera.org/account/accomplishments/certificate/Y4NKB4N0UU21',
  },
  {
    title: 'Build Dynamic User Interfaces (UI) for Websites',
    issuer: 'Google',
    issued: 'Feb 2024',
    id: 'MKNTUR44D2AG',
    link: 'https://www.coursera.org/account/accomplishments/certificate/MKNTUR44D2AG',
  },
  {
    title: 'Create High-Fidelity Designs and Prototypes in Figma',
    issuer: 'Google',
    issued: 'Nov 2023',
    id: 'SW9N6BJLGD2Y',
    link: 'https://www.coursera.org/account/accomplishments/certificate/SW9N6BJLGD2Y',
  },
  {
    title: 'Conduct UX Research and Test Early Concepts',
    issuer: 'Google',
    issued: 'Mar 2023',
    id: '9WQYV4U23EPB',
    link: 'https://www.coursera.org/account/accomplishments/certificate/9WQYV4U23EPB',
  },
  {
    title: 'Build Wireframes and Low-Fidelity Prototypes',
    issuer: 'Google',
    issued: 'Jan 2023',
    id: 'GTP37AXJ5T2Y',
    link: 'https://www.coursera.org/account/accomplishments/certificate/GTP37AXJ5T2Y',
  },
  {
    title: 'Start the UX Design Process: Empathize, Define, and Ideate',
    issuer: 'Google',
    issued: 'Dec 2022',
    id: '4V5GSXJRXXWE',
    link: 'https://www.coursera.org/account/accomplishments/certificate/4V5GSXJRXXWE',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google',
    issued: 'Nov 2022',
    id: 'DMRGE93KYZ8U',
    link: 'https://www.coursera.org/account/accomplishments/certificate/DMRGE93KYZ8U',
  },
];

const CertificaitonsPage = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/certifications/certifications_header.png' />
      <PortfolioBody
        header='Certifications'
        smallText='The following is a list of certifications I have obtained throughout my professional experience.'
        links={
          <div>
            <HashLink to='#cs'>Computer Science Certifications</HashLink>
            <HashLink to='#uxui'>UX/UI Certifications</HashLink>
          </div>
        }
      >
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='stretch'
        >
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
                    rel='noreferrer'
                  >
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
                    rel='noreferrer'
                  >
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
        linkTwoText='Coding Project'
      />
      <Interested />
    </div>
  );
};

export default CertificaitonsPage;
