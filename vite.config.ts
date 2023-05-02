import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      routes: `${path.resolve(__dirname, './src/routes/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      containers: `${path.resolve(__dirname, './src/containers/')}`,
      layout: `${path.resolve(__dirname, './src/layout/')}`,
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      config: `${path.resolve(__dirname, './src/config/')}`
    }
  },
  css: {
    modules: {
      LocalsConvention: 'camelCase'
    }
  }
})
