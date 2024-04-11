export const STATE = {
  off: 0,
  warning: 1,
  error: 2,
};

export const JS_EXTENSIONS = [".js", ".jsx", ".mjs"];
export const TS_EXTENSIONS = [".ts", ".tsx", ".d.ts", ".cts", ".mts"];
export const ALL_EXTENSIONS = JS_EXTENSIONS.concat(TS_EXTENSIONS);

export const JS_PATTERNS = ["**/*.js", "**/*.jsx", "**/*.mjs"];
export const TS_PATTERNS = ["**/*.ts", "**/*.tsx"];
export const TEST_PATTERNS = ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"];
export const ALL_PATERNS = JS_PATTERNS.concat(TS_PATTERNS);
