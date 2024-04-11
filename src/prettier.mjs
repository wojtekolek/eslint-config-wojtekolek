/** @typedef {import("prettier").Config} PrettierConfig */
/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  jsxSingleQuote: false,
  bracketSameLine: true,
  tabWidth: 2,
  trailingComma: "all",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "^react$",
    "<THIRD_PARTY_MODULES>",
    "^[@]?(components|modules|utils|public)/(.*)$",
    "^[./]",
  ],
  overrides: [
    {
      files: "package*.json",
      options: {
        printWidth: 1000,
      },
    },
  ],
};
