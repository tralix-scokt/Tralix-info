import { defineConfig } from 'astro/config';

// When you have a domain, add `site: 'https://yourdomain.com'` here and set site.url in src/config/site.ts.
export default defineConfig({
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  // Allows the Arena live preview host while developing; harmless in production (static output).
  server: { host: true, allowedHosts: true },
  vite: {
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
});
