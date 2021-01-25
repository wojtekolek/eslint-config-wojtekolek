const { warning, off, error, TS_EXTENSIONS, ALL_EXTENSIONS, TEST_PATTERNS } = require('./consts')
const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:promise/recommended', 'prettier'],
  env: {
    es6: true,
    node: true
  },
  plugins: ['import'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'import/extensions': off,
    'import/no-dynamic-require': off,
    'import/no-unresolved': error,
    'import/prefer-default-export': off,
    'no-restricted-globals': [error].concat(restrictedGlobals),
    'no-restricted-syntax': [error, 'WithStatement'],
    'promise/prefer-await-to-then': warning,
    'import/no-extraneous-dependencies': [
      error,
      {
        devDependencies: TEST_PATTERNS
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
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
      },
      rules: {
        'no-unused-vars': off,
        '@typescript-eslint/no-unused-vars': [error, { argsIgnorePattern: '^_' }],
        '@typescript-eslint/prefer-optional-chain': error,
        'no-dupe-class-members': off
      }
    },
    {
      files: TEST_PATTERNS,
      env: {
        jest: true,
        'jest/globals': true
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest']
    }
  ]
}
