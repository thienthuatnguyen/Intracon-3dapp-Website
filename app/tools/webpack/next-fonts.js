module.exports = (nextConfig = {}) => Object.assign({}, nextConfig, {
    webpack(config, options) {
      const { isServer } = options

      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      nextConfig = Object.assign(
        {
          assetPrefix: ''
        },
        nextConfig
      )

      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: `${nextConfig.assetPrefix}/_next/static/fonts/`,
              outputPath: `${isServer ? '../' : ''}static/fonts/`,
              name: '[name]-[hash].[ext]'
            }
          }
        ]
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
