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

## Development Approach

### Technology Stack
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management (useState, useEffect)
- **EmailJS** - Email form integration
- **Google Fonts** - Inter typography

### Design System
- Primary Blue: `bg-blue-500` (Tailwind)
- Secondary Cyan: `bg-cyan-500` (Tailwind)
- Dark Background: `bg-slate-900` (Tailwind)
- Text Colors: `text-white`, `text-slate-300`, `text-slate-400` (Tailwind)
- Font: Inter (Google Fonts) with weights 300, 400, 500, 600, 700

### Key Features
- Modern responsive design with Tailwind CSS
- Fluid animations using Tailwind animations
- Multi-language support (IT, EN, ES, FR)
- Early access email form with EmailJS
- Performance optimized with Next.js
- Mobile-first approach

## Development Workflow

### Local Development
1. `npm install` - Install dependencies
2. `npm run dev` - Start development server
3. `npm run build` - Build for production
4. `npm run start` - Start production server

### File Structure
- Edit React components in `src/app/`
- Translations are embedded in the main component
- Styles use Tailwind CSS classes
- Custom animations defined in `tailwind.config.js`

## Deployment

### Vercel (Configured)
The project is configured for automatic deployment on Vercel:
1. The `vercel.json` file configures static hosting
2. Automatic deployment on every git push
3. Custom domain support available

### Setup Steps:
1. Push code to GitHub repository
2. Connect repository to Vercel dashboard
3. Vercel will automatically detect and deploy

### Other Options:
- **GitHub Pages** - Set Pages to deploy from main branch
- **Netlify** - Connect repository for automatic deployment

## Email Integration

The form should be integrated with one of:
- Mailchimp
- ConvertKit
- EmailJS
- Custom backend

Replace the `handleEmailSubmit()` function in `index.html` with the chosen service integration.

## Content Language

All content is in Italian, targeting Italian-speaking educational institutions.