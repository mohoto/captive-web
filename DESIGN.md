---
name: Captive Web
description: Agence web française — sites vitrine, e-commerce et applications sur mesure pour artisans, commerçants et TPE/PME
colors:
  deep-signature-violet: "oklch(0.2012 0.1106 271.27)"
  deep-signature-violet-hover: "oklch(42.4% 0.199 265.638)"
  action-blue: "oklch(0.6194 0.2085 255.62)"
  confirmation-green: "oklch(0.8328 0.283374 142.4953)"
  sky-tint: "oklch(0.8264 0.0935 205.01)"
  soft-violet-accent: "oklch(0.5885 0.2988 308.43)"
  paper-neutral: "oklch(97% 0.001 106.424)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui"
    fontSize: "36px"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  pill: "9999px"
  lg: "0.5rem"
  xl: "0.75rem"
  md: "calc(var(--radius) - 2px)"
spacing:
  sm: "0.75rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "#ffffff"
    textColor: "{colors.deep-signature-violet}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.paper-neutral}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  icon-tile:
    backgroundColor: "{colors.action-blue}"
    rounded: "{rounded.lg}"
    size: "40px"
---

# Design System: Captive Web

## Overview

**Creative North Star: "Le Studio Digital Accessible"**

Captive Web s'adresse à des artisans, commerçants et dirigeants de TPE/PME qui n'ont pas de culture technique et se méfient du jargon. Le système visuel répond par des couleurs franches et vivantes posées sur un fond épuré quasi-blanc, des formes systématiquement arrondies (boutons en pilule, cartes à coins généreux, images circulaires), et un vocabulaire orbital récurrent — cercles pointillés, sphères flottantes — qui évoque le mouvement et la mise en orbite d'un projet, sans jamais verser dans le décoratif gratuit. Rien n'est anguleux ou froid ; tout invite à cliquer.

Le violet profond de marque (captive-secondary) ancre l'identité sur les zones à forte intention (hero, CTA primaires), tandis que le bleu vif sert d'accent d'action sur les fonds clairs du reste du site. Vert, ciel et violet clair restent des touches secondaires, réservées aux icônes et petits tags, jamais des couleurs de fond dominantes.

**Key Characteristics:**
- Formes arrondies partout : jamais d'angle droit sur un élément interactif ou un conteneur de contenu.
- Une couleur de marque dominante (violet profond) + un accent d'action (bleu vif), le reste en soutien ponctuel.
- Surfaces plates par défaut ; l'ombre est un signal rare et intentionnel.
- Mouvement discret et ressorti (Framer Motion spring) à l'apparition, jamais agressif.
- Français exclusif, ton professionnel et rassurant — aucune aspérité visuelle ou verbale qui intimiderait un non-technicien.

## Colors

Palette resserrée : un violet de marque dominant, un bleu d'action, et trois teintes de soutien utilisées avec parcimonie.

### Primary
- **Deep Signature Violet** (oklch(0.2012 0.1106 271.27), `captive-secondary`): couleur de marque. Fond du hero, CTA primaires pleins, éléments qui doivent porter l'identité Captive avant tout.
- **Deep Signature Violet — Hover** (oklch(42.4% 0.199 265.638), `captive-secondary-hover`): état hover/actif des surfaces en Deep Signature Violet, notamment le dégradé de fond du hero.

### Secondary
- **Action Blue** (oklch(0.6194 0.2085 255.62), `captive-blue`): accent d'interaction principal sur fond clair — liens de mise en avant, icônes actives, chiffres/mots clés dans les titres (ex. « 7 jours »), sphères décoratives du hero.

### Tertiary (touches ponctuelles)
- **Confirmation Green** (oklch(0.8328 0.283374 142.4953), `captive-green`): réservé aux signaux de validation/succès ponctuels ; ne pas utiliser comme couleur de fond ou de marque.
- **Sky Tint** (oklch(0.8264 0.0935 205.01), `captive-ciel`): touches décoratives légères — traits, icônes secondaires (ex. icône application).
- **Soft Violet Accent** (oklch(0.5885 0.2988 308.43), `captive-violet`): variante secondaire du violet de marque, utilisée pour différencier une offre/icône (ex. icône e-commerce) sans reprendre le violet dominant.

