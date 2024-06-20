import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { i18nDetector } from 'vite-plugin-i18n-detector'
import path from 'path'

const support_paths = [
  'components',
  'containers',
  'commons',
  'constants',
  'context',
  'decorators',
  'graphql',
  'hooks',
  'layouts',
  'locales',
  'models',
  'styles',
  'themes',
  'routers',
  'app',
  'contexts',
]
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    i18nDetector({
      localesPaths: ['./src/locales/messages'],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (
            id.includes('react-router-dom') ||
            id.includes('@remix-run') ||
            id.includes('react-router')
          ) {
            return '@react-router'
          }
          if (id.includes('antd')) {
            return 'antd'
          }
          if (id.includes('echarts')) {
            return 'echarts'
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      ...support_paths.reduce((a, b) => {
        return {
          ...a,
          [`@${b}`]: path.resolve(__dirname, `./src/${b}`),
        }
      }, {}),
    },
  },
})
