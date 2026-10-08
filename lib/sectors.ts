import type { ProjectType } from "@/lib/pricing";

// Options réellement pertinentes par domaine d'activité (liste blanche).
// Quand le devis est proposé (bâtiment, auto, informatique…), le formulaire de contact avancé ne l'est pas : le devis le remplace. Même logique pour la restauration, l'hôtellerie et la beauté : le formulaire de réservation remplace le formulaire de contact avancé.
// Un domaine absent de la table (ex. « Autre domaine ») ne filtre rien.
// Les objectifs et les questions du devis sont déduits de ces listes.

type Shop = Exclude<ProjectType, "application">;

const T = "wp-telephone", FORM = "wp-formulaire", DEVIS = "wp-devis", WA = "wp-whatsapp";
const RES = "wp-reservation", ACOMPTE = "wp-reservation-acompte", AVIS = "wp-avis";
const NEWS = "wp-newsletter", POPUP = "wp-popup", LANG = "wp-langue";
const SHOP = "wp-boutique", MEMBRE = "wp-membre", PAGE = "wp-page", COMMANDE = "wp-commande";

const vitrine: Record<string, string[]> = {
  "Agriculture, élevage et producteurs locaux": [T, PAGE, FORM, WA, SHOP, NEWS, POPUP, AVIS],
  "Alimentation et métiers de bouche": [T, PAGE, WA, FORM, RES, COMMANDE, SHOP, NEWS, POPUP, AVIS],
  "Architecture, immobilier et diagnostic": [T, PAGE, DEVIS, WA, RES, NEWS, AVIS, LANG],
  "Artisanat d'art et création": [T, PAGE, DEVIS, WA, SHOP, NEWS, POPUP, AVIS],
  "Associations et organisations": [T, PAGE, FORM, NEWS, POPUP, MEMBRE, LANG],
  "Automobile, moto et transport": [T, PAGE, DEVIS, WA, RES, AVIS, POPUP],
  "Bâtiment et travaux": [T, PAGE, DEVIS, WA, AVIS],
  "Beauté, coiffure et bien-être": [T, PAGE, RES, ACOMPTE, WA, AVIS, NEWS, POPUP, SHOP],
  "Commerce de détail": [T, PAGE, WA, FORM, SHOP, NEWS, POPUP, AVIS],
  "Communication, marketing et création": [T, PAGE, DEVIS, WA, RES, AVIS, NEWS, LANG],
  "Conseil, droit et finance": [T, PAGE, FORM, RES, WA, AVIS, NEWS, LANG, MEMBRE],
  "Éducation et formation": [T, PAGE, FORM, RES, NEWS, POPUP, AVIS, MEMBRE, LANG, SHOP],
  "Hôtellerie, restauration et tourisme": [T, PAGE, RES, COMMANDE, ACOMPTE, WA, AVIS, NEWS, POPUP, LANG],
  "Industrie, énergie et environnement": [T, PAGE, DEVIS, NEWS, LANG],
  "Informatique et numérique": [T, PAGE, DEVIS, RES, WA, AVIS, NEWS, LANG, MEMBRE],
  "Santé et paramédical": [T, PAGE, RES, FORM, WA, AVIS, LANG],
  "Services aux particuliers et aux entreprises": [T, PAGE, DEVIS, RES, WA, AVIS, POPUP],
  "Sport, loisirs et culture": [T, PAGE, RES, ACOMPTE, FORM, WA, NEWS, POPUP, AVIS, MEMBRE, SHOP],
};

const S = (id: string) => `sh-${id}`;
const ecommerce: Record<string, string[]> = {
  "Alimentation et boissons": ["avis", "upsell", "abonnement", "precommande", "livraison", "emailing", "fidelite"].map(S),
  "Animaux": ["avis", "upsell", "fidelite", "abonnement", "livraison", "paiement", "emailing"].map(S),
  "Art, décoration et maison": ["avis", "upsell", "perso", "precommande", "livraison", "paiement", "emailing", "devises"].map(S),
  "Artisanat et créations faites main": ["perso", "precommande", "avis", "livraison", "emailing", "devises", "paiement"].map(S),
  "Auto, moto et vélo": ["avis", "upsell", "livraison", "paiement", "devises", "import"].map(S),
  "Beauté et bien-être": ["avis", "upsell", "fidelite", "abonnement", "emailing", "livraison"].map(S),
  "Bébé et enfants": ["avis", "upsell", "precommande", "livraison", "paiement", "emailing"].map(S),
  "Bijoux et accessoires": ["avis", "upsell", "perso", "paiement", "devises", "emailing", "fidelite"].map(S),
  "Bricolage et jardin": ["avis", "upsell", "livraison", "paiement", "import"].map(S),
  "Électronique et high-tech": ["avis", "upsell", "livraison", "paiement", "devises", "import"].map(S),
  "Livres, musique et loisirs": ["avis", "upsell", "precommande", "livraison", "emailing"].map(S),
  "Mode et vêtements": ["avis", "upsell", "fidelite", "precommande", "livraison", "paiement", "devises", "emailing", "import"].map(S),
  "Produits numériques et services en ligne": ["avis", "upsell", "abonnement", "paiement", "devises", "emailing"].map(S),
  "Santé et paramédical": ["avis", "livraison", "paiement", "import"].map(S),
  "Sport et plein air": ["avis", "upsell", "livraison", "paiement", "devises", "emailing", "fidelite", "import"].map(S),
};

