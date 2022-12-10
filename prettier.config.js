module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^[@]?(components|modules|utils|public)/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000
      }
    }
  ]
}
