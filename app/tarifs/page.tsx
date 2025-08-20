import { Metadata } from "next";
import { PricingCardApp } from "./pricing-card-app";
import { PricingCardEcom } from "./pricing-card-ecom";
import { PricingCardVitrine } from "./pricing-card-vitrine";

export const metadata: Metadata = {
  title: "Tarifs Création Site Web | Prix Transparent - Captive Web",
  description: "Découvrez nos tarifs transparents pour la création de sites web. Site vitrine, e-commerce, application web. Devis personnalisé gratuit par Captive Web.",
};

function Page() {
  return (
    <section className="mb-20 px-8 lg:px-32">
      <PricingCardVitrine />
      <PricingCardEcom />
      <PricingCardApp />
    </section>
  );
}

export default Page;
