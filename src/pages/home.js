import Interested from '../components/interestedComponent'
import { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Grid, useTheme, useMediaQuery } from '@mui/material'
import {
  primary,
  breakpoints,
  SecondaryButton,
  PrimaryButton,
  secondary,
} from '../styles/styles'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Home = () => {
  const theme = useTheme()
  const isStacked = useMediaQuery(theme.breakpoints.down('md'))

  const sourceDivRef = useRef(null)
  const [targetDivHeight, setTargetDivHeight] = useState(0)

  useEffect(() => {
    const sourceDiv = sourceDivRef.current
    if (!sourceDiv) return
    const updateHeight = () => setTargetDivHeight(sourceDiv.offsetHeight)
    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(sourceDiv)
    return () => observer.disconnect()
  }, [])

  return (
    <div className='desktop-width'>
      <Header>
        <div className='outer-div'>
          <div className='intro'>
            <h1>Amanda Kendal-Brown, a developer and designer.</h1>
            <HashLink to='#about-me'>
              <PrimaryButton>About Me</PrimaryButton>
            </HashLink>
          </div>
        </div>
      </Header>
      <AboutMe id='about-me'>
        <Grid spacing={isStacked ? 0 : 8} className='about-me-grid' container>
          <Grid
            className='personal-img-div'
            item
            xl={5}
            lg={5}
            md={5}
            sm={12}
            xs={12}
          >
            <img
              style={{ height: isStacked ? 400 : targetDivHeight }}
              src='/images/home/amanda_timpani.png'
              alt='Amanda J Kendal-Brown playing Timpani'
            />
          </Grid>
          <Grid
            item
            xl={7}
            lg={7}
            md={7}
            sm={12}
            xs={12}
            className='about-me-text'
          >
            <div ref={sourceDivRef}>
              <hr />
              <h2>About Me</h2>
              <p className='body-2'>
                I'm a Front-End Developer with more than 12 years of experience
                designing and building scalable, high-performance web
                applications. My expertise lies in React, TypeScript, and design
                systems, with a focus on creating accessible, user-focused
                solutions that meet both business and technical goals.
                Throughout my career, I&apos;ve successfully migrated legacy
                codebases to modern frameworks, implemented reusable component
                libraries, and optimized SEO and accessibility to enhance user
                engagement and inclusivity.
              </p>

              <figure className='speaker-card'>
                <img
                  src='/images/home/devfest_dc_speaker.png'
                  alt='Google DevFest DC Build Edition speaker card for Amanda J Kendal-Brown of Capital One, presenting "Two Tablets, One Bench: Real-Time Multiplayer at the Edge with Durable Objects and Workers AI" at Fuse at Mason Square'
                />
              </figure>
              <p className='body-2'>
                I&apos;ve also had the chance to speak at Google DevFest DC,
                presenting &ldquo;Two Tablets, One Bench: Real-Time Multiplayer
                at the Edge with Durable Objects and Workers AI.&rdquo; The talk
                grew out of a problem from my roller derby life: two coaches at
                opposite ends of a bench, both holding tablets, both needing to
                see the same jam unfold in real time. It&apos;s the same
                challenge behind whiteboards, point-of-sale systems, and shared
                dashboards.
              </p>

              <p className='body-2'>
                My academic background combines technical and human-centered
                disciplines. I am currently a Master&apos;s student at George
                Mason University, studying Applied Technology in Human-Computer
                Interaction, and I hold a Bachelor of Arts in Music from the
                University of Iowa. Earlier graduate coursework in Computer
                Science at Northeastern Illinois University and DePaul
                University shaped my approach to problem-solving and user
                experience design. I also hold certifications in Front-End
                Development (Meta) and UX Design (Google), reinforcing my
                ability to bridge development and design practices.
              </p>

              <p className='body-2'>
                Outside of my professional work, I am a classical musician, an
                archer, and an active roller derby player. These pursuits
                reflect the same qualities I bring to my career: creativity,
                precision, collaboration, and resilience. They also inspire me
                to approach challenges with a balanced and disciplined mindset.
              </p>
              <Link to='/portfolio'>
                <SecondaryButton>GO TO PORTFOLIO</SecondaryButton>
              </Link>
              <hr />
            </div>
          </Grid>
        </Grid>
      </AboutMe>
      <Interested />
    </div>
  )
}

const Header = styled.div`
  margin-bottom: 100px;
  .outer-div {
    position: relative;
    background-image: url('/images/home/home_backgound_image.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom 10%;
    height: 575px;
    @media ${breakpoints.medium} {
      height: 500px;
    }
  }
  .intro {
    background-color: ${secondary['bg']};
    max-width: 550px;
    padding-top: 20px;
    padding-right: 30px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  @media ${breakpoints.small} {
    margin-bottom: 20px;
    .outer-div {
      height: auto;
      background-image: none;
      &::before {
        content: '';
        display: block;
        height: clamp(160px, 30vw, 260px);
        background-image: url('/images/home/home_backgound_image.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom 10%;
      }
    }
    .intro {
      position: static;
      max-width: 100%;
      padding-bottom: 20px;
      padding-right: 0;
      h1 {
        font-size: clamp(32px, 6vw, 44px);
        line-height: 1.15;
      }
    }
  }
`

const AboutMe = styled.div`
  margin: 0 auto 50px auto;
  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid;
    opacity: 0.15;
    color: ${primary['grey']};
  }

  .personal-img-div {
    display: flex;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center 25%;
    }

    @media ${breakpoints.small} {
      img {
        margin: 20px auto;
      }
    }
  }
  .about-me-text button {
    margin: 20px 0 30px 0;
  }
  .about-me-text > div {
    display: flow-root;
  }
  .speaker-card {
    float: right;
    width: 280px;
    margin: 20px 0 20px 32px;
    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 1080 / 1350;
    }
    @media ${breakpoints.small} {
      float: none;
      max-width: 400px;
      width: 100%;
      margin: 20px auto;
    }
  }
`

export default Home
