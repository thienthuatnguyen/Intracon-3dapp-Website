/* eslint-disable global-require, no-param-reassign, max-len */
(function nextJs(moduleExports) {
  const kl = require('kleur')
  // eslint-disable-next-line node/no-deprecated-api
  const { parse } = require('url')
  const path = require('path')
  const routes = require('dmi-fe-app/routes')

  const loggers = require('dmi-fe-tools').debug
  const logger = loggers.baseLogger
  const dev = process.env.NODE_ENV !== 'production'

  const staticMaxAge = dev ? 'no-cache, no-store, max-age=0, must-revalidate' : 'public, max-age=31536000, immutable'

  // Set up the proxy.
  moduleExports.init = (server, app) => {
    const handle = routes.getRequestHandler(app)
    // #- Static Files
    const serveStatic = async (req, res) => {
      const { pathname } = parse(req.url, true)
      const filename = pathname.indexOf('/static') !== 0 ? `/static${pathname}` : pathname

      res.setHeader('Cache-Control', staticMaxAge)

      return app.serveStatic(req, res, path.resolve(`src/app${filename}`))
    }

    server.get(/^\/(_next|static)\/.+$/, (req, res) => handle(req, res))

    // Serve Favicon
    server.get('/favicon.ico', serveStatic)

    server.get('*', (req, res) => {
      logger.debug(`* Express Request: ${kl.blue.bold(req.url)}`)

      return handle(req, res)
    })
  }
}(module.exports))
