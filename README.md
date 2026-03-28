# TLB Product Guide PWA

First-pass scaffold for a marketing-focused progressive web app that presents TLB product information and supports install guidance on iOS and Android.

## Included

- React + Vite TypeScript scaffold
- Multi-page setup with a standalone install landing page at `/`
- Product app entry at `/app.html`
- PWA manifest and service worker registration
- Seed product catalog shaped around current TLB source pages
- Placeholder content sync script for future source ingestion

## Commands

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

To generate the placeholder synced data file:

```bash
npm run sync:products
```

## Notes

- Product images are currently hotlinked to the TLB source domain.
- The install prompt is only available on browsers that support `beforeinstallprompt`.
- iOS install uses Add to Home Screen instructions on the standalone landing page.
