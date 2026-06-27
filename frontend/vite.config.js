import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Importa a biblioteca de caminhos do Node

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Define que o caractere '@' aponta direto para a sua pasta 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})
