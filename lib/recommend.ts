import { allowedOptionIds } from "@/lib/sectors";
import {
  quoteCatalog,
  shopifyOptions,
  wordpressOptions,
  type PricingOption,
  type ProjectType,
} from "@/lib/pricing";

export type Recommendation = { id: string; reason: string };
export type RecommendInput = {
  project: Exclude<ProjectType, "application">;
  domain?: string;
  /** Métier choisi dans la liste (absent si saisi librement). */
  job?: string;
  /** Métier saisi librement (« Autre ») : hors des listes connues. */
  custom?: boolean;
  activity: string;
  goals: string[];
  existingSite: string;
  details: string;
};

export const existingSiteChoices = ["Non, c'est mon premier site", "Oui, à refaire"];

export function catalogOf(
  project: RecommendInput["project"],
  domain?: string,
  job?: string
): PricingOption[] {
  const all = quoteCatalog(project === "vitrine" ? wordpressOptions : shopifyOptions);
  const allowed = allowedOptionIds(project, domain, job);
  return allowed ? all.filter((o) => allowed.has(o.id)) : all;
}

const optionReason: Record<string, string> = {
  "wp-telephone": "Vos clients vous appellent en un clic, sans supplément.",
  "wp-reservation": "Vos clients réservent seuls, sans appel ni message.",
  "wp-reservation-acompte": "L'acompte limite les rendez-vous ou réservations non honorés.",
  "wp-formulaire": "Vos clients vous écrivent avec toutes les informations utiles, pièces jointes comprises.",
  "wp-devis": "Vos clients décrivent leur besoin pas à pas pour recevoir un devis précis.",
  "wp-whatsapp": "Un message instantané depuis le site, sans formulaire à remplir.",
  "wp-popup": "Mettez en avant une offre ou une actualité dès l'arrivée du visiteur.",
  "wp-newsletter": "Gardez le lien avec vos clients en leur envoyant vos nouveautés.",
  "wp-langue": "Votre site accueille aussi les clients qui ne parlent pas français.",
  "wp-avis": "Les avis de vos clients rassurent les nouveaux visiteurs.",
  "wp-boutique": "Vendez vos produits directement depuis votre site.",
  "wp-membre": "Un espace réservé pour vos clients ou vos membres.",
  "sh-avis": "Les avis vérifiés rassurent avant l'achat.",
  "sh-paniers": "Récupérez les ventes des paniers abandonnés grâce à des e-mails de relance.",
  "sh-upsell": "Proposez des produits complémentaires pour augmenter le panier moyen.",
  "sh-fidelite": "Un programme de points pour faire revenir vos clients.",
  "sh-abonnement": "Des revenus réguliers grâce à la vente par abonnement.",
  "sh-precommande": "Vendez avant d'avoir le stock et prévenez vos clients au retour en stock.",
  "sh-perso": "Vos clients personnalisent leur produit (texte, gravure, options).",
  "sh-livraison": "Des tarifs de livraison adaptés au poids et à la zone.",
  "sh-retrait": "Vos clients retirent leur commande en boutique au créneau choisi.",
  "sh-paiement": "Le paiement en plusieurs fois facilite les achats importants.",
  "sh-devises": "Prix et taxes adaptés à chaque pays de livraison.",
  "sh-cartes": "Des cartes cadeaux pour offrir vos produits.",
  "sh-emailing": "E-mails automatiques de bienvenue et de suivi après achat.",
  "sh-google": "Vos produits apparaissent dans Google Shopping et sur les réseaux sociaux.",
  "sh-import": "Vos produits existants sont importés et optimisés pour la vente.",
};

// --- Recommandations de secours (sans IA), à partir d'objectifs et de mots-clés ---

type Rule = { match: (text: string) => boolean; ids: string[]; reason: string };
const has = (re: RegExp) => (text: string) => re.test(text);

