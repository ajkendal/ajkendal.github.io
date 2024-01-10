import styled from 'styled-components'
import { Grid } from '@mui/material'
import { monochrome, primary } from '../styles/styles'
import { Outlet, Link } from 'react-router-dom'


const Footer = () => {
  return (
    <FooterDiv>
      <Grid className='grid-container desktop-width' container> 

            <StyledLink to='/'>Home</StyledLink>
 
            <StyledLink to='/portfolio'>Portfolio</StyledLink>

            <StyledLink to='/contact'>Contact Me</StyledLink>
     </Grid>
   
    </FooterDiv>
  )
}

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${primary['grey']};
  color: ${monochrome['white']};
  text-align: center;
  z-index: 1;
  height: 80px;
`
const StyledLink = styled(Link)`
 font-family: 'Public Sans', sans-serif;
 text-transform: uppercase;
  color: ${monochrome['white']};
  text-decoration: none;
  margin: 1rem;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2px;
 &:hover {
  color: ${primary['green']};
 }
`

export default Footer
