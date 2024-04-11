import importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import promisePlugin from "eslint-plugin-promise";
import restrictedGlobals from "eslint-restricted-globals";
import baseConfig from "./base";
import { DEFAULT_FILES, error, off, TEST_PATTERNS, TS_PATTERNS, warning } from "./consts";

/** @type {import("eslint").Linter.Config} */
export default [
  baseConfig,
  {
    name: "node",
    files: DEFAULT_FILES,
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { project: true } },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      requireConfigFile: false,
      allowImportExportEverywhere: true,
      globals: {
        node: true,
        es6: true,
      },
    },
    plugins: {
      import: importPlugin,
      promise: promisePlugin,
    },
    rules: {
      "import/extensions": off,
      "import/no-dynamic-require": off,
      "import/no-unresolved": error,
      "import/prefer-default-export": off,
      "import/no-default-export": error,
      "no-restricted-globals": [error].concat(restrictedGlobals),
      "no-restricted-syntax": [error, "WithStatement"],
      "no-unused-vars": [error, { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
      "promise/prefer-await-to-then": warning,
      "import/no-extraneous-dependencies": [
        error,
        {
          devDependencies: TEST_PATTERNS,
        },
      ],
    },
  },
  {
    name: "node-ts",
    files: TS_PATTERNS,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "plugin:@typescript-eslint/recommended-type-checked",
      "plugin:@typescript-eslint/stylistic-type-checked",
    ],
    rules: {
      "no-unused-vars": off,
      "@typescript-eslint/no-unused-vars": [error, { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-definitions": [error, "type"],
      "@typescript-eslint/no-unsafe-assignment": off,
      "@typescript-eslint/no-misused-promises": off,
      "@typescript-eslint/no-unsafe-return": off,
      "@typescript-eslint/prefer-optional-chain": error,
      "no-dupe-class-members": off,
    },
  },
  {
    name: "tests",
    files: TEST_PATTERNS,
    languageOptions: {
      globals: {
        jest: true,
        "jest/globals": true,
      },
    },
    extends: ["plugin:jest/recommended"],
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended,
    },
  },
];
