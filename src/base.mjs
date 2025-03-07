import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import pluginImportX from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";
import { ALL_PATERNS, STATE, TEST_PATTERNS } from "./consts.mjs";

export default tseslint.config(
  pluginImportX.flatConfigs.recommended,
  pluginImportX.flatConfigs.typescript,
  {
    name: "base",
    files: ALL_PATERNS,
    rules: {
      strict: [STATE.error, "never"],
      "import/extensions": STATE.off,
      "import/no-dynamic-require": STATE.off,
      "import/prefer-default-export": STATE.off,
      "import/no-default-export": STATE.error,
      "import/no-unresolved": STATE.error,
      "import/no-extraneous-dependencies": [
        STATE.error,
        {
          devDependencies: TEST_PATTERNS,
        },
      ],
      "import/newline-after-import": [STATE.error, { count: 1 }],
      "arrow-body-style": [STATE.error, "as-needed"],
      "block-spacing": [STATE.error, "always"],
      "brace-style": [STATE.error, "1tbs", { allowSingleLine: true }],
      "array-bracket-spacing": [STATE.error, "never"],
      "array-element-newline": [STATE.off, { multiline: true, minItems: 3 }],
      "comma-dangle": [
        STATE.off,
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "comma-spacing": [STATE.error, { before: false, after: true }],
      "comma-style": [
        STATE.error,
        "last",
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
          },
        },
      ],
      "jsx-quotes": [STATE.off, "prefer-double"],
      "key-spacing": [STATE.error, { beforeColon: false, afterColon: true }],
      "max-len": [
        STATE.error,
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      "max-lines": [
        STATE.off,
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
      "max-lines-per-function": [
        STATE.off,
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
          IIFEs: true,
        },
      ],
      "newline-before-return": STATE.off,
      "no-array-constructor": STATE.error,
      "no-nested-ternary": STATE.error,
      "no-new-object": STATE.error,
      "no-restricted-syntax": [
        STATE.error,
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message:
            "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],
      "no-unneeded-ternary": [STATE.error, { defaultAssignment: false }],
      "object-curly-spacing": [STATE.error, "always"],
      "nonblock-statement-body-position": [STATE.error, "beside", { overrides: {} }],
      "no-whitespace-before-property": STATE.error,
      "operator-assignment": [STATE.error, "always"],
      "quote-props": [
        STATE.error,
        "as-needed",
        { keywords: false, unnecessary: true, numbers: false },
      ],
      "spaced-comment": [
        STATE.error,
        "always",
        {
          line: {
            exceptions: ["-", "+"],
            markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
          },
          block: {
            exceptions: ["-", "+"],
            markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
            balanced: true,
          },
        },
      ],
      "wrap-regex": STATE.off,
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          project: ["<root>/tsconfig.json"],
        }),
      ],
    },
  },
  {
    files: ["**/*.config.*"],
    rules: {
      "import/prefer-default-export": STATE.error,
      "import/no-default-export": STATE.off,
    },
  },
);
