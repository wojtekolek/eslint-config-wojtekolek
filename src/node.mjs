/* eslint-disable import/no-unresolved */
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import * as tsEslintParser from "@typescript-eslint/parser";
import jestPlugin from "eslint-plugin-jest";
import promisePlugin from "eslint-plugin-promise";
import restrictedGlobals from "eslint-restricted-globals";
import globals from "globals";
import baseConfig from "./base.mjs";
import { ALL_PATERNS, STATE, TEST_PATTERNS, TS_PATTERNS } from "./consts.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...baseConfig,
  {
    name: "node",
    files: ALL_PATERNS,
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { project: true } },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      promise: promisePlugin,
    },
    rules: {
      "no-restricted-globals": [STATE.error].concat(restrictedGlobals),
      "no-restricted-syntax": [STATE.error, "WithStatement"],
      "no-unused-vars": [STATE.error, { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }],
      // "promise/prefer-await-to-then": STATE.warning,
    },
  },
  {
    name: "node-ts",
    files: TS_PATTERNS,
    languageOptions: {
      parser: tsEslintParser,
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
    },
    rules: {
      ...tsEslintPlugin.configs.recommended.rules,
      ...tsEslintPlugin.configs["recommended-type-checked"].rules,
      "no-unused-vars": STATE.off,
      "@typescript-eslint/no-unused-vars": [STATE.error, { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-definitions": [STATE.error, "type"],
      "@typescript-eslint/no-unsafe-assignment": STATE.off,
      "@typescript-eslint/no-misused-promises": STATE.off,
      "@typescript-eslint/no-unsafe-return": STATE.off,
      "@typescript-eslint/prefer-optional-chain": STATE.error,
      "no-dupe-class-members": STATE.off,
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
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...jestPlugin.configs.recommended,
    },
  },
];
