import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index'

describe('<Header />', () => {
  it('should render a styled header called Wrapper', () => {
    const renderedComponent = shallow(
      <Header />
    )
    expect(renderedComponent.find('Wrapper').length).toEqual(1)
  })

  it('should render 3 Links', () => {
    const renderedComponent = shallow(
      <Header />
    )
    expect(renderedComponent.find('Link').length).toEqual(3)
  })
})
