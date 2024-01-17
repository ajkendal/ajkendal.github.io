import styled from 'styled-components'
import { Grid } from '@mui/material'
import { SecondaryButton, breakpoints, primary } from '../styles/styles'
import { Link } from 'react-router-dom'

/* 
Props
header: String
text: String
link: String
buttonText: String
image: String
leftText: boolean 
*/

const PortfolioIndexLayout = (props) => {
  return (
    <PortfolioIndexDiv>
      <Grid
        container
        direction={props.leftText ? 'row-reverse' : 'row'}
        justifyContent='space-between'
        alignItems='center'
        className='portfolio-layout-grid'>
        <Grid xl={5} lg={6} md={6} sm={12} xs={12} item className='img-item'>
          <img src='' alt={props.header + ` layout image`} />
        </Grid>
        <Grid
          xl={5}
          lg={5}
          md={5}
          sm={12}
          xs={12}
          item
          className='content-item'>
          <h2>{props.header}</h2>
          <p className='body-1'>{props.text}</p>
          <Link to={props.link}>
            <SecondaryButton>{props.buttonText}</SecondaryButton>
          </Link>
        </Grid>
      </Grid>
    </PortfolioIndexDiv>
  )
}

const PortfolioIndexDiv = styled.div`
  .portfolio-layout-grid {
    margin: 100px auto;
    @media ${breakpoints.small} {
      flex-direction: row !important;
    }
  }
  .content-item {
    border-top: 1px solid ${primary['grey'] + '26'};
    border-bottom: 1px solid ${primary['grey'] + '26'};
  }
`

export default PortfolioIndexLayout
