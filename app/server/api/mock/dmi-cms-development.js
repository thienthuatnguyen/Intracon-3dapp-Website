/* eslint-disable quote-props, quotes, no-template-curly-in-string, max-len */
module.exports = {
  dmi: {
    fe: {
      errorMessages: {
        '40x':
          '<h1>Page not found!</h1><p>We are sorry but the page you are looking for does not exist. You could return to the <a href="/">homepage</a>.</p>',
        '50x':
          '<h1>Sorry, something went wrong.</h1><p>There was a technical problem. Please try again or go back to the <a href="/">homepage</a>.</p>'
      },
      site: {
        baseUrl: 'https://dmi-cms-test.dminc-intl.com/'
      },
      api: 'http://3dapp-test.dminc-intl.com'
    },
    microservices: {
      url: 'http://gateway/intracon'
    }
  }
}
