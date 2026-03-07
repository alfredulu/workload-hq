# WorkLoad HQ

Premium, mobile-first agency website for WorkLoad HQ. The site is designed to feel "expensive minimalist" with subtle glass effects, warm neutral accents, and a focus on business outcomes.

## Features
- Multi-page structure: Home, Portfolio, Contact
- Mobile-first layout with refined typography and spacing
- Glassmorphism panels with soft shadows and rounded corners
- Desktop + phone image overlays for project previews
- Inline SVG icons (no external icon library needed)

## Getting Started
```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Update Project Images
Place your screenshots in `public/images` and keep the filenames below (or update the paths in the code).

Home featured images:
- `public/images/featured-salon-desktop.jpg`
- `public/images/featured-salon-phone.jpg`
- `public/images/featured-booking-desktop.jpg`
- `public/images/featured-booking-phone.jpg`
- `public/images/featured-retail-desktop.jpg`
- `public/images/featured-retail-phone.jpg`

Portfolio images:
- `public/images/portfolio-booking-desktop.jpg`
- `public/images/portfolio-booking-phone.jpg`
- `public/images/portfolio-retail-desktop.jpg`
- `public/images/portfolio-retail-phone.jpg`
- `public/images/portfolio-salon-desktop.jpg`
- `public/images/portfolio-salon-phone.jpg`
- `public/images/portfolio-logistics-desktop.jpg`
- `public/images/portfolio-logistics-phone.jpg`

## Copy Updates
Text content lives in:
- `app/page.tsx`
- `app/portfolio/page.tsx`
- `app/contact/page.tsx`

## Icons
Inline icons are defined in `components/Icons.tsx` and can be reused anywhere without installing packages.
