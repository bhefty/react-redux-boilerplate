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
  
  display: grid;
  grid-template-columns: 58px minmax(auto, 275px) 1fr;
  grid-gap: 10px;

  #logo {
    margin: 0 auto;
    width: 48px;
    img {
      width: 100%;
    }
  }

  #home {
    font-size: 1.5em;

    &:hover {
      background-color: ${props => props.theme.lightAccent};
    }
  }

  #other-links {
    padding-right: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    span {
      padding: 10px;
    }

    a:hover {
      background-color: ${props => props.theme.lightAccent};
    }
  }

  a, a:visited {
    color: ${props => props.theme.whiteMain};
    text-decoration: none;
  }

  .button {
    display: grid;
    span {
      margin: auto;
    }
  }
`
