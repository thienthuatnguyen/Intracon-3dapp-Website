/* eslint-disable */
const { default: setDebugger, dump } = require('dmi-fe-tools').debug
const { globals, paths } = require('../../.app.config')
const { version } = require('./package.json')

const debug = setDebugger(':babelrc', 'debug')

debug(dump({ globals, paths }))

const babelConfig = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          debug: globals.APP_DEBUG,
          useBuiltIns: 'usage'
        }
      }
    ]
  ],
  plugins: [
    [
      'transform-define',
      {
        ...globals,
        APP_PKG_VERSION: version
      }
    ],
    ['babel-plugin-styled-components'],
    !globals.DEV_MODE && ['add-react-displayname']
  ].filter(Boolean)
}

debug(dump({ babelConfig }))

module.exports = babelConfig
