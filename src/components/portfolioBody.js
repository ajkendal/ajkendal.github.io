import styled from 'styled-components'
import { Grid } from '@mui/material'
import { breakpoints, primary } from '../styles/styles'
import { useEffect } from 'react'

/* 
header: string
smallText: string
description: string
links: html
imageOne: string 
imageTwo: string
*/

const PortfolioBody = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PortfolioBodyDiv>
      <Grid
        justifyContent='space-between'
        alignItems='flex-start'
        className='grid-container-portfolio-body'
        container>
        <Grid className='left-box' xl={3} lg={3} md={3} sm={12} xs={12} item>
          <h2>{props.header}</h2>
          <p className='body-1'>{props.smallText}</p>
          {props.links}
        </Grid>
        <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
          <h3 className='no-top-margin'>Project Background</h3>
          <p className='body-2'>{props.description}</p>
          <h3>Static Previews</h3>
          <img src={props.imageOne} alt='Static Preview  One' />
          <img src={props.imageTwo} alt='Static Preview  Two' />
        </Grid>
      </Grid>
    </PortfolioBodyDiv>
  )
}

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
`

export default PortfolioBody