// Métiers pour lesquels certaines options du domaine ne servent pas (retirées de la liste).
// Exemple : un dépanneur informatique intervient chez le client, sans réservation en ligne.
const jobRemovals: Record<string, string[]> = {
  // Commande en ligne : pas pertinente pour ces métiers
  "Caviste": [COMMANDE],
  "Torréfacteur": [COMMANDE],
  "Producteur de vin": [COMMANDE],
  "Hôtel": [COMMANDE],
  "Chambre d'hôtes": [COMMANDE],
  "Gîte / location saisonnière": [COMMANDE],
  "Camping": [COMMANDE],
  "Location de vacances": [COMMANDE],
  "Auberge / gîte d'étape": [COMMANDE],
  "Agence de voyage": [COMMANDE],
  "Guide touristique": [COMMANDE],
  "Office de tourisme": [COMMANDE],
  "Péniche / bateau de location": [COMMANDE],
  "Domaine de mariage / salle de réception": [COMMANDE],
  "Écurie / ferme pédagogique": [COMMANDE],
  // Informatique et numérique
  "Dépannage informatique": [RES, LANG, MEMBRE, NEWS],
  "Réparateur de téléphones / ordinateurs": [RES, LANG, MEMBRE, NEWS],
  "Boutique d'informatique": [RES, MEMBRE],
  "Éditeur de logiciels": [RES, DEVIS],
  "Hébergeur / infogérance": [RES],
  "Start-up / SaaS": [RES, DEVIS],
  "Studio de jeux vidéo": [RES, DEVIS, MEMBRE],
  "Spécialiste en réalité virtuelle": [RES, MEMBRE],
  "Intégrateur / consultant ERP": [MEMBRE],
  // Automobile, moto et transport
  "Dépanneur / remorquage": [RES, POPUP],
  "Transporteur / livreur": [RES, POPUP],
  "Location de camions": [POPUP],
  // Services aux particuliers et aux entreprises
  "Dépannage à domicile": [RES],
  "Coursier": [RES, DEVIS],
  "Pompes funèbres": [RES, POPUP],
  "Débarras / vide-maison": [RES],
  "Assistance administrative": [POPUP],
  // Architecture, immobilier et diagnostic
  "Bureau d'études": [RES],
  "Économiste de la construction": [RES],
  "Promoteur immobilier": [RES],
  // Santé
  "Maison de retraite / résidence senior": [RES],
};

/**
 * Identifiants d'options pertinents pour ce domaine (et ce métier), ou null si tout est permis.
 */
export function allowedOptionIds(project: Shop, domain?: string, job?: string): Set<string> | null {
  if (!domain) return null;
  const list = (project === "vitrine" ? vitrine : ecommerce)[domain];
  if (!list) return null;
  const removed = new Set((project === "vitrine" && job && jobRemovals[job]) || []);
  const added = (project === "vitrine" && job && jobAdditions[job]) || [];
  return new Set([...list.filter((id) => !removed.has(id)), ...added]);
}

// Options ajoutées pour certains métiers dont le domaine ne les propose pas d'habitude.
const jobAdditions: Record<string, string[]> = {
  // Commande en ligne avec retrait ou livraison (« drive » fermier, bouquets, pressing)
  "Maraîcher": [COMMANDE],
  "Éleveur": [COMMANDE],
  "Producteur de fromage": [COMMANDE],
  "Producteur de fruits et légumes": [COMMANDE],
  "Producteur local": [COMMANDE],
  "Fleuriste": [COMMANDE],
  "Pressing / blanchisserie": [COMMANDE],
};

// Libellé de la commande en ligne selon le métier (la restauration garde le libellé par défaut).
export type OrderLabel = { name: string; description: string };
const producerOrder: OrderLabel = {
  name: "Commande en ligne de paniers et produits (retrait ou livraison)",
  description: "Module de commande : catalogue de produits ou paniers, créneaux de retrait à la ferme ou au marché, livraison, paiement en ligne",
};
const jobOrderLabels: Record<string, OrderLabel> = {
  "Maraîcher": producerOrder,
  "Éleveur": producerOrder,
  "Producteur de fromage": producerOrder,
  "Producteur de fruits et légumes": producerOrder,
  "Producteur local": producerOrder,
  "Fleuriste": {
    name: "Commande en ligne de bouquets (livraison ou retrait)",
    description: "Module de commande : catalogue de bouquets, date et créneau de livraison ou de retrait, message de carte, paiement en ligne",
  },
  "Pressing / blanchisserie": {
    name: "Prise de commande en ligne (dépôt, retrait ou livraison)",
    description: "Module de commande : choix des prestations, créneau de dépôt ou de retrait, collecte et livraison à domicile, paiement en ligne",
  },
};
export const orderLabelFor = (job?: string): OrderLabel | undefined => (job ? jobOrderLabels[job] : undefined);

