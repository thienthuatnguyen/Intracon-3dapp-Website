/* eslint-disable import/no-webpack-loader-syntax */
import styled, { ThemeProvider } from 'styled-components'
import propTypes from 'prop-types'
import Header from './Header'
import Head from './Head'
import ErrorBoundary from '../ErrorBoundary'

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../../stylesheets/variables.scss')

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <MainPage>
      <Head />
      <React.Fragment>
        <ErrorBoundary key='app-main-header'>
          <Header />
        </ErrorBoundary>
        <ContentPage>
          {children}
        </ContentPage>
      </React.Fragment>
    </MainPage>
  </ThemeProvider>
)

Layout.propTypes = {
  children: propTypes.node
}

const MainPage = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`
const ContentPage = styled.div`
  flex: 1 1 100%;
  display: flex;
  overflow-y: scroll;
  position: relative;
`

export default Layout
