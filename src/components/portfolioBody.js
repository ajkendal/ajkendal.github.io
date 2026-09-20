import styled from 'styled-components';
import { Grid } from '@mui/material';
import { breakpoints, primary } from '../styles/styles';
import { useEffect } from 'react';
import TechStack from './techStack';

/*
header: string
smallText: string
description: string | string[] (an array renders one paragraph per item)
links: html
techStack: { coding: string[], design: string[] } (optional, shown under the project background)
images: { src: string, alt: string }[] (any number of static previews)
imageOne: string (used only when images is not provided)
imageTwo: string (used only when images is not provided)
children: any
*/

const PortfolioBody = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paragraphs = Array.isArray(props.description)
    ? props.description
    : [props.description];
  const images = props.images || [
    { src: props.imageOne, alt: 'Static Preview  One' },
    { src: props.imageTwo, alt: 'Static Preview  Two' },
  ];

  return (
    <PortfolioBodyDiv>
      <Grid
        justifyContent='space-between'
        alignItems='flex-start'
        className='grid-container-portfolio-body'
        container
      >
        <Grid className='left-box' xl={3} lg={3} md={3} sm={12} xs={12} item>
          <h2>{props.header}</h2>
          <p className='body-1'>{props.smallText}</p>
          {props.links}
        </Grid>
        <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
          {props.children || (
            <div>
              <h3 className='no-top-margin'>Project Background</h3>
              {paragraphs.map((text, index) => (
                <p key={index} className='body-2'>
                  {text}
                </p>
              ))}
              {props.techStack && (
                <TechStack
                  groups={[
                    {
                      label: 'Coding Technologies',
                      items: props.techStack.coding || [],
                    },
                    {
                      label: 'Design Technologies and Practices',
                      items: props.techStack.design || [],
                    },
                  ]}
                />
              )}
              <h3>Static Previews</h3>
              {images.map((image) => (
                <img key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>
          )}
        </Grid>
      </Grid>
    </PortfolioBodyDiv>
  );
};

const PortfolioBodyDiv = styled.div`
  .left-box {
    padding: 10px 0 40px 0;
    border-top: 1px solid ${primary['grey'] + '26'};
    border-bottom: 1px solid ${primary['grey'] + '26'};
  }
  a {
    color: ${primary['green']};
    display: block;
    font-family: 'Public Sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 187.5% */
    text-decoration: none;
    &:hover {
      color: ${primary['blue']};
      text-decoration: underline;
    }
  }
  .no-top-margin {
    margin-top: 0;
    @media ${breakpoints.small} {
      margin-top: 32px;
    }
  }
  img {
    width: 100%;
    display: block;
    margin: 30px auto;
  }

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    opacity: 0.15;
    color: ${primary['grey']};
  }
`;

export default PortfolioBody;
