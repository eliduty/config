# @eliduty/stylelint-config

![npm](https://img.shields.io/npm/dt/@eliduty/stylelint-config) ![npm](https://img.shields.io/npm/v/@eliduty/stylelint-config)

stylelint 配置。

## 安装

```shell
npm install -D stylelint @eliduty/stylelint-config
// 或
yarn add -D stylelint @eliduty/stylelint-config
// 或
pnpm install -D stylelint @eliduty/stylelint-config
```

## 基本使用

- 在.stylelintrc.js中添加如下配置：

```js
{
  "extends": ["@eliduty/stylelint-config"]
}
```

然后执行以下命令：

``` shell
pnpm pkg set scripts.lint:style="stylelint --fix **/src/**/*.css"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:style":"stylelint --fix **/src/**/*.css"
  }
}
```

注意：以上配置只支持对css文件的检测

## 进阶用法

- 支持vue、html、htm、scss、less的使用

```shell
npm install -D stylelint postcss-html postcss-less postcss-scss @eliduty/stylelint-config
// 或
yarn add -D stylelint postcss-html postcss-less postcss-scss @eliduty/stylelint-config
// 或
pnpm install -D stylelint postcss-html postcss-less postcss-scss @eliduty/stylelint-config

```

更新package.json scripts 检测命令

``` shell
pnpm pkg set scripts.lint:style="stylelint --fix **/src/**/*.{vue,htm,html,css,less,scss}"
```

或者在package.json的scripts中添加如下配置：

```json
{
  "scripts":{
    "lint:style":"stylelint --fix **/src/**/*.{vue,htm,html,css,less,scss}"
  }
}
```

本项目项目已经集成了 `postcss-html`、`postcss-scss`、`postcss-less`的配置，无需在项目中配置。

如项目中没有使用scss、less可不安装`postcss-scss`、`postcss-less`,并从scripts的检测命令中移除对应的文件后缀即可。
