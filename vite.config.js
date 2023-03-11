import { defineConfig } from 'vite'
import sass from 'sass'
import path from 'path'

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        implementation: sass,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'resources/assets/sass/main.scss')
      },
      output: {
        file: path.resolve(__dirname, 'public/assets/css/main.css'),
        format: 'es'
      }
    }
  }
})
