import styled from 'styled-components';
import { Outlet, Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { breakpoints, primary, monochrome, secondary } from '../styles/styles';
import { useState } from 'react';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const DesktopNav = () => (
    <DesktopNavDiv>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/portfolio'>Portfolio</StyledLink>
      <StyledLink to='/contact'>Contact Me</StyledLink>
    </DesktopNavDiv>
  );
  const MobileNav = () => (
    <div
      className='mobile-icons'
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? (
        <svg
          width='18'
          height='19'
          viewBox='0 0 18 19'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='Group'>
            <path
              id='Combined Shape'
              fillRule='evenodd'
              clipRule='evenodd'
              d='M9.00003 8.79286L0.868301 0.661133L0.161194 1.36824L8.29292 9.49997L0.161194 17.6317L0.868301 18.3388L9.00003 10.2071L17.1318 18.3388L17.8389 17.6317L9.70714 9.49997L17.8389 1.36824L17.1318 0.661133L9.00003 8.79286Z'
              fill={primary['grey']}
            />
          </g>
        </svg>
      ) : (
        <svg
          width='24'
          height='13'
          viewBox='0 0 24 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='24' height='1' fill={primary['grey']} />
          <rect y='6' width='24' height='1' fill={primary['grey']} />
          <rect y='12' width='24' height='1' fill={primary['grey']} />
        </svg>
      )}
    </div>
  );

  return (
    <NavDiv>
      <Grid
        alignItems='center'
        className='desktop-width grid-container-nav'
        container
      >
        <Grid xl={1} lg={1} md={2} sm={10} xs={10} item>
          <Link to='/'>
            <svg
              width='61'
              height='32'
              viewBox='0 0 61 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='Combined Shape'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M31.3469 26.1224L15.6735 0L0 26.1224H31.3469ZM60.0816 5.87755L44.4082 32L28.7347 5.87755H60.0816Z'
                fill={primary['grey']}
              />
            </svg>
          </Link>
        </Grid>
        <Grid className='link-class' xl={11} lg={11} md={10} sm={2} xs={2} item>
          {DesktopNav()}
          {MobileNav()}
        </Grid>
      </Grid>
      {mobileMenuOpen ? (
        <MobileNavDiv>
          <MobileStyledLink to='/'>Home</MobileStyledLink>
          <MobileStyledLink to='/portfolio'>Portfolio</MobileStyledLink>
          <MobileStyledLink to='/contact'>Contact Me</MobileStyledLink>
        </MobileNavDiv>
      ) : null}
      <Outlet />
    </NavDiv>
  );
}

const NavDiv = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  .grid-container-nav {
    background-color: ${secondary['bg']};
    position: sticky;
    top: 0;
    right: 0;
    margin-top: 0 !important;

    padding: 30px 0;
    @media ${breakpoints.small} {
      height: auto;
    }
  }
  .link-class {
    text-align: right;
  }

  .mobile-icons {
    display: none;
    @media ${breakpoints.small} {
      display: block;
    }
    svg:hover,
    svg:active {
      path,
      rect {
        fill: ${primary['green']};
      }
    }
  }
`;

const DesktopNavDiv = styled.div`
  display: block;
  @media ${breakpoints.small} {
    display: none;
  }
`;

const MobileNavDiv = styled.div`
  display: none;
  background-color: ${primary['grey']};
  text-align: center;
  z-index: 1;
  position: fixed;
  width: 100%;

  @media ${breakpoints.small} {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Public Sans', sans-serif;
  text-transform: uppercase;
  color: ${primary['grey']};
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
`;

const MobileStyledLink = styled(Link)`
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
  @media ${breakpoints.small} {
    display: block;
    margin: 2rem;
  }
`;

export default Navigation;
