import styled from 'styled-components';
import { Grid } from '@mui/material';
import { SecondaryButton, breakpoints, primary } from '../styles/styles';
import { Link } from 'react-router-dom';

const Interested = () => {
  return (
    <InterestedDiv>
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
        className='interested-grid'
      >
        <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
          <h2>Interested in doing a project together?</h2>
        </Grid>
        <Grid xl={6} lg={6} md={5} item>
          <hr />
        </Grid>
        <Grid xl={2} lg={2} md={3} sm={12} xs={12} item>
          <Link to='/contact'>
            <SecondaryButton>Contact Me</SecondaryButton>
          </Link>
        </Grid>
      </Grid>
    </InterestedDiv>
  );
};

const InterestedDiv = styled.div`
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    opacity: 0.15;
    color: ${primary['grey']};
  }
  button {
    float: right;
  }
  @media ${breakpoints.small} {
    h2 {
      text-align: center;
    }
    button {
      display: block;
      margin: 0 auto;
      float: none;
    }
    a {
      text-decoration: none !important;
    }
  }
`;

export default Interested;
