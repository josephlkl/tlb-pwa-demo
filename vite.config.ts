import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { writeFileSync } from 'node:fs';

const BASE_PATH = '/assets/product-app/';

export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    {
      name: 'generate-manifest',
      configResolved() {
        const manifest = {
          name: 'TLB Product Guide',
          short_name: 'TLB Guide',
          description: 'A marketing PWA for browsing TLB insurance solution information.',
          start_url: `${BASE_PATH}app.html`,
          scope: BASE_PATH,
          display: 'standalone',
          background_color: '#f6f1e8',
          theme_color: '#0f4c81',
          orientation: 'portrait-primary',
          icons: [
            {
              src: `${BASE_PATH}icons/icon-192.svg`,
              sizes: '192x192',
              type: 'image/svg+xml',
              purpose: 'any'
            },
            {
              src: `${BASE_PATH}icons/icon-512.svg`,
              sizes: '512x512',
              type: 'image/svg+xml',
              purpose: 'any'
            }
          ]
        };
        writeFileSync(
          resolve(__dirname, 'public/manifest.webmanifest'),
          JSON.stringify(manifest, null, 2)
        );
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        landing: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app.html')
      }
    }
  }
});
