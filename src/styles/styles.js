import styled from 'styled-components'
import { TextField, Button } from '@mui/material'

const primary = {
  green: '#5FB4A2',
  blue: '#203A4C',
  grey: '#33323D',
}

const secondary = {
  bg: '#FAFAFA',
  text: '#EAEAEB',
  errors: '#F43030',
  disabled: '#979797',
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

const PrimaryButtonNoArrow = styled(Button)`
  color: ${monochrome['white']} !important;
  text-align: center;
  font-family: 'Public Sans', sans-serif !important;
  font-size: 12px !important;
  font-style: normal !important;
  font-weight: 100 !important;
  line-height: normal !important;
  letter-spacing: 2px !important;
  text-transform: uppercase !important;
  background-color: ${primary['blue']} !important;
  padding: 17px 32px !important;
  border-style: none !important;

  background-repeat: no-repeat;
  &:hover {
    background-color: ${primary['green']} !important;

    cursor: pointer !important;
  }
  &.Mui-disabled {
    background-color: ${secondary['disabled']} !important;
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

  .MuiInput-root {
    padding: 0px !important;
  }

  .MuiInput-root::before {
    height: 100%;
    border-bottom: 2px solid ${primary['grey']} !important;
  }
  .MuiInput-root::after {
    border-bottom: 2px solid ${primary['green']} !important;
  }

  .Mui-error::before,
  .Mui-error::after {
    border-bottom: 2px solid ${secondary['errors']} !important;
  }

  input,
  textarea {
    color: ${primary['grey']};
    font-family: 'Public Sans', sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 230.769% */
    border-radius: 0px !important;
    padding: 9px 16px;
    background-color: ${secondary['text']} !important;
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
