# Momentum Fitness

Premium gym and fitness website UI built with Next.js, TypeScript, Tailwind CSS, ShadCN UI, and Framer Motion.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- ShadCN UI
- Framer Motion
- Recharts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

### Marketing
- Home, About, Pricing, Trainers, Contact, Gallery, FAQ, Terms, Privacy

### Dashboards (mock data)
- **Admin:** `/dashboard/admin` — overview, users, memberships, trainers, attendance, financial, analytics
- **Member:** `/dashboard/user` — overview, progress, attendance, booking, profile

## Project Structure

```
app/              → pages and layouts
components/       → reusable UI components
  ui/             → ShadCN primitives
  marketing/      → marketing sections
  dashboard/      → dashboard components
data/             → mock/static data
lib/              → utilities
types/            → TypeScript types
```

## Design

UI follows a premium dark fitness aesthetic with energetic orange accents, matching Google Stitch design system guidelines.
