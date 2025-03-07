import nextPlugin from "@next/eslint-plugin-next";
import { ALL_PATERNS, STATE } from "./consts.mjs";
import reactConfig from "./react.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactConfig,
  {
    name: "next",
    files: ALL_PATERNS,
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-sync-scripts": STATE.error,
      "@next/next/no-page-custom-font": STATE.error,
      "@next/next/no-duplicate-head": STATE.error,
    },
  },
  {
    files: ["./pages/**/*.[jt]s?(x)", "./app/**/*.[jt]s?(x)"],
    rules: {
      "import-x/no-default-export": STATE.off,
    },
  },
];
