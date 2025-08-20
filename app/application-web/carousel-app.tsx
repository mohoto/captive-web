"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AppMetier from "@/public/images/application-web/applcation_web_application_metier.png";
import AppCollaborative from "@/public/images/application-web/applcation_web_collaborative.png";
import AppFormation from "@/public/images/application-web/applcation_web_formation.png";
import AppLivraison from "@/public/images/application-web/applcation_web_livraison.png";
import AppMarketplace from "@/public/images/application-web/applcation_web_marketplace.png";
import AppReservation from "@/public/images/application-web/applcation_web_reservation.png";
import AppSaas from "@/public/images/application-web/captive-web_applcation_web_introduction.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCartCheck, BsCheck } from "react-icons/bs";
import { IoCalendarOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { TbAutomation, TbDeviceDesktopAnalytics, TbSchool, TbUsersPlus } from "react-icons/tb";

interface CarouselInfo {
  total: number;
  items: HTMLElement[];
}

function CarouselApp() {
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
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <TbSchool className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Plateforme E-learning
                </h3>
                <p>Créez votre école en ligne</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : Organismes de formation, consultants, écoles, entreprises proposant de la formation :
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Gestion des cours : création, organisation et diffusion de contenu pédagogique
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Suivi des apprenants : progression, évaluations, certificats automatiques
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Outils interactifs : quiz, vidéos, forums de discussion, classes virtuelles
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Tableau de bord instructeur : statistiques détaillées, gestion des groupes
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Système de paiement : abonnements, ventes de cours individuels
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Application web mobile : accès aux cours depuis smartphone et tablette
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppFormation}
                alt="Agence Shikam publicité sur les réseaux sociaux"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <BsCartCheck className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Marketplace
                </h3>
                <p>Votre propre place de marché</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : créateurs de niche, marchés locaux, secteurs spécialisés
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Multi-vendeurs : inscription et gestion autonome des boutiques
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Catalogue produits : recherche avancée, filtres, comparaisons
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Système de commissions : calcul automatique, reversements
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Paiements sécurisés : transaction entre particuliers, garanties
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Avis et notations : système de confiance communautaire
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Tableau de bord vendeur : statistiques, gestion des stocks, commandes
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppMarketplace}
                alt="Interface de marketplace avec plusieurs boutiques et produits"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <IoCalendarOutline className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Système de réservation complexe
                </h3>
                <p>Automatisez la gestion des rendez-vous</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : auto-écoles, service de locations, garages, centres de formation, espaces de coworking
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Calendrier en temps réel : disponibilités automatiquement mises à jour
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Réservation 24h/24 : vos clients réservent quand ils le souhaitent
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Notifications automatiques : confirmations, rappels SMS/email
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Gestion des ressources : salles, équipements, personnel
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Paiement en ligne : acomptes, annulations avec conditions
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Statistiques détaillées : taux d&#39;occupation, revenus, clients fidèles
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppReservation}
                alt="Interface de réservation avec calendrier et créneaux disponibles"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <TbAutomation className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Application Métier
                </h3>
                <p>Digitalisez vos processus internes</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : cabinets d&#39;expertise, agences immobilières, centres médicaux, associations
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Gestion sur mesure : workflows adaptés à vos besoins précis
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Base de données : stockage et organisation de vos informations
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Automatisation : tâches répétitives prises en charge
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Reporting avancé : tableaux de bord, export de données
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Gestion des droits : accès différenciés selon les utilisateurs
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Intégrations : connexion avec vos outils existants
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppMetier}
                alt="Dashboard d&#39;application métier avec graphiques et données"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <IoChatboxEllipsesOutline className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Applications temps réel
                </h3>
                <p>Interaction instantanée</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : services de livraison, plateformes collaboratives, applications de rencontre
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Messagerie instantanée : chat en direct, notifications push
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Collaboration live : édition simultanée, partage d&#39;écran
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Mises à jour automatiques : contenu actualisé sans rechargement
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Géolocalisation : suivi en temps réel, cartes interactives
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Streaming : diffusion vidéo/audio en direct
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Synchronisation multi-appareils : continuité sur tous supports
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppLivraison}
                alt="Interface d&#39;application temps réel avec chat et notifications"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <TbDeviceDesktopAnalytics className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Solutions SaaS
                </h3>
                <p>Votre logiciel accessible partout</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : entrepreneurs tech, services B2B, solutions sectorielles
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Architecture multi-tenant : chaque client dans son environnement sécurisé
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Abonnements flexibles : différents plans selon les besoins
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      API robuste : intégration facile avec d&#39;autres services
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Sauvegarde automatique : données sécurisées et accessibles
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Mise à jour transparente : nouvelles fonctionnalités déployées automatiquement
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Support technique : assistance et maintenance incluses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppSaas}
                alt="Interface SaaS avec dashboard et options d&#39;abonnement"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center lg:gap-x-20 gap-y-10 lg:gap-y-0">
            <div className="lg:w-1/2">
              <div className="lg:mb-12 my-6">
                <div className="bg-white p-1 inline-block rounded-md">
                  <TbUsersPlus className="h-10 w-10 text-captive-ciel" />
                </div>
                <h3 className="font-bold text-xl lg:text-2xl text-captive-secondary">
                  Plateforme communautaire
                </h3>
                <p>Fédérez votre communauté</p>
              </div>
              <div className="flex flex-col gap-y-5">
                <div>
                  <p className="mt-3 font-semibold mb-6">
                    Idéal pour : associations, marques avec communauté forte, secteurs de niche
                  </p>
                  <ul>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Profils utilisateurs : personnalisation, historique d&#39;activité
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Système de posts : partage de contenu, commentaires, likes
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Groupes thématiques : espaces dédiés par centre d&#39;intérêt
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Messagerie privée : échanges directs entre membres
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Événements : organisation et promotion de rencontres
                    </li>
                    <li className="py-1 font-light w-full flex items-center">
                      <div className="bg-captive-secondary rounded-full mr-2">
                        <BsCheck className=" w-5 h-5 text-white" />
                      </div>
                      Modération : outils de gestion de la communauté
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 justify-center">
              <Image
                src={AppCollaborative}
                alt="Interface de réseau social avec feed et profils utilisateurs"
                className="object-contain lg:w-[80%] w-full"
                width={800}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
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

export default CarouselApp;
