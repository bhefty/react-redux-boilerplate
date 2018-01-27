import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Img from 'components/Img'
import logo from './logo_white.png'
import Wrapper from './Wrapper'

class Header extends Component {
  constructor () {
    super()
    this.toggleNav = this.toggleNav.bind(this)

    this.state = {
      expanded: false
    }
  }

  toggleNav () {
    this.setState({ expanded: !this.state.expanded })
  }

  render () {
    return (
      <Wrapper expanded={this.state.expanded}>
        <div className='header'>
          <Link to='/' className='header__logo'><Img src={logo} alt='React Redux Boilerplate' /></Link>
          <Link to='/' className='header__link header__brand'><span>React Redux Boilerplate</span></Link>
          <button aria-expanded={this.state.expanded} aria-controls='menu-list' onClick={this.toggleNav}>
            <span className='open'>☰</span>
            <span className='close'>×</span>
          </button>
          <div id='menu-list' className='header__links'>
            <Link to='/features' className='header__link'><span>Features</span></Link>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default Header
