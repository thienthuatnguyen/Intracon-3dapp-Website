/* eslint-disable global-require, no-param-reassign, no-underscore-dangle */
(function initalizeProxyMiddleware(moduleExports) {
  // Set up the proxy.
  moduleExports.init = (app) => {
    const apicache = require('apicache') // eslint-disable-line import/no-unresolved
    apicache.options({
      statusCodes: {
        include: [200, 204]
      }
    })

    const apiCache = apicache.middleware

    app.get(/^\/msvc\/v1\/(pageviews.*|pages\/.*)$/, apiCache('1 hour'), (rq, rs, n) => {
      const _write = rs.write
      const _end = rs.end

      rs.write = (data) => {
        data = rq.url.includes('pages/shortlink') ? '1' : data
        _write.call(rs, data)
      }

      rs.end = (data, encoding) => {
        data = rq.url.includes('pages/shortlink') ? '1' : data
        _end.call(rs, data, encoding)
      }

      n()
    })

    app.get('/api/cache/index', (req, res) => {
      res.send(apicache.getIndex())
    })

    app.get('/api/cache/clear', (req, res) => {
      res.send(apicache.clear())
    })
  }
}(module.exports))
