import jsxa11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import testingLibraryPlugin from "eslint-plugin-testing-library";
import globals from "globals";
import { STATE, TEST_PATTERNS } from "./consts.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  {
    name: "react",
    languageOptions: {
      globals: {
        ...globals.browser,
        React: "writable",
      },
      sourceType: "module",
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "jsx-a11y": jsxa11yPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...jsxa11yPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": STATE.off,
      "react/display-name": STATE.off,
      // "react/no-multi-comp": [STATE.warning, { ignoreStateless: true }],
      "react/no-unused-prop-types": STATE.off,
      "react/prop-types": STATE.off,
      "react/require-default-props": STATE.off,
      "react-hooks/rules-of-hooks": STATE.error,
      "react-hooks/exhaustive-deps": STATE.warning,
      "react/jsx-closing-tag-location": STATE.error,
      "react/jsx-curly-spacing": [STATE.error, "never", { allowMultiline: true }],
      "react/jsx-handler-names": [
        STATE.off,
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],
      "react/jsx-pascal-case": [
        STATE.error,
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
