# WorkLoad HQ

Premium, mobile-first agency website built with Next.js App Router. The UI leans into soft glass panels, sage-toned gradients, and conversion-focused layout.

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

## UI Patterns

### Persistent Active Cards

Card groups (stats, services, process, featured work, testimonials, etc.) use a shared pattern:

- Click a card to persist its "active" visual state.
- Clicking outside clears the active card.
- Only one card is active at a time within each group.

### Project Media Framing

Project tiles include a blurred background layer and a contained image so wide screenshots still feel full-bleed within the card, plus a phone overlay for depth.

## Styling Notes

- Typography is loaded in `app/globals.css`.
- Body background uses layered radial gradients for the soft sage atmosphere.
- Neutral text uses stone palette for contrast; emerald tones are used as accents.

## Images

Place project images in `public/images` and keep filenames aligned to the `projects` array:

- `public/images/portfolio-booking-desktop.jpg`
- `public/images/portfolio-booking-phone.jpg`
- `public/images/portfolio-retail-desktop.jpg`
- `public/images/portfolio-retail-phone.jpg`
- `public/images/portfolio-salon-desktop.jpg`
- `public/images/portfolio-salon-phone.jpg`
- `public/images/portfolio-logistics-desktop.jpg`
- `public/images/portfolio-logistics-phone.jpg`

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

## Deployment

This project is a standard Next.js build:

1. `npm install`
2. `npm run build`
3. `npm run start`

Deploy to any platform

## Customization Tips

- Update hero copy in `app/page.tsx`.
- Adjust the sage theme in `app/globals.css`.
- Extend Services content in `app/services/page.tsx`.
- Add or remove projects by editing `projects` in `app/portfolio/page.tsx`.
