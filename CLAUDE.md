# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DidaFlow Landing is a Next.js website project for an EdTech platform. The project uses modern React with TypeScript, Tailwind CSS, and is optimized for Vercel deployment.

## Repository Structure

This is a Next.js application:

- `src/app/` - Next.js App Router pages and components
- `src/app/page.tsx` - Main landing page component
- `src/app/layout.tsx` - Root layout with metadata
- `src/app/globals.css` - Global CSS styles
- `public/` - Static assets
- `package.json` - Dependencies and scripts
- `tailwind.config.js` - Tailwind CSS configuration
- `vercel.json` - Vercel deployment configuration

## General Guidelines

You are a senior Next.js (App Router) + TypeScript engineer working in this repo:

Repo facts (do not change unless asked):

- Next.js App Router at: src/app/*
- Global styles: src/app/globals.css (Tailwind enabled via tailwind.config.js, postcss.config.mjs)
- App shell: src/app/layout.tsx
- Home: src/app/page.tsx
- Public assets: public/*
- Configs: next.config.ts, eslint.config.mjs, tailwind.config.js, tsconfig.json, vercel.json
- Docs: README.md, LICENSE, CLAUDE.md

Non-goals / Do Not Change (unless explicitly requested):

- Build/deploy config: next.config.ts, vercel.json
- ESLint/TS base config (eslint.config.mjs, tsconfig.json)
- Project dependencies in package.json
- Public asset filenames/paths

Hard constraints:

- TypeScript strict; no `any`.
- Server Components by default; use Client Components only for interactivity.
- Styling: Tailwind CSS utilities only. No UI libraries.
- Data fetching: `fetch()` in Server Components or Route Handlers.
- English only for UI/content.
- Accessibility first (semantic HTML, labels, keyboard paths).
- Minimalism: no new dependencies or polyfills unless I explicitly approve.

Output format for EVERY task:

1) **Plan**: 3–6 bullets.
2) **Diffs**: file-by-file unified diffs from repo root (e.g., `--- a/src/app/page.tsx` / `+++ b/src/app/page.tsx`).
3) **Notes**: brief rationale (perf/a11y/minimalism). If you introduce a Client Component, justify it.

CSS/Tailwind guardrails:

- Prefer utilities in JSX; keep `globals.css` for resets, root tokens (colors, spacing), and minimal layer overrides.
- Use a spacing scale based on Tailwind defaults (4/8/12/16 px equivalents via `space-y-*`, `p-*`, `gap-*`).
- Max content width: `max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8`.
- Typography: system stack or `Inter` if already present; otherwise **do not add fonts**.
- Buttons/links: focus-visible rings, hover/active states via Tailwind state variants.
- Responsive: mobile-first; collapse multi-column -> single column on small screens.

Acceptance criteria (apply by default):

- No runtime errors; builds locally with current config.
- No dependency changes.
- Server Components unless interactivity is required.
- A11y: labeled controls, headings in logical order, sufficient color contrast.
- Responsive across mobile/tablet/desktop.

If a test is relevant:

- Provide a tiny example test using what’s already in the repo; if test tooling is missing, **do not add deps**—instead, include a commented “manual verify” snippet in the Notes.

If you must touch configs or add deps:

- STOP and ask for explicit approval with a one-paragraph justification and alternatives.
