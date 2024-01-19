import styled from 'styled-components'
import { Grid } from '@mui/material'
import {
  primary,
  PrimaryButtonNoArrow,
  StyledTextField,
} from '../styles/styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Contact = () => {
  const [nameField, setNameField] = useState('')
  const [emailField, setEmailField] = useState('')
  const [messageField, setMessageField] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  return (
    <ContactMeDiv>
      <Grid
        justifyContent='flex-start'
        alignItems='flex-start'
        className='grid-container-contact top-border desktop-width'
        container>
        <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
          <h1>Get in Touch</h1>
        </Grid>
        <Grid xl={8} lg={8} md={8} sm={12} xs={12} item>
          <p className='body-1'>
            I&apos;m currently a front-end developer and I love to code and
            design. To enhance my knowledge I am available for any projects and
            am open to a wide range of opportunities. I&apos;m also happy to
            hear about opportunities that don&apos;t fit that description.
            I&apos;m a hard-working and positive person who will always approach
            each task with a sense of purpose and attention to detail. Please do
            feel free to check out my online profiles.
          </p>
          <Link
            to='https://resume.creddle.io/resume/bjd40yfpnd'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 76 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M46.0813 0H13C9.68479 0 6.50537 1.31696 4.16116 3.66117C1.81696 6.00537 0.5 9.18479 0.5 12.5V87.5C0.5 90.8152 1.81696 93.9946 4.16116 96.3388C6.50537 98.683 9.68479 100 13 100H63C66.3152 100 69.4946 98.683 71.8388 96.3388C74.183 93.9946 75.5 90.8152 75.5 87.5V29.4187C75.4996 27.7613 74.8409 26.1718 73.6687 25L50.5 1.83125C49.3282 0.659067 47.7387 0.000353984 46.0813 0ZM47.375 21.875V9.375L66.125 28.125H53.625C51.9674 28.125 50.3777 27.4665 49.2056 26.2944C48.0335 25.1223 47.375 23.5326 47.375 21.875ZM56.75 50C56.75 54.9728 54.7746 59.7419 51.2583 63.2583C47.7419 66.7746 42.9728 68.75 38 68.75C33.0272 68.75 28.2581 66.7746 24.7417 63.2583C21.2254 59.7419 19.25 54.9728 19.25 50C19.25 45.0272 21.2254 40.2581 24.7417 36.7417C28.2581 33.2254 33.0272 31.25 38 31.25C42.9728 31.25 47.7419 33.2254 51.2583 36.7417C54.7746 40.2581 56.75 45.0272 56.75 50ZM69.25 85.9688V87.5C69.25 89.1576 68.5915 90.7473 67.4194 91.9194C66.2473 93.0915 64.6576 93.75 63 93.75H13C11.3424 93.75 9.75268 93.0915 8.58058 91.9194C7.40848 90.7473 6.75 89.1576 6.75 87.5V85.9688C6.75 85.9688 13 75 38 75C63 75 69.25 85.9688 69.25 85.9688Z'
                fill='#33323D'
              />
            </svg>
          </Link>
          <Link
            to='https://github.com/ajkendal'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              width='41'
              height='40'
              viewBox='0 0 25 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                id='Path'
                d='M12.5 0C5.59375 0 0 5.50948 0 12.3045C0 17.742 3.58125 22.3531 8.54688 23.9788C9.17188 24.0946 9.40104 23.7137 9.40104 23.3871C9.40104 23.095 9.39062 22.3207 9.38542 21.295C5.90833 22.0369 5.175 19.6442 5.175 19.6442C4.60625 18.2241 3.78437 17.8443 3.78437 17.8443C2.65208 17.0815 3.87188 17.0971 3.87188 17.0971C5.12708 17.1827 5.78646 18.3649 5.78646 18.3649C6.90104 20.2463 8.7125 19.7027 9.42708 19.3886C9.53958 18.5924 9.86146 18.0509 10.2188 17.743C7.44271 17.4352 4.525 16.3771 4.525 11.6628C4.525 10.3198 5.00937 9.22212 5.81146 8.36127C5.67083 8.05031 5.24896 6.7992 5.92083 5.10462C5.92083 5.10462 6.96771 4.77489 9.35833 6.36617C10.3583 6.09278 11.4208 5.95713 12.4833 5.95087C13.5458 5.95713 14.6083 6.09278 15.6083 6.36617C17.9833 4.77489 19.0302 5.10462 19.0302 5.10462C19.7021 6.7992 19.2802 8.05031 19.1552 8.36127C19.9521 9.22212 20.4365 10.3198 20.4365 11.6628C20.4365 16.3897 17.5146 17.43 14.7333 17.7326C15.1708 18.102 15.5771 18.8564 15.5771 20.0094C15.5771 21.656 15.5615 22.9791 15.5615 23.3788C15.5615 23.7012 15.7802 24.0862 16.4208 23.9631C21.4219 22.3478 25 17.7336 25 12.3045C25 5.50948 19.4031 0 12.5 0V0Z'
                fill='#33323D'
              />
            </svg>
          </Link>
          <Link
            to='https://www.linkedin.com/in/akendalb/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                id='Shape'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.4 0H21.6C22.92 0 24 1.08 24 2.4V21.6C24 22.92 22.92 24 21.6 24H2.4C1.08 24 0 22.92 0 21.6V2.4C0 1.08 1.08 0 2.4 0ZM3.6 20.4H7.2V9.6H3.6V20.4ZM5.4 7.56C4.2 7.56 3.24 6.6 3.24 5.4C3.24 4.2 4.2 3.24 5.4 3.24C6.6 3.24 7.56 4.2 7.56 5.4C7.56 6.6 6.6 7.56 5.4 7.56ZM16.8 20.4H20.4V13.56C20.4 11.28 18.48 9.36 16.2 9.36C15.12 9.36 13.8 10.08 13.2 11.04V9.6H9.6V20.4H13.2V14.04C13.2 13.08 14.04 12.24 15 12.24C15.96 12.24 16.8 13.08 16.8 14.04V20.4Z'
                fill='#33323D'
              />
            </svg>
          </Link>
          <Link
            to='https://www.instagram.com/akendalb/'
            target='_blank'
            rel='noopener noreferrer'>
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clipPath='url(#clip0_15_68)'>
                <path
                  d='M12 0C8.7435 0 8.334 0.015 7.0545 0.072C5.775 0.132 4.9035 0.333 4.14 0.63C3.33914 0.931229 2.61374 1.40374 2.0145 2.0145C1.40411 2.61404 0.931661 3.33936 0.63 4.14C0.333 4.902 0.1305 5.775 0.072 7.05C0.015 8.3325 0 8.7405 0 12.0015C0 15.2595 0.015 15.6675 0.072 16.947C0.132 18.225 0.333 19.0965 0.63 19.86C0.9375 20.649 1.347 21.318 2.0145 21.9855C2.6805 22.653 3.3495 23.064 4.1385 23.37C4.9035 23.667 5.7735 23.8695 7.0515 23.928C8.3325 23.985 8.7405 24 12 24C15.2595 24 15.666 23.985 16.947 23.928C18.2235 23.868 19.098 23.667 19.8615 23.37C20.6618 23.0686 21.3867 22.5961 21.9855 21.9855C22.653 21.318 23.0625 20.649 23.37 19.86C23.6655 19.0965 23.868 18.225 23.928 16.947C23.985 15.6675 24 15.2595 24 12C24 8.7405 23.985 8.3325 23.928 7.0515C23.868 5.775 23.6655 4.902 23.37 4.14C23.0684 3.33934 22.5959 2.61401 21.9855 2.0145C21.3864 1.40351 20.661 0.930968 19.86 0.63C19.095 0.333 18.222 0.1305 16.9455 0.072C15.6645 0.015 15.258 0 11.997 0H12.0015H12ZM10.9245 2.163H12.0015C15.2055 2.163 15.585 2.1735 16.8495 2.232C18.0195 2.2845 18.6555 2.481 19.0785 2.6445C19.638 2.862 20.0385 3.123 20.4585 3.543C20.8785 3.963 21.138 4.362 21.3555 4.923C21.5205 5.3445 21.7155 5.9805 21.768 7.1505C21.8265 8.415 21.8385 8.7945 21.8385 11.997C21.8385 15.1995 21.8265 15.5805 21.768 16.845C21.7155 18.015 21.519 18.6495 21.3555 19.0725C21.1631 19.5935 20.856 20.0647 20.457 20.451C20.037 20.871 19.638 21.1305 19.077 21.348C18.657 21.513 18.021 21.708 16.8495 21.762C15.585 21.819 15.2055 21.8325 12.0015 21.8325C8.7975 21.8325 8.4165 21.819 7.152 21.762C5.982 21.708 5.3475 21.513 4.9245 21.348C4.40325 21.1559 3.93169 20.8494 3.5445 20.451C3.14513 20.064 2.83758 19.5925 2.6445 19.071C2.481 18.6495 2.2845 18.0135 2.232 16.8435C2.175 15.579 2.163 15.1995 2.163 11.994C2.163 8.79 2.175 8.412 2.232 7.1475C2.286 5.9775 2.481 5.3415 2.646 4.9185C2.8635 4.359 3.1245 3.9585 3.5445 3.5385C3.9645 3.1185 4.3635 2.859 4.9245 2.6415C5.3475 2.4765 5.982 2.2815 7.152 2.2275C8.259 2.1765 8.688 2.1615 10.9245 2.16V2.163ZM18.4065 4.155C18.2174 4.155 18.0301 4.19225 17.8554 4.26461C17.6807 4.33698 17.522 4.44305 17.3883 4.57677C17.2545 4.71048 17.1485 4.86923 17.0761 5.04394C17.0037 5.21864 16.9665 5.4059 16.9665 5.595C16.9665 5.7841 17.0037 5.97135 17.0761 6.14606C17.1485 6.32077 17.2545 6.47952 17.3883 6.61323C17.522 6.74695 17.6807 6.85302 17.8554 6.92539C18.0301 6.99775 18.2174 7.035 18.4065 7.035C18.7884 7.035 19.1547 6.88329 19.4247 6.61323C19.6948 6.34318 19.8465 5.97691 19.8465 5.595C19.8465 5.21309 19.6948 4.84682 19.4247 4.57677C19.1547 4.30671 18.7884 4.155 18.4065 4.155ZM12.0015 5.838C11.1841 5.82525 10.3723 5.97523 9.61347 6.27921C8.85459 6.58319 8.16377 7.03511 7.58123 7.60864C6.99868 8.18216 6.53605 8.86585 6.22026 9.61989C5.90448 10.3739 5.74185 11.1833 5.74185 12.0007C5.74185 12.8182 5.90448 13.6276 6.22026 14.3816C6.53605 15.1356 6.99868 15.8193 7.58123 16.3929C8.16377 16.9664 8.85459 17.4183 9.61347 17.7223C10.3723 18.0263 11.1841 18.1763 12.0015 18.1635C13.6193 18.1383 15.1623 17.4779 16.2975 16.3249C17.4326 15.1719 18.0689 13.6188 18.0689 12.0007C18.0689 10.3827 17.4326 8.82962 16.2975 7.67662C15.1623 6.52363 13.6193 5.86324 12.0015 5.838ZM12.0015 7.9995C13.0625 7.9995 14.08 8.42098 14.8303 9.17122C15.5805 9.92146 16.002 10.939 16.002 12C16.002 13.061 15.5805 14.0785 14.8303 14.8288C14.08 15.579 13.0625 16.0005 12.0015 16.0005C10.9405 16.0005 9.92296 15.579 9.17272 14.8288C8.42248 14.0785 8.001 13.061 8.001 12C8.001 10.939 8.42248 9.92146 9.17272 9.17122C9.92296 8.42098 10.9405 7.9995 12.0015 7.9995Z'
                  fill='#33323D'
                />
              </g>
              <defs>
                <clipPath id='clip0_15_68'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </Grid>
      </Grid>
      <Grid
        justifyContent='flex-start'
        alignItems='flex-start'
        className='grid-container-contact top-border desktop-width'
        container>
        <Grid xl={4} lg={4} md={4} sm={12} xs={12} item>
          <h1>Contact Me</h1>
        </Grid>
        <Grid
          className='contact-form'
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          item>
          <form action='https://formspree.io/f/mvoegzlv' method='POST'>
            <p className='body-1 bold'>Name</p>
            <StyledTextField
              error={errorName}
              id='name-field'
              variant='standard'
              name='Name'
              value={nameField}
              placeholder='Full Name'
              onChange={(e) => setNameField(e.target.value)}
              onBlur={(e) => {
                setNameField(e.target.value.trim())
                setErrorName(nameField === '' ? true : false)
              }}
            />

            <p className='body-1 bold'>Email Address</p>
            <StyledTextField
              error={errorEmail}
              id='email-field'
              variant='standard'
              placeholder='email@example.com'
              name='Email'
              value={emailField}
              onChange={(e) => setEmailField(e.target.value)}
              onBlur={(e) => {
                setEmailField(e.target.value.trim())
                setErrorEmail(emailField === '' ? true : false)
              }}
            />

            <p className='body-1 bold'>Message</p>
            <StyledTextField
              error={errorMessage}
              id='message-field'
              variant='standard'
              placeholder='How can I help?'
              name='Message'
              multiline
              minRows={8}
              onChange={(e) => setMessageField(e.target.value)}
              onBlur={(e) => {
                setMessageField(e.target.value)
                setErrorMessage(messageField === '' ? true : false)
              }}
            />
            <PrimaryButtonNoArrow
              disabled={errorEmail || errorMessage || errorName}
              type='submit'>
              Send Message
            </PrimaryButtonNoArrow>
          </form>
        </Grid>
      </Grid>
    </ContactMeDiv>
  )
}

const ContactMeDiv = styled.div`
  width: 100%;
  .grid-container-contact {
    padding: 50px 0;
  }
  h1,
  p {
    margin-top: 0;
  }
  .contact-form {
    p {
      margin-bottom: 5px;
    }
    button {
      margin-top: 20px;
    }
  }
  svg {
    margin-top: 30px;
    margin-right: 30px;
    &:hover {
      path {
        fill: ${primary['green']};
      }
    }
  }
`

export default Contact
