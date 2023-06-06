
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    './basic',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  }
};
