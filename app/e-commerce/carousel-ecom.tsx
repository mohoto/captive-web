"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShopifyFive from "@/public/images/e-commerce/ecom-applications.webp";
import ShopifyTwo from "@/public/images/e-commerce/ecom-paiement.webp";
import ShopifyOne from "@/public/images/e-commerce/ecom-gestion.webp";
import ShopifyThree from "@/public/images/e-commerce/ecom-livraison.webp";
import ShopifyFour from "@/public/images/e-commerce/ecom-marketing.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
interface CarouselInfo {
  total: number;
  items: HTMLElement[];
}
function CarouselEcom() {
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
          <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
                  Gestion des produits, commandes et stocks
                </h3>
          </div>
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Avec Shopify, vous centralisez la gestion de votre boutique
                    et accéder aux fonctionnalités depuis un seul tableau de
                    bord :
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Produits, variantes (tailles, couleurs)
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Inventaire
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Commandes et clients
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Vous pouvez aussi suivre en temps réel :
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      L’évolution des stocks
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Automatiser les notifications de commande
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Consulter l’historique client pour un meilleur suivi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Image
                src={ShopifyOne}
                alt="Une gérante de boutique de mode dans sa réserve, une tablette en main affichant la gestion de ses produits et stocks, avec des cartes : stocks à jour, nouvelle commande et un aperçu de boutique en ligne"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
                  Paiements sécurisés intégrés
                </h3>
          </div>
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Avec Shopify, vous pouvez accepter tous les moyens de
                    paiement courants, sans configuration technique compliquée.
                    Les paiements sont rapides, sécurisés, et adaptés aux
                    habitudes de vos clients :
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Cartes bancaires (Visa, Mastercard, etc.)
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Portefeuilles digitaux : Apple Pay, Google Pay, Shopify
                      Pay
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      PayPal, intégré facilement
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Paiement en plusieurs fois (via Stripe ou d&#39;autres
                      solutions)
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Transactions conformes aux normes PCI-DSS pour une
                      sécurité maximale
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Image
                src={ShopifyTwo}
                alt="Un gérant de concept store souriant, une tablette en main affichant le paiement de sa boutique en ligne, avec des cartes : paiement sécurisé, carte bancaire et un aperçu de boutique en ligne"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
                  Gestion simplifiée des livraisons
                </h3>
          </div>
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Avec Shopify, la gestion des livraisons est claire, flexible
                    et adaptée à tous types de commerce. Vous configurez vos
                    modes d’expédition facilement, que vous vendiez en local ou
                    à l’international :
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Zones d’expédition personnalisées selon les régions ou
                      pays
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Tarifs selon le poids, le prix ou la destination
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Livraison à domicile, retrait en point relais ou click &
                      collect
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Suivi automatique des colis et notifications envoyées à
                      vos clients
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Étiquettes d’expédition générées automatiquement via des
                      services comme Colissimo, Mondial Relay, Chronopost ou
                      Sendcloud
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Image
                src={ShopifyThree}
                alt="Une commerçante prépare un colis dans son atelier, avec des cartes : colis expédié, livraison suivie et un aperçu de boutique en ligne"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
                  Outils marketing intégrés
                </h3>
          </div>
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Shopify embarque des fonctionnalités marketing puissantes.
                    Vous pouvez ainsi attirer plus de visiteurs et les
                    transformer en clients fidèles :
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Création de codes promo et réductions ciblées
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Intégration de newsletters et campagnes d’e-mailing
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Outils d’analyse des ventes et du trafic
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Optimisation du référencement(SEO) de vos pages produits
                      et contenus sur Goggle
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Image
                src={ShopifyFour}
                alt="Un commerçant en ligne souriant devant son ordinateur affichant sa boutique, avec des cartes : codes promo, newsletter clients et un aperçu de boutique en ligne"
                className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover"
                sizes="(min-width: 1024px) 30vw, 80vw"
                loading="lazy"
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="grid gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:items-start lg:gap-x-20 lg:gap-y-6">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary mb-2">
                  Applications complémentaires
                </h3>
          </div>
            <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
              <div className="flex flex-col gap-y-8">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Le Shopify App Store propose des milliers d’extensions pour
                    enrichir votre boutique. Toutes ces applications
                    s’installent en quelques clics et vous permettent de
                    personnaliser votre boutique selon vos besoins.
                  </p>
                  <ul>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Avis clients
                    </li>
                    <li className="py-1 w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Chat en ligne
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Upsell et cross-sell (Boost des ventes moyennes)
                    </li>
                    <li className="py-1 w-full flex items-center">
                      {/* <BsCheck className="h-8 w-8 text-shikam-normal"/> */}
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Modules de livraison avancée, suivi colis, click &
                      collect…
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <Image
                src={ShopifyFive}
                alt="Une e-commerçante souriante devant son ordinateur affichant les avis de ses clients, avec des cartes : avis clients, programme de fidélité et un aperçu de boutique en ligne"
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
export default CarouselEcom;
