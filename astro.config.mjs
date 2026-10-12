// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// DEMO=1 construiește varianta pentru GitHub Pages, care stă într-un subdirector.
const demo = process.env.DEMO === '1';

// https://astro.build/config
export default defineConfig({
  site: demo ? 'https://rtr-tech-solutions.github.io' : 'https://mln-trans.ro',
  base: demo ? '/transport-olanda-demo' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