### Neutral
- **Paper Neutral** (oklch(97% 0.001 106.424), `captive-primary`): fond de section clair par défaut, alternant avec le blanc pur.
- **Ink 900** (`neutral-900`, Tailwind neutral scale): texte de corps sur fond clair.
- **Deep Navy Heading** (`#0d1f3c`): couleur fixe des `h2`, distincte de la palette captive — vérifier l'intention avant de la faire évoluer.

### Named Rules
**La Règle du Violet Dominant.** Le Deep Signature Violet ne partage jamais une même surface de premier plan avec l'Action Blue à parts égales : l'un porte la marque (fonds, CTA), l'autre porte l'action (liens, accents), jamais les deux en concurrence sur le même élément.

## Typography

**Display/Heading Font:** Plus Jakarta Sans (`--font-plus-jakarta-sans`), avec fallback système
**Body Font:** Inter (`--font-inter-sans`), avec fallback système

**Character:** Plus Jakarta Sans en titres apporte une géométrie légèrement plus douce et contemporaine que du texte purement neutre ; Inter en corps de texte reste lisible et sobre pour un public non technique qui doit comprendre vite. Note : CLAUDE.md mentionne « Poppins » comme police principale, mais le code exécuté (`app/layout.tsx`) charge réellement Inter + Plus Jakarta Sans — ce fichier documente le comportement réel du code, pas la doc existante.

### Hierarchy
- **Headline** (600, 3rem/`text-5xl`, line-height 1.1): titre principal du hero, en Inter (les h1 du hero ne passent pas par la police de titres `h2`).
- **Title / h2** (800/extrabold, 36px, line-height 1.15, couleur `#0d1f3c`): titres de section, en Plus Jakarta Sans via la règle globale `h1–h6`.
- **Body** (400, 1rem, line-height 1.5): paragraphes de contenu, Inter, `text-neutral-900` ou `text-white/75` sur fond violet.
- **Label** (500–600, 0.875–1rem): texte de bouton et libellés de tuiles (`font-medium`/`font-semibold`).

### Named Rules
**La Règle Titre/Corps.** Tout élément `h1`–`h6` hérite de Plus Jakarta Sans par la règle globale de `globals.css` ; ne jamais forcer une police différente sur un titre sans mettre à jour cette règle centrale plutôt que de la contourner au cas par cas.

## Layout

Site en sections pleine largeur (`section` avec fond alterné blanc / `captive-primary`), contenu centré dans un conteneur avec padding horizontal généreux (`px-8` mobile, `lg:px-32` desktop). Grilles 2 colonnes en desktop (`lg:grid-cols-2`) qui s'empilent en une colonne sur mobile, avec l'image et le texte qui inversent leur ordre selon les sections (`order-1`/`order-2`) pour varier le rythme de lecture. Rythme vertical généreux entre sections (`py-20` à `py-24`).

## Elevation & Depth

Le système est plat par défaut : les cartes et tuiles se distinguent par des bordures fines et semi-transparentes (`border-captive-secondary/10`) plutôt que par des ombres portées. L'ombre est réservée aux éléments à forte valeur commerciale qui doivent physiquement se détacher de la page — la carte de tarification (`shadow-md`) en est l'exemple confirmé : c'est un choix volontaire pour signaler l'importance de l'offre, pas une incohérence.

### Shadow Vocabulary
- **Commercial lift** (`shadow-md`): réservé aux blocs à forte intention d'achat (pricing card). Ne pas généraliser aux cartes de contenu ordinaires.

### Named Rules
**La Règle du Plat par Défaut.** Une surface est plate au repos ; une ombre n'apparaît que pour signaler qu'un bloc porte une décision commerciale (prix, offre), jamais pour du contenu informatif standard.

## Shapes

