"use client";

import { PricingCard } from "@/components/blocks/pricing-card";

export function PricingCardBasic() {
  return (
    <PricingCard
      title="Site e-commerce"
      description="Votre Boutique en ligne"
      price={1200}
      originalPrice={199}
      features={[
        {
          title: "Inclus",
          items: [
            "4 pages : page d'accueil, pages catégories, page produit, page panier",
            "Référencement du nom de votre entreprise sur Google",
            "Formation sur Shopify pour la gestion de votre boutique",
            "Formulaire de contact",
            "Configuration de la plateforme shopify",
          ],
        },
        {
          title: "A votre charge",
          items: ["Nom de domaine : 10€/an", "Abonnement Shopify : 25 €/mois"],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}
