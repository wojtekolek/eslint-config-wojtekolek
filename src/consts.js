const STATE = {
  off: 0,
  warning: 1,
  error: 2,
};

const JS_EXTENSIONS = [".js", ".jsx", ".mjs"];
const TS_EXTENSIONS = [".ts", ".tsx", ".d.ts", ".cts", ".mts"];

const JS_PATTERNS = ["**/*.js", "**/*.jsx"];
const TS_PATTERNS = ["**/*.ts", "**/*.tsx"];
const TEST_PATTERNS = ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"];

const DEFAULT_FILES = JS_PATTERNS.concat(TS_PATTERNS);

export default {
  ...STATE,
  DEFAULT_FILES,
  JS_EXTENSIONS,
  TS_EXTENSIONS,
  ALL_EXTENSIONS: [...JS_EXTENSIONS, ...TS_EXTENSIONS],
  TEST_PATTERNS,
  JS_PATTERNS,
  TS_PATTERNS,
};
