import Image from "next/image";
import heroImage from "../../../public/images/home/captive_agence_web_services.png";

function Hero() {
  return (
    <section className="py-10 px-8 lg:px-32 bg-captive-secondary">
      <div className="container grid lg:grid-cols-2 2xl:gap-x-12 3xl:gap-x-20 gap-y-6 lg:gap-y-0 items-center">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <h1 className="2xl:text-4xl font-bold mb-8 lg:text-4xl text-4xl text-white xl:leading-12">
            Boostez votre business avec un site web prêt à l’emploi
          </h1>
          <p className="mb-6 text-lg font-light text-gray-50">
            Nous concevons des sites web efficaces, accessibles et pensés pour faire
            grandir votre entreprise.
          </p>
          {/* <div className="flex gap-5 mt-10">
            <FaWordpress className="h-16 w-16 text-stone-300" />
            <FaShopify className="h-16 w-16 text-stone-300" />
            <RiNextjsFill className="h-16 w-16 text-stone-300" />
          </div> */}
          <div></div>
        </div>
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center">
          <Image
            src={heroImage}
            alt="Agence Shikam création site web et marketing digital"
            className="lg:w-[70%] w-full object-contain"
            width={800}
            height={800}
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
