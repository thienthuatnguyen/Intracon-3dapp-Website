// /* eslint-disable no-multi-spaces */
const nextRoutes = require('@yolkai/next-routes').default

const routes = nextRoutes()
  .add('content-viewer', '/content')
  .add('content-viewer-full-screen', '/full-screen')

module.exports = routes
