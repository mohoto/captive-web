import {
  ArrowRight,
  Basket,
  Check,
  DeviceMobile,
  Monitor,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const offres = [
  {
    icon: Monitor,
    title: "Site web vitrine",
    cible: "Artisans, indépendants et professions libérales",
    price: "590\u00a0€",
    priceLabel: "À partir de",
    href: "/site-vitrine",
    dark: true,
    iconColor: "text-captive-blue",
    features: [
      "Site adapté à votre activité et à vos couleurs",
      "5 pages statiques : accueil, à propos, 3 pages services",
      "Formulaire de contact",
      "Nom de domaine et hébergement pour la première année",
      "Référencement de votre site sur Google",
    ],
  },
  {
    icon: Basket,
    title: "Site e-commerce",
    cible: "Commerçants et marques qui vendent en ligne",
    price: "590\u00a0€",
    priceLabel: "À partir de",
    href: "/e-commerce",
    dark: true,
    iconColor: "text-captive-violet",
    features: [
      "Site adapté à votre activité et à vos couleurs",
      "4 pages : accueil, catégories, produit, panier",
      "Configuration Shopify incluses",
      "Référencement de votre site sur Google",
    ],
  },
  {
    icon: DeviceMobile,
    title: "Application web",
    cible: "TPE/PME aux besoins sur mesure",
    price: "Sur devis",
    priceLabel: "Tarif",
    href: "/application-web",
    dark: false,
    iconColor: "text-captive-blue",
    features: [
      "Plateforme e-learning, marketplace, SaaS",
      "Système de réservation ou de planning",
      "Application métier ou communautaire",
      "UX poussée et interactions temps réel",
    ],
  },
];

function PricingWebSite() {
  return (
    <section className="px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid items-end gap-4 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <h2 className="mb-0 max-w-2xl">
            Une offre <span className="text-captive-blue">adaptée</span> à
            votre activité, pour propulser votre visibilité en ligne
          </h2>
          <p className="mb-0 max-w-md text-lg text-neutral-900/70">
            Du site vitrine à l&apos;application sur mesure, choisissez la
            formule qui vous correspond. Les prix sont affichés d&apos;emblée,
            sans mauvaise surprise.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {offres.map((offre) => {
            const Icon = offre.icon;
            const dark = offre.dark;
            return (
              <div
                key={offre.title}
                className={`flex h-full flex-col rounded-2xl p-7 lg:p-8 ${
                  dark
                    ? "bg-captive-secondary text-white shadow-md"
                    : "border border-captive-secondary/15 bg-captive-primary text-neutral-900"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      dark ? "bg-white" : "bg-captive-blue/10"
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${offre.iconColor}`} weight="bold" />
                  </span>
                  <div>
                    <h3 className="text-xl leading-tight font-bold">
                      {offre.title}
                    </h3>
                    <p
                      className={`mt-1 mb-0 text-sm leading-snug ${
                        dark ? "text-white/65" : "text-neutral-900/60"
                      }`}
                    >
                      {offre.cible}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-7 mb-7 border-y py-6 ${
                    dark ? "border-white/15" : "border-captive-secondary/15"
                  }`}
                >
                  <span
                    className={`block text-sm ${
                      dark ? "text-white/65" : "text-neutral-900/60"
                    }`}
                  >
                    {offre.priceLabel}
                  </span>
                  <span
                    className={`flex h-12 items-end font-bold tracking-tight ${
                      offre.price.includes("€") ? "text-5xl" : "text-3xl"
                    }`}
                  >
                    <span className="leading-none">{offre.price}</span>
                  </span>
                </div>

                <ul className="m-0 mb-9 flex-grow list-none space-y-3.5 p-0">
                  {offre.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          dark ? "bg-captive-blue" : "bg-captive-blue/10"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            dark ? "text-white" : "text-captive-blue"
                          }`}
                          weight="bold"
                        />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          dark ? "text-white/85" : "text-neutral-900/80"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={offre.href}
                  className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-center font-semibold transition-colors duration-200 ${
                    dark
                      ? "bg-white text-captive-secondary hover:bg-captive-primary"
                      : "bg-captive-secondary text-white hover:bg-captive-secondary-hover"
                  }`}
                >
                  Découvrir cette offre
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    weight="bold"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingWebSite;
