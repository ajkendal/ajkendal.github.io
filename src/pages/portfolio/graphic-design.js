import PortfolioHeader from '../../components/portfolioHeader'
import PortfolioBody from '../../components/portfolioBody'
import BottomLinks from '../../components/portfolioBottomLinks'
import Interested from '../../components/interestedComponent'
import { Link } from 'react-router-dom'
import { Modal, Box } from '@mui/material'
import { useState } from 'react'

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
}

const GraphicDesign = () => {
  const [openOne, setOpenOne] = useState(false)
  const handleOpenOne = () => setOpenOne(true)
  const handleCloseOne = () => setOpenOne(false)
  const [openTwo, setOpenTwo] = useState(false)
  const handleOpenTwo = () => setOpenTwo(true)
  const handleCloseTwo = () => setOpenTwo(false)
  const [openThree, setOpenThree] = useState(false)
  const handleOpenThree = () => setOpenThree(true)
  const handleCloseThree = () => setOpenThree(false)
  const [openFour, setOpenFour] = useState(false)
  const handleOpenFour = () => setOpenFour(true)
  const handleCloseFour = () => setOpenFour(false)

  return (
    <div className='desktop-width'>
      <PortfolioHeader image='/images/portfolio/graphicdesign/graphicdesign_header.png' />
      <PortfolioBody
        header='Graphic Design Projects'
        smallText='These are four different projects that were designed for HCI 402 - Foundations of Digtal Design at DePaul. Each of these projects were created with Adobe Illustrator and Photoshop.'
        description='These are some of the projects that I designed for HCI 402 - Foundations of Digtal Design. Each project had a specific goal. Project one was to create a Triptych, which I based mine on Milk and Honey by Rupi Kaur. Project Two was to create a poster of our choosing, using the Paper as a primary color and two others to mock a screen printing method. Project Three was to create and design a company logo and theme for a Soup can, I went with more of a pop feel for this project. Project Four was to design a Playing Card, I really wanted to work on illustrating morevement, so I designed a dancer for the Face side of this Card.'
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
  )
}

export default GraphicDesign
