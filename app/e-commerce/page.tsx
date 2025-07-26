import IconConfiguration from "@/components/svg/IconConfiguration";
import IconDeployement from "@/components/svg/IconDeployement";
import IconDesign from "@/components/svg/IconDesign";
import IconPages from "@/components/svg/IconPages";
import IconSeo from "@/components/svg/IconSeo";
import IconTraining from "@/components/svg/IconTraining";
import EcomIntro from "@/public/images/e-commerce/captive-web_e-commerce_presentation_2.png";
import EcomPresentation from "@/public/images/e-commerce/captive-web_presentation_e-commerce.png";
import ShopifyLogo from "@/public/images/e-commerce/shopify_logo.png";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";
import CarouselEcom from "./carousel-ecom";
import { PricingCardBasic } from "./pricing-card-basic";

type Props = {};

function Page({}: Props) {
  return (
    <>
      <section className="pt-6 bg-captive-primary px-8 lg:px-32">
        <div className="container grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:place-content-between">
          <div className="place-self-center">
            <h1 className="2xl:text-4xl font-bold mb-8 lg:text-4xl text-4xl bg-gradient-to-b from-blue-900 to-blue-600 bg-clip-text text-transparent xl:leading-12 text-center lg:text-left">
              Lancez votre e&#8209;commerce avec une boutique en ligne
              professionnelle
            </h1>
            <p className="text-lg text-center lg:text-left">
              Profitez de la puissance de la publicité sur Facebook pour
              atteindre un public plus large et convertir efficacement des
              prospects en clients fidèles.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={EcomPresentation}
              alt="Captive web création site e-commerce"
              className="lg:w-[70%]"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8 lg:px-32">
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-8 lg:items-center">
          <Image
            src={EcomIntro}
            alt="Illustration site web e-commerce"
            className="justify-self-center place-self-center rounded-lg order-2 lg:order-1"
            width={500}
            height={500}
            style={{
              maxWidth: "70%",
              height: "auto",
            }}
            priority
          />

          <div className="order-1 lg:order-2">
            <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold mb-6 xl:leading-10">
              Pourquoi se lancer dans l’e&#8209;commerce ?
            </h2>
            <p>
              L’e-commerce est aujourd’hui un levier incontournable pour
              développer son activité et atteindre de nouveaux clients. Que vous
              ayez une boutique physique, un commerce local ou une activité
              spécialisée, vendre en ligne vous rend visible 24h/24 et vous
              permet de toucher plus de clients, au-delà de votre zone locale.
            </p>
            <p>
              Nous vous accompagnons dans la création de votre boutique
              e-commerce professionnelle avec Shopify : un site à votre image,
              rapide, sécurisé, et prêt à vendre dès sa mise en ligne.
            </p>
          </div>
          <div className="place-self-center order-3">
            <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold mb-6 xl:leading-10">
              Pourquoi choisir Shopify pour votre site e&#8209;commerce ?
            </h2>
            <p>
              Shopify est l’une des plateformes e-commerce les plus puissantes
              et intuitives du marché. En choisissant Shopify, ous optez pour
              une solution fiable, évolutive et facile à prendre en main. Votre
              boutique est simple à gérer, même sans compétences techniques.
            </p>
            <p>
              Nous maîtrisons parfaitement son environnement et vous aidons à
              tirer parti de tout son potentiel.
            </p>
          </div>
          <Image
            src={ShopifyLogo}
            alt="Logo Shopify"
            className="justify-self-center place-self-center order-4"
            width={800}
            height={800}
            style={{
              maxWidth: "60%",
              height: "auto",
            }}
            priority
          />
        </div>
      </section>
      <section className="pt-16 px-8 lg:px-32 bg-captive-primary">
        <div className="flex items-center flex-col">
          <span className="text-captive-secondary text-center font-semibold text-md">
            VOTRE BOUTIQUE
          </span>
          <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold text-center lg:px-48 2xl:px-64 lg:mb-16 xl:leading-10 mb-8">
            Shopify : une plateforme complète, pensée pour les commerçants
          </h2>
        </div>
        <CarouselEcom />
      </section>
      <section className="py-12 px-8 lg:px-32">
        <div className="flex items-center flex-col">
          <span className="text-captive-secondary text-center font-semibold text-md">
            NOTRE ENGAGEMENT
          </span>
          <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold text-center lg:px-48 2xl:px-64 xl:leading-10 mb-8 lg:mb-6">
            Notre accompagnement personnalisé sur Shopify
          </h2>
          <p className="text-lg font-semibold text-center">
            Notre mission : vous livrer une boutique clé en main, prête à
            vendre, et facile à utiliser au quotidien.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-10 mt-12 lg:px-28 xl:px-36">
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <IconDesign className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Personnalisation du design du site
            </h3>
            <p className="text-center">
              Nous créons un thème graphique à votre image de marque pour un
              rendu professionnel, moderne et cohérent.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary">
            <div className="flex justify-center mb-6">
              <IconPages className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Création des pages essentielles
            </h3>
            <p className="text-center">
              Nous concevons toutes les pages clés pour présenter vos produits,
              votre activité et faciliter la navigation de vos visiteurs.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary">
            <div className="flex justify-center mb-6">
              <IconConfiguration className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Configuration complète de votre boutique
            </h3>
            <p className="text-center">
              Nous paramétrons l’ensemble de votre boutique : devise, TVA, modes
              de paiement, livraison, mentions légales et paramètres généraux.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary">
            <div className="flex justify-center mb-6">
              <IconSeo className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Référencement de base (SEO) sur Google
            </h3>
            <p className="text-center">
              Nous optimisons les titres, URL, balises et contenus pour que
              votre boutique soit bien référencée sur Google dès le lancement.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary">
            <div className="flex justify-center mb-6">
              <IconDeployement className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Mise en ligne de votre boutique sur le web
            </h3>
            <p className="text-center">
              Une fois tous les éléments validés, nous publions votre boutique
              en ligne et la rendons accessible au public, prête à recevoir ses
              premiers visiteurs.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-secondary">
            <div className="flex justify-center mb-6">
              <IconTraining className="fill-captive-secondary text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Formation à l’utilisation de Shopify
            </h3>
            <p className="text-center">
              Nous vous montrons comment gérer vos produits, suivre vos
              commandes et utiliser Shopify au quotidien pour être totalement
              autonome.
            </p>
          </div>
        </div>
        <div className="lg:px-28 xl:px-36">
          <PricingCardBasic />
        </div>
      </section>
      <section className="my-10 lg:px-40 xl:px-68">
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 flex lg:flex px-10 py-6 items-center justify-between rounded-lg flex-col gap-y-4">
          <h2 className="text-3xl text-white text-center lg:text-left font-semibold">
            Prêt à lancer votre e-commerce ?
          </h2>
          <p className="text-white text-center lg:px-20 text-lg">
            Contactez-nous pour discuter de votre projet. Nous vous guiderons de
            A à Z pour que votre boutique Shopify reflète votre image et vous
            aide à atteindre vos objectifs.
          </p>
          <button className="text-shikam-normal border-shikam-normal px-8 py-3 rounded-full border-2 bg-captive-primary hover:bg-captive-secondary-hover hover:text-white transition-all duration-75 ease-in-out">
            <Link
              href="tel:0757837110"
              className="flex gap-3 items-center text-lg font-bold"
            >
              <RiWhatsappFill className="h-8 w-8 text-green-700" />
              07 57 83 71 10
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Page;
