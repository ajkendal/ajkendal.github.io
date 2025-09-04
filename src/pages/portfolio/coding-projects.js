import BottomLinks from '../../components/portfolioBottomLinks';
import Interested from '../../components/interestedComponent';
import PortfolioBody from '../../components/portfolioBody';
import PortfolioHeader from '../../components/portfolioHeader';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%;',
  bgcolor: '#33323D',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const CodingProjects = () => {
  const [openOne, setOpenOne] = useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);
  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/codingproject/codingproject_header.png' />

      <PortfolioBody
        header='AI Travel Agent'
        smallText='I created an AI Travel Agent with React, TypeScript, Cloudflare Workers, and integrated OpenAI, Weather API, and Google Maps, contributing to my Scrimba AI Engineering Specialization Certificate.'
        description='AI Travel Agent is a full-stack, AI-assisted trip planner I built as part of the Scrimba AI Engineer certification, designed to turn a few trip details into actionable, personalized recommendations. The app collects core inputs—traveler count, origin/destination, dates, and budget—then returns real-time destination weather, flight options with AI-generated notes, and hotel suggestions with short insights. Under the hood, it blends OpenAI for conversational guidance and summarization with OpenWeather for live forecasts and geolocation and Google Maps Places for fast, accurate city autocomplete. The frontend is implemented with React, Vite, TypeScript, and SCSS Modules for a responsive, modular UI, while Cloudflare Workers & Pages handle serverless logic and global deployment. In addition to development, I also redesigned the page to fit within given brand guidelines, ensuring a cohesive and professional user experience. Design prototypes began in Figma, and the codebase is organized for clarity and extendability, with stretch goals including activity suggestions, shareable itineraries, and AI-generated imagery to enrich trip previews. Overall, the project demonstrates end-to-end API orchestration, prompt-driven UX, and production-oriented deployment, showing how modern web tooling and AI can streamline trip planning from first query to itinerary.'
        links={
          <div>
            <Link
              to='https://ai-travel-agent-6es.pages.dev/'
              target='_blank'
              rel='noreferrer'
            >
              Live Site
            </Link>
            <Link
              to='https://www.figma.com/design/Bbc4zZLCGwJU5nztv6Xi3K/AI-Travel-Agent---Amanda-J?node-id=3-2360&t=VRtlBjyvyML5pstS-1'
              target='_blank'
              rel='noreferrer'
            >
              Figma File
            </Link>
            <Link
              to='https://github.com/ajkendal/ai-travel-agent'
              target='_blank'
              rel='noreferrer'
            >
              GitHub Repo
            </Link>
            <Link
              to='https://github.com/ajkendal/ai-travel-agent-worker'
              target='_blank'
              rel='noreferrer'
            >
              Cloudflare Worker GitHub Repo
            </Link>
            <Link onClick={handleOpenOne}>Worker: Request Flow</Link>
          </div>
        }
        imageOne='/images/portfolio/codingproject/codingproject_static_1.png'
        imageTwo='/images/portfolio/codingproject/codingproject_static_2.png'
      />

      <BottomLinks
        linkOne='/portfolio/certifications'
        linkOneText='Certifications'
        linkTwo='/portfolio/uxui-work'
        linkTwoText='UX/UI Work'
      />
      <Interested />

      <Modal open={openOne} onClose={handleCloseOne}>
        <Box sx={style}>
          <img
            style={{ width: '100%' }}
            className='modal-image'
            alt='ai-travel-agent-request-flow'
            src='/images/portfolio/codingproject/request_flow.png'
          />
        </Box>
      </Modal>
    </div>
  );
};

export default CodingProjects;
