# WorkLoad HQ

Premium, mobile-first agency portfolio website built with Next.js App Router.

## Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- lucide-react icons

## Project Structure

- `app/layout.tsx` - Root layout and global UI composition.
- `app/page.tsx` - Home page (hero, stats, services, process, featured work, testimonials, CTA).
- `app/portfolio/page.tsx` - Portfolio page and source-of-truth project data.
- `app/services/page.tsx` - Dedicated Services page (home services + expanded detail).
- `app/contact/page.tsx` - Contact page.
- `components/Navbar.tsx` - Global navigation.
- `components/Footer.tsx` - Global footer.
- `app/globals.css` - Global styles, background gradients, and font setup.
- `public/images/*` - Project imagery and UI previews.

## Routes

- `/` Home
- `/portfolio` Portfolio
- `/services` Services
- `/contact` Contact

## Content Sources

### Projects

Projects live in `app/portfolio/page.tsx` and are exported as `projects`.

- `featured: true` projects render on the Home "Selected Work" section.
- `featured: false` projects remain only in the Portfolio page.

### Services

Home services live in `app/page.tsx`, and the Services page (`app/services/page.tsx`) extends the same themes with deeper detail sections (Deliverables + Engagements).

## Scripts

```bash
npm run dev    # Start local dev server
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.