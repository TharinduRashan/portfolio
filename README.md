# Tharindu Rashan — Personal Portfolio

A responsive, Apple-inspired personal portfolio built with Next.js, React, TypeScript and custom CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Create a GitHub repository and push this project.
2. Import the repository at https://vercel.com/new.
3. Keep the framework preset as Next.js and deploy.
4. Add your custom domain in Vercel project settings when ready.

## Personalise before publishing

Search `app/page.tsx` and update:
- The email address (`hello@tharindurashan.com`) to an address you actually use.
- The LinkedIn URL to your profile.
- Project descriptions, links, and statuses to reflect the current state of each project.
- The résumé link by adding `Tharindu-Rashan-CV.pdf` to `public/`.
- The skills list so it only includes technologies you can comfortably discuss.

Also review the metadata domain in `app/layout.tsx` if you choose a different domain.

## Notes

- No database or environment variables are required.
- Theme toggle and mobile navigation are included.
- Project visuals are CSS illustrations, so no image assets are required.
