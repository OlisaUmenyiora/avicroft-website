# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Avicroft is a SaaS marketing website built with Next.js 16, React 19, and TypeScript. The site showcases three software products (Education, E-commerce, Salon) with a bold yellow (#FAD400) and black brand identity.

## Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run lint         # ESLint checks

# Testing
npm run test         # Run Jest unit tests
npm run test:watch   # Jest watch mode
npm run test:e2e     # Playwright E2E tests (uses port 3002)
npm run test:e2e:ui  # Playwright with UI
```

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx           # Homepage
│   ├── products/[slug]/   # Dynamic product pages
│   └── globals.css        # Design tokens & brand styles
├── components/
│   ├── home/              # Hero, ProductCarousel
│   ├── layout/            # Navbar, Footer, MobileMenu
│   └── ui/                # shadcn/ui primitives (button, card, input)
├── lib/
│   ├── constants.ts       # PRODUCTS, NAV_LINKS, SOCIAL_LINKS data
│   ├── utils.ts           # cn() class merge helper
│   └── hooks/useCarousel.ts
└── __tests__/             # Unit tests (mirrors component structure)

e2e/                       # Playwright visual regression tests
```

## Design System

**Reference screenshots:** `public/Screenshot 2026-01-16 at 23.44.05.png` and `public/Screenshot 2026-01-16 at 23.44.53.png` show the target visual design.

**Brand Colors:**
- Primary: `#FAD400` (yellow) - navbar, footer right side, accent buttons
- Secondary: `#000000` (black) - text, dark sections
- Background sections alternate between yellow and black with diagonal transitions

**Key Design Patterns:**
- Hero: Split layout with yellow left (headline + CTAs) and black right (product carousel)
- Product cards: Rounded corners with image, dark header overlay, yellow CTA buttons
- Carousel: Swipeable cards with "Swipe" indicator and yellow arrow navigation
- Footer: Two-tone (gray left with social links/newsletter, yellow right with large logo)
- Typography: Bold headlines, "Built to Grow" in italic, "YOU!" emphasized with squiggle underline

**Utility Classes (globals.css):**
- `.btn-brand` - Yellow background button
- `.btn-outline-dark` - Black outline button
- `.squiggle-underline` - Wavy yellow underline effect
- `.text-brand` - Brand yellow text color

## Test Configuration

- **Jest:** jsdom environment, mocks for next/navigation, next/image, framer-motion
- **Playwright:** Desktop Chrome (1920x1080) + Mobile Safari, 5% visual diff tolerance

## Key Dependencies

- `framer-motion` - Animations (carousel, page transitions)
- `lucide-react` - Icons
- `class-variance-authority` + `tailwind-merge` - Component variant styling
- `@radix-ui/react-slot` - Accessible UI primitives

## Data

Product data, navigation links, and social media links are centralized in `src/lib/constants.ts`. Update this file when modifying products or navigation.
