import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IoHomeOutline, IoShirtOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

import NestRenovSite from "@/public/images/home/sites-web/NEST_RENOVE_site_web.png";
import MakenergySite from "../../../public/images/home/sites-web/MAK-ENERGY-site-web.png";
import ParisianSite from "../../../public/images/home/sites-web/PARISIAN-MODE_site_web.png";
import SiaySite from "../../../public/images/home/sites-web/SIAY-site-web.png";

function Realisations() {
  return (
    <section className="py-12 px-8 lg:px-32">
      <div className="container">
        <div className="flex items-center flex-col">
          <span className="text-captive-secondary text-center font-semibold text-md">
            NOS RÉALISATIONS
          </span>
          <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold text-center lg:px-48 2xl:px-64 xl:leading-12 mb-28">
            Des sites web faits sur mesure pour chaque client
          </h2>
        </div>
        <div className="">
          <Carousel className="w-full">
            <CarouselPrevious className="-top-10 xl:left-0 left-0" />
            <CarouselNext className="-top-10 xl:left-16 left-16" />
            <CarouselContent>
              <CarouselItem className="lg:basis-1/3 px-8">
                <div className="!border-0 shadow-none">
                  <div className="flex aspect-square items-center justify-center p-0">
                    <div className="w-full max-w-md h-[350px] overflow-hidden group relative rounded">
                      <div className="absolute inset-0 overflow-y-scroll max-h-full group-hover:animate-scroll-image">
                        <Image
                          src={SiaySite}
                          alt="Illustration création site web SIAY"
                          className="w-full shadow-md"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-captive-primary rounded-lg">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <IoShirtOutline className="h-5 w-5" />
                        <h3 className="font-bold text-2xl">SIAY</h3>
                      </div>
                      <p className="mb-6">
                        Nous avons créé pour SIAY une boutique en ligne à
                        l’image de leur marque : élégante, moderne et un style
                        propre à la marque. Le site met en valeur leurs
                        collections et leurs produits avec de belles photos et
                        un parcours d’achat fluide, pour offrir une expérience
                        agréable à leurs clientes.
                      </p>
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-captive-secondary hover:text-white transition-all duration-75 ease-in-out">
                        <Link
                          href="https://siay-co.com/"
                          className="text-md"
                          target="blank"
                        >
                          siay-co.com
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 px-8">
                <div className="!border-0 shadow-none">
                  <div className="flex aspect-square items-center justify-center p-0">
                    <div className="w-full max-w-md h-[350px] overflow-hidden group relative rounded">
                      <div className="absolute inset-0 overflow-y-scroll max-h-full group-hover:animate-scroll-image">
                        <Image
                          src={MakenergySite}
                          alt="Illustration création site web SIAY"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-captive-primary rounded-lg">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <IoHomeOutline className="h-5 w-5" />
                        <h3 className="font-bold text-2xl">MAK ENERGY</h3>
                      </div>
                      <p className="mb-6">
                        Nous avons conçu pour Mak Energy un site clair et
                        rassurant, en valorisant leurs services d&#39;éradiction
                        et d&#39;éxermination de nuisibles avec des visuels
                        professionnels, une navigation intuitive et une mise en
                        avant des engagements pour inspirer confiance aux
                        particuliers et aux professionnels.
                      </p>
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-captive-secondary hover:text-white transition-all duration-75 ease-in-out">
                        <Link
                          href="https://www.makenergy-nuisibles.fr/"
                          className="text-md"
                          target="blank"
                        >
                          makenergy-nuisibles.fr
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 px-8">
                <div className="!border-0 shadow-none">
                  <div className="flex aspect-square items-center justify-center p-0">
                    <div className="w-full max-w-md h-[350px] overflow-hidden group relative rounded">
                      <div className="absolute inset-0 overflow-y-scroll max-h-full group-hover:animate-scroll-image">
                        <Image
                          src={NestRenovSite}
                          alt="Illustration création site web SIAY"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-captive-primary rounded-lg">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <VscTools className="h-5 w-5" />
                        <h3 className="font-bold text-2xl">NEST RENOVE</h3>
                      </div>
                      <p className="mb-6">
                        Nous avons créé pour SIAY une boutique en ligne à
                        l’image de leur marque : élégante, moderne et un style
                        propre à la marque. Le site met en valeur leurs
                        collections et leurs produits avec de belles photos et
                        un parcours d’achat fluide, pour offrir une expérience
                        agréable à leurs clientes.
                      </p>
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-captive-secondary hover:text-white transition-all duration-75 ease-in-out">
                        <Link
                          href="https://thermostat-landing-cbetrtuqt-mohotos-projects.vercel.app/"
                          className="text-md"
                          target="blank"
                        >
                          nest-renove.fr
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="lg:basis-1/3 px-8">
                <div className="!border-0 shadow-none">
                  <div className="flex aspect-square items-center justify-center p-0">
                    <div className="w-full max-w-md h-[350px] overflow-hidden group relative rounded">
                      <div className="absolute inset-0 overflow-y-scroll max-h-full group-hover:animate-scroll-image">
                        <Image
                          src={ParisianSite}
                          alt="Illustration création site web SIAY"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-captive-primary rounded-lg">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <IoShirtOutline className="h-5 w-5" />
                        <h3 className="font-bold text-2xl">PARISIAN MODE</h3>
                      </div>
                      <p className="mb-6">
                        Nous avons conçu pour Parisian Mode une boutique en
                        ligne chic et intemporelle, parfaitement alignée avec
                        l’esprit "parisienne-bohème". Le site met en valeur une
                        sélection de vêtements et accessoires grâce des visuels
                        élégants et une interface pensée pour inspirer confiance
                        et faciliter l’achat.
                      </p>
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-captive-secondary hover:text-white transition-all duration-75 ease-in-out">
                        <Link
                          href="https://parisian-mode.fr/,"
                          className="text-md"
                          target="blank"
                        >
                          parisian-mode.fr
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default Realisations;
