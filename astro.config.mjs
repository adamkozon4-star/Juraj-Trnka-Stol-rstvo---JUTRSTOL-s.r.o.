// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.jutrstol.sk',
  trailingSlash: 'ignore',
  // Web je statický, len /api/dopyt beží na serveri (Vercel funkcia na odosielanie e-mailov cez Resend)
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
