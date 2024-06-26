import type { Linter } from 'eslint';
import { configPrettier, pluginPrettier } from '../plugins';

const prettierConflictRules = { ...configPrettier.rules };
delete prettierConflictRules['vue/html-self-closing'];

export const prettier: Linter.FlatConfig[] = [
  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': 'warn'
      // "prettier/prettier": [
      //   "off",
      //   {
      //     singleQuote: true,
      //     trailingComma: "none",
      //     bracketSpacing: true,
      //     jsxBracketSameLine: true,
      //     sortAttributes: true,
      //     "key-spacing": false,
      //     endOfLine: "auto",
      //   },
      // ],
    }
  }
];
