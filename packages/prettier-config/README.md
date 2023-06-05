# @eliduty/prettier-config

![npm](https://img.shields.io/npm/dt/@eliduty/prettier-config) ![npm](https://img.shields.io/npm/v/@eliduty/prettier-config)

Prettier 配置。

## 安装

```shell
npm install -D prettier @eliduty/prettier-config
// 或
yarn add -D prettier @eliduty/prettier-config
// 或
pnpm install -D prettier @eliduty/prettier-config
```

## 使用

- 【推荐】在.prettierrc.js中使用

```js
module.exports = {
  ...require("@eliduty/prettier-config"),
  // ...Other override configuration
};
```

- 在package.json中使用

```json
{
  "prettier": "@eliduty/prettier-config"
    // ...other config
}
```

- 在任何支持的扩展配置中使用，例如：.prettierrc.json

```text
"@eliduty/prettier-config"
```
