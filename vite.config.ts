import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site at https://devin-dellamano.github.io/.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
