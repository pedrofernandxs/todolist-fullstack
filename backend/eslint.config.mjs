// eslint.config.mjs
import globals from 'globals';

export default [
  {
    files: ["**/*.js"], // Define os arquivos que o ESLint deve analisar
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // ou "commonjs", se necessário
      globals: {
        ...globals.node, // Inclui as variáveis globais do Node.js
        ...globals.commonjs, // Inclui variáveis comuns do CommonJS
      },
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "windows"],
      quotes: ["error", "single"],
      semi: ["error", "always"],
    },
  },
];
