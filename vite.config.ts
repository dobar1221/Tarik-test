import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Tarik-test/', // <-- ADD THIS LINE!
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
