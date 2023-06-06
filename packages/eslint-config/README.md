# @eliduty/eslint-config

![npm](https://img.shields.io/npm/dt/@eliduty/eslint-config) ![npm](https://img.shields.io/npm/v/@eliduty/eslint-config)

Prettier 配置。

## 安装

```shell
npm install -D eslint @eliduty/eslint-config
// 或
yarn add -D eslint @eliduty/eslint-config
// 或
pnpm install -D eslint @eliduty/eslint-config
```

## 使用

 根据项目类型在.eslint.js中添加如下配置

### javascript、node项目

```js
{
  "extends": ["@eliduty/eslint-config"]
}
```

然后执行以下命令：

``` shell
pnpm pkg set scripts.lint:format="eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs}"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:format":"eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs}"
  }
}
```

### TypeScript项目

```js
{
  "extends": ["@eliduty/eslint-config/typescript"]
}
```

然后执行以下命令：

``` shell
pnpm pkg set scripts.lint:format="eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs,ts,tsx,cts,mts}"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:format":"eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs,ts,tsx,cts,mts}"
  }
}
```

### Vue3、TypeScript项目

```js
{
  "extends": ["@eliduty/eslint-config/typescript","@eliduty/eslint-config/vue"]
}
```

然后执行以下命令：

``` shell
pnpm pkg set scripts.lint:format="eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:format":"eslint --cache --fix **/src/**/*.{html,htm,js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}"
  }
}
