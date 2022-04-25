import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    // gzip压缩 生产环境生成 .gz 文件
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
      dts: 'src/auto-import.d.ts' // 生成 `auto-import.d.ts` 全局声明
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    //css预处理
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: `@use "@/assets/styles/globalVariable.scss" as *;`
      }
    }
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {}
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }
})
