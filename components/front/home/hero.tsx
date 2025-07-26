import Image from "next/image";
import heroImage from "../../../public/images/home/captive_agence_web_services.png";

type Props = {};

function Hero({}: Props) {
  return (
    <section className="pt-10 lg:pt-16 pb-10 px-8 lg:px-32 bg-captive-primary">
      <div className="container grid lg:grid-cols-2 2xl:gap-x-12 3xl:gap-x-20 gap-y-12 lg:gap-y-0 items-center">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <h1 className="2xl:text-4xl font-bold mb-8 lg:text-4xl text-4xl bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent xl:leading-12">
            Boostez votre business avec un site web prêt à l’emploi
          </h1>
          <p className="mb-6 text-lg font-light">
            Agence leader en création de site web et gestion de publicités sur
            le web pour les professionnels.
          </p>
          {/* <div className="flex gap-5 mt-10">
            <FaWordpress className="h-16 w-16 text-stone-300" />
            <FaShopify className="h-16 w-16 text-stone-300" />
            <RiNextjsFill className="h-16 w-16 text-stone-300" />
          </div> */}
          <div></div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-end">
          <Image
            src={heroImage}
            alt="Agence Shikam création site web et marketing digital"
            className="rounded-full lg:w-10/12"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
