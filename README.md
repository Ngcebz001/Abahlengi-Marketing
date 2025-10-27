# Abahlengi Group Marketing Site

A production-ready marketing presence for Abahlengi Group, highlighting nationwide palliative and at-home care services. Built with Next.js (App Router), TypeScript and Tailwind CSS with a focus on accessibility, performance and calm visual storytelling.

## Features

- **Brand-ready UI** with Abahlengi’s “Natural Care” palette, Poppins headings and Inter body copy.
- **Light and dark modes** powered by `next-themes`, including accessible focus styles and keyboard navigation.
- **Responsive, animated homepage** featuring hero, services teaser, how-it-works journey, assurance checklist and call-to-action strip.
- **Dedicated services, about, contact, privacy and thank-you pages** with structured content, JSON-LD metadata and SEO-friendly copy.
- **Leaf-inspired visuals and WhatsApp floating action button** to emphasise immediate contact routes.
- **Validated contact form** using React Hook Form + Zod with a server action that hands off to a Nodemailer adapter.
- **SEO enhancements** including canonical metadata, Open Graph/Twitter cards, sitemap and robots generation.
- **Automated testing and formatting** via Vitest, ESLint (flat config) and Prettier for CI-ready quality checks.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open <http://localhost:3000> to view the site. Edits to files inside `src/` trigger fast refresh.

## Useful scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build and generate `sitemap.xml`/`robots.txt`. |
| `npm run start` | Run the production server locally. |
| `npm run lint` | Run ESLint with the Next.js ruleset and Prettier compatibility. |
| `npm run test` | Execute Vitest in single-run mode (includes form validation + a11y smoke tests). |
| `npm run test:watch` | Start Vitest in watch mode. |
| `npm run format` | Check formatting with Prettier. |
| `npm run format:write` | Apply Prettier formatting fixes. |
| `npm run sitemap` | Manually regenerate sitemap and robots files. |

## Environment variables

Copy `.env.example` to `.env.local` and populate with your email transport details for Nodemailer:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| -------- | ------- |
| `EMAIL_HOST` | SMTP host address. |
| `EMAIL_PORT` | SMTP port (e.g. 465 for SSL, 587 for TLS). |
| `EMAIL_USER` | SMTP username or API key. |
| `EMAIL_PASS` | SMTP password. |
| `CONTACT_TO` | Optional override for the recipient address. |

During development the contact form logs submissions to the console instead of sending email.

## Project structure

```
src/
  actions/        # Server actions (contact form submission)
  app/            # App Router routes and shared layout
  components/     # Reusable UI components
  data/           # Shared data + Zod schemas
  lib/            # Utilities (SEO helpers, mailer adapter, classnames)
  __tests__/      # Vitest test suites
public/
  images/         # Optimised SVG brand assets (binary-free for PR compatibility)
```

## Accessibility & performance

- WCAG AA colour contrast verified across light and dark themes.
- Keyboard-friendly navigation, skip-link, focus outlines and semantic structure.
- Framer Motion animations respect reduced motion preferences.
- Lazy loading, responsive design and lightweight assets to help maintain Lighthouse scores (Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95).
- Static illustrations are provided as SVGs so the repository remains free of binary assets required by the review workflow.
- The favicon is rendered dynamically from `src/app/icon.tsx`, ensuring no binary files are committed.

## Deployment

Deploy on Vercel or your preferred platform. Ensure environment variables are configured and run `npm run build` during deployment to generate the sitemap and robots files.
