const { error, off } = require("./consts");

module.exports = {
  rules: {
    strict: [error, "never"],
    "import/newline-after-import": [error, { count: 1 }],
    "arrow-body-style": [error, "as-needed"],
    "block-spacing": [error, "always"],
    "brace-style": [error, "1tbs", { allowSingleLine: true }],
    "array-bracket-spacing": [error, "never"],
    "array-element-newline": [off, { multiline: true, minItems: 3 }],
    "comma-dangle": [
      off,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "comma-spacing": [error, { before: false, after: true }],
    "comma-style": [
      error,
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
    "jsx-quotes": [off, "prefer-double"],
    "key-spacing": [error, { beforeColon: false, afterColon: true }],
    "max-len": [
      error,
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
      off,
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "max-lines-per-function": [
      off,
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    "newline-before-return": off,
    "no-array-constructor": error,
    "no-nested-ternary": error,
    "no-new-object": error,
    "no-restricted-syntax": [
      error,
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
    "no-unneeded-ternary": [error, { defaultAssignment: false }],
    "object-curly-spacing": [error, "always"],
    "nonblock-statement-body-position": [error, "beside", { overrides: {} }],
    "no-whitespace-before-property": error,
    "operator-assignment": [error, "always"],
    "quote-props": [error, "as-needed", { keywords: false, unnecessary: true, numbers: false }],
    "spaced-comment": [
      error,
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
    "wrap-regex": off,
  },
};
