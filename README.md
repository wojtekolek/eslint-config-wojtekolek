# eslint-config-wojtekolek

A package that provides my personal linter rules but also a prettier configuration. (Only ESM)

## Instalation

``
pnpm add -D @wojtekolek/eslint-config
``

or

``
npm i --save-dev @wojtekolek/eslint-config
``

## Usage
For `node` applications, simply add code below to your `eslint.config.mjs` file:

```
import wojtekolekNodeEslintConfig from "@wojtekolek/eslint-config/node";

/** @type {import("eslint").Linter.Config} */
export default [
  ...wojtekolekNodeEslintConfig,
];

```

To enable prettier just export following line inside `prettier.config.mjs`:

```
import wojtekolekPrettierConfig from "@wojtekolek/eslint-config/prettier";

/** @type {import("prettier").Config} */
export default {
  ...wojtekolekPrettierConfig
}

```

For `react` application the config will gonna look like this:
```
import wojtekolekNodeEslintConfig from "@wojtekolek/eslint-config/node";
import wojtekolekReactEslintConfig from "@wojtekolek/eslint-config/react";

/** @type {import("eslint").Linter.Config} */
export default [
  ...wojtekolekNodeEslintConfig,
  ...wojtekolekReactEslintConfig,
];

```

For `react-native` application the config will gonna look like this:
```
import wojtekolekNodeEslintConfig from "@wojtekolek/eslint-config/node";
import wojtekolekReactNativeEslintConfig from "@wojtekolek/eslint-config/react-native";

/** @type {import("eslint").Linter.Config} */
export default [
  ...wojtekolekNodeEslintConfig,
  ...wojtekolekReactNativeEslintConfig,
];

```

For `Next.js` application the config will gonna look like this:
```
import wojtekolekNodeEslintConfig from "@wojtekolek/eslint-config/node";
import wojtekolekNextjsEslintConfig from "@wojtekolek/eslint-config/nextjs";

/** @type {import("eslint").Linter.Config} */
export default [
  ...wojtekolekNodeEslintConfig,
  ...wojtekolekNextjsEslintConfig,
];

```

## TypeScript
All you need to have is the `typescript` installed.

## Using with Visual Studio Code
If you are using VSC you may want a fully supported flow with eslint and prettier which will be triggered before saving a file.
To achieve this first install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for VSC.

The final step is to add below config to your `settings.json` file.

```
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```
