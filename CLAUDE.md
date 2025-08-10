# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
- `npm run dev` - Start development server with Turbopack (uses `--turbopack` flag)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

### Development Server
The project uses Next.js 15 with Turbopack enabled by default for faster development builds. Access the application at `http://localhost:3000`.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Radix UI primitives with shadcn/ui patterns
- **Icons**: Lucide React + React Icons
- **Animations**: Framer Motion + Embla Carousel
- **Forms**: React Hook Form with Zod validation

### Project Structure

```
captive-web/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                # Root layout with NavbarTwo/FooterTwo
│   ├── page.tsx                  # Homepage with section components
│   ├── contact/                  # Contact page route
│   ├── e-commerce/              # E-commerce service page
│   ├── site-vitrine/            # Showcase website page
│   ├── application-web/         # Web application page
│   └── tarifs/                  # Pricing page
├── components/
│   ├── front/                   # Frontend presentation components
│   │   ├── common/             # Shared components (navbar, footer)
│   │   └── home/               # Homepage sections
│   ├── blocks/                 # Reusable content blocks
│   ├── svg/                    # Custom SVG icon components
│   └── ui/                     # shadcn/ui components
├── hooks/                       # Custom React hooks
├── lib/                        # Utility functions
└── public/images/              # Static assets organized by page/feature
```

### Design System

The project uses a custom "Captive" brand color scheme defined in `app/globals.css`:
- `captive-primary`: Light background color
- `captive-secondary`: Brand purple color
- `captive-secondary-hover`: Darker hover state

### Component Patterns

1. **Layout Structure**: Root layout includes global navigation (NavbarTwo) and footer (FooterTwo)
2. **Page Composition**: Pages are composed of multiple section components imported from `components/front/home/`
3. **UI Components**: Uses shadcn/ui pattern with `cn()` utility for class merging
4. **Styling Approach**: Tailwind CSS with custom color tokens and responsive design patterns

### Key Configuration Files

- `components.json`: shadcn/ui configuration with "new-york" style and path aliases
- `tsconfig.json`: TypeScript configuration with strict mode and path mapping (`@/*`)
- `eslint.config.mjs`: ESLint setup extending Next.js core and TypeScript rules
- `next.config.ts`: Basic Next.js configuration (minimal setup)

### Font Configuration
- Primary font: Poppins (Google Fonts) with weights 100-900
- Language: French (`lang="fr"` in root HTML)

### Asset Organization
Images are organized in `public/images/` by feature:
- `home/` - Homepage assets
- `e-commerce/` - E-commerce service assets
- `site-vitrine/` - Showcase website assets
- `testimonials/` - Client logos and testimonials

### Service Pages
The site includes dedicated pages for different service offerings:
- E-commerce solutions
- Showcase websites (site-vitrine)
- Web applications
- Pricing information

When working with this codebase, follow the established patterns for component organization, use the custom Captive brand colors, and maintain the French language context throughout the application.