const winston = require('winston')
const _ = require('lodash')
const kleur = require('kleur')
kleur.enabled = require('color-support').level
const Dumper = require('dumper.js/src/dumper')
const prettyjson = require('prettyjson')

const { productionFormat } = require('./winston-formats')
const ConsoleWithDebugModule = require('./winston-debug-transport')

/**
 * Log Levels:
 * ------------
 * error: 0,
 * warn: 1,
 * info: 2,
 * verbose: 3,
 * debug: 4,
 * silly: 5
 * ------------
 */
const LOGLEVEL = process.env.NPM_CONFIG_LOGLEVEL || 'info'

/**
 * Formated dumper with data types
 * @param {int} indentCount
 */
const dumper = (indentCount = 2) => new Dumper(indentCount)
const dump = log => dumper().generateDump(log)

module.exports.dump = dump

/**
 *
 */
const pJson = (log, options = { inlineArrays: true, keysColor: 'gray' }) => prettyjson.render(log, options)

module.exports.pJson = pJson

/**
 *
 */
let baseLogger = null

/**
 * Base System Logger // DEPRECATED: Use "module.exports.log" export
 */
winston.loggers.add('base', {
  level: LOGLEVEL,
  exitOnError: true,
  transports: [new ConsoleWithDebugModule({ ns: ':sys' })]
})

baseLogger = winston.loggers.get('base')

module.exports.baseLogger = baseLogger

/**
 * HTTP Logger // Streams "morgan" module logs
 */
const levelsByHttpCode = {
  500: 'error',
  400: 'warn',
  300: 'verbose',
  200: 'verbose'
}

winston.loggers.add('http', {
  level: LOGLEVEL,
  format: productionFormat,
  exitOnError: false,
  transports: [new ConsoleWithDebugModule({ ns: ':http' })]
})

const httpLogger = winston.loggers.get('http')

httpLogger.stream = {
  write(message) {
    try {
      const jsonMessage = JSON.parse(message)
      const metaData = _.omit(jsonMessage, ['print'])
      let { status } = metaData
      status = parseInt(status, 10)

      let logLevel = 'info'

      if (status >= 500) logLevel = levelsByHttpCode['500']
      else if (status >= 400) logLevel = levelsByHttpCode['400']
      else if (status >= 300) logLevel = levelsByHttpCode['300']
      else if (status >= 200) logLevel = levelsByHttpCode['200']

      httpLogger.log(logLevel, jsonMessage.print, metaData)
    } catch (e) {
      httpLogger.info(message, { type: 'http' })
    }
  }
}

module.exports.httpLogger = httpLogger

/**
 * Namespace tagged logger with the "debug" package
 */
winston.loggers.add('streamDebug', {
  level: LOGLEVEL,
  exitOnError: false,
  transports: [new ConsoleWithDebugModule({ ns: ':debug' })]
})

const streamToDebugModule = winston.loggers.get('streamDebug')
const logWithNamespace = (ns, log, level) => streamToDebugModule.log(level, log, { ns })

// ! - Namespace extend helper
const extendNamespace = (ns = ':sys', defaultLevel = 'info') => (nsOrLog, level = defaultLevel) => {
  const isNs = _.isString(nsOrLog) ? nsOrLog.startsWith(':') : false

  if (isNs) {
    return (log = '') => logWithNamespace(`${ns}${nsOrLog}`, log, level)
  }

  return logWithNamespace(ns, nsOrLog, level)
}

/**
 * Export log with predefiend groups
 */
module.exports.log = {
  sys: extendNamespace(':sys'),
  theme: extendNamespace(':theme'),
  app: extendNamespace(':app'),
  http: extendNamespace(':http'),
  debug: extendNamespace(':debug', 'debug')
}

/**
 * Print formatted Node environment variables
 */
module.exports.printProcessEnv = () => {
  extendNamespace(':sys')(`Node Environment Variables: \n ${JSON.stringify(process.env, '', 2)}`)
}

/**
 * Predefined log style helpers
 */
module.exports.logStyles = {
  errorLabel: log => kleur.white.bgRed(log),
  okLabel: log => kleur.black.bgGreen(log),
  infoLabel: log => kleur.white.bgBlue(log),
  warnLabel: log => kleur.black.bgYellow(log),
  // text
  errorText: log => kleur.red.bold(log),
  okText: log => kleur.green(log),
  infoText: log => kleur.blue.dim(log),
  warnText: log => kleur.yellow.dim(log),
  dimText: log => kleur.dim(log)
}

module.exports.default = (ns = 'log', level = 'verbose') => extendNamespace(ns, level)
