import BottomLinks from '../../components/portfolioBottomLinks';
import Interested from '../../components/interestedComponent';

import { Grid } from '@mui/material';
import PortfolioHeader from '../../components/portfolioHeader';
import PortfolioBody from '../../components/portfolioBody';
import TechStack from '../../components/techStack';
import { HashLink } from 'react-router-hash-link';

import {
  csCertSpecializations,
  uxCertSpecializations,
} from '../../components/certificationLists';

const CertificationsPage = () => {
  const certificationMap = (specialization) => {
    return (
      <>
        {specialization.map((cert, id) => (
          <Grid key={id} xl={12} lg={12} md={12} sm={12} xs={12} item>
            <h4>{cert.title}</h4>
            <p className='body-1'>
              <b>Issuer:</b> {cert.issuer}
              <br />
              <b>Issued:</b> {cert.issued}
              <br />
              <b style={{ display: 'inline-block' }}>Credential ID:</b>{' '}
              <a
                style={{ display: 'inline-block', fontWeight: 'normal' }}
                href={cert.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                {cert.id}
              </a>
            </p>
            <TechStack
              title={null}
              groups={[
                {
                  label: 'Courses',
                  items: [...cert.courses].reverse().map((course) => course.title),
                },
              ]}
            />
            {id < specialization.length - 1 && (
              <hr style={{ marginTop: '20px' }} />
            )}
          </Grid>
        ))}
      </>
    );
  };

  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/certifications/certifications_header.png' />
      <PortfolioBody
        header='Certifications'
        smallText='The following is a list of certifications I have obtained throughout my professional experience.'
        links={
          <div>
            <HashLink to='#se'>Software Engineering Certifications</HashLink>
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
            <h2 id='se' className='scroll-offset no-top-margin'>
              Software Engineering Certifications
            </h2>
            <hr />
          </Grid>
          {certificationMap(csCertSpecializations)}

          <Grid
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            item
            style={{ marginTop: '40px' }}
          >
            <h2 id='uxui' className='scroll-offset'>
              UX/UI Certifications
            </h2>
            <hr />
          </Grid>
          {certificationMap(uxCertSpecializations)}
        </Grid>
      </PortfolioBody>

      <BottomLinks
        linkOne='/portfolio/weather-app'
        linkOneText='Weather App'
        linkTwo='/portfolio/vibekit'
        linkTwoText='VibeKit'
      />
      <Interested />
    </div>
  );
};

export default CertificationsPage;
