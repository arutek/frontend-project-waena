import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
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
