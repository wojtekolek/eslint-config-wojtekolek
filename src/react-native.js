import reactNativePlugin from "eslint-plugin-react-native";
import { error, off, warning } from "./consts";
import reactConfig from "./react";

/** @type {import("eslint").Linter.Config} */
export default [
  reactConfig,
  {
    name: "react-native",
    plugins: {
      "react-native": reactNativePlugin,
    },
    rules: {
      "react-native/no-unused-styles": error,
      "react-native/split-platform-components": off,
      "react-native/no-inline-styles": warning,
      "react-native/no-color-literals": warning,
      "react-native/no-raw-text": off,
    },
  },
];
