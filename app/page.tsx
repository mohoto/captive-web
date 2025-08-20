import Avantages from "@/components/front/home/avantages";
import Banner from "@/components/front/home/banner";
import FaqDemo from "@/components/front/home/faqDemo";
import GoogleBusiness from "@/components/front/home/googleBusiness";
import Hero from "@/components/front/home/hero";
import Introduction from "@/components/front/home/introduction";
import MyAnimatedTestimonials from "@/components/front/home/myAnimatedTestimonials";
import PricingWebSite from "@/components/front/home/pricingWebSite";
import Realisations from "@/components/front/home/realisations";
import Services from "@/components/front/home/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Captive Web - Création sites web | Vitrine, E-commerce, Apps",
  description: "Captive Web crée votre site vitrine, e-commerce ou application web sur mesure. Solutions clé en main pour artisans, commerçants, TPE/PME. Devis gratuit.",
};

export default function Page() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      {/* <Icons /> */}
      <PricingWebSite />
      <Realisations />
      <Avantages />
      <GoogleBusiness />
      <MyAnimatedTestimonials />
      <Banner />
      <FaqDemo />
      {/* <OrderwWebSite /> */}
    </main>
  );
}
