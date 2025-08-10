# Next.js Minimal App

Lean, accessible, responsive baseline. No extra deps; Tailwind utilities only; Server Components by default.

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — run production server
- `npm run typecheck` — TypeScript check (no emit)
- `npm run lint` — ESLint via `next lint`
- `npm run clean` — remove `.next` and `.vercel`
- `npm run check:unused-public` — list unreferenced files in `/public`

## Minimalism Rules
- No new dependencies without explicit approval.
- Prefer Server Components; use Client Components only for interactivity.
- Tailwind utilities in JSX; keep `globals.css` for tokens/resets.
- Semantic HTML and accessible focus states.

## Structure
```
src/app/*          # App Router
public/*           # Static assets (keep only what you use)
```

