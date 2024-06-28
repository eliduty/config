# @eliduty/eslint-config

![npm](https://img.shields.io/npm/dt/@eliduty/eslint-config) ![npm](https://img.shields.io/npm/v/@eliduty/eslint-config)

Flat ESLint 配置，支持JavaScript、TypeScript、Vue2、Vue3、Prettier。

## 特性

- Flat ESLint config
- 使用Prettier作为代码格式化工具
- 支持JavaScript、TypeScript、Vue2、Vue3

## 安装

```shell
npm install -D @eliduty/eslint-config
// 或
yarn add -D @eliduty/eslint-config
// 或
pnpm install -D @eliduty/eslint-config
```

Require Node.js >= 18.18, and ESLint >= 8.56.0.

## 使用

```js
// eslint.config.js
import { config } from '@sxzz/eslint-config'
export default config()
```

然后执行以下命令：

``` shell
pnpm pkg set scripts.lint:format="eslint --cache --fix"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:format":"eslint --cache --fix"
  }
}
```
