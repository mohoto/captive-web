"use client";

import { PricingCard } from "@/components/blocks/pricing-card";
import { Basket } from "@phosphor-icons/react";

export function PricingCardEcom() {
  return (
    <PricingCard
      title="Site e-commerce"
      description="Commerçants et marques qui vendent en ligne"
      highlight="Livré en 7 jours"
      icon={Basket}
      iconTone="bg-captive-violet/10 text-captive-violet"
      price="590"
      features={[
        {
          title: "Inclus",
          items: [
            "Site adapté à votre activité et à vos couleurs",
            "4 pages : accueil, catégories, produit, panier",
            "Configuration Shopify incluses",
            "Configuration des cartes cadeaux",
            "Référencement de votre site sur Google",
          ],
        },
        {
          title: "A votre charge",
          items: [
            "Nom de domaine : 10\u00a0€/an",
            "Abonnement Shopify : 33 €/mois ou 29 €/mois pour un paiement annuel",
          ],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}
