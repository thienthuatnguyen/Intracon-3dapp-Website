/* eslint-disable global-require, no-param-reassign, camelcase */
(async function expressInit(moduleExports) {
  const fs = require('fs')

  const versionFile = require.resolve('../../../version')
  let APP_VERSION

  try {
    APP_VERSION = fs
      .readFileSync(versionFile)
      .toString()
      .trim()
  } catch (e) {
    APP_VERSION = ''
  }

  const {
    environment = 'dev',
    NODE_ENV,
    x_api_cache,
    x,
    NPM_CONFIG_LOGLEVEL = 'info',
    dmi_microservices_url,
    dmi_fe_api
  } = process.env
  const kl = require('kleur')
  const nanoidGenerate = require('nanoid/generate')

  const dev = NODE_ENV !== 'production'
  const apiCacheEnabled = JSON.parse(x_api_cache || 'false')
  const isExperiment = JSON.parse(x || 'false')

  const loggers = require('dmi-fe-tools').debug
  const httpLogger = require('dmi-fe-tools/logger/morgan')

  const logger = loggers.baseLogger
  const { okLabel, errorLabel: eLabel, errorText } = loggers.logStyles

  const nanoidAlpha = '1234567890abcdefghijklmnopqrstuvwxyz'
  const nanoidSize = 10

  function sessionCookie(req, res, next) {
    const htmlPage = req.path
      && !req.path.match(/^\/(_next|static)/)
      && !req.path.match(/\.(js|map)$/)
      && req.accepts('text/html', 'text/css', 'image/png') === 'text/html'

    if (!htmlPage) {
      next()
      return
    }

    if (!req.cookies['mfp.sid'] || req.cookies['mfp.sid'].length === 0) {
      req.cookies['mfp.sid'] = nanoidGenerate(nanoidAlpha, nanoidSize)
      res.cookie('mfp.sid', req.cookies['mfp.sid'])
    }

    next()
  }

  moduleExports.init = (server, app) => {
    if (!dev) {
      logger.debug('Enabling GZip compression...')
      server.use(require('compression')())
    }

    logger.info(`${eLabel(' LOG LEVEL ')} ${NPM_CONFIG_LOGLEVEL}`)

    isExperiment && logger.info(`🤓 ${errorText('ALL EXPERIMENTAL FEATURES ENABLED')}`)
    isExperiment
      || (apiCacheEnabled && logger.info(`${eLabel(' 🚀 CACHE ')} ${errorText('API CACHE ENABLED FOR COMMON API\'s')}`))

    logger.info(`${okLabel(' APP VERSION ')} ${kl.blue(APP_VERSION)}`)
    logger.info(`${okLabel(' NODE_ENV ')} ${kl.blue(NODE_ENV)}`)
    logger.info(`${okLabel(' CURRENT ENVIRONMENT ')} ${kl.blue(environment)}`)
    logger.info(`${okLabel(' API SERVER ')} ${kl.blue(dmi_microservices_url)}`)
    logger.info(`${okLabel(' API URL ')} ${kl.blue(dmi_fe_api)}`)

    // Cache API responses (dev only - experimental)
    if (isExperiment || apiCacheEnabled) require('../apiCache').init(server)

    // MIDDLEWARE - Universal Cookies
    logger.debug(`Setting ${kl.blue('universal cookie')} Express middleware`)
    server.use(require('universal-cookie-express')())

    // MIDDLEWARE - Cookie Parser
    logger.debug(`Setting ${kl.blue('cookie-parser')} Express middleware`)
    server.use(require('cookie-parser')())

    // MIDDLEWARE - Session Id
    server.use(sessionCookie)

    // MIDDLEWARE - Morgan HTTP Logger
    server.use(httpLogger)

    // NEXT
    logger.debug('Initialize Next.js ...')
    require('../next').init(server, app)
  }
}(module.exports))
