import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/b8artstudios-react",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
