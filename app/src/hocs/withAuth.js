import { getAccessToken } from '../utils/storage'

export default App => class withUserAuth extends React.Component {
    static displayName = `withUserAuth(${App.displayName})`

    static async getInitialProps(ctx) {
      const { req, res, asPath } = ctx
      const accessToken = getAccessToken(req)
      const redirect = (url) => {
        res.redirect(url)
        res.finished = true
        res.end()
      }
      if (res && !accessToken) {
        redirect('/')
      }

      return {
        pathname: asPath,
        ...(App.getInitialProps ? await App.getInitialProps(ctx) : {})
      }
    }

    render() {
      const { props } = this
      return (
        <App {...props} />
      )
    }
}
