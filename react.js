const { warning, off, error } = require('./consts')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:promise/recommended',
    'prettier/react'
  ],
  env: {  'react-native/react-native': true },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'promise/prefer-await-to-then': warning,
    'react/display-name': off,
    'react/no-multi-comp': [warning, { "ignoreStateless": true }],
    'react/no-unused-prop-types': off,
    'react/prop-types': off,
    'react/require-default-props': off,
    'react-native/no-unused-styles': error,
    'no-unused-vars': [error, { 'argsIgnorePattern': '^_', 'caughtErrorsIgnorePattern': '^_' }],
    'react-native/split-platform-components': off,
    'react-native/no-inline-styles': warning,
    'react-native/no-color-literals': warning,
    'react-native/no-raw-text': error,
    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': warning
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    },
    react: {
      version: 'detect'
    }
  }
}
