import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

import HypeSite from "@/public/images/home/sites-web/realisation-hype.webp";
import SiaySite from "@/public/images/home/sites-web/realisation-siay.webp";
import ZoraSite from "@/public/images/home/sites-web/realisation-zora.webp";

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
];

function Realisations() {
  return (
    <section className="bg-captive-primary px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 grid items-end gap-4 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <h2 className="mb-0 max-w-2xl">
            Des sites web faits{" "}
            <span className="text-captive-blue">sur mesure</span> pour chaque
            client
          </h2>
          <p className="mb-0 max-w-md text-lg text-neutral-900/70">
            Voici quelques sites que nous avons conçus et mis en ligne.
            Cliquez pour les visiter en direct.
          </p>
        </div>

        <ul className="m-0 grid list-none gap-8 p-0 lg:grid-cols-3 lg:gap-7">
          {realisations.map((realisation, index) => (
            <li
              key={realisation.name}
              className={index === 1 ? "lg:mt-10" : undefined}
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Realisations;
