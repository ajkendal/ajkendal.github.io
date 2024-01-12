import styled from 'styled-components'
import { TextField } from '@mui/material'

const primary = {
  green: '#5FB4A2',
  blue: '#203A4C',
  grey: '#33323D',
}

const secondary = {
  bg: '#FAFAFA',
  text: '#EAEAEB',
  errors: '#F43030',
}

const monochrome = {
  white: '#FFFFFF',
  black: '#000000',
}

const breakpoints = {
  xxlarge: '(min-width: 2000px)',
  xlarge: '(min-width:  1536px) and (max-width: 2000px)',
  large: '(max-width: 1536px)',
  medium: '(max-width: 1200px)',
  small: '(max-width: 900px)',
  xsmall: '(min-width: 0px) and (max-width: 600px)',
}

const PrimaryButton = styled.button`
  color: ${monochrome['white']};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${primary['blue']};
  padding: 17px 17px 17px 65px;
  border-style: none;
  background-image: url('/images/styles/button_normal_state.svg');
  background-repeat: no-repeat;
  &:hover {
    background-color: ${primary['green']};
    background-image: url('/images/styles/button_hover_state.svg');
    cursor: pointer;
  }
`

const PrimaryButtonNoArrow = styled.button`
  color: ${monochrome['white']};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${primary['blue']};
  padding: 17px 32px;
  border-style: none;

  background-repeat: no-repeat;
  &:hover {
    background-color: ${primary['green']};

    cursor: pointer;
  }
`

const SecondaryButton = styled.button`
  color: ${primary['grey']};
  text-align: center;
  font-family: 'Public Sans', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${secondary['bg']};
  border: 1px solid ${primary['grey']};
  padding: 17px 32px;

  &:hover {
    background-color: ${primary['grey']};
    color: ${secondary['bg']};
    cursor: pointer;
  }
`

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 30px !important;
  .MuiOutlinedInput-root {
    color: ${primary['grey']};
    font-family: 'Public Sans', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 230.769% */

    border-radius: 0px !important;
    border: 0px ${secondary['text']} !important;
    background-color: ${secondary['text']} !important;

    &:hover .MuiOutlinedInput-notchedOutline,
    &:active {
      border-color: ${primary['green']};
      border-style: solid 1px !important;
    }
    .MuiOutlinedInput-root.Mui-focused {
      .MuiOutlinedInput-notchedOutline {
        border-color: ${primary['green']};
        border-style: solid 1px !important;
      }
    }
    .MuiInputLabel-root.Mui-focused {
      border-color: ${primary['green']};
    }
  }
`

export {
  primary,
  secondary,
  PrimaryButton,
  SecondaryButton,
  monochrome,
  StyledTextField,
  breakpoints,
  PrimaryButtonNoArrow,
}