// Pages supplémentaires : ce que le client y présente, selon le domaine. L'offre de base
// comprend 3 pages de services ; chaque page en plus est facturée.
export type PageKind = { singular: string; plural: string; examples: string };
const defaultPageKind: PageKind = {
  singular: "service",
  plural: "services",
  examples: "une page par service, zone d'intervention, tarifs",
};
const pageKinds: Record<string, PageKind> = {
  "Agriculture, élevage et producteurs locaux": { singular: "produit ou gamme", plural: "produits ou gammes", examples: "nos produits, où nous trouver (marchés), visite de l'exploitation" },
  "Alimentation et métiers de bouche": { singular: "gamme de produits", plural: "gammes de produits", examples: "carte et prix, commandes spéciales, événements, galerie" },
  "Architecture, immobilier et diagnostic": { singular: "réalisation ou bien", plural: "réalisations ou biens", examples: "réalisations, biens à vendre, estimation en ligne" },
  "Artisanat d'art et création": { singular: "collection ou création", plural: "collections ou créations", examples: "portfolio, création sur mesure, boutique" },
  "Associations et organisations": { singular: "activité", plural: "activités", examples: "événements, adhésion, actualités" },
  "Automobile, moto et transport": { singular: "prestation", plural: "prestations", examples: "tarifs, véhicules d'occasion, zone d'intervention" },
  "Bâtiment et travaux": { singular: "prestation", plural: "prestations", examples: "réalisations et chantiers, zone d'intervention, certifications et garanties" },
  "Beauté, coiffure et bien-être": { singular: "prestation", plural: "prestations", examples: "tarifs, galerie avant / après, équipe" },
  "Commerce de détail": { singular: "rayon ou catégorie", plural: "rayons ou catégories", examples: "nouveautés, marques, infos pratiques" },
  "Communication, marketing et création": { singular: "prestation", plural: "prestations", examples: "portfolio, études de cas, équipe" },
  "Conseil, droit et finance": { singular: "domaine d'expertise", plural: "domaines d'expertise", examples: "honoraires, équipe, actualités juridiques" },
  "Éducation et formation": { singular: "formation ou cours", plural: "formations ou cours", examples: "programmes, tarifs et financement, planning, équipe pédagogique" },
  "Hôtellerie, restauration et tourisme": { singular: "plat, chambre ou activité", plural: "plats, chambres ou activités", examples: "carte et menus, chambres, privatisation et événements, galerie" },
  "Industrie, énergie et environnement": { singular: "produit ou secteur", plural: "produits ou secteurs", examples: "références clients, certifications, catalogue" },
  "Informatique et numérique": { singular: "service ou offre", plural: "services ou offres", examples: "tarifs, études de cas, documentation" },
  "Santé et paramédical": { singular: "spécialité ou acte", plural: "spécialités ou actes", examples: "équipe, tarifs et remboursements, accès et horaires" },
  "Services aux particuliers et aux entreprises": { singular: "service", plural: "services", examples: "zone d'intervention, tarifs, avis" },
  "Sport, loisirs et culture": { singular: "activité ou cours", plural: "activités ou cours", examples: "planning, tarifs, coachs, événements" },
};
// Précisions par métier (restauration, hébergement, formation) : on parle de plats, de chambres, de cours.
const eating: PageKind = { singular: "plat ou menu", plural: "plats ou menus", examples: "carte, menus, boissons, privatisation et événements, galerie" };
const lodging: PageKind = { singular: "hébergement", plural: "hébergements", examples: "chambres, tarifs, activités à proximité, galerie, accès" };
const training: PageKind = { singular: "formation", plural: "formations", examples: "programmes, tarifs et financement, planning, équipe pédagogique" };
const classes: PageKind = { singular: "cours", plural: "cours", examples: "planning, tarifs, professeurs, essai gratuit" };
const jobPageKinds: Record<string, PageKind> = {
  "Restaurant": eating, "Brasserie": eating, "Pizzeria": eating, "Restaurant rapide / snacking": eating,
  "Café": eating, "Bar / pub": eating, "Bar à vin": eating, "Food truck": eating, "Salon de thé": eating,
  "Hôtel": lodging, "Chambre d'hôtes": lodging, "Gîte / location saisonnière": lodging, "Camping": lodging,
  "Location de vacances": lodging, "Auberge / gîte d'étape": lodging,
  "Centre de formation": training, "Formateur indépendant": training, "Organisme de formation professionnelle": training,
  "Cours de danse": classes, "Cours de langues": classes, "Cours de musique / conservatoire": classes,
  "Cours particuliers / soutien scolaire": classes, "École de danse": classes, "École de cuisine": classes,
};
export const pageKindFor = (domain?: string, job?: string): PageKind =>
  (job && jobPageKinds[job]) || (domain && pageKinds[domain]) || defaultPageKind;
