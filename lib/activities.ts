import type { ProjectType } from "@/lib/pricing";

export const OTHER_JOB = "Autre (à préciser)";
export const OTHER_DOMAIN = "Autre domaine";

export type ActivityDomain = { id: string; label: string; jobs: string[] };

const collator = new Intl.Collator("fr", { sensitivity: "base" });
const sortFr = (list: string[]) => [...list].sort(collator.compare);

function build(raw: Record<string, string[]>): ActivityDomain[] {
  const domains = Object.keys(raw)
    .sort(collator.compare)
    .map((label) => ({ id: label, label, jobs: [...sortFr(raw[label]), OTHER_JOB] }));
  return [...domains, { id: OTHER_DOMAIN, label: OTHER_DOMAIN, jobs: [OTHER_JOB] }];
}

const professionalDomains = build({
  "Agriculture, élevage et producteurs locaux": [
    "Agriculteur", "Apiculteur", "Aquaculteur", "Arboriculteur", "Éleveur", "Maraîcher",
    "Pépiniériste", "Producteur de fromage", "Producteur de fruits et légumes", "Producteur de miel",
    "Producteur local", "Viticulteur / vigneron", "Horticulteur", "Brasseur artisanal", "Cidriculteur",
  ],
  "Alimentation et métiers de bouche": [
    "Boucher-charcutier", "Boulanger-pâtissier", "Caviste", "Chocolatier", "Confiseur", "Cuisinier à domicile",
    "Épicerie fine", "Fromager / crémier", "Glacier", "Pâtissier", "Poissonnier", "Primeur", "Torréfacteur",
    "Traiteur", "Épicerie de quartier", "Producteur de vin", "Salon de thé",
  ],
  "Architecture, immobilier et diagnostic": [
    "Agence immobilière", "Agent immobilier indépendant", "Architecte", "Architecte d'intérieur",
    "Chasseur immobilier", "Décorateur d'intérieur", "Diagnostiqueur immobilier", "Économiste de la construction",
    "Géomètre-expert", "Gestionnaire de biens / syndic", "Home stager", "Maître d'œuvre", "Promoteur immobilier",
    "Bureau d'études",
  ],
  "Artisanat d'art et création": [
    "Bijoutier-joaillier", "Brodeur", "Céramiste / potier", "Couturier / retoucheur", "Doreur", "Ébéniste",
    "Encadreur", "Ferronnier d'art", "Fleuriste", "Horloger", "Illustrateur", "Luthier", "Maroquinier",
    "Restaurateur d'art", "Sculpteur", "Tapissier", "Verrier / maître verrier", "Créateur de mode",
    "Fabricant de bougies", "Tailleur de pierre", "Calligraphe", "Savonnier artisanal",
  ],
  "Associations et organisations": [
    "Association culturelle", "Association de quartier", "Association humanitaire / caritative",
    "Association sportive", "Club de loisirs", "Collectivité / mairie", "Comité des fêtes", "Fédération",
    "Fondation", "Syndicat professionnel", "Club service", "Association étudiante", "Paroisse / association cultuelle",
  ],
  "Automobile, moto et transport": [
    "Auto-école", "Carrossier", "Centre de contrôle technique", "Concessionnaire", "Dépanneur / remorquage",
    "Garagiste / mécanicien", "Lavage auto / detailing", "Location de véhicules",
    "Mécanicien moto", "Moniteur de conduite", "Pneumaticien", "Taxi / VTC", "Transporteur / livreur",
    "Vendeur de véhicules d'occasion", "Ambulancier", "Déménageur", "Location de camions",
  ],
  "Bâtiment et travaux": [
    "Carreleur", "Chauffagiste", "Charpentier", "Climaticien", "Couvreur / zingueur", "Électricien",
    "Entreprise de rénovation", "Façadier", "Installateur de panneaux solaires", "Installateur de cuisines",
    "Isolation / ravalement", "Maçon", "Menuisier", "Peintre en bâtiment", "Plâtrier-plaquiste", "Plombier",
    "Serrurier", "Terrassier", "Vitrier", "Installateur d'alarmes / sécurité", "Poseur de parquet / sols",
    "Constructeur de piscines", "Installateur de portails / clôtures", "Ramoneur", "Multi-services / bricoleur",
  ],
  "Beauté, coiffure et bien-être": [
    "Barbier", "Coiffeur / coiffeuse", "Coiffeur à domicile", "Esthéticienne", "Institut de beauté",
    "Maquilleuse", "Masseur / praticien bien-être", "Naturopathe", "Onglerie / prothésiste ongulaire",
    "Réflexologue", "Salon de tatouage / tatoueur", "Sophrologue", "Spa / hammam", "Studio de yoga / pilates",
    "Hypnothérapeute", "Coach en développement personnel", "Épilation / laser", "Perruquier",
  ],
  "Commerce de détail": [
    "Animalerie", "Bijouterie", "Boutique de cadeaux", "Boutique de vêtements", "Brocante / antiquités",
    "Cordonnerie / clés minute", "Fleuriste", "Jardinerie", "Librairie", "Magasin de bricolage / quincaillerie",
    "Magasin de jouets", "Magasin de sport", "Opticien", "Papeterie", "Parfumerie", "Magasin bio",
    "Magasin de téléphonie", "Magasin d'ameublement", "Dépôt-vente / friperie", "Magasin de musique",
  ],
  "Communication, marketing et création": [
    "Agence de communication", "Attaché de presse", "Community manager", "Consultant marketing",
    "Designer / designer produit", "Graphiste", "Imprimeur", "Monteur vidéo", "Photographe",
    "Photographe de mariage", "Rédacteur / copywriter", "Traducteur / interprète", "Vidéaste",
    "Webdesigner", "Studio d'enregistrement", "Illustrateur / motion designer", "Agence événementielle",
  ],
  "Conseil, droit et finance": [
    "Agent d'assurance", "Avocat", "Banquier / conseiller financier", "Commissaire de justice (huissier)",
    "Conseil en gestion", "Conseiller en gestion de patrimoine", "Consultant indépendant", "Courtier en assurance",
    "Courtier en prêts", "Cabinet de recrutement", "Coach professionnel", "Expert-comptable", "Notaire",
    "Mandataire judiciaire", "Médiateur", "Détective privé", "Consultant RH", "Conseiller en formalités d'entreprise",
  ],
  "Éducation et formation": [
    "Centre de formation", "Cours de danse", "Cours de langues", "Cours de musique / conservatoire",
    "Cours particuliers / soutien scolaire", "Crèche / micro-crèche", "École de conduite", "École privée",
    "Formateur indépendant", "Préparation aux concours", "Centre de loisirs / colonie", "Assistante maternelle",
    "École de cuisine", "Organisme de formation professionnelle", "Coach scolaire",
  ],
  "Hôtellerie, restauration et tourisme": [
    "Agence de voyage", "Bar / pub", "Brasserie", "Café", "Camping", "Chambre d'hôtes", "Food truck",
    "Gîte / location saisonnière", "Guide touristique", "Hôtel", "Location de vacances", "Office de tourisme",
    "Pizzeria", "Restaurant", "Restaurant rapide / snacking", "Auberge / gîte d'étape", "Péniche / bateau de location",
    "Salon de thé", "Domaine de mariage / salle de réception", "Bar à vin", "Écurie / ferme pédagogique",
  ],
  "Industrie, énergie et environnement": [
    "Atelier de mécanique / usinage", "Bureau d'études techniques", "Énergies renouvelables", "Entreprise de recyclage",
    "Fabricant / manufacture", "Négociant / grossiste", "Imprimerie industrielle", "Menuiserie industrielle",
    "Entreprise de nettoyage industriel", "Gestion des déchets", "Maintenance industrielle", "Sous-traitant industriel",
    "Fabricant d'emballages",
  ],
  "Informatique et numérique": [
    "Agence web", "Consultant en cybersécurité", "Dépannage informatique", "Développeur freelance",
    "Éditeur de logiciels", "Hébergeur / infogérance", "Réparateur de téléphones / ordinateurs", "Start-up / SaaS",
    "Intégrateur / consultant ERP", "Formateur en informatique", "Boutique d'informatique", "Studio de jeux vidéo",
    "Spécialiste en réalité virtuelle",
  ],
  "Santé et paramédical": [
    "Audioprothésiste", "Chiropracteur", "Chirurgien-dentiste", "Diététicien-nutritionniste", "Ergothérapeute",
    "Infirmier libéral", "Kinésithérapeute", "Laboratoire d'analyses", "Médecin généraliste", "Médecin spécialiste",
    "Orthodontiste", "Orthophoniste", "Orthoptiste", "Ostéopathe", "Pédicure-podologue", "Pharmacien",
    "Psychologue", "Psychomotricien", "Psychothérapeute", "Radiologue", "Sage-femme", "Vétérinaire",
    "Aide à domicile / service à la personne", "Acupuncteur", "Cabinet d'ophtalmologie", "Centre de santé",
    "Maison de retraite / résidence senior", "Dermatologue",
  ],
  "Services aux particuliers et aux entreprises": [
    "Aide à domicile", "Conciergerie", "Coursier", "Dépannage à domicile", "Entreprise de nettoyage / ménage",
    "Garde d'animaux / pet-sitter", "Jardinier / paysagiste", "Organisateur de mariages", "Pompes funèbres",
    "Pressing / blanchisserie", "Secrétariat à distance", "Sécurité / gardiennage", "Toiletteur canin",
    "Services de déménagement", "Cours de cuisine à domicile", "Éducateur canin", "Débarras / vide-maison",
    "Photographe d'identité", "Assistance administrative", "Gestion de courrier / domiciliation",
  ],
  "Sport, loisirs et culture": [
    "Association sportive", "Centre équestre", "Cinéma", "Club de sport / salle de fitness", "Coach sportif",
    "Danseur / chorégraphe", "Escape game", "Guide de randonnée", "Musée / exposition", "Musicien / DJ",
    "Théâtre / compagnie", "École de danse", "Club de golf", "Salle d'escalade", "Parc de loisirs",
    "Billard / bowling", "École de plongée", "Salle de concert", "Artiste indépendant",
  ],
});

