import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  /**
   * DESC:
   * dependency pre-bundling
   */
  optimizeDeps: {
    exclude: ['vue-demi']
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vountdown',
      fileName: 'index',
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      /**
       * DESC:
       * make sure to externalize deps that shouldn't be bundled
       * into your library
       */
      external: [
        'vue', 
        'vue-demi'
      ],
      output: {
        /**
         * DESC:
         * Provide global variables to use in the UMD build
         * for externalized deps
         */
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        }
      }
    }
  },
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'happy-dom',
    deps: {
      inline: [
        '@vue', 
        'vue-demi'
      ]
    },
    coverage: {
      reporter: [
        'text', 
        'text-summary', 
        'lcov'
      ]
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
