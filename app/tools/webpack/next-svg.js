module.exports = (nextConfig = {}) =>
  Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options

      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      /*
       * =======================================================================================================
       * Svg Loader to use Svg's as a React Component which support many optimizations with SVGO
       * See: https://github.com/smooth-code/svgr
       */
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
                // plugin enables by default. we dont need to prettify svg imports
                prettier: false
              }
            }
          ]
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          issuer: {
            test: /\.(less|css)$/
          },
          loader: {
            loader: 'url-loader',
            options: {
              limit: 100000, // in bytes
              publicPath: `${nextConfig.assetPrefix}/_next/static/svg/`,
              outputPath: `${isServer ? '../' : ''}static/svg/`,
              name: '[name]-[hash].[ext]'
            }
          }
        }
      )

      /**
       * Alter next.config
       */
      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
