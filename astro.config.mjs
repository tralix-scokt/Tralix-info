import { defineConfig } from 'astro/config';

// Set `site` to your real domain (also update site.url in src/config/site.ts).
export default defineConfig({
  site: 'https://your-domain.example',
  compressHTML: true,
  build: { inlineStylesheets: 'auto' },
  // Allows the Arena live preview host while developing; harmless in production (static output).
  server: { host: true, allowedHosts: true },
  vite: {
    server: { allowedHosts: true },
    preview: { allowedHosts: true },
  },
});
