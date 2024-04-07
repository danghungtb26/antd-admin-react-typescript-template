import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'

const support_paths = [
  'components',
  'containers',
  'commons',
  'constants',
  'contexts',
  'decorators',
  'graphql',
  'hooks',
  'layouts',
  'locales',
  'models',
  'styles',
  'themes',
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
