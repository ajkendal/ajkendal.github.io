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


`

export {
  primary,
  secondary,
  PrimaryButton,
  SecondaryButton,
  monochrome,
  StyledTextField,
}
