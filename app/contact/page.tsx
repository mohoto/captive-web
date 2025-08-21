import { Contact2 } from "@/components/blocks/contact-2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Captive Web | Devis Gratuit Création Site Web",
  description: "Contactez Captive Web pour votre projet de site web. Devis gratuit et personnalisé. Créateur de sites vitrine, e-commerce et applications web.",
  robots: {
    index: true,
    follow: false,
  },
  // Optimisations SEO supplémentaires
  keywords: "contact captive web, devis site web cachan, agence web 94230, création site internet contact",
  openGraph: {
    title: "Contact Captive Web | Devis Gratuit",
    description: "Contactez notre agence web à Cachan pour votre projet. Devis gratuit sous 24h.",
    url: "https://captive-web.fr/contact",
    type: "website",
    locale: "fr_FR",
  },
  alternates: {
    canonical: "https://captive-web.fr/contact",
  },
};

const Page = () => {
  return (
    <>
      <Contact2
        title="Nous contacter"
        description="Nous sommes disponibles pour répondre à vos questions, recueillir vos retours ou étudier toute opportunité de collaboration. Dites-nous comment nous pouvons vous aider !"
        phone="+ 33 7 57 83 71 10"
        email="email@example.com"
      />
    </>
  );
};

export default Page;