const vitrineGoalRules: Record<string, { ids: string[]; reason: string }> = {
  avis: { ids: ["wp-avis"], reason: "Les avis de vos clients rassurent les nouveaux visiteurs." },
  demandes: { ids: ["wp-devis", "wp-formulaire", "wp-whatsapp"], reason: "Pour recevoir facilement des demandes de vos clients." },
  rdv: { ids: ["wp-reservation"], reason: "Vos clients réservent seuls, sans appel." },
  vendre: { ids: ["wp-boutique"], reason: "Pour vendre vos produits directement sur le site." },
  fideliser: { ids: ["wp-newsletter", "wp-popup"], reason: "Pour garder le lien et annoncer vos offres." },
  langues: { ids: ["wp-langue"], reason: "Pour s'adresser à des clients dans leur langue." },
  espace: { ids: ["wp-membre"], reason: "Contenu réservé à vos clients ou membres." },
};

const vitrineActivityRules: Rule[] = [
  { match: has(/coiff|esth[eé]ti|beaut|massage|kin[eé]|ost[eé]o|m[eé]decin|dentiste|psy|sant[eé]|th[eé]rap|photograph|garage|auto[- ]?[eé]cole|coach/i), ids: ["wp-reservation"], reason: "Dans votre activité, la prise de rendez-vous en ligne fait gagner du temps." },
  { match: has(/restaurant|traiteur|caf[eé]|bar\b|pizzeria|brasserie|snack|glac/i), ids: ["wp-reservation"], reason: "Vos clients réservent leur table en ligne, sans appeler." },
  { match: has(/h[oô]tel|g[iî]te|chambre|camping|location de vacances|auberge/i), ids: ["wp-reservation-acompte"], reason: "Une réservation avec acompte limite les annulations de dernière minute." },
  { match: has(/plomb|[eé]lectric|ma[cç]on|peintre|menuis|couvreur|b[aâ]timent|chauffag|serrur|artisan|paysag|d[eé]m[eé]nag/i), ids: ["wp-devis", "wp-whatsapp"], reason: "Les clients demandent souvent un devis : un formulaire dédié les guide." },
  { match: has(/avocat|notaire|conseil|comptab|consult|immobili|assur/i), ids: ["wp-formulaire", "wp-avis"], reason: "Un formulaire complet et des avis installent la confiance." },
  { match: has(/association|club|f[eé]d[eé]ration|ong/i), ids: ["wp-newsletter", "wp-popup"], reason: "Pour informer vos adhérents et mettre en avant vos événements." },
  { match: has(/formation|[eé]cole|cours|professeur/i), ids: ["wp-membre"], reason: "Un espace réservé pour vos élèves ou stagiaires." },
];

const ecomGoalRules: Record<string, { ids: string[]; reason: string }> = {
  panier: { ids: ["sh-upsell", "sh-paniers"], reason: "Pour vendre plus à chaque commande et relancer les paniers oubliés." },
  fideliser: { ids: ["sh-fidelite", "sh-emailing"], reason: "Pour que vos clients reviennent." },
  livraison: { ids: ["sh-livraison", "sh-retrait"], reason: "Des options de livraison claires réduisent les abandons." },
  international: { ids: ["sh-devises"], reason: "Prix et taxes adaptés à chaque pays." },
  visibilite: { ids: ["sh-google"], reason: "Pour apparaître dans Google Shopping et les réseaux." },
  confiance: { ids: ["sh-avis"], reason: "Les avis vérifiés rassurent les nouveaux acheteurs." },
  "sur-mesure": { ids: ["sh-perso", "sh-precommande"], reason: "Pour vendre du sur-mesure ou avant stock." },
  abonnement: { ids: ["sh-abonnement", "sh-cartes"], reason: "Revenus récurrents et idées cadeaux." },
};

const ecomActivityRules: Rule[] = [
  { match: has(/mode|v[eê]tement|bijou|cosm[eé]ti|beaut|d[eé]co|sport/i), ids: ["sh-avis", "sh-paniers"], reason: "Dans ce secteur, les avis et les relances de panier font la différence." },
  { match: has(/aliment|[eé]picerie|traiteur|vin|caf[eé]|th[eé]|bio|produits? locaux/i), ids: ["sh-retrait", "sh-livraison", "sh-abonnement"], reason: "Retrait, livraison souple et abonnements conviennent aux produits du quotidien." },
  { match: has(/artisan|personnalis|grav|sur[- ]mesure|cr[eé]ateur/i), ids: ["sh-perso"], reason: "Vos clients peuvent personnaliser leur commande." },
];

