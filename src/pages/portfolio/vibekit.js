import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'
import PortfolioBody from '../../components/portfolioBody'
import PortfolioHeader from '../../components/portfolioHeader'
import { Link } from 'react-router-dom'

const VibeKit = () => {
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/vibekit/vibekit_header.png' />

      <PortfolioBody
        header='VibeKit'
        smallText='A theme builder for designing, previewing, and sharing UI design tokens. Built with React, TypeScript, and Vite on the front end, and Cloudflare Workers, D1, and R2 on the back end.'
        description={[
          'VibeKit is a toolkit for crafting UI design tokens (colors, typography, and spacing) and seeing them in context right away. It began at the Girls Develop It Fearless UX workshop, where I put the “vibe-coding” approach I learned at Git Merge 2025 into practice. I built it with Krystina Bradley, who brought user empathy research, journey mapping, and prototyping, and the implementation was developed with AI pair-programming.',
          'Every theme has ten semantic color tokens (neutrals, brand, and status colors) that are named automatically through The Color API, and a palette generator builds monochromatic, analogous, complementary, or triadic schemes from a single base color. Typography is a two-font system pulled from Google Fonts, with per-font controls and a modular type scale that derives h1 through h6. Every change shows up instantly in a web dashboard mockup and a mobile app mockup, and a WCAG contrast checker validates color pairings against AA and AAA standards so accessibility problems show up while you design instead of after.',
          'Finished themes export as CSS variables, a Tailwind config, W3C Design Tokens JSON, or SCSS variables, and each saved theme gets a public preview page and a direct CSS URL that can be linked into any project. VibeKit also has its own brand system: five colors that each have a defined job, a wave-mark logo built from those same colors, and one rule that keeps brand color on the interface chrome so the user’s theme is always the loudest thing on screen. The app is a Vite, React 18, and TypeScript single-page app with a custom design system, and a single Cloudflare Worker handles the API, with D1 (SQLite at the edge) storing themes and R2 storing logo uploads.',
        ]}
        links={
          <div>
            <Link
              to='https://www.vibekit.studio/'
              target='_blank'
              rel='noreferrer'
            >
              Live Site
            </Link>
            <Link
              to='https://github.com/ajkendal/vibekit'
              target='_blank'
              rel='noreferrer'
            >
              GitHub Repo
            </Link>
          </div>
        }
        techStack={{
          coding: [
            'React 18',
            'TypeScript',
            'Vite',
            'React Router',
            'Ant Design',
            'Cloudflare Workers',
            'Cloudflare D1',
            'Cloudflare R2',
            'Wrangler',
            'The Color API',
            'Google Fonts API',
          ],
          design: [
            'Design tokens (W3C format)',
            'Custom design system',
            'Brand system',
            'WCAG contrast validation',
            'Modular type scale',
            'User empathy research',
            'Journey mapping',
            'Prototyping',
          ],
        }}
        images={[
          {
            src: '/images/portfolio/vibekit/vibekit_static_1.png',
            alt: 'The VibeKit editor on the Colors tab, showing a live web dashboard and mobile app preview beside the color tokens and palette generator',
          },
          {
            src: '/images/portfolio/vibekit/vibekit_static_2.png',
            alt: 'The VibeKit WCAG contrast checker, showing color pairings with their contrast ratios and pass or fail ratings',
          },
          {
            src: '/images/portfolio/vibekit/vibekit_static_3.png',
            alt: 'The VibeKit export panel showing a theme as CSS variables, with tabs for Tailwind, Tokens JSON, and SCSS',
          },
        ]}
      />

      <BottomLinks
        linkOne='/portfolio/certifications'
        linkOneText='Certifications'
        linkTwo='/portfolio/benchwitch'
        linkTwoText='BenchWitch'
      />
      <Interested />
    </div>
  )
}

export default VibeKit
