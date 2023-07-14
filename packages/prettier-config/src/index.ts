// https://prettier.io/docs/en/options.html
const config =  {
  // 每一行代码最大长度
  printWidth: 500,
  // 指定每个缩进级别的空格数
  tabWidth: 2,
  // 是否使用制表符缩进
  useTabs: false,
  // 结尾需要分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 结尾需要逗号
  trailingComma: "none",
  // 对象和括号之间是否需要空格
  bracketSpacing: true,
  // html, vue, jsx 中每个属性占一行
  singleAttributePerLine: false,
  // 格式化嵌入的内容
  embeddedLanguageFormatting: "auto",
  // 对象的 key 仅在必要时用引号
  quoteProps: "as-needed",
  // 将多行html标签放在最后一行末尾。而不是重开一行。这里关闭，希望重开一行。
  bracketSameLine: false,
  // vue 文件中的 script 和 style 内不用缩进
  vueIndentScriptAndStyle: true,
  // 在JSX中使用单引号代替双引号。
  jsxSingleQuote: false,
  // 根据显示样式决定 html 要不要折行, 默认css
  htmlWhitespaceSensitivity: "css",
  // 箭头函数参数周围包含括号
  arrowParens: "avoid",
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 是否换行
  proseWrap: "never",
  // 换行符，linux和macos中为'lf'，window中为'crlf'
  endOfLine: "auto",
  // endOfLine: process.platform === "win32" ? "crlf" : "lf",
  // 插件
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-packagejson",
  ],
};

export default config;
