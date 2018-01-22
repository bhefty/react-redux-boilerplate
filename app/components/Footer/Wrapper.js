import styled from 'styled-components'

const Wrapper = styled.footer`
  background-color: ${props => props.theme.primary};
  margin: 0 auto;
  text-align: center;

  .social {
    width: 30px;
    height: 30px;
  }
`

export default Wrapper
