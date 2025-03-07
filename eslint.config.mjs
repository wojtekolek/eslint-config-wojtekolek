import { STATE } from "./src/consts.mjs";
import nodeEslintConfig from "./src/node.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nodeEslintConfig,
  {
    files: ["**/*.mjs"],
    rules: {
      "import-x/no-default-export": STATE.off,
    },
  },
];
