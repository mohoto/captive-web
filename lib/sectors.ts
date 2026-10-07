import type { ProjectType } from "@/lib/pricing";

// Options réellement pertinentes par domaine d'activité (liste blanche).
// Quand le devis est proposé (bâtiment, auto, informatique…), le formulaire de contact avancé ne l'est pas : le devis le remplace. Même logique pour la restauration, l'hôtellerie et la beauté : le formulaire de réservation remplace le formulaire de contact avancé.
// Un domaine absent de la table (ex. « Autre domaine ») ne filtre rien.
// Les objectifs et les questions du devis sont déduits de ces listes.

type Shop = Exclude<ProjectType, "application">;

const T = "wp-telephone", FORM = "wp-formulaire", DEVIS = "wp-devis", WA = "wp-whatsapp";
const RES = "wp-reservation", ACOMPTE = "wp-reservation-acompte", AVIS = "wp-avis";
const NEWS = "wp-newsletter", POPUP = "wp-popup", LANG = "wp-langue";
const SHOP = "wp-boutique", MEMBRE = "wp-membre";

const vitrine: Record<string, string[]> = {
  "Agriculture, élevage et producteurs locaux": [T, FORM, WA, SHOP, NEWS, POPUP, AVIS],
  "Alimentation et métiers de bouche": [T, WA, FORM, RES, SHOP, NEWS, POPUP, AVIS],
  "Architecture, immobilier et diagnostic": [T, DEVIS, WA, RES, NEWS, AVIS, LANG],
  "Artisanat d'art et création": [T, DEVIS, WA, SHOP, NEWS, POPUP, AVIS],
  "Associations et organisations": [T, FORM, NEWS, POPUP, MEMBRE, LANG],
  "Automobile, moto et transport": [T, DEVIS, WA, RES, AVIS, POPUP],
  "Bâtiment et travaux": [T, DEVIS, WA, AVIS],
  "Beauté, coiffure et bien-être": [T, RES, ACOMPTE, WA, AVIS, NEWS, POPUP, SHOP],
  "Commerce de détail": [T, WA, FORM, SHOP, NEWS, POPUP, AVIS],
  "Communication, marketing et création": [T, DEVIS, WA, RES, AVIS, NEWS, LANG],
  "Conseil, droit et finance": [T, FORM, RES, WA, AVIS, NEWS, LANG, MEMBRE],
  "Éducation et formation": [T, FORM, RES, NEWS, POPUP, AVIS, MEMBRE, LANG, SHOP],
  "Hôtellerie, restauration et tourisme": [T, RES, ACOMPTE, WA, AVIS, NEWS, POPUP, LANG],
  "Industrie, énergie et environnement": [T, DEVIS, NEWS, LANG],
  "Informatique et numérique": [T, DEVIS, RES, WA, AVIS, NEWS, LANG, MEMBRE],
  "Santé et paramédical": [T, RES, FORM, WA, AVIS, LANG],
  "Services aux particuliers et aux entreprises": [T, DEVIS, RES, WA, AVIS, POPUP],
  "Sport, loisirs et culture": [T, RES, ACOMPTE, FORM, WA, NEWS, POPUP, AVIS, MEMBRE, SHOP],
};

const S = (id: string) => `sh-${id}`;
const ecommerce: Record<string, string[]> = {
  "Alimentation et boissons": ["avis", "paniers", "upsell", "abonnement", "precommande", "livraison", "retrait", "emailing", "google", "cartes", "fidelite"].map(S),
  "Animaux": ["avis", "paniers", "upsell", "fidelite", "abonnement", "livraison", "paiement", "emailing", "google"].map(S),
  "Art, décoration et maison": ["avis", "paniers", "upsell", "perso", "precommande", "livraison", "paiement", "cartes", "google", "emailing", "devises"].map(S),
  "Artisanat et créations faites main": ["perso", "precommande", "avis", "livraison", "cartes", "google", "emailing", "devises", "paiement"].map(S),
  "Auto, moto et vélo": ["avis", "upsell", "livraison", "retrait", "paiement", "google", "devises", "import"].map(S),
  "Beauté et bien-être": ["avis", "paniers", "upsell", "fidelite", "abonnement", "cartes", "emailing", "livraison", "google"].map(S),
  "Bébé et enfants": ["avis", "paniers", "upsell", "cartes", "precommande", "livraison", "paiement", "emailing", "google"].map(S),
  "Bijoux et accessoires": ["avis", "paniers", "upsell", "perso", "cartes", "paiement", "devises", "google", "emailing", "fidelite"].map(S),
  "Bricolage et jardin": ["avis", "upsell", "livraison", "retrait", "paiement", "google", "import"].map(S),
  "Électronique et high-tech": ["avis", "upsell", "livraison", "retrait", "paiement", "devises", "google", "import"].map(S),
  "Livres, musique et loisirs": ["avis", "paniers", "upsell", "precommande", "cartes", "livraison", "emailing", "google"].map(S),
  "Mode et vêtements": ["avis", "paniers", "upsell", "fidelite", "precommande", "cartes", "livraison", "retrait", "paiement", "devises", "emailing", "google", "import"].map(S),
  "Produits numériques et services en ligne": ["avis", "paniers", "upsell", "abonnement", "cartes", "paiement", "devises", "emailing", "google"].map(S),
  "Santé et paramédical": ["avis", "livraison", "retrait", "paiement", "google", "import"].map(S),
  "Sport et plein air": ["avis", "upsell", "livraison", "retrait", "paiement", "devises", "google", "emailing", "fidelite", "import"].map(S),
};

// Métiers pour lesquels certaines options du domaine ne servent pas (retirées de la liste).
// Exemple : un dépanneur informatique intervient chez le client, sans réservation en ligne.
const jobRemovals: Record<string, string[]> = {
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
  return new Set(list.filter((id) => !removed.has(id)));
}
