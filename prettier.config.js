module.exports = {
  bracketSpacing: true,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "none",
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@(pollen|ui|verve|verveLegacy)/(.*)$',
    '^@(.*)/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 1000,
      },
    },
  ],
};
