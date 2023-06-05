module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
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
  ],
  plugins: ["html", "unicorn", "unused-imports"],
  rules: {},
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
