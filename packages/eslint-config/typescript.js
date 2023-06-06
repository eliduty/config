module.exports = {
  extends: [
    require.resolve('./basic'),
    // eslint-import-resolver-typescript---import校验对typescript的支持,是eslint-plugin-import插件的补充
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  settings: {
    // eslint-import-resolver-typescript
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment":"off",
  },
};
