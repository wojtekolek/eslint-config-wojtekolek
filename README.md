# eslint-config-wojtekolek

## Instalation

``
npm i --save-dev @wojtekolek/eslint-config
``

## Usage
Simply add below code to your `.eslintrc` file.

``
{
    "extends": "@wojtekolek/eslint-config"
}
``

## TypeScript
All you need to do is make sure that you have installed following dependencies:
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [typescript](https://www.npmjs.com/package/typescript)

## Using with Visual Studio Code
If you are using VSC you may want a fully supported flow with eslint and prettier which will be triggered before saving a file. To achieve this first install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions for VSC. Next, add the following packages to your project `eslint` and `prettier-eslint` with the below command.

``
npm i --save-dev eslint prettier-eslint
``

The final step is to add below config to your `settings.json` file.

```
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "autoFix": true,
      "language": "typescript"
    },
    {
      "autoFix": true,
      "language": "typescriptreact"
    }
  ],
```
