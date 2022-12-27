const { error, off } = require("./consts");

module.exports = {
  extends: [require.resolve("./react.js"), "plugin:@next/next/recommended"],
  parserOptions: {
    babelOptions: {
      presets: ["next/babel"],
    },
  },
  rules: {
    "@next/next/no-sync-scripts": error,
    "@next/next/no-page-custom-font": error,
  },
  overrides: [
    {
      files: ["./pages/**/*.[jt]s?(x)", "./app/**/*.[jt]s?(x)"],
      rules: {
        "import/no-default-export": off,
      },
    },
  ],
};
