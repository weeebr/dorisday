// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
