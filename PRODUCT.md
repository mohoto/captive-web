# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two confirmed audiences:
1. Artisans, commerçants locaux et professions libérales sans site web (ou avec un site obsolète), sans compétence technique, cherchant une solution clé en main avec un budget maîtrisé.
2. TPE/PME en croissance qui veulent professionnaliser leur présence digitale ou passer à l'e-commerce/une application métier, avec des besoins plus sur-mesure et un budget plus conséquent.

Both groups arrive worried about being overcharged or not understanding what they're buying, and expect the whole process (not just the deliverable) to be handled for them.

## Product Purpose

Captive Web is a French web agency that builds made-to-measure showcase websites (site vitrine), e-commerce stores, and web applications for small/medium businesses. Success means the client gets a finished, working site without having to acquire technical skills, at a price they understood upfront.

## Positioning

Two combined differentiators the site must carry:
- **Delivery speed and simplicity**: sites are shipped quickly, without unnecessary complexity — critical for a client in a hurry to launch or relaunch their online presence.
- **Technical/craft expertise**: real code (Next.js, performance, SEO) rather than generic no-code/template builders — a more premium, technical positioning versus DIY tools or single-freelancer setups.

Note: the user selected "rapidité/efficacité" and "expertise technique" as the differentiators, not "prix transparent/accompagnement humain" — pricing transparency (public tarifs page) is an existing site feature but is not the primary positioning claim; do not over-index copy on "accompagnement humain" as the core pitch.

## Operating Context

- Client-facing marketing site with dedicated service pages: site vitrine, e-commerce, application web, and a public pricing page (tarifs) with per-offer pricing cards.
- Legal pages present: conditions générales de vente, politique de confidentialité.
- Contact page for lead generation / devis (quote) requests.
- Site showcases real past work (Réalisations) and real client testimonials with company logos.
- Site displays official partner badges: Google Partners, Shopify Partners, Meta/Facebook Business Suite, France Num — these are real program affiliations, not decoration.

## Capabilities and Constraints

- Built with Next.js 15 (App Router), React 19, TypeScript strict, Tailwind CSS v4, Radix UI/shadcn ("new-york" style), Framer Motion, Embla Carousel.
- SEO-managed via next-sitemap; site URL is captive-web.fr.
- Undecided/unconfirmed: no CMS mentioned — content appears to be hardcoded in components (per CLAUDE.md structure), so copy changes are code changes.

## Brand Commitments

- Existing logo: `public/images/captive_web_Logo-optimise.svg` — do not redesign without explicit validation.
- Existing "Captive" color palette (defined in `app/globals.css`) is binding and must be preserved, not replaced:
  - `captive-primary`: oklch(97% 0.001 106.424) — light background
  - `captive-secondary`: oklch(0.2012 0.1106 271.27) — brand purple
  - `captive-secondary-hover`: oklch(42.4% 0.199 265.638)
  - `captive-blue`: oklch(0.6194 0.2085 255.62)
  - `captive-green`: oklch(0.8328 0.283374 142.4953)
  - `captive-ciel`: oklch(0.8264 0.0935 205.01)
  - `captive-violet`: oklch(0.5885 0.2988 308.43)
- All content strictly in French (`lang="fr"`), professional and reassuring tone suited to a non-technical audience. Do not switch language or introduce informal/technical jargon.

## Evidence on Hand

- Real client testimonials with logos: Siay, Parisian Mode, Nest Rénové, Make Energy, Work Formation (`public/images/testimonials/`).
- Real partner program badges: Google Partners, Shopify Partners, Meta Business Suite, France Num.
- Public, itemized pricing cards for site vitrine, e-commerce, and application offers (`app/tarifs/`).
- No fabricated testimonials, benchmarks, customer counts, or pricing may be invented — only the above real evidence and whatever the client explicitly supplies going forward.

## Product Principles

1. Reassure a non-technical, budget-conscious buyer at every step — no jargon, no ambiguity about what's included.
2. Prove credibility with real, verifiable evidence (testimonials, partner badges, actual realisations) rather than generic trust signals.
3. Keep the Captive brand palette, logo, and French-only voice consistent across every page and future surface.
4. Favor fast, clean delivery and technical craft (real code, real performance/SEO) as the visible proof point over competitors, without ever making the site itself feel slow or overbuilt.
