import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HomePage from 'containers/HomePage/Loadable'
import FeaturePage from 'containers/FeaturePage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 172px); // min height for App wrapper should account for nav and footer
  padding: 0 16px;
  flex-direction: column;
`

export default function App () {
  return (
    <div>
      <Helmet
        titleTemplate='%s - React.js Boilerplate'
        defaultTitle='React.js Boilerplate'
      >
        <meta name='description' content='A React.js Boierlplate application with Redux' />
      </Helmet>
      <Header />
      <AppWrapper>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/features' component={FeaturePage} />
          <Route path='' component={NotFoundPage} />
        </Switch>
      </AppWrapper>
      <Footer />
    </div>
  )
}
