import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' funciona en Vercel y en GitHub Pages (incluso en subcarpetas).
export default defineConfig({ base: './', plugins: [react()] })
