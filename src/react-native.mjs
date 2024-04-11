import reactNativePlugin from "eslint-plugin-react-native";
import { STATE } from "./consts.mjs";
import reactConfig from "./react.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactConfig,
  {
    name: "react-native",
    plugins: {
      "react-native": reactNativePlugin,
    },
    rules: {
      "react-native/no-unused-styles": STATE.error,
      "react-native/split-platform-components": STATE.off,
      "react-native/no-inline-styles": STATE.warning,
      "react-native/no-color-literals": STATE.warning,
      "react-native/no-raw-text": STATE.off,
    },
  },
];
