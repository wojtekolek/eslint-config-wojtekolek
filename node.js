const { warning, off, error } = require('./consts')
const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'prettier',
    'plugin:import/typescript'
  ],
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  plugins: [
    'jest',
    'prettier',
    'import'
  ],
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
    'prettier/prettier': [
      error,
      {
        singleQuote: true,
        trailingComma: 'none',
        semi: false
      },
    ],
    'promise/prefer-await-to-then': warning,
    'import/no-extraneous-dependencies': [
      error,
      {
        devDependencies: [
          '**/__tests__/**/*.[jt]s?(x)',
          '**/?(*.)+(spec|test).[tj]s?(x)'
        ]
      }
    ]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          error,
          { argsIgnorePattern: '^_' },
        ],
        'no-dupe-class-members': off,
        'no-unused-vars': off,
      },
    },
    {
      files: ['*.{spec,test}.{js,ts,tsx}', '**/__tests__/**/*.{js,ts,tsx}'],
      env: {
        jest: true,
        'jest/globals': true,
      }
    }
  ]
}
