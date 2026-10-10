"use client";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import HypeSite from "@/public/images/home/sites-web/realisation-hype.webp";
import SiaySite from "@/public/images/home/sites-web/realisation-siay.webp";
import ZoraSite from "@/public/images/home/sites-web/realisation-zora.webp";
import TerreDeParfumsSite from "@/public/images/home/sites-web/realisation-terre-de-parfums.webp";

const realisations = [
  {
    name: "SIAY",
    url: "siay-co.com",
    href: "https://siay-co.com/",
    image: SiaySite,
    alt: "Page d'accueil de la boutique en ligne de vêtements SIAY",
    description:
      "Une boutique en ligne à l'image de la marque : élégante, moderne, avec un parcours d'achat fluide qui met en valeur les collections.",
  },
  {
    name: "Hype Auto Moto École",
    url: "hype-autoecole.fr",
    href: "https://hype-autoecole.fr/",
    image: HypeSite,
    alt: "Page d'accueil du site de l'auto-moto école Hype à Bagneux",
    description:
      "Le site d'une auto-moto école de Bagneux (92) : ses formations auto, moto et scooter, son accompagnement et un blog pour guider les élèves dans leurs démarches.",
  },
  {
    name: "Zora Kinésiologie",
    url: "zora-kinesiologie.fr",
    href: "https://zora-kinesiologie.fr/",
    image: ZoraSite,
    alt: "Page d'accueil du site de la kinésiologue Zora Kinésiologie à Paris 14e",
    description:
      "Un site apaisant pour une kinésiologue du 14e arrondissement de Paris : sa démarche, la kinésiologie expliquée simplement et la prise de rendez-vous en un clic.",
  },
  {
    name: "Terre de Parfums",
    url: "terre-de-parfums.com",
    href: "https://terre-de-parfums.com/",
    image: TerreDeParfumsSite,
    alt: "Page d'accueil de la boutique en ligne de parfums testeurs Terre de Parfums",
    description:
      "Une boutique en ligne de parfums testeurs officiels de grandes maisons : un catalogue soigné, un panier simple et un paiement sécurisé.",
  },
];

const navButtonClass =
  "flex h-12 w-12 items-center justify-center rounded-full bg-captive-secondary text-white transition-colors hover:bg-captive-blue disabled:pointer-events-none disabled:opacity-40";

function Realisations() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCanPrev(api.canScrollPrev());
      setCanNext(api.canScrollNext());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  return (
    <section className="bg-captive-primary px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 flex items-end justify-between gap-6 lg:mb-16">
          <div>
            <h2 className="mb-0 max-w-2xl">
              Des sites web faits{" "}
              <span className="text-captive-blue">sur mesure</span> pour chaque
              client
            </h2>
            <p className="mt-4 mb-0 max-w-xl text-lg text-neutral-900/70">
              Voici quelques sites que nous avons conçus et mis en ligne.
              Cliquez pour les visiter en direct.
            </p>
          </div>
          <div className="hidden shrink-0 gap-3 sm:flex">
            <button
              type="button"
              aria-label="Site précédent"
              disabled={!canPrev}
              onClick={() => api?.scrollPrev()}
              className={navButtonClass}
            >
              <ArrowLeft className="h-5 w-5" weight="bold" />
            </button>
            <button
              type="button"
              aria-label="Site suivant"
              disabled={!canNext}
              onClick={() => api?.scrollNext()}
              className={navButtonClass}
            >
              <ArrowRight className="h-5 w-5" weight="bold" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start" }}
          aria-label="Sites réalisés"
        >
          <CarouselContent className="-ml-4 lg:-ml-7">
            {realisations.map((realisation) => (
              <CarouselItem
                key={realisation.name}
                className="pl-4 lg:basis-1/3 lg:pl-7"
              >
                <a
                  href={realisation.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  aria-label={`Visiter le site ${realisation.name} (${realisation.url}) dans un nouvel onglet`}
                >
                  <div className="overflow-hidden rounded-2xl border border-captive-secondary/10 bg-white">
                    <div className="flex items-center gap-3 border-b border-captive-secondary/10 px-4 py-3">
                      <span className="flex gap-1.5" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-captive-secondary/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-captive-secondary/15" />
                        <span className="h-2.5 w-2.5 rounded-full bg-captive-secondary/15" />
                      </span>
                      <span className="min-w-0 flex-1 truncate rounded-full bg-captive-primary px-3 py-1 text-center text-xs text-neutral-900/60">
                        {realisation.url}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <Image
                        src={realisation.image}
                        alt={realisation.alt}
                        className="aspect-[5/3] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes="(min-width: 1024px) 30vw, 100vw"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {realisation.name}
                    </h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-captive-secondary/20 text-captive-secondary transition-colors duration-200 group-hover:border-captive-secondary group-hover:bg-captive-secondary group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" weight="bold" />
                    </span>
                  </div>
                  <p className="mt-2 mb-0 max-w-sm text-neutral-900/70">
                    {realisation.description}
                  </p>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Site précédent"
              disabled={!canPrev}
              onClick={() => api?.scrollPrev()}
              className={navButtonClass}
            >
              <ArrowLeft className="h-5 w-5" weight="bold" />
            </button>
            <button
              type="button"
              aria-label="Site suivant"
              disabled={!canNext}
              onClick={() => api?.scrollNext()}
              className={navButtonClass}
            >
              <ArrowRight className="h-5 w-5" weight="bold" />
            </button>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Realisations;
