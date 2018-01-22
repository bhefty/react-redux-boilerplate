import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Img from 'components/Img'
import logo from './logo_white.png'
import Wrapper from './Wrapper'

class Header extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Link to='/' id='logo'><Img src={logo} alt='React Redux Boilerplate' /></Link>
        <Link to='/' id='home' className='button'><span>React Redux Boilerplate</span></Link>
        <div id='other-links'>
          <Link to='/features' id='features' className='button'><span>Features</span></Link>
        </div>
      </Wrapper>
    )
  }
}

export default Header
