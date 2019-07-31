/* eslint-disable max-len, no-param-reassign, no-console, no-underscore-dangle, global-require */
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTM = require('next-plugin-transpile-modules')
const path = require('path')
const prettyjson = require('prettyjson')

/*
 * "environment": build, test, staging, production, dev or qa
 * "NODE_ENV": 'development' or 'production' only
 */
const { environment = 'build' } = process.env
const isDebug = process.env.x_app_debug === 'true'

// ! - Print environment variables to console
if (environment === 'build' || isDebug) {
  const appVars = ['PORT', 'environment', 'dmi_microservices_url', 'NPM_CONFIG_LOGLEVEL']
  const envVars = {
    npm: [],
    yarn: [],
    node: [],
    system: [],
    APP_ENV_CONFIGURATIONS: []
  }

  Object.keys(process.env).map((evar) => {
    if (evar.indexOf('npm_') >= 0 && evar.indexOf('npm_package_') === -1) {
      envVars.npm.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('YARN') >= 0) {
      envVars.yarn.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('NODE') >= 0) {
      envVars.node.push({ [evar]: process.env[evar] })
    } else if (appVars.indexOf(evar) >= 0) {
      envVars.APP_ENV_CONFIGURATIONS.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('dmi_') >= 0) {
      envVars.APP_ENV_CONFIGURATIONS.push({ [evar]: process.env[evar] })
    } else if (evar.indexOf('npm_package_') === -1) {
      envVars.system.push({ [evar]: process.env[evar] })
    }
    return null
  })

  // eslint-disable-next-line no-unused-vars
  const { npm, ...cleanEnvVars } = envVars
}

let analyzeTarget = ''
if (process.argv.indexOf('--bundle=server') !== -1) analyzeTarget = 'server'
else if (process.argv.indexOf('--bundle=client') !== -1) analyzeTarget = 'client'
else if (process.argv.indexOf('--bundle=both') !== -1) analyzeTarget = 'both'
// Ignore flags and analyze bundle on build phase
if (environment === 'build') analyzeTarget = 'both'
const nextPlugins = []
nextPlugins.push([
  require('@zeit/next-bundle-analyzer'),
  {
    analyzeServer: analyzeTarget === 'server' || analyzeTarget === 'both',
    analyzeBrowser: analyzeTarget === 'client' || analyzeTarget === 'both',
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../.next/analysis/server-bundle.html',
        openAnalyzer: false
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../.next/analysis/client-bundle.html',
        openAnalyzer: false
      }
    }
  }
])

const nextConfig = {
  transpileModules: ['rbx'],
  sassLoaderOptions: {
    includePaths: ['../../src']
  },
  publicRuntimeConfig:
    environment !== 'build'
      ? {
        ...global.next_publicRuntimeConfig
      }
      : {},
  webpack: (config, options) => {
    const { isServer } = options
    isDebug && console.log(`\n\nwebpack Configurations: ${isServer ? 'SERVER' : 'CLIENT'}`)
    isDebug
      && console.log(
        prettyjson.render({ nextOptions: options, environment, isDebug }, { inlineArrays: true, keysColor: 'gray' })
      )

    config.resolve.alias = {
      ...config.resolve.alias,
      '/static': path.resolve(__dirname, 'static')
    }

    let staticPath = 'static'
    if (isServer) {
      staticPath = '../static'
    }

    const urlLoader = {
      loader: 'url-loader',
      options: {
        limit: 100000000, // in bytes
        publicPath: './',
        outputPath: `${staticPath}/`,
        name: '[name].[ext]'
      }
    }

    // aliases to import or require certain modules more easily
    // see: https://webpack.js.org/configuration/resolve/
    config.resolve.alias = {
      ...config.resolve.alias,
      '/static': path.resolve(__dirname, './static') // static assets folder
    }

    // svg loader to use svg's as a React Component which support many optimizations with SVGO
    // see: https://github.com/smooth-code/svgr
    config.module.rules.push(
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.js?$/
        },
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react', ['@babel/preset-env', { modules: 'auto' }]]
            }
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              prettier: false
            }
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(css)$/
        },
        loader: urlLoader
      }
    )

    // loaders for static assets to be handled by webpack
    // see: https://github.com/webpack-contrib/file-loader and https://github.com/webpack-contrib/url-loader
    config.module.rules.push(
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: urlLoader
      },
      {
        test: /\.(woff|woff2?|[ot]tf|eot)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          publicPath: '../../static/fonts/',
          outputPath: `${staticPath}/fonts/`
        }
      }
    )

    config.plugins.unshift(
      new webpack.ProvidePlugin({
        getEnvConfig: [path.resolve(__dirname, './utils/getEnvConfig'), 'default']
      })
    )

    return config
  }
}

module.exports = withPlugins(nextPlugins, withTM(withSass(withCSS(nextConfig))))
