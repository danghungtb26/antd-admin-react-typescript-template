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
          const pathSource = id.replace(__dirname, '')
          // creating a chunk to react routes deps. Reducing the vendor chunk size
          if (
            pathSource.includes('react') ||
            pathSource.includes('react-router-dom') ||
            pathSource.includes('@remix-run') ||
            pathSource.includes('react-router')
          ) {
            return '@react-router'
          }
          if (pathSource.includes('react')) {
            return 'react'
          }
          if (pathSource.includes('antd')) {
            return 'antd'
          }
          if (pathSource.includes('echarts')) {
            return 'echarts'
          }
          if (id.includes('lodash')) {
            return 'lodash'
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
