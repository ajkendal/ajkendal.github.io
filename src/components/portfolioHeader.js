import styled from 'styled-components'

/* image: string */

const PortfolioHeader = (props) => {
  return (
    <HeaderDiv>
      <img src={props.image} alt='Portfolio Page Header' />
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  img {
    width: 100%;
    display: block;
    margin: 50px auto 100px auto;
  }
`

export default PortfolioHeader
