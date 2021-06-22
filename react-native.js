const {
  warning,
  off,
  error,
  ALL_EXTENSIONS,
  TS_EXTENSIONS,
  JS_PATTERNS,
  TS_PATTERNS
} = require('./consts')

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
      files: JS_PATTERNS,
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
      files: TS_PATTERNS,
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
