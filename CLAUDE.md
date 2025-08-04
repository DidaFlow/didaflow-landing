# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DidaFlow Landing is a static website project for an EdTech platform. The project is designed as a vanilla HTML/CSS/JavaScript landing page without any build tools or package managers.

## Repository Structure

This is a minimal static website repository:
- `README.md` - Project documentation in Italian
- `LICENSE` - GNU GPL v3 license
- `index.html` - Main landing page
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore rules
- `assets/` - Static assets directory (optional, for future organization)

## Development Approach

### Technology Stack
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Grid/Flexbox
- **Vanilla JavaScript** - No frameworks or libraries
- **Google Fonts** - Inter typography

### Design System
- Primary Blue: `#3b82f6`
- Secondary Cyan: `#06b6d4`
- Dark Background: `#0f172a`
- Text Colors: `#ffffff` / `#94a3b8`
- Font: Inter (Google Fonts) with weights 300, 400, 500, 600, 700

### Key Features to Implement
- Modern responsive design
- Fluid animations (CSS only)
- Early access email form
- Performance optimized (vanilla JS)
- Mobile-first approach

## Development Workflow

Since this is a static site with no build process:
1. Edit files directly
2. Test by opening `index.html` in browser
3. No compilation or build steps required

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