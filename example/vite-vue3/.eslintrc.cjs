module.exports = {
  root: true,
  extends: ['@eliduty/eslint-config/vue'],
  globals: {
    Iconfont: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-template-shadow': 'off',
    'import/no-unresolved': 'off',
    'n/no-unpublished-import': 'off'
  }
};
