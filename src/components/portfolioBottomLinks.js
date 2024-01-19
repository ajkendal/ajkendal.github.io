import styled from 'styled-components'
import { Grid } from '@mui/material'
import { primary } from '../styles/styles'
import { Link } from 'react-router-dom'

/* 
  linkOne: string
  linkOneText: string
  linkTwo: string
  linkTwoText: string
*/

const BottomLinks = (props) => {
  return (
    <BottomLinksDiv>
      {' '}
      <Grid
        justifyContent='space-between'
        alignItems='flex-start'
        className='grid-container-portfolio-bottom'
        container>
        <Grid xl={6} lg={6} md={6} sm={6} xs={6} item className='right-border'>
          <Link className='left-link' to={props.linkOne}>
            <svg
              width='10'
              height='18'
              viewBox='0 0 10 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M9 1L1 9L9 17' stroke='#33323D' />
            </svg>
            <h3>{props.linkOneText}</h3>
          </Link>
        </Grid>
        <Grid xl={6} lg={6} md={6} sm={6} xs={6} item>
          <Link className='right-link' to={props.linkTwo}>
            <h3>{props.linkTwoText}</h3>
            <svg
              width='10'
              height='18'
              viewBox='0 0 10 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M1 1L9 9L1 17' stroke='#33323D' />
            </svg>
          </Link>
        </Grid>
      </Grid>
    </BottomLinksDiv>
  )
}

const BottomLinksDiv = styled.div`
  margin: 50px 0;
  border-top: 1px solid ${primary['grey'] + '26'};
  border-bottom: 1px solid ${primary['grey'] + '26'};
  .right-border {
    border-right: 1px solid ${primary['grey'] + '26'};
  }
  .right-link {
    float: right;
    h3 {
      text-align: right;
    }
  }
  h3 {
    margin: 0;
  }
  .left-link,
  .right-link {
    padding: 40px 0;
    display: inline-flex;
  }
  svg {
    margin-top: 8px;
    position: relative;
    top: 0.15em;
  }
  .left-link svg {
    margin-right: 20px;
  }
  .right-link svg {
    margin-left: 20px;
  }
  a {
    text-decoration: none;
    &:hover {
      h3 {
        color: ${primary['green']};
      }
      svg path {
        stroke: ${primary['green']};
      }
    }
  }
`

export default BottomLinks
