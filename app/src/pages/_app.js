/* eslint-disable react/no-danger */
import App, { Container } from 'next/app'
import Layout from '../components/Layout/Layout'

class DMIApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

export default DMIApp
