"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image, { type StaticImageData } from "next/image";
import * as React from "react";

import ArtisansImage from "@/public/images/home/secteurs/secteur-artisans.webp";
import AssociationsImage from "@/public/images/home/secteurs/secteur-associations.webp";
import BeauteImage from "@/public/images/home/secteurs/secteur-beaute.webp";
import CommercesImage from "@/public/images/home/secteurs/secteur-commerces.webp";
import FormationImage from "@/public/images/home/secteurs/secteur-formation.webp";
import ProfessionsImage from "@/public/images/home/secteurs/secteur-professions.webp";
import RestaurationImage from "@/public/images/home/secteurs/secteur-restauration.webp";
import SanteImage from "@/public/images/home/secteurs/secteur-sante.webp";

type Secteur = {
  title: string;
  image: StaticImageData;
  alt: string;
  activites: string[];
};

const secteurs: Secteur[] = [
  {
    title: "Artisans et bâtiment",
    image: ArtisansImage,
    alt: "Un électricien souriant devant un tableau électrique ouvert, une tablette en main affichant le site de son entreprise, avec des cartes : prendre rendez-vous, demander un devis et un aperçu de site web",
    activites: [
      "Électricien",
      "Plombier",
      "Couvreur",
      "Chauffagiste",
      "Paysagiste",
      "Maçon",
      "Peintre en bâtiment",
      "Menuisier",
      "Serrurier",
    ],
  },
  {
    title: "Commerces et e-commerce",
    image: CommercesImage,
    alt: "Une fleuriste souriante dans sa boutique, une tablette en main affichant le site de sa boutique de fleurs, avec des cartes : commander en ligne, livraison à domicile et un aperçu de site web",
    activites: [
      "Fleuriste",
      "Boutique de mode",
      "Caviste",
      "Librairie",
      "Concept store",
      "Bijouterie",
      "Épicerie fine",
      "Producteur local",
    ],
  },
  {
    title: "Restauration et hôtellerie",
    image: RestaurationImage,
    alt: "Un restaurateur souriant dans son bistro, une tablette en main affichant le site de son restaurant, avec des cartes : réserver une table, voir la carte et un aperçu de site web",
    activites: [
      "Restaurant",
      "Boulangerie",
      "Traiteur",
      "Chambres d'hôtes",
      "Café",
      "Food truck",
      "Hôtel",
      "Gîte",
    ],
  },
  {
    title: "Santé et bien-être",
    image: SanteImage,
    alt: "Une kinésiologue souriante dans son cabinet lumineux, une tablette en main affichant le site de son cabinet, avec des cartes : prendre rendez-vous, nos soins et un aperçu de site web",
    activites: [
      "Kinésiologue",
      "Ostéopathe",
      "Psychologue",
      "Infirmier libéral",
      "Kinésithérapeute",
      "Naturopathe",
      "Dentiste",
      "Institut de massage",
    ],
  },
  {
    title: "Beauté et services à la personne",
    image: BeauteImage,
    alt: "Un barbier souriant dans son salon, une tablette en main affichant le site de son salon, avec des cartes : réserver un créneau, nos prestations et un aperçu de site web",
    activites: [
      "Barbier",
      "Coiffeur",
      "Esthéticienne",
      "Onglerie",
      "Garde d'enfants",
      "Aide à domicile",
    ],
  },
  {
    title: "Professions libérales et conseil",
    image: ProfessionsImage,
    alt: "Une architecte souriante dans son agence, une tablette en main affichant le site de son cabinet, avec des cartes : demander un devis, voir nos réalisations et un aperçu de site web",
    activites: [
      "Architecte",
      "Avocat",
      "Expert-comptable",
      "Agent immobilier",
      "Notaire",
      "Consultant",
      "Photographe",
      "Graphiste",
    ],
  },
  {
    title: "Formation et sport",
    image: FormationImage,
    alt: "Un coach sportif souriant dans une salle de sport, une tablette en main affichant le site de ses coachings, avec des cartes : réserver une séance, nos programmes et un aperçu de site web",
    activites: [
      "Coach sportif",
      "Auto-école",
      "Centre de formation",
      "Cours particuliers",
      "Salle de sport",
      "Club sportif",
    ],
  },
  {
    title: "Associations et événementiel",
    image: AssociationsImage,
    alt: "Une présidente d'association souriante dans une salle communautaire, une tablette en main affichant le site de son association, avec des cartes : nous rejoindre, voir l'agenda et un aperçu de site web",
    activites: [
      "Association",
      "Wedding planner",
      "DJ",
      "Organisateur d'événements",
      "Salle de réception",
    ],
  },
];

function Avantages() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  const secteur = secteurs[current];

  return (
    <section className="relative bg-captive-secondary px-8 py-20 lg:px-32 lg:py-28">
      {/* Même fond dégradé que la section Hero */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[1000px] max-h-full bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary"
        aria-hidden="true"
      />
      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-20">
          <div className="lg:sticky lg:top-28">
            <h2 className="max-w-2xl text-white">
              Une approche personnalisée pour chaque{" "}
              <span className="text-captive-ciel">secteur d&apos;activité</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/70">
              Quel que soit votre métier, nous concevons le site qui vous
              correspond.
            </p>
          </div>

          <div className="mx-auto w-full min-w-0 max-w-md lg:max-w-none">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              aria-label="Exemples de métiers par domaine d'activité"
            >
              <CarouselContent>
                {secteurs.map((s, index) => (
                  <CarouselItem key={s.title}>
                    <h3 className="mb-4 text-xl leading-tight font-bold tracking-tight text-white sm:text-2xl">
                      {s.title}
                    </h3>
                    <Image
                      src={s.image}
                      alt={s.alt}
                      className="aspect-[4/5] h-auto w-full rounded-2xl object-cover"
                      sizes="(min-width: 1024px) 34vw, 90vw"
                      priority={false}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                {secteurs.map((s, index) => (
                  <span
                    key={s.title}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/30"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  aria-label="Domaine précédent"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white hover:text-captive-secondary"
                >
                  <ArrowLeft className="h-5 w-5" weight="bold" />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  aria-label="Domaine suivant"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-200 hover:bg-white hover:text-captive-secondary"
                >
                  <ArrowRight className="h-5 w-5" weight="bold" />
                </button>
              </div>
            </div>

            <div className="mt-10" aria-live="polite" aria-label={`Activités : ${secteur.title}`}>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {secteur.activites.map((activite) => (
                  <li
                    key={activite}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-sm text-white/85"
                  >
                    {activite}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-10 mb-0 max-w-xl text-white/70">
              Votre activité n&apos;est pas dans la liste ? Elle mérite aussi
              son site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avantages;
