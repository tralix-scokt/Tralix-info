# Personal Portfolio & Contact Website

Fast, mobile-first, dark-themed portfolio built with [Astro](https://astro.build) (static output, almost no JavaScript, no UI libraries).

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Edit your content (one file)

Almost everything lives in **`src/config/site.ts`**: name, title, bio, phone, WhatsApp, email,
social links, about text, service cards, and active projects.
It contains Tralix Scott's real details; edit the values to update the site.

| To change…            | Do this |
|-----------------------|---------|
| Profile photo         | Replace `src/assets/profile.jpg` (square, ≥ 800×800). It's auto-resized and converted to WebP. |
| Social share image    | Replace `public/og-image.jpg` (1200×630) |
| Favicon               | Edit `public/favicon.svg` |
| Add a social platform | Add a line to `socials` in `site.ts`. Icons: youtube, tiktok, github, instagram, facebook, x, telegram, whatsapp. Other values show a generic link icon. |
| Live domain           | Set `site.url` in `site.ts` (e.g. `https://yourdomain.com`) and add `site` in `astro.config.mjs`. Until then, canonical and share-image tags are left out (they need an absolute URL). |
| Call button           | Set `contact.phone.number` in `site.ts`; the "Call Me" button then appears automatically. |
| Active projects       | Edit `projects.items` in `site.ts`. Leave a project’s `url` empty to show it without a link. |
| "View My Work" link   | `heroButtons.secondary` in `site.ts` (currently the projects section) |
| Colours               | CSS variables at the top of `src/styles/global.css` |

### Phone, WhatsApp, email format
- `phone.number` (optional): international format, e.g. `+2348012345678`; leave empty to hide Call Me
- `whatsapp.number`: digits only, no `+`, e.g. `2348012345678`
- Buttons use `tel:`, `https://wa.me/…` and `mailto:` links, so they open the dialer, the right WhatsApp chat and the mail app.

## Project structure

```
src/
  config/site.ts        ← all your content & settings
  config/icons.ts       ← icon paths
  components/           ← Header, Hero, About, Services, Contact, ContactMethods,
                          Projects, SocialLinks, Footer, Icon
  layouts/BaseLayout.astro   ← <head>, SEO + Open Graph meta
  pages/index.astro     ← page assembly
  scripts/              ← nav.ts, reveal.ts
  styles/global.css     ← design tokens + shared styles
  assets/profile.jpg    ← optimised at build time
public/                 ← favicon, og-image, robots.txt
```

## Deploying
It builds to plain static files (`dist/`). Works on Netlify, Vercel, Cloudflare Pages or GitHub Pages
(build command `npm run build`, output directory `dist`).

## Accessibility notes
Skip link, semantic landmarks, visible focus rings, ≥ 48px touch targets, high-contrast text, and `prefers-reduced-motion` support.
