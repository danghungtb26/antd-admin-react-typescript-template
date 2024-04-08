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
