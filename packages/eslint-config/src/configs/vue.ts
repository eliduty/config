import type { Linter } from 'eslint';
import { getPackageInfoSync } from 'local-pkg';
import process from 'node:process';
import { GLOB_VUE } from '../globs';
import { parserVue, pluginVue, tseslint } from '../plugins';
import { typescriptCore } from './typescript';

export function getVueVersion() {
  const pkg = getPackageInfoSync('vue', { paths: [process.cwd()] });
  if (pkg && typeof pkg.version === 'string' && !Number.isNaN(+pkg.version[0])) {
    return +pkg.version[0];
  }
  return 3;
}
const isVue3 = getVueVersion() === 3;

export const reactivityTransform: Linter.Config[] = [
  {
    // languageOptions: {
    //   globals: {
    //     $: 'readonly',
    //     $$: 'readonly',
    //     $computed: 'readonly',
    //     $customRef: 'readonly',
    //     $ref: 'readonly',
    //     $shallowRef: 'readonly',
    //     $toRef: 'readonly',
    //   },
    // },
    plugins: {
      vue: pluginVue
    },
    rules: {
      'vue/no-setup-props-reactivity-loss': 'off'
    }
  }
];

const vueCustomRules: Linter.RulesRecord = {
  'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
  'vue/eqeqeq': ['error', 'smart'],
  'vue/max-attributes-per-line': 'off',
  'vue/singleline-html-element-content-newline': 'off',
  'vue/multi-word-component-names': 'off',
  'vue/no-constant-condition': 'warn',
  'vue/no-empty-pattern': 'error',
  'vue/no-loss-of-precision': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/require-default-prop': 'off',
  'vue/html-self-closing': 'off',
  'vue/object-shorthand': [
    'error',
    'always',
    {
      avoidQuotes: true,
      ignoreConstructors: false
    }
  ],
  'vue/one-component-per-file': 'off',
  'vue/padding-line-between-blocks': ['error', 'always'],
  'vue/prefer-template': 'error',
  'vue/require-prop-types': 'off'
};

const vue3Rules: Linter.RulesRecord = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs['flat/essential'].rules,
  ...pluginVue.configs['flat/strongly-recommended'].rules,
  ...pluginVue.configs['flat/recommended'].rules
};

const vue2Rules: Linter.RulesRecord = {
  ...pluginVue.configs.base.rules,
  ...pluginVue.configs.essential.rules,
  ...pluginVue.configs['strongly-recommended'].rules,
  ...pluginVue.configs.recommended.rules
};

export const vue: Linter.Config[] = [
  ...(tseslint.config({
    extends: typescriptCore as any[],
    files: [GLOB_VUE]
  }) as any),
  {
    files: [GLOB_VUE],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: ['.vue'],
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      vue: pluginVue
    },
    processor: pluginVue.processors['.vue'],
    rules: {
      ...(isVue3 ? vue3Rules : vue2Rules),
      ...vueCustomRules
    }
  },
  ...reactivityTransform
];
