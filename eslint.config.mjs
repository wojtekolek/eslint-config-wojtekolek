import { STATE } from "./src/consts.mjs";
import reactEslintConfig from "./src/nextjs.mjs";
import nodeEslintConfig from "./src/node.mjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...nodeEslintConfig,
  {
    files: ["**/*.mjs"],
    rules: {
      "import/no-default-export": STATE.off,
    },
  },
];
