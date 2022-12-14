const { warning, off, error, TEST_PATTERNS } = require("./consts");

module.exports = {
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
  plugins: ["import", "react", "jsx-a11y"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
  },
  rules: {
    "react/react-in-jsx-scope": off,
    "react/display-name": off,
    "react/no-multi-comp": [warning, { ignoreStateless: true }],
    "react/no-unused-prop-types": off,
    "react/prop-types": off,
    "react/require-default-props": off,
    "react-hooks/rules-of-hooks": error,
    "react-hooks/exhaustive-deps": warning,
    "react/jsx-closing-tag-location": error,
    "react/jsx-curly-spacing": [error, "never", { allowMultiline: true }],
    "react/jsx-handler-names": [
      off,
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "react/jsx-pascal-case": [
      error,
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        elements: ["img"],
        img: ["Image"],
      },
    ],
    "import/order": [
      error,
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        groups: [["builtin", "external"], "parent", "sibling", "index"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: TEST_PATTERNS,
      extends: ["plugin:testing-library/react"],
      plugins: ["testing-library"],
    },
  ],
};
