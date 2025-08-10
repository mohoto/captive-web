"use client";

import { PricingCard } from "@/components/blocks/pricing-card";

export function PricingCardVitrine() {
  return (
    <PricingCard
      title="Site web vitrine"
      description="Création de votre site web vitrine en moins de 15 jours"
      price="1 800"
      note="OFFERT : configuration de votre compte Google My Business pour aumente votre visibilité dans les recherches locales sur Google."
      originalPrice={199}
      features={[
        {
          title: "Inclus",
          items: [
            "5 pages statiques : Page accueil, à propos, 3 pages services",
            "Référencement du nom de votre entreprise sur Google",
            "Configuration des éléments techniques : nom de domaine, hébergement, sécurité (HTTPS)",
            "Formulaire de contact",
            "Mise en ligne",
          ],
        },
        {
          title: "A votre charge",
          items: ["Nom de domaine : 10€/an", "Hébergement Wordpress : 40 €/an"],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}
