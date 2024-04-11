import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import { error, off, TEST_PATTERNS, warning } from "./consts";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    name: "react",
    languageOptions: {
      globals: {
        React: "writable",
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
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
    },
  },
  {
    name: "react-tests",
    files: TEST_PATTERNS,
    plugins: {
      "testing-library": testingLibraryPlugin,
    },
    rules: {
      ...testingLibraryPlugin.rules,
    },
  },
];
