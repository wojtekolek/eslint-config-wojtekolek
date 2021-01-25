const STATE = {
  off: 0,
  warning: 1,
  error: 2
}

const JS_EXTENSIONS = ['.js', '.jsx']
const TS_EXTENSIONS = ['.ts', '.tsx', '.d.ts']

module.exports = {
  ...STATE,
  JS_EXTENSIONS,
  TS_EXTENSIONS,
  ALL_EXTENSIONS: [...JS_EXTENSIONS, ...TS_EXTENSIONS]
}