export function fallbackRecommend(input: RecommendInput): Recommendation[] {
  const catalog = catalogOf(input.project, input.domain, input.job);
  const known = new Set(catalog.map((o) => o.id));
  const text = `${input.activity} ${input.details}`;
  const out = new Map<string, string>();
  // Une règle qui cible une seule option garde sa raison propre au métier ; une règle qui en
  // cible plusieurs utilise la raison propre à chaque option (jamais la même phrase pour deux).
  const add = (ids: string[], reason: string) => {
    const usable = ids.filter((id) => known.has(id));
    usable.forEach((id) => {
      if (!out.has(id)) out.set(id, usable.length === 1 ? reason : (optionReason[id] ?? reason));
    });
  };

  if (input.project === "vitrine") {
    add(["wp-telephone"], "Vos clients vous appellent en un clic, sans supplément.");
    input.goals.forEach((g) => {
      const rule = vitrineGoalRules[g];
      if (!rule) return;
      // « demandes » : une seule option de contact (devis en priorité si le secteur s'y prête)
      const ids = g === "demandes" ? rule.ids.filter((id) => known.has(id)).slice(0, 1) : rule.ids;
      add(ids, rule.reason);
    });
    vitrineActivityRules.forEach((r) => r.match(text) && add(r.ids, r.reason));
  } else {
    input.goals.forEach((g) => ecomGoalRules[g] && add(ecomGoalRules[g].ids, ecomGoalRules[g].reason));
    ecomActivityRules.forEach((r) => r.match(text) && add(r.ids, r.reason));
  }
  return sanitizeRecommendations(
    [...out].map(([id, reason]) => ({ id, reason })),
    input.project,
    input.domain,
    input.job
  );
}

/** Garde uniquement les ids connus, sans doublon, sans options incompatibles, 8 maximum. */
export function sanitizeRecommendations(
  list: Recommendation[],
  project: RecommendInput["project"],
  domain?: string,
  job?: string
): Recommendation[] {
  const byId = new Map(catalogOf(project, domain, job).map((o) => [o.id, o]));
  // Le formulaire de devis remplace le formulaire de contact avancé quand les deux sont proposés.
  if (list.some((r) => r.id === "wp-devis")) list = list.filter((r) => r.id !== "wp-formulaire");
  const kept: Recommendation[] = [];
  const taken = new Set<string>();
  for (const item of list) {
    const option = byId.get(item.id);
    if (!option || taken.has(item.id)) continue;
    if (option.excludes?.some((id) => taken.has(id))) continue;
    taken.add(item.id);
    kept.push({ id: item.id, reason: String(item.reason ?? "").slice(0, 160) });
    if (kept.length >= 8) break;
  }
  return kept;
}

/**
 * Complète une sélection (IA ou règles) : chaque objectif coché doit être couvert par au moins
 * une option, et le contact par téléphone, inclus dans l'offre, est toujours présent.
 */
export function ensureGoalCoverage(list: Recommendation[], input: RecommendInput): Recommendation[] {
  const rules = input.project === "vitrine" ? vitrineGoalRules : ecomGoalRules;
  const known = new Set(catalogOf(input.project, input.domain, input.job).map((o) => o.id));
  const out = [...list];
  const have = new Set(out.map((r) => r.id));
  for (const goal of input.goals) {
    const rule = rules[goal];
    const ids = rule?.ids.filter((id) => known.has(id)) ?? [];
    if (!rule || !ids.length || ids.some((id) => have.has(id))) continue;
    out.push({ id: ids[0], reason: optionReason[ids[0]] ?? rule.reason });
    have.add(ids[0]);
  }
  if (input.project === "vitrine" && known.has("wp-telephone") && !have.has("wp-telephone")) {
    out.unshift({ id: "wp-telephone", reason: "Vos clients vous appellent en un clic, sans supplément." });
  }
  return sanitizeRecommendations(out, input.project, input.domain, input.job);
}

/** Vrai si le domaine a une liste d'options définie : les règles suffisent, sans appel à l'IA. */
export function hasSectorRules(project: RecommendInput["project"], domain?: string) {
  return allowedOptionIds(project, domain) !== null;
}

/** Recommandations déterministes (règles + objectifs), instantanées et gratuites. */
export function ruleBasedRecommend(input: RecommendInput): Recommendation[] {
  return ensureGoalCoverage(fallbackRecommend(input), input);
}
