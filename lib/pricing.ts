// Source unique des tarifs : utilisée par /tarifs et par le devis interactif (/devis).
// Prix en € TTC, paiement unique.

export type ProjectType = "vitrine" | "ecommerce";

export type PricingOption = {
  id: string;
  name: string;
  description: string;
  price: number;
  group: string;
  /** Déjà compris dans l'offre de base : affiché dans le devis uniquement. */
  included?: boolean;
  /** Reste dans la grille /tarifs mais n'est pas proposée dans le devis. */
  hideInQuote?: boolean;
  /** Toujours proposée dans le devis, même si elle n'est pas recommandée. */
  alwaysShow?: boolean;
  /** Option commandable en plusieurs exemplaires (ex. articles de blog). */
  unit?: string;
  /** Options incompatibles : choisir celle-ci retire les autres. */
  excludes?: string[];
};

export type OptionGroup = { id: string; title: string; question: string };

export const BASE_PRICE = 590;

export const projects: Record<
  ProjectType,
  { label: string; target: string; basePrice: number }
> = {
  vitrine: {
    label: "Site vitrine",
    target: "Artisans, indépendants, professions libérales et TPE/PME",
    basePrice: BASE_PRICE,
  },
  ecommerce: {
    label: "Site e-commerce",
    target: "Commerçants et marques qui vendent en ligne",
    basePrice: BASE_PRICE,
  },
};

export const wordpressGroups: OptionGroup[] = [
  { id: "contact", title: "Contact et formulaires", question: "Quels moyens de contact voulez-vous proposer à vos clients ?" },
  { id: "pages", title: "Pages supplémentaires", question: "Avez-vous plus de 3 services à présenter ?" },
  { id: "reservation", title: "Réservation", question: "Vos clients doivent-ils pouvoir réserver en ligne ?" },
  { id: "commande", title: "Commande en ligne", question: "Vos clients doivent-ils pouvoir commander en ligne, à livrer ou à emporter ?" },
  { id: "avis", title: "Avis clients", question: "Voulez-vous afficher les avis de vos clients ?" },
  { id: "langues", title: "Langues", question: "Votre site doit-il être disponible dans d'autres langues ?" },
  { id: "communication", title: "Newsletter et promotions", question: "Voulez-vous garder le contact et annoncer vos offres ?" },
  { id: "vente", title: "Vente en ligne", question: "Voulez-vous vendre des produits sur votre site ?" },
  { id: "membre", title: "Espace membre", question: "Souhaitez-vous un espace réservé à vos clients ou membres ?" },
];

export const wordpressOptions: PricingOption[] = [
  { id: "wp-telephone", group: "contact", name: "Contact par téléphone", description: "Numéro cliquable et bouton « Appeler » : vos clients vous joignent en un appel", price: 0, included: true },
  { id: "wp-page", group: "pages", alwaysShow: true, name: "Page supplémentaire", description: "Au-delà des 3 pages de services incluses : une page dédiée (service, formation, plat…)", price: 30, unit: "page" },
  { id: "wp-reservation", group: "reservation", name: "Réservation en ligne", description: "Formulaire de réservation en ligne (rendez-vous, table, séance) avec créneaux et e-mails de confirmation", price: 140, excludes: ["wp-reservation-acompte"] },
  { id: "wp-reservation-acompte", group: "reservation", name: "Réservation avec acompte", description: "Réservation + paiement en ligne (Stripe / PayPal)", price: 280, excludes: ["wp-reservation"] },
  { id: "wp-commande", group: "commande", name: "Commande en ligne (livraison ou à emporter)", description: "Module de commande : carte en ligne, livraison ou à emporter, créneaux, paiement en ligne, notification des commandes", price: 290 },
  { id: "wp-formulaire", group: "contact", name: "Formulaire de contact avancé", description: "Champs personnalisés, pièces jointes, anti-spam", price: 60, excludes: ["wp-devis"] },
  { id: "wp-devis", group: "contact", name: "Formulaire de devis élaboré", description: "Demande de devis en plusieurs étapes", price: 160, excludes: ["wp-formulaire"] },
  { id: "wp-whatsapp", group: "contact", name: "Bouton WhatsApp", description: "Bouton flottant avec message pré-rempli", price: 40 },
  { id: "wp-popup", group: "communication", name: "Pop-up promotionnelle", description: "Pop-up ou bannière d'offre (promo, soldes, newsletter), ciblage et durée", price: 60 },
  { id: "wp-newsletter", group: "communication", name: "Newsletter", description: "Inscription + connexion Mailchimp / Brevo", price: 100 },
  { id: "wp-blog", group: "blog", hideInQuote: true, name: "Blog", description: "Mise en page, catégories, partage", price: 110 },
  { id: "wp-article", group: "blog", hideInQuote: true, name: "Article de blog (par article)", description: "Rédaction optimisée SEO (≈ 800 mots), images et mise en ligne", price: 30, unit: "article" },
  { id: "wp-langue", group: "langues", name: "Langue supplémentaire", description: "Traduction et sélecteur de langue (par langue)", price: 180, unit: "langue" },
  { id: "wp-avis", group: "avis", name: "Avis clients", description: "Affichage des avis Google sur le site", price: 90 },
  { id: "wp-boutique", group: "vente", name: "Mini boutique (≤ 20 produits)", description: "WooCommerce : panier, paiement, livraison", price: 350 },
  { id: "wp-membre", group: "membre", name: "Espace membre", description: "Inscription, connexion, contenu réservé", price: 250 },
];

