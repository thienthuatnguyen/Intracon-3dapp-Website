'use strict'

module.exports = {
  parser: 'babel-eslint',
  extends: ['plugin:react/recommended', 'airbnb', 'dmi'],
  plugins: ['module-resolver'],
  env: {
    browser: true
  },
  globals: {
    React: false,
    APP_PKG_VERSION: false,
    APP_DEBUG: false,
    PORT: false
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  rules: {
    'no-param-reassign': ['error', { props: true }],
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id']
        }
      }
    ],
    'jsx-a11y/media-has-caption': 0,
    'import/first': 'warn'
  }
}
