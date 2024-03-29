const {
  warning,
  off,
  error,
  TS_EXTENSIONS,
  JS_EXTENSIONS,
  TEST_PATTERNS,
  TS_PATTERNS,
} = require("./consts");
const restrictedGlobals = require("eslint-restricted-globals");

require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    requireConfigFile: false,
    allowImportExportEverywhere: true,
    sourceType: "module",
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [require.resolve("./base.js")],
  plugins: ["import", "promise"],
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
  overrides: [
    {
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
      files: TEST_PATTERNS,
      env: {
        jest: true,
        "jest/globals": true,
      },
      extends: ["plugin:jest/recommended"],
      plugins: ["jest"],
    },
  ],
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: TS_EXTENSIONS,
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [...JS_EXTENSIONS, ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
  },
};
