import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve('src/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-router'],
      output: {
        globals: {
          "vue": 'Vue',
          "vue-router": "VueRouter"
        },
      },
    },
  }
})
