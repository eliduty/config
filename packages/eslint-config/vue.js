/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [require.resolve('./basic'), 'plugin:vue/vue3-recommended', require.resolve('./typescript'), '@vue/eslint-config-prettier'],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    // 'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    // 关闭eslint可能与prettier发生冲突的代码格式化规则
    'prettier/prettier': [
      'off',
      {
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        sortAttributes: true,
        'key-spacing': false
      }
    ]
  }
};
