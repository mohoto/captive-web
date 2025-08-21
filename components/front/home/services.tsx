import ServicesImage from "@/public/images/home/captive-web_sites_web.png";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineQrCode } from "react-icons/md";
import { PiDesktopTowerBold } from "react-icons/pi";

function Services() {
  return (
    <section className="lg:px-32 px-8 bg-captive-primary py-16">
      <div className="container">
        <div className="flex items-center flex-col">
          <span className="heading__span">
            POUR LES PROFESSIONNELS
          </span>
          <h2 className="heading__center">
            Votre site web clé en main
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-x-12">
          <div className="justify-self-center order-1 lg:order-2 lg:w-[80%]">
            <Image
              src={ServicesImage}
              alt="illustration de sites web"
              width={600}
              height={600}
              style={{
              maxWidth: "100%",
              height: "auto",
            }}
              priority
            />
          </div>
          <div className="order-2 lg:order-1">
            <div className="mb-12">
              <ul className="flex gap-2 lg:flex-row flex-col">
                <li className="py-1 w-full flex items-center gap-x-2 text-lg">
                  <PiDesktopTowerBold className="size-8 text-captive-blue"/>
                  Site web vitrine
                </li>
                <li className="py-1 w-full flex items-center gap-x-2 text-lg">
                  <BsCart4 className="size-8 text-captive-violet"/>
                  Site e-commerce
                </li>
                <li className="py-1 w-full flex items-center gap-x-2 text-lg">
                  <MdOutlineQrCode className="size-8 text-captive-ciel"/>
                  Application web
                </li>
              </ul>
              {/* <ul>
                <li className="py-1 w-full flex items-center gap-x-2">
                  <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                  <p className="!mb-0">Adapté à votre activité</p>
                </li>
                <li className="py-1 w-full flex items-center gap-x-2">
                  <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                  <p className="!mb-0">Adapté au mobile</p>
                </li>
                <li className="py-1 w-full flex items-center gap-x-2">
                  <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                  <p className="!mb-0">Reférencé sur Google</p>
                </li>
              </ul> */}
            </div>
            <h3 className="lg:text-xl mb-6 font-semibold text-xl">
              De la conception à la mise en ligne, nous gérons l&#39;intégralité de votre projet
            </h3>
            <p>
              Que vous soyez <span className="font-semibold">artisan, commerçant, indépendant, auto-entrepreneur ou dirigeant de PME/TPE</span>, nous prenons en charge intégralement la création et la mise en ligne de votre site web. Concentrez-vous sur votre cœur de métier, nous créons votre présence en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
