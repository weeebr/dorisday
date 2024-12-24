// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  server: {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  },
});
