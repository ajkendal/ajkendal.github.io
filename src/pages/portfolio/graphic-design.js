import PortfolioHeader from '../../components/portfolioHeader';
import PortfolioBody from '../../components/portfolioBody';
import BottomLinks from '../../components/portfolioBottomLinks';
import Interested from '../../components/interestedComponent';
import { Link } from 'react-router-dom';
import { Modal, Box } from '@mui/material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%;',
  bgcolor: '#FAFAFA',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const GraphicDesign = () => {
  const [openOne, setOpenOne] = useState(false);
  const handleOpenOne = () => setOpenOne(true);
  const handleCloseOne = () => setOpenOne(false);
  const [openTwo, setOpenTwo] = useState(false);
  const handleOpenTwo = () => setOpenTwo(true);
  const handleCloseTwo = () => setOpenTwo(false);
  const [openThree, setOpenThree] = useState(false);
  const handleOpenThree = () => setOpenThree(true);
  const handleCloseThree = () => setOpenThree(false);
  const [openFour, setOpenFour] = useState(false);
  const handleOpenFour = () => setOpenFour(true);
  const handleCloseFour = () => setOpenFour(false);

  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/graphicdesign/graphicdesign_header.png' />
      <PortfolioBody
        header='Graphic Design Projects'
        smallText='These four projects were developed for HCI 402 – Foundations of Digital Design at DePaul University, utilizing Adobe Illustrator and Adobe Photoshop to demonstrate core design principles and techniques.'
        description='These projects were created for HCI 402 – Foundations of Digital Design at DePaul University, each with its own unique creative challenge. The first was a triptych inspired by Milk and Honey by Rupi Kaur, exploring visual storytelling through three panels. The second was a poster design using paper as the primary color with two accents to replicate a screen-printing aesthetic. The third involved developing a company logo and soup can concept, where I leaned into a bold, pop-art style. The fourth was a playing card design, where I illustrated a dancer to experiment with capturing movement in a static image.'
        links={
          <div>
            <Link onClick={handleOpenOne}>Triptych</Link>
            <Link onClick={handleOpenTwo}>Poster</Link>
            <Link onClick={handleOpenThree}>Soup Can</Link>
            <Link onClick={handleOpenFour}>Playing Card</Link>
          </div>
        }
        imageOne='/images/portfolio/graphicdesign/graphicdesign_static_1.png'
        imageTwo='/images/portfolio/graphicdesign/graphicdesign_static_2.png'
      />
      <BottomLinks
        linkOne='/portfolio/uxui-work'
        linkOneText='UX/UI Work'
        linkTwo='/portfolio/certifications'
        linkTwoText='Certifications'
      />
      <Interested />
      <Modal open={openOne} onClose={handleCloseOne}>
        <Box sx={style}>
          <img
            style={{ width: '100%' }}
            className='modal-image'
            alt='Milk and Honey Triptych'
            src='/images/portfolio/graphicdesign/MilkHoney_Triptych_KendalBrown.jpg'
          />
        </Box>
      </Modal>
      <Modal open={openTwo} onClose={handleCloseTwo}>
        <Box className='tall' sx={style}>
          <img
            style={{ width: '100%' }}
            className='modal-image '
            alt='Three Toned Poster'
            src='/images/portfolio/graphicdesign/AmandaKendalBrown_Concert_Flyer.jpg'
          />
        </Box>
      </Modal>
      <Modal open={openThree} onClose={handleCloseThree}>
        <Box sx={style}>
          <img
            style={{ width: '100%' }}
            className='modal-image '
            alt='Soup Can Design'
            src='/images/portfolio/graphicdesign/AmandaJKendalBrownProj3Final.jpg'
          />
        </Box>
      </Modal>
      <Modal open={openFour} onClose={handleCloseFour}>
        <Box sx={style}>
          <img
            style={{ width: '100%' }}
            className='modal-image '
            alt='Playing Card Design'
            src='/images/portfolio/graphicdesign/AmandaKendalBrown_Proj4.jpg'
          />
        </Box>
      </Modal>
    </div>
  );
};

export default GraphicDesign;
