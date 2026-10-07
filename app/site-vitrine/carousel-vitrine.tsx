"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SiteArtisan from "@/public/images/site-vitrine/vitrine-artisan.webp";
import SiteAssociation from "@/public/images/site-vitrine/vitrine-association.webp";
import SiteCommercant from "@/public/images/site-vitrine/vitrine-commercant.webp";
import SiteIndependant from "@/public/images/site-vitrine/vitrine-independant.webp";
import SitePme from "@/public/images/site-vitrine/vitrine-pme.webp";
import SiteLiberale from "@/public/images/site-vitrine/vitrine-profession-liberale.webp";
import SiteSante from "@/public/images/site-vitrine/vitrine-bien-etre.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
interface CarouselInfo {
  total: number;
  items: HTMLElement[];
}
function CarouselVitrine() {
  const [info, setInfo] = useState<CarouselInfo>({ total: 0, items: [] });
  const [currentIndex, setCurrentIndex] = useState(0);
  /* const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, info.total - 1));
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }; */
  useEffect(() => {
    // Cette partie ne s’exécute que côté client
    const nodeList = document.querySelectorAll<HTMLElement>(
      '[data-slot="carousel-item"]'
    );
    const elements = Array.from(nodeList);
    // (Optionnel) on ajoute data-index à chaque div
    elements.forEach((el, idx) => (el.dataset.index = String(idx)));
    setInfo({ total: elements.length, items: elements });
  }, []);
  return (
    <Carousel className="xl:px-16">
      <CarouselContent>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Artisans et bâtiment
            </h3>
            <p className="font-semibold mb-0">Plombier, électricien, maçon, peintre, menuisier, carreleur, couvreur, serrurier</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Votre savoir-faire mérite une vitrine professionnelle qui inspire confiance. Un site web vous permet de présenter vos réalisations, vos certifications et de rassurer vos futurs clients sur votre expertise. Avec un système de prise de rendez-vous en ligne, vous gagnez du temps et vos clients peuvent vous contacter facilement, même en dehors des heures ouvrées.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Portfolio de réalisations • Demandes de devis en ligne • Zone d&#39;intervention • Urgences 24h/24</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteArtisan}
                alt="Un peintre en bâtiment souriant dans un salon fraîchement peint, une tablette en main affichant le site de son entreprise, avec des cartes : demander un devis, voir nos réalisations et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Commerçant local
            </h3>
            <p className="font-semibold mb-0">Restaurant, salon de coiffure, fleuriste, boulangerie, magasin de vêtements, pharmacie, opticien</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Développez votre clientèle locale et fidélisez vos clients grâce à une présence digitale attractive. Votre site web devient le prolongement de votre boutique : présentez vos produits, vos menus, vos horaires et permettez même la commande en ligne ou la réservation. Les avis clients et la géolocalisation renforcent votre visibilité dans votre quartier.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Catalogue produits • Commande/réservation en ligne • Horaires et infos pratiques • Avis clients</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteCommercant}
                alt="Une boulangère souriante derrière le comptoir de sa boulangerie, une tablette en main affichant le site de sa boutique, avec des cartes : commander en ligne, horaires d'ouverture et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Profession libérale
            </h3>
            <p className="font-semibold mb-0">Avocat, médecin, architecte, consultant, expert-comptable, notaire, psychologue</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Votre expertise professionnelle nécessite une image de marque solide et rassurante. Un site web professionnel renforce votre crédibilité, présente vos domaines de compétences et facilite la prise de contact avec vos futurs clients. La confidentialité et la sécurité des données sont au cœur de nos développements pour respecter vos obligations déontologiques.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Crédibilité professionnelle • Prise de rendez-vous • Présentation d&#39;expertise • Sécurité des données</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteLiberale}
                alt="Un avocat souriant dans son cabinet, une tablette en main affichant le site de son cabinet, avec des cartes : prendre rendez-vous, nos expertises et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Indépendant / Auto-entrepreneur
            </h3>
            <p className="font-semibold mb-0">Coach, photographe, graphiste, rédacteur, traducteur, développeur, formateur, VTC</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    En tant qu&#39;indépendant, votre site web est votre meilleur commercial. Il travaille pour vous 24h/24 en présentant vos services, votre portfolio et vos témoignages clients. Optimisé pour les moteurs de recherche, il vous aide à trouver de nouveaux clients et à vous démarquer de la concurrence dans votre domaine d&#39;expertise.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Portfolio créatif • Témoignages clients • Blog expertise • Génération de leads</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteIndependant}
                alt="Un photographe indépendant souriant dans son studio, une tablette en main affichant son portfolio en ligne, avec des cartes : voir mon portfolio, me contacter et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Professionnel du bien-être
            </h3>
            <p className="font-semibold mb-0">Ostéopathe, naturopathe, esthéticienne, masseur, sophrologue, diététicien, coach sportif</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Dans le secteur du bien-être, la confiance est essentielle. Votre site web humanise votre pratique en présentant votre approche, vos formations et vos méthodes. Vos futurs patients peuvent découvrir votre univers, prendre rendez-vous en ligne et accéder à des conseils via votre blog. Cela crée une relation de confiance avant même la première consultation.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Présentation de votre approche • Planning en ligne • Conseils et articles • Humanisation de votre pratique</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteSante}
                alt="Un praticien de bien-être souriant dans son cabinet lumineux, une tablette en main affichant le site de son cabinet, avec des cartes : prendre rendez-vous, nos soins et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              PME / TPE
            </h3>
            <p className="font-semibold mb-0">Entreprises souhaitant une présence professionnelle en ligne</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Que vous soyez une startup innovante, une entreprise familiale ou une PME en croissance, votre site web est la base de votre stratégie digitale. Il présente vos services, rassure vos prospects sur votre professionnalisme et vous permet de générer de nouveaux contacts commerciaux. Évolutif, il grandit avec votre entreprise et s&#39;adapte à vos nouveaux besoins.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Image professionnelle • Génération de prospects • Évolutivité • Support commercial 24h/24</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SitePme}
                alt="Une dirigeante de PME souriante dans son atelier-bureau, une tablette en main affichant le site de son entreprise, avec des cartes : demander un devis, notre équipe et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="mb-8 lg:mb-10">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
              Association ou collectivité
            </h3>
            <p className="font-semibold mb-0">Souhaitant informer et communiquer facilement</p>
          </div>
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 mb-6">
                    Votre mission mérite d&#39;être connue et soutenue. Un site web facilite la communication avec vos membres, présente vos actions et permet de recruter de nouveaux bénévoles ou adhérents. Système d&#39;adhésion en ligne, agenda des événements, espace membre : nous créons des outils adaptés au monde associatif et aux budgets serrés.
                  </p>
                  <p><span className="font-semibold">Avantages clés : </span>Communication simplifiée • Recrutement de bénévoles • Adhésions en ligne • Agenda événements</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center order-first lg:order-last">
              <Image
                src={SiteAssociation}
                alt="Un président d'association souriant dans une salle communautaire, une tablette en main affichant le site de son association, avec des cartes : nous rejoindre, faire un don et un aperçu de site web"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious
        className="top-10 xl:left-16 left-0"
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <CarouselNext
        className="top-10 xl:left-44 left-28"
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <div className="absolute top-6 xl:left-32 left-16">
        <span className="text-lg font-bold">
          {currentIndex + 1} / {info.total}
        </span>
      </div>
    </Carousel>
  );
}
export default CarouselVitrine;
