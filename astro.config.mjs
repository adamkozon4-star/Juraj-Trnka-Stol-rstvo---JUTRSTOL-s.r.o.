// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jutrstol.sk', // hlavná doména vo Verceli (www presmeruje sem)
  trailingSlash: 'ignore',
  // Web je čisto statický. Odosielanie formulára rieši samostatná Vercel funkcia api/dopyt.js.
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
