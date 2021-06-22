const STATE = {
  off: 0,
  warning: 1,
  error: 2
}

const JS_EXTENSIONS = ['.js', '.jsx']
const TS_EXTENSIONS = ['.ts', '.tsx', '.d.ts']

const JS_PATTERNS = ['*.js', '*.jsx']
const TS_PATTERNS = ['*.ts', '*.tsx']
const TEST_PATTERNS = ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)']

module.exports = {
  ...STATE,
  JS_EXTENSIONS,
  TS_EXTENSIONS,
  ALL_EXTENSIONS: [...JS_EXTENSIONS, ...TS_EXTENSIONS],
  TEST_PATTERNS,
  JS_PATTERNS,
  TS_PATTERNS
}
