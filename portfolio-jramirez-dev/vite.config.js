import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [plugin()],
  base: '/portfolio-jramirez-dev/',
  server: {
    port: 59638,
  },
});