const shopDomains = build({
  "Alimentation et boissons": [
    "Café et thé", "Chocolats et confiseries", "Compléments alimentaires", "Épicerie fine", "Paniers et coffrets gourmands",
    "Pâtisserie et biscuits", "Produits bio", "Produits régionaux", "Vins et spiritueux", "Miel et produits de la ruche",
    "Bières artisanales", "Fromages et produits laitiers", "Huiles et condiments", "Plats cuisinés",
  ],
  "Animaux": ["Accessoires pour animaux", "Alimentation pour animaux", "Aquariophilie", "Jouets et paniers pour animaux", "Toilettage et soins"],
  "Art, décoration et maison": [
    "Art mural / affiches", "Bougies et parfums d'intérieur", "Décoration", "Linge de maison", "Luminaires",
    "Meubles", "Objets de décoration", "Papeterie et cadeaux", "Plantes et fleurs", "Vaisselle et arts de la table",
    "Tapis et textiles", "Rangement et organisation",
  ],
  "Artisanat et créations faites main": [
    "Bijoux faits main", "Cadeaux personnalisés", "Céramique", "Créations en bois", "Savons et cosmétiques artisanaux",
    "Textile et couture", "Maroquinerie artisanale", "Impression 3D / objets sur mesure", "Gravure et marquage",
  ],
  "Auto, moto et vélo": ["Accessoires automobiles", "Pièces détachées", "Vélos et accessoires", "Équipements moto", "Entretien et nettoyage auto"],
  "Beauté et bien-être": [
    "Cosmétiques naturels", "Maquillage", "Parfums", "Produits capillaires", "Soins du visage et du corps",
    "Compléments bien-être", "Huiles essentielles", "Accessoires de beauté", "Produits d'hygiène",
  ],
  "Bébé et enfants": ["Jeux et jouets", "Mobilier enfant", "Puériculture", "Vêtements enfants", "Fournitures scolaires", "Articles de fête et d'anniversaire"],
  "Bijoux et accessoires": ["Bijoux fantaisie", "Bijoux fins / joaillerie", "Lunettes", "Montres", "Sacs et accessoires", "Écharpes et chapeaux"],
  "Bricolage et jardin": ["Outillage", "Matériel de jardin", "Matériaux et quincaillerie", "Mobilier d'extérieur", "Piscines et spas", "Graines et plantes"],
  "Électronique et high-tech": ["Accessoires de téléphonie", "Gadgets connectés", "Informatique", "Audio et hi-fi", "Photo et vidéo", "Gaming", "Domotique"],
  "Livres, musique et loisirs": ["Instruments de musique", "Jeux de société", "Librairie / livres", "Loisirs créatifs", "Papeterie", "Vinyles et CD", "Jeux et puzzles", "Collections et objets de collection"],
  "Mode et vêtements": [
    "Chaussures", "Lingerie et maillots de bain", "Maroquinerie", "Mode enfant", "Mode femme", "Mode homme",
    "Seconde main / vintage", "Streetwear", "Vêtements de travail", "Mode de cérémonie / mariage", "Vêtements de sport",
  ],
  "Produits numériques et services en ligne": ["Billetterie et événements", "Formations en ligne", "Impression à la demande", "Produits numériques (ebooks, modèles)", "Abonnements et box"],
  "Santé et paramédical": ["Matériel médical", "Parapharmacie", "Optique", "Produits de premiers secours"],
  "Sport et plein air": ["Camping et randonnée", "Équipement de fitness", "Pêche et chasse", "Sports d'hiver", "Sports nautiques", "Vêtements de sport", "Sports collectifs", "Cyclisme"],
});

export function domainsFor(project: ProjectType): ActivityDomain[] {
  return project === "ecommerce" ? shopDomains : professionalDomains;
}
