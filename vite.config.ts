import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import eslint from 'vite-plugin-eslint'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const _dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  resolve:{
    alias:{
      '@' : resolve(_dirname, './src')
    },
  },
  plugins: [
    solidPlugin(),
    eslint({
      include: 'src/**/*.(ts|js|tsx|jsx)',
      failOnError: true,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'es5',
  },
})
