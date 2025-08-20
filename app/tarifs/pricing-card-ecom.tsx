"use client";

import { PricingCard } from "@/components/blocks/pricing-card";

export function PricingCardEcom() {
  return (
    <PricingCard
      title="Site e-commerce"
      description="Création de votre site web vitrine en moins de 15 jours"
      price="1 800"
      note="OFFERT : configuration de votre compte Google My Business pour aumente votre visibilité dans les recherches locales sur Google."
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
          items: ["Nom de domaine : 10€/an", "Abonnement Shopify : 33 €/mois ou 29 €/mois pour un paiement annuel"],
        },
      ]}
      buttonText="Get Started"
      onButtonClick={() => console.log("Button clicked")}
    />
  );
}
