# eslint-config-wojtekolek

A package that provides my personal linter rules but also a prettier configuration.

## Instalation

``
pnpm add -D @wojtekolek/eslint-config
``

or

``
npm i --save-dev @wojtekolek/eslint-config
``

## Usage
For `node` applications, simply add code below to your `.eslintrc` file:

```
{
  "extends": "@wojtekolek/eslint-config"
}

```

To enable prettier just export following line inside `.prettierrc.js`:

```
module.exports = require('@wojtekolek/eslint-config/prettier.config')

```

For `react` application the config will gonna look like this: 
```
{
  "extends": ["@wojtekolek/eslint-config", "@wojtekolek/eslint-config/react"]
}

```

For `react-native` application the config will gonna look like this: 
```
{
  "extends": ["@wojtekolek/eslint-config", "@wojtekolek/eslint-config/react-native"]
}

```

For `Next.js` application the config will gonna look like this: 
```
{
  "extends": ["@wojtekolek/eslint-config", "@wojtekolek/eslint-config/nextjs"]
}

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
