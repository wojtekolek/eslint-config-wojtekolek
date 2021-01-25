const { warning, off, error } = require('./consts')

module.exports = {
  extends: [require.resolve('./node.js'), 'plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  rules: {
    'react/display-name': off,
    'react/no-multi-comp': [warning, { ignoreStateless: true }],
    'react/no-unused-prop-types': off,
    'react/prop-types': off,
    'react/require-default-props': off,
    'no-unused-vars': [error, { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
    'react-hooks/rules-of-hooks': error,
    'react-hooks/exhaustive-deps': warning
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
