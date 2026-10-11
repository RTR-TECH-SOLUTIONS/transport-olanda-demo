// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/transport-olanda-demo',
  vite: {
    plugins: [tailwindcss()],
  },
});
