import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vountdown',
      fileName: (format: string) => `vountdown.${format}.js`,
    },
    rollupOptions: {
      /**
       * DESC:
       * make sure to externalize deps that shouldn't be bundled
       * into your library
       */
      external: ['vue'],
      output: {
        /**
         * DESC:
         * Provide global variables to use in the UMD build
         * for externalized deps
         */
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  }
})
