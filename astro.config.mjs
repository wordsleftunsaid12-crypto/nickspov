import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nickspov.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