export const shopifyGroups: OptionGroup[] = [
  { id: "panier", title: "Panier moyen", question: "Voulez-vous augmenter le montant des commandes ?" },
  { id: "types", title: "Types de vente", question: "Quels types de vente souhaitez-vous proposer ?" },
  { id: "livraison", title: "Livraison", question: "Comment voulez-vous livrer vos clients ?" },
  { id: "paiement", title: "Paiement et international", question: "Quelles facilités de paiement ou de vente à l'étranger voulez-vous ?" },
  { id: "avis", title: "Avis clients", question: "Voulez-vous rassurer vos acheteurs avec des avis vérifiés ?" },
  { id: "fidelite", title: "Fidélisation", question: "Comment voulez-vous faire revenir vos clients ?" },
  { id: "catalogue", title: "Catalogue", question: "Avez-vous déjà des produits à importer ?" },
];

export const shopifyOptions: PricingOption[] = [
  { id: "sh-avis", group: "avis", name: "Avis clients", description: "Étoiles et avis vérifiés sur les fiches produit", price: 90 },
  { id: "sh-upsell", group: "panier", name: "Ventes additionnelles", description: "Packs, offres au panier et produits complémentaires (application dédiée)", price: 140 },
  { id: "sh-fidelite", group: "fidelite", name: "Programme de fidélité", description: "Points, récompenses, parrainage", price: 180 },
  { id: "sh-abonnement", group: "types", name: "Abonnement produit", description: "Plans d'abonnement (ex. mensuel), gestion et e-mails dédiés", price: 210 },
  { id: "sh-precommande", group: "types", name: "Précommande", description: "Parcours complet : message, date de livraison, alerte retour en stock", price: 110 },
  { id: "sh-perso", group: "types", name: "Produit personnalisable", description: "Gravure, texte, options au choix", price: 180 },
  { id: "sh-livraison", group: "livraison", name: "Configuration de la livraison", description: "Tarifs par zone et au poids, étiquettes et points relais Colissimo / Mondial Relay (Shopify Shipping)", price: 90 },
  { id: "sh-paiement", group: "paiement", name: "Paiement en plusieurs fois", description: "Activation et intégration d'Alma / Klarna / PayPal 4x", price: 60 },
  { id: "sh-devises", group: "paiement", name: "Multi-devises", description: "Marchés internationaux : prix, taxes et devises par pays", price: 120 },
  { id: "sh-emailing", group: "fidelite", name: "Pack e-mailing", description: "Bienvenue, post-achat, newsletter (Klaviyo)", price: 210 },
  { id: "sh-blog", group: "panier", hideInQuote: true, name: "Blog boutique", description: "Mise en page + SEO des articles", price: 90 },
  { id: "sh-import", group: "catalogue", name: "Import de produits (≤ 100)", description: "Import CSV, nettoyage et optimisation des fiches produit", price: 140 },
];

export const quoteCatalog = (list: PricingOption[]) => list.filter((o) => !o.hideInQuote);

export function formatPrice(value: number) {
  if (value === 0) return "Inclus";
  return `${value.toLocaleString("fr-FR")} €`;
}
