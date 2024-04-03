module.exports = {
  extends: [
    require.resolve('./basic'),
    // eslint-import-resolver-typescript---import校验对typescript的支持,是eslint-plugin-import插件的补充
    // "plugin:import/typescript",
    '@vue/eslint-config-typescript/recommended'
  ],
  settings: {
    // eslint-import-resolver-typescript
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  rules: {
    // 'no-undef':"off",
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};
