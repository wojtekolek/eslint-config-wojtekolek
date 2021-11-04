const {
  warning,
  off,
  error,
  TS_EXTENSIONS,
  ALL_EXTENSIONS,
  TEST_PATTERNS,
  TS_PATTERNS
} = require('./consts')
const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module'
  },
  extends: [
    require.resolve('./base.js'),
    'eslint:recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  plugins: ['@babel', 'import', 'promise'],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'import/extensions': off,
    'import/no-dynamic-require': off,
    'import/no-unresolved': error,
    'import/prefer-default-export': off,
    'import/no-default-export': error,
    'no-restricted-globals': [error].concat(restrictedGlobals),
    'no-restricted-syntax': [error, 'WithStatement'],
    'no-unused-vars': [error, { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
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
      files: TS_PATTERNS,
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
          },
          typescript: {} // this loads <rootdir>/tsconfig.json to eslint
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
