module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    // eslint 的官方推荐配置
    "eslint:recommended",
    // eslint-plugin-import---对import的导入进行检查
    "plugin:import/recommended",
    // unicorn的推荐配置
    "plugin:unicorn/recommended",
    // 对promise的推荐配置
    "plugin:promise/recommended",
    // 对node的提示
    "plugin:n/recommended",
    // 对eslint注释的提示
    "plugin:eslint-comments/recommended",
    // 对json的提示
    "plugin:jsonc/recommended-with-jsonc",
    // 用于关闭eslint中的所有格式化配置，全部在.prettierrc中进行格式化配置
    "plugin:prettier/recommended",
  ],
  plugins: ["html", "import", "unicorn", "unused-imports"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prefer-const": 0,
    "no-empty-function": 1,
    camelcase: ["warn", { properties: "never" }],
    quotes: ["warn", "single"],
    semi: "warn",
    // 关闭eslint可能与prettier发生冲突的代码格式化规则
    "prettier/prettier": [
      "off",
      {
        singleQuote: false,
        trailingComma: "none",
        bracketSpacing: true,
        jsxBracketSameLine: true,
        sortAttributes: true,
        "key-spacing": false,
      },
    ],
  },
  ignorePatterns: [
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    // ignore for in lint-staged
    "*.css",
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",
    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",
    // force exclude
    ".vitepress/cache",
  ],
};
