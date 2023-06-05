# @eliduty/tsconfig

![npm](https://img.shields.io/npm/dt/@eliduty/tsconfig) ![npm](https://img.shields.io/npm/v/@eliduty/tsconfig)

TypeScript 项目配置。

## 安装

```shell
npm install -D typescript @eliduty/tsconfig
// 或
yarn add -D typescript @eliduty/tsconfig
// 或
pnpm install -D typescript @eliduty/tsconfig
```

## 使用

在tsconfig中添加如下配置：

- 使用默认配置（同vue配置）

```json
{
  "extends": "@eliduty/tsconfig",
}
```

- Vue项目

```json
{
  "extends": "@eliduty/tsconfig/tsconfig.vue.json",
}
```

- Node项目

```json
{
  "extends": "@eliduty/tsconfig/tsconfig.node.json",
}
```
