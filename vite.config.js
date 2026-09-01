import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk sizes and splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': []
        }
      }
    },
    // Improve minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    // CSS splitting
    cssCodeSplit: true,
    // Source maps only for production debugging
    sourcemap: false,
    // Chunk size warnings
    chunkSizeWarningLimit: 600
  },
  // Optimization hints
  ssr: false
})
