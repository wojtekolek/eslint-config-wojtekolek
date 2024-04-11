import nextPlugin from "@next/eslint-plugin-next";
import { DEFAULT_FILES, error, off } from "./consts";
import reactConfig from "./react";

/** @type {import("eslint").Linter.Config} */
export default [
  reactConfig,
  {
    name: "next",
    files: DEFAULT_FILES,
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-sync-scripts": error,
      "@next/next/no-page-custom-font": error,
    },
  },
  {
    files: ["./pages/**/*.[jt]s?(x)", "./app/**/*.[jt]s?(x)"],
    rules: {
      "import/no-default-export": off,
    },
  },
];
