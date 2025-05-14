import type { Linter } from 'eslint';
import { configPrettier, pluginPrettier } from '../plugins';

const prettierConflictRules = { ...configPrettier.rules };
delete prettierConflictRules['vue/html-self-closing'];

export const prettier: Linter.Config[] = [
  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...prettierConflictRules,
      ...pluginPrettier.configs.recommended.rules,
      'prettier/prettier': [
        'off',
        {
          singleQuote: true,
          trailingComma: 'none',
          bracketSpacing: true,
          jsxBracketSameLine: true,
          sortAttributes: true,
          'key-spacing': false,
          endOfLine: 'auto'
        }
      ]
    }
  }
];
