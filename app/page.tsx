import Banner from "@/components/front/home/banner";
import Faq from "@/components/front/home/faq";
import GoogleBusiness from "@/components/front/home/googleBusiness";
import Hero from "@/components/front/home/hero";
import Icons from "@/components/front/home/icons";
import Introduction from "@/components/front/home/introduction";
import PricingWebSite from "@/components/front/home/pricingWebSite";
import Realisations from "@/components/front/home/realisations";
import Services from "@/components/front/home/services";

export default function Page() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Services />
      <Icons />
      <PricingWebSite />
      <Realisations />
      <GoogleBusiness />
      <Banner />
      <Faq />
      {/* <OrderwWebSite /> */}
    </main>
  );
}
