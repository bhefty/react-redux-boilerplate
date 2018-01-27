import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import Img from 'components/Img'
import logo from './logo_white.png'
import Wrapper from './Wrapper'

class Header extends PureComponent {
  render () {
    return (
      <Wrapper>
        <Link to='/' className='header__logo'><Img src={logo} alt='React Redux Boilerplate' /></Link>
        <Link to='/' className='header__link header__brand'><span>React Redux Boilerplate</span></Link>
        <div className='header__links'>
          <Link to='/features' className='header__link'><span>Features</span></Link>
        </div>
      </Wrapper>
    )
  }
}

export default Header
