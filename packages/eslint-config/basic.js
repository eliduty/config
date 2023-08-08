module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    // eslint 的官方推荐配置
    'eslint:recommended',
    // eslint-plugin-import---对import的导入进行检查
    // "plugin:import/recommended",
    // unicorn的推荐配置
    // "plugin:unicorn/recommended",
    // 对promise的推荐配置
    'plugin:promise/recommended',
    // 对node的提示
    // "plugin:n/recommended",
    // 对eslint注释的提示
    'plugin:eslint-comments/recommended',
    // 对json的提示
    'plugin:jsonc/recommended-with-jsonc'
  ],
  plugins: ['html', /* "import", "unicorn", */ 'unused-imports'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'prefer-const': 0,
    'no-empty-function': 1,
    camelcase: ['warn', { properties: 'never' }],
    quotes: ['warn', 'single'],
    semi: 'warn',
    // "unicorn/prevent-abbreviations": [
    //   "error",
    //   {
    //     replacements: {
    //       cmd: false,
    //       str: false,
    //       arr: false,
    //       res: false,
    //       req: false,
    //       opt: false,
    //       env: false,
    //       dev: false,
    //       pro: false,
    //       prod: false,
    //       props: false,
    //       conf: false,
    //       msg: false,
    //       params: false,
    //       attr: false,
    //       temp: false,
    //       tmp:false,
    //       func: false,
    //       val: false,
    //       obj: false,
    //       i: false,
    //       j: false,
    //       e:false,
    //       ref: false,
    //       arg: false,
    //       el: false,
    //       err: false,
    //       fn: false,
    //       pkg:false
    //     },
    //   },
    // ],

    // "unicorn/no-null": "off",
    // "unicorn/no-empty-file": "warn",
    // "unicorn/prefer-export-from": "off",
    // "unicorn/filename-case": "off",
    // "unicorn/prefer-top-level-await": "off",
    // "unicorn/no-array-for-each": "off",
    // "unicorn/switch-case-braces": "off",
    // "unicorn/prefer-string-replace-all":"off",
    // "unicorn/no-lonely-if":"warn",
    // "unicorn/numeric-separators-style": "off",
    // "unicorn/no-negated-condition": "warn",
    // "unicorn/prefer-set-has": "off",
    // "unicorn/no-object-as-default-parameter": "warn",
    // "unicorn/no-new-array": "warn",
    // "unicorn/explicit-length-check": "warn",
    // "unicorn/prefer-string-slice": "warn",
    // "unicorn/relative-url-style": "off",
    // "unicorn/prefer-date-now": "warn",
    // "unicorn/prefer-logical-operator-over-ternary": "warn",
    // "unicorn/prefer-includes": "warn",
    // "unicorn/consistent-function-scoping": "off",
    // "unicorn/prefer-add-event-listener": "off",
    // "unicorn/no-for-loop": "warn",
    // "unicorn/new-for-builtins": "warn",
    // "unicorn/prefer-ternary": "off",
    // "unicorn/prefer-at": "off",
    // "unicorn/prefer-spread": "off",
    // "unicorn/prefer-module": "off",
    // "unicorn/explicit-length-check": "off",
    // "n/no-missing-import": "off",
    // 'n/no-unpublished-import': 'off',
    // "import/no-named-as-default": "off",
    // "import/no-relative-packages": "off",
    // "import/no-named-as-default-member": "off",
    // 'import/namespace': 'off',
    // "import/named": "off",
    // "import/default":"off",

    'promise/always-return': 'off',
    'promise/catch-or-return': 'off'
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    // force exclude
    '.vitepress/cache'
  ]
};
