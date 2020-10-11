# wape-ui
- 用于学习 UI 库开发流程的项目

# 基本依赖包

## 安装 webpack 依赖
- npm i -D webpack webpack-cli webpack-dev-server

## 安装 es6 转 es5 依赖 babel
- npm i -D babel-core@6.26.3 babel-loader@7.1.5 babel-preset-env@1.7.0 

## 安装 vue 依赖
- npm i -D vue vue-template-compiler vue-loader

## 安装样式处理依赖 css、scss
- npm i -D style-loader css-loader node-sass sass-loader

## 安装单元测试依赖 jest
- npm i -D jest @vue/test-utils vue-jest babel-jest

## 安装打包辅助依赖（进度显示、删除文件等等）
- npm i -D progress-bar-webpack-plugin rimraf

## 安装 demo 所需要的依赖
- npm i -D html-webpack-plugin url-loader vue-router

# 发布到 npm 流程
- 配置好 package.json 中的 name、version、main（用户 import 时的文件）
- 执行 npm publish 将当前项目版本发布到 npm（需要登录 npm 账号）

# 用户如何使用