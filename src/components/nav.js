import styled from 'styled-components'
import { Outlet, Link } from 'react-router-dom'

function Navigation() {
  return (
    <NavDiv>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Me</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </NavDiv>
  )
}

const NavDiv = styled.div``

export default Navigation
