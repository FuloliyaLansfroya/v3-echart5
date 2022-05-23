<p align="center">
    <h3 align="center">v3-chart5</h3>
    <br>
    <!-- <p align="center">
        <a href="https://travis-ci.org/vueblocks/ve-charts"><img src="https://travis-ci.org/vueblocks/ve-charts.svg?branch=master"></a>
        <a href="https://www.npmjs.com/package/ve-charts"><img src="https://img.shields.io/npm/v/ve-charts.svg?maxAge=2592000"></a>
        <a href="https://www.npmjs.com/package/ve-charts"><img src="https://img.shields.io/npm/dt/ve-charts.svg"></a>
        <a href="https://github.com/vueblocks/ve-charts/stargazers"><img src="https://img.shields.io/github/stars/vueblocks/ve-charts.svg"></a>
        <a href="https://raw.githubusercontent.com/vueblocks/ve-charts/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
    </p> -->
    <p align="center">
       ECharts 5.x for Vue.js 3.x.<br>
    </p>
</p>

> `v3-chart5` 是基于 `Vue3.x` 与 `ECharts5.x` 构建封装的组件库，用以满足低代码的可视化平台的搭建。`v3-chart5` 生成一个 ECharts 图表时，用户只需关心 **数据** 与 **配置项**，甚至无需配置项，即可生成一个默认的图表。
## 安装

``` bash
npm i v3-chart5 -S
```

## 使用

安装完成后，即可使用 `import` 或 `require` 使用。

```js
import { createApp } from 'vue'
import {LineGraph} from 'v3-echart5'
import App from './App.vue'
const app = createApp(App)
app.component(LineGraph.name, LineGraph)
app.mount('#app')
```

## 文档

| 服务 | 地址 |
| :--: | :--: |
| GitHub Page | [https://github.com/FuloliyaLansfroya/v3-echart5](https://github.com/FuloliyaLansfroya/v3-echart5) |
| 文档 | [https://fuloliyalansfroya.github.io/v3-echart5-page/](https://fuloliyalansfroya.github.io/v3-echart5-page/) |

