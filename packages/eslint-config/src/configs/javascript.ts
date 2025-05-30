import type { Linter } from 'eslint';
import globals from 'globals';
import { isInEditor } from '../env';
import { pluginUnusedImports } from '../plugins';

export const restrictedSyntaxJs = ['LabeledStatement', 'WithStatement'];

export const javascript: Linter.Config[] = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      },
      sourceType: 'module'
    },
    plugins: {
      'unused-imports': pluginUnusedImports
    },
    rules: {
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'constructor-super': 'error',
      'dot-notation': 'warn',
      eqeqeq: ['error', 'smart'],
      'for-direction': 'error',
      'getter-return': 'error',
      'no-alert': 'warn',
      'no-async-promise-executor': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'error',
      'no-debugger': 'warn',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': ['warn', { commentPattern: String.raw`break[\s\w]*omitted` }],
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-import-assign': 'error',
      'no-inner-declarations': 'error',
      'no-invalid-regexp': 'error',
      'no-irregular-whitespace': 'error',
      'no-lonely-if': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multi-str': 'error',
      'no-new-symbol': 'error',
      'no-nonoctal-decimal-escape': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'error',
      'no-restricted-syntax': ['error', ...restrictedSyntaxJs],
      'no-self-assign': 'error',
      'no-setter-return': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'error',
      'no-unreachable': 'error',
      'no-unsafe-finally': 'error',

      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }
      ],
      'no-unused-labels': 'error',
      'no-unused-vars': 'off',
      'no-useless-backreference': 'error',
      'no-useless-catch': 'error',
      'no-useless-escape': 'error',
      'no-void': 'error',
      'no-with': 'error',
      'object-shorthand': ['error', 'always', { avoidQuotes: true, ignoreConstructors: false }],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-const': ['warn', { destructuring: 'all', ignoreReadBeforeAssign: true }],
      'prefer-exponentiation-operator': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-await': 'error',
      'require-yield': 'error',
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      ],
      'unicode-bom': ['error', 'never'],
      'unused-imports/no-unused-imports': isInEditor ? 'off' : 'error',
      'unused-imports/no-unused-vars': ['error', { args: 'after-used', ignoreRestSiblings: true }],
      'use-isnan': ['error', { enforceForIndexOf: true, enforceForSwitchCase: true }],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'vars-on-top': 'error',
      'wrap-iife': ['error', 'any', { functionPrototypeMethods: true }]
    }
  },
  {
    files: ['**/scripts/*', '**/cli.*'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['**/*.{test,spec}.js?(x)'],
    rules: {
      'no-unused-expressions': 'off'
    }
  }
];
