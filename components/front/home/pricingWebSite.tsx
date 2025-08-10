"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineQrCode } from "react-icons/md";
import { PiDesktopTowerBold } from "react-icons/pi";

function PricingWebSite() {
  return (
    <>
      <section className="px-8 lg:py-16 lg:px-32 py-8">
        <div className="container">
          <div className="flex items-center flex-col">
            <span className="heading__span">
              NOS TARIFS
            </span>
            <h2 className="heading__center">
              Un site web clé en main et adapté à votre activité pour booster
              votre visibilité en ligne
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-10">
            <AnimatePresence>
              <motion.div
                className=""
                initial={{ x: -200, opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <div className="h-full p-6 rounded-lg bg-captive-secondary flex flex-col relative shadow-md text-white">
                  <div className="mb-4 flex gap-x-4 items-center">
                    <div>
                      <div className="border-4 border-captive-blue rounded-full p-4">
                        <PiDesktopTowerBold className="size-8 text-white"/>
                      </div>
                    </div>
                    <h3 className="tracking-widest title-font font-bold text-xl">
                      Site web vitrine
                    </h3>
                  </div>
                  <div className="leading-none flex items-center mb-4 border-b">
                    <div className="flex flex-col mb-2">
                      <span className="text-sm mb-1">A partir de</span>
                      <p className="text-4xl mr-2">1 800€</p>
                    </div>
                    {/* <span className="text-lg ml-1 font-normal">ht</span> */}
                  </div>
                  <ul className="space-y-2 flex-grow mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Site web adapté à votre activité</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Site web personnalisé à vos couleurs</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        5 pages statiques : Page accueil, à propos, 3 pages
                        services
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Formulaire de contact</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Création d&#39;une fiche Goggle My business</span>
                    </li>

                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-blue mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Configuration des éléments techniques : nom de domaine,
                        hébergement, sécurité (HTTPS)
                      </span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <Link 
                    href="/site-vitrine" 
                    className="border-2 border-captive-blue text-cwhite hover:bg-white hover:text-captive-secondary transition-colors duration-300 px-4 py-2 rounded-lg text-center font-semibold block"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className=""
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <div className="h-full p-6 rounded-lg bg-captive-secondary flex flex-col relative shadow-md text-white">
                  <div className="mb-4 flex gap-x-4 items-center">
                    <div>
                      <div className="border-4 border-captive-violet rounded-full p-4">
                        <BsCart4 className="size-8 text-white"/>
                      </div>
                    </div>
                    <h3 className="tracking-widest title-font font-bold text-xl">
                      Site e-commerce
                    </h3>
                  </div>
                  <div className="leading-none flex items-center mb-4 border-b">
                    <div className="flex flex-col mb-2">
                      <span className="text-sm mb-1">A partir de</span>
                      <p className="text-4xl mr-2">1 800€</p>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-grow mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Site web adapté à votre activité</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Site web personnalisé à vos couleurs</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        4 pages : page d&#39;accueil, pages catégories, page
                        produit, page panier
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Formulaire de contact</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Création d&#39;une fiche Goggle My business</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Référencement du nom de votre entreprise sur Google
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Configuration de la plateforme shopify</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-violet mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>
                        Formation sur Shopify pour la gestion de votre boutique
                      </span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <Link 
                    href="/e-commerce" 
                    className="border-2 border-captive-violet text-cwhite hover:bg-white hover:text-captive-secondary transition-colors duration-300 px-4 py-2 rounded-lg text-center font-semibold block"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className=""
                initial={{ x: -200, opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
              >
                <div className="h-full p-6 rounded-lg bg-captive-secondary flex flex-col relative shadow-md text-white">

                  <div className="mb-4 flex gap-x-4 items-center">
                    <div>
                      <div className="border-4 border-captive-ciel rounded-full p-4">
                        <MdOutlineQrCode className="size-8 text-white"/>
                      </div>
                    </div>
                    <h3 className="tracking-widest title-font font-bold text-xl">
                      Application web
                    </h3>
                  </div>
                  <div className="leading-none flex items-center mb-4 border-b">
                    <div className="flex flex-col mb-2">
                      <span className="text-sm mb-1">Tarif</span>
                      <p className="text-4xl mr-2">Sur devis</p>
                    </div>
                  </div>
                  <ul className="space-y-2 flex-grow mb-6">
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Plateforme e-learning</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Site web très interactif / UX poussée</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Marketplace</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Système de réservation / planning</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Application métier</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Application interactive temps réel</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>SaaS : Logiciel accessible en ligne</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Plateforme communautaire / réseau social</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-3 h-3 fill-current text-captive-ciel mr-3 flex-shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Application interactive temps réel</span>
                    </li>
                  </ul>
                  <div className="flex justify-center">
                    <Link 
                    href="/e-commerce" 
                    className="border-2 border-captive-ciel text-cwhite hover:bg-white hover:text-captive-secondary transition-colors duration-300 px-4 py-2 rounded-lg text-center font-semibold block"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

export default PricingWebSite;
