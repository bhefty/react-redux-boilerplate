import styled from 'styled-components'

export default styled.header`
  background-color: ${props => props.theme.primary};
  height: 48px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.18), 0 2px 3px rgba(0,0,0,0.26);
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  
  position: sticky;
  top: 0;
  z-index: 11101;
  
  padding: 0 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 48px 1fr;
  grid-auto-flow: column;
  align-content: center;

  .header__logo {
    img {
      width: 100%;
    }
  }

  .header__brand {
    padding 0 10px;
    justify-self: start;
    font-size: 1.5em;

    &:hover {
      background-color: ${props => props.theme.lightAccent};
    }
  }

  .header__links {
    justify-self: end;

    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 10px;

    span {
      padding: 0 10px;
    }

    a:hover {
      background-color: ${props => props.theme.lightAccent};
    }
  }

  .header__link {
    display: grid;
    span {
      margin: auto;
    }
  }

  a, a:visited {
    color: ${props => props.theme.whiteMain};
    text-decoration: none;
  }
`
