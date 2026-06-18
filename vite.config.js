import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [plugin()],
  base: process.env.NODE_ENV === 'production' ? '/portfolio-jramirez-dev/' : '/',
  server: {
    port: 5173,
    open: true,
  },
});