Le langage de forme est délibérément arrondi et orbital :
- **Pilule** (`rounded-full`, 9999px) pour tous les CTA/boutons de navigation principaux.
- **Cercle parfait** (`rounded-full`) pour les images d'illustration en hero et les sphères décoratives.
- **xl** (`0.75rem`) pour les cartes/conteneurs de contenu (ex. tuiles de service).
- **lg** (`0.5rem`) pour les tuiles d'icônes plus petites.
- Motifs décoratifs récurrents : cercles pointillés (`strokeDasharray`) et sphères pleines de tailles variées, utilisés en hero pour évoquer le mouvement sans surcharger.

## Components

### Buttons
- **Shape:** pilule (`rounded-full`), jamais d'angle droit.
- **Primary (sur fond violet):** fond blanc plein, texte `captive-secondary`, padding généreux (`px-7 py-3.5`), icône flèche qui glisse vers la droite au survol.
- **Secondary/Ghost (sur fond violet):** bordure blanche semi-transparente (`border-white/25`), fond transparent, s'éclaircit légèrement au survol (`hover:bg-white/5`).
- **Hover / Focus:** transitions douces (`duration-200`), jamais de changement brutal de couleur.

### Cards / Containers
- **Corner Style:** `rounded-xl` pour les cartes de contenu, plus large (`rounded-2xl`+) probable pour la pricing card (à vérifier au composant).
- **Background:** blanc sur fond `captive-primary`, ou `captive-primary` sur fond blanc — toujours un contraste doux, jamais de gris neutre générique.
- **Shadow Strategy:** voir Elevation & Depth — plat sauf pour la pricing card.
- **Border:** fine, semi-transparente, teintée de la couleur de marque (`border-captive-secondary/10`) plutôt que grise.
- **Internal Padding:** généreux (`p-6` à `p-10` selon la taille du bloc).

### Icon Tiles
- **Style:** carré arrondi `rounded-lg` de 40px, fond teinté à 10–15% d'opacité de la couleur d'accent de l'offre (bleu, violet clair, ciel), icône Phosphor `weight="bold"` en couleur pleine.
- **Rôle:** identifier visuellement une offre/service sans dépendre uniquement du texte.

### Motion
- Apparition en `spring` doux (Framer Motion, `stiffness: 260, damping: 20` pour les blocs, `stiffness: 100, damping: 10` pour les listes), avec `staggerChildren` pour faire apparaître les éléments d'une carte les uns après les autres plutôt que d'un coup.
- Détection au scroll via `useInView`, déclenchée une seule fois (`once: true`).

## Do's and Don'ts

### Do:
- **Do** garder les boutons et CTA en pilule (`rounded-full`) — c'est la signature de forme du site, jamais de bouton à coins carrés ou légèrement arrondis pour un CTA principal.
- **Do** réserver le Deep Signature Violet aux surfaces qui portent la marque (hero, CTA pleins) et l'Action Blue aux accents d'interaction sur fond clair.
- **Do** garder les surfaces plates par défaut ; n'introduire une ombre que pour signaler un bloc à forte valeur commerciale.
- **Do** utiliser le vocabulaire orbital (cercles pointillés, sphères) avec parcimonie, en accompagnement d'une image, jamais comme motif de fond répété partout.
- **Do** garder tout le contenu en français, ton professionnel et rassurant, sans jargon technique.

### Don't:
- **Don't** utiliser d'angles droits sur un bouton, une tuile d'icône ou une carte de contenu.
- **Don't** faire porter le Deep Signature Violet et l'Action Blue à parts égales sur un même élément — l'un domine, l'autre accente.
- **Don't** ajouter des ombres décoratives sur des cartes de contenu standard ; ce signal est réservé aux blocs commerciaux (pricing).
- **Don't** remplacer ou modifier le logo (`public/images/captive_web_Logo-optimise.svg`) ou la palette `captive-*` sans validation explicite — ce sont des contraintes de marque confirmées, pas des choix ouverts.
- **Don't** inventer des témoignages, chiffres ou preuves sociales ; seuls Siay, Parisian Mode, Nest Rénové, Make Energy, Work Formation et les badges partenaires réels (Google, Shopify, Meta, France Num) sont utilisables.
