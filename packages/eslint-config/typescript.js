module.exports = {
  extends: [
    "./basic",
    // eslint-import-resolver-typescript---import校验对typescript的支持,是eslint-plugin-import插件的补充
    "plugin:import/typescript",
  ],
  settings: {
    // eslint-import-resolver-typescript
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};
