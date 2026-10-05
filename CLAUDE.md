# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

### Development
- `npm run dev` - Start development server with Turbopack (uses `--turbopack` flag)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run postbuild` - Generate sitemap after build (automatically runs after build)
- `npm run lint` - Run ESLint for code quality checks

### Development Server
The project uses Next.js 15 with Turbopack enabled by default for faster development builds. Access the application at `http://localhost:3000`.

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router and React 19
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom design tokens and tw-animate-css
- **UI Components**: Radix UI primitives with shadcn/ui patterns ("new-york" style)
- **Icons**: Lucide React + React Icons
- **Animations**: Framer Motion + Embla Carousel
- **Forms**: React Hook Form with Zod validation and @hookform/resolvers
- **SEO**: next-sitemap for automated sitemap generation

### Project Structure

```
captive-web/
├── app/                           # Next.js App Router pages
│   ├── layout.tsx                # Root layout with NavbarTwo/FooterTwo
│   ├── page.tsx                  # Homepage with section components
│   ├── globals.css               # Global styles with Tailwind and custom Captive colors
│   ├── contact/                  # Contact page route
│   ├── e-commerce/              # E-commerce service page
│   ├── site-vitrine/            # Showcase website page
│   ├── application-web/         # Web application page
│   ├── tarifs/                  # Pricing page
│   ├── conditions-generales-vente/  # Terms of service page
│   └── politique-confidentialite/   # Privacy policy page
├── components/
│   ├── front/                   # Frontend presentation components
│   │   ├── common/             # Shared components (navbar, footer)
│   │   └── home/               # Homepage sections (hero, services, etc.)
│   ├── blocks/                 # Reusable content blocks
│   ├── svg/                    # Custom SVG icon components
│   └── ui/                     # shadcn/ui components
├── hooks/                       # Custom React hooks (use-media-query.tsx)
├── lib/                        # Utility functions (utils.ts with cn() helper)
└── public/images/              # Static assets organized by page/feature
```

### Design System

The project uses a custom "Captive" brand color scheme defined in `app/globals.css`:
- `captive-primary`: Light background color (oklch(97% 0.001 106.424))
- `captive-secondary`: Brand purple color (oklch(0.2012 0.1106 271.27))
- `captive-secondary-hover`: Darker hover state (oklch(42.4% 0.199 265.638))
- `captive-blue`: Accent blue (oklch(0.6194 0.2085 255.62))
- `captive-green`: Accent green (oklch(0.8328 0.283374 142.4953))
- `captive-ciel`: Sky blue (oklch(0.8264 0.0935 205.01))
- `captive-violet`: Accent violet (oklch(0.5885 0.2988 308.43))

Global CSS classes available:
- `.heading__page`: Page heading styles with Captive secondary color
- `.heading__center`: Centered heading with responsive padding
- `.heading__span`: Center-aligned text with Captive blue color
- `h2`: Default h2 styling with Captive secondary color

### Component Patterns

1. **Layout Structure**: Root layout includes global navigation (NavbarTwo) and footer (FooterTwo)
2. **Page Composition**: Pages are composed of multiple section components imported from `components/front/home/`
   - Homepage sections: Hero, Introduction, Services, PricingWebSite, Realisations, Avantages, GoogleBusiness, MyAnimatedTestimonials, Banner, FaqDemo
3. **UI Components**: Uses shadcn/ui pattern with `cn()` utility from `lib/utils.ts` for class merging
4. **Styling Approach**: Tailwind CSS v4 with custom color tokens and responsive design patterns
5. **Asset Management**: Images stored in `public/images/` with relative imports (e.g., `../../../public/images/home/`)
6. **SVG Components**: Custom SVG icons organized in `components/svg/` directory

### Key Configuration Files

- `components.json`: shadcn/ui configuration with "new-york" style and path aliases
- `tsconfig.json`: TypeScript configuration with strict mode and path mapping (`@/*`)
- `eslint.config.mjs`: ESLint setup extending Next.js core and TypeScript rules
- `next.config.ts`: Basic Next.js configuration (minimal setup)
- `next-sitemap.config.js`: SEO sitemap configuration with custom page priorities and robot policies
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS v4

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

### SEO Configuration

The project includes comprehensive SEO setup via `next-sitemap.config.js`:
- Automated sitemap generation with `npm run postbuild`
- Custom priority levels by page type (homepage: 1.0, services: 0.9, commercial: 0.8)
- Robot.txt generation with policies for major search engines
- Site URL: `https://captive-web.fr`

### Development Notes

1. **Styling System**: Use Tailwind CSS v4 with the custom Captive color palette. Global utility classes are predefined for consistent heading styles.
2. **Component Architecture**: Follow the section-based approach for page composition, with reusable components in `components/front/home/`.
3. **Image Optimization**: Use Next.js Image component with proper width/height attributes and priority for above-the-fold images.
4. **French Language**: All content should be in French as the site targets French-speaking users (`lang="fr"`).
5. **Brand Colors**: Always use the custom Captive color variables instead of generic Tailwind colors for brand consistency.

When working with this codebase, follow the established patterns for component organization, use the custom Captive brand colors, and maintain the French language context throughout the application.