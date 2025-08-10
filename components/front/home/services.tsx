import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import ServicesImage from "../../../public/images/home/captive-web_sites_web.png";

function Services() {
  return (
    <section className="lg:px-32 px-8 bg-captive-primary py-16">
      <div className="container">
        <div className="flex items-center flex-col">
          <span className="heading__span">
            AGENCE WEB POUR LES PROS
          </span>
          <h2 className="heading__center">
            Votre site web clé en main
          </h2>
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="grid lg:grid-cols-2 place-items-center lg:gap-x-12">
            <div className="justify-self-end order-1 lg:order-2">
              <Image
                src={ServicesImage}
                alt="Agence Shikam publicité sur les réseaux sociaux"
                className="rounded-xl"
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="order-2 lg:order-1">
              <h3 className="lg:text-2xl mb-6 font-semibold text-xl">
                De la conception à la mise en ligne, on s’occupe de tout pour
                votre site web
              </h3>
              <p className="text-lg">
                Nous concevons, nous développons et on mettons en ligne votre
                site sans que vous ayez à vous en soucier. Concentrez-vous sur
                votre activité, on s’occupe du reste.
              </p>
              <div className="grid md:grid-cols-2 mt-10">
                <ul>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">Site web vitrine</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">Site web e-commerce</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">
                      Site personnalisé/plateforme
                    </p>
                  </li>
                </ul>
                <ul>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">Adapté à votre activité</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">Adapté au mobile</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="text-lg !mb-0">Reférencé sur Google</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
