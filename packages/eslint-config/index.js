module.exports = {
  extends: [
    require.resolve('./basic'),
     // 用于关闭eslint中的所有格式化配置，全部在.prettierrc中进行格式化配置
     "plugin:prettier/recommended",
  ],
  rules: {
    // 关闭eslint可能与prettier发生冲突的代码格式化规则
    "prettier/prettier": [
      "off",
          {
            singleQuote: true,
            trailingComma: "none",
            bracketSpacing: true,
            jsxBracketSameLine: true,
            sortAttributes: true,
            "key-spacing": false,
          },
        ],
  }
}
