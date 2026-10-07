"use client";

import { PricingCard } from "@/components/blocks/pricing-card";
import { Monitor } from "@phosphor-icons/react";

export function PricingCardVitrine() {
  return (
    <PricingCard
      title="Site web vitrine"
      description="Artisans, indépendants, professions libérales et TPE/PME"
      highlight="Livré en 7 jours"
      icon={Monitor}
      price="590"
      features={[
        {
          title: "Inclus",
          items: [
            "Site adapté à votre activité et à vos couleurs",
            "5 pages statiques : accueil, à propos, 3 pages services",
            "Formulaire de contact",
            "Nom de domaine et hébergement pour la première année",
            "Référencement de votre site sur Google",
          ],
        },
        {
          title: "A votre charge",
          items: [
            "À partir de la 2e année : nom de domaine 10\u00a0€/an",
            "À partir de la 2e année : hébergement WordPress 40\u00a0€/an",
          ],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}
