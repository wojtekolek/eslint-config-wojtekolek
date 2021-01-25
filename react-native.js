const { warning, off, error, ALL_EXTENSIONS, TS_EXTENSIONS } = require('./consts')

module.exports = {
  extends: require.resolve('./react.js'),
  env: {
    'react-native/react-native': true
  },
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': error,
    'react-native/split-platform-components': off,
    'react-native/no-inline-styles': warning,
    'react-native/no-color-literals': warning,
    'react-native/no-raw-text': off
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      settings: {
        'import/extensions': ALL_EXTENSIONS,
        'import/resolver': {
          node: {
            extensions: ALL_EXTENSIONS
          }
        }
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/extensions': ALL_EXTENSIONS,
        'import/parsers': {
          '@typescript-eslint/parser': TS_EXTENSIONS
        },
        'import/resolver': {
          node: {
            extensions: ALL_EXTENSIONS
          }
        }
      }
    }
  ]
}
