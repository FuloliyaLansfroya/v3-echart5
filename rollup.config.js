// 为了保证版本一致，请复制我的 package.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import { terser } from "rollup-plugin-terser"
import alias from '@rollup/plugin-alias'
import path from "path";
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'packages/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'v3-echart5',
    file: 'dist/lib/v3-echart5.js',
    format: 'umd',
  }, {
    name: 'vue3-echarts5',
    file: 'dist/lib/v3-echart5.esm.js',
    format: 'es',
  }],
  plugins: [
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    vue({
      include: /\.vue$/,
    }),
    alias({
      entries: [
        {
          find: '@', // 别名名称，作为依赖项目需要使用项目名
          replacement: path.resolve(__dirname, 'package'), 
          customResolver: resolve({
            extensions: ['.js', '.ts', '.vue', '.sass', '.scss']
          })
        }
      ]
    }),
  ],
}
