import Banner from "@/components/front/home/banner";
import IconConfiguration from "@/components/svg/IconConfiguration";
import IconDeployement from "@/components/svg/IconDeployement";
import IconDesign from "@/components/svg/IconDesign";
import IconPages from "@/components/svg/IconPages";
import IconSeo from "@/components/svg/IconSeo";
import IconTraining from "@/components/svg/IconTraining";
import EcomIntro from "@/public/images/e-commerce/ecom-introduction.webp";
import EcomPresentation from "@/public/images/e-commerce/ecom-hero.webp";
import ShopifyLogo from "@/public/images/e-commerce/shopify_logo.png";
import { Metadata } from "next";
import Image from "next/image";
import CarouselEcom from "./carousel-ecom";

export const metadata: Metadata = {
  title: "Site E-commerce Professionnel | Boutique en ligne - Captive Web",
  description:
    "Lancez votre boutique en ligne avec Captive Web. Site e-commerce complet : catalogue produits, paiement sécurisé, gestion commandes. Devis gratuit.",
};

function Page() {
  return (
    <>
      <section className="pt-10 lg:pt-2 bg-captive-primary px-8 lg:px-32">
        <div className="container grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:place-content-between">
          <div className="place-self-center">
            <h1 className="mb-6 text-3xl leading-[1.1] font-bold tracking-tight text-balance text-center text-captive-secondary sm:text-4xl lg:text-left lg:text-[2.5rem]">
              Lancez votre e&#8209;commerce avec une{" "}
              <span className="text-captive-blue">
                boutique en ligne professionnelle
              </span>
            </h1>
            <p className="text-lg text-center lg:text-left">
              Une solution clé en main pour vendre rapidement, simplement et
              efficacement.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={EcomPresentation}
              alt="Une créatrice de mode présente sa boutique de vêtements en ligne sur sa tablette, avec des cartes : nouvelle commande, livraison à domicile et un aperçu de boutique en ligne"
              className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover lg:w-[70%]"
              sizes="(min-width: 1024px) 35vw, 90vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8 lg:px-32">
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-8 lg:items-center">
          <Image
            src={EcomIntro}
            alt="Un vendeur de compléments alimentaires pour sportifs souriant dans sa boutique, un ordinateur affichant sa boutique en ligne, avec des cartes : ouvert 24h/24, clients partout et un aperçu de boutique en ligne"
            className="justify-self-center place-self-center aspect-[4/5] w-full max-w-md rounded-2xl object-cover order-2 lg:order-1 lg:w-[75%]"
            sizes="(min-width: 1024px) 35vw, 90vw"
          />

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
              Pourquoi se lancer dans l’
              <span className="text-captive-blue">e&#8209;commerce</span> ?
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
            <h2 className="mb-6 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
              Pourquoi choisir{" "}
              <span className="text-captive-blue">Shopify</span> pour votre
              site e&#8209;commerce ?
            </h2>
            <p>
              Shopify est l’une des plateformes e-commerce les plus puissantes
              et intuitives du marché. En choisissant Shopify, vous optez pour
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
            className="justify-self-center place-self-center order-4 w-3/5 max-w-xs lg:w-[45%]"
            sizes="(min-width: 1024px) 20vw, 60vw"
          />
        </div>
      </section>
      <section className="pt-16 px-8 lg:px-32 bg-captive-primary">
        <div className="xl:px-16">
          <h2 className="mb-2 text-left text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Shopify : une plateforme{" "}
            <span className="text-captive-blue">complète</span>, pensée pour
            les commerçants
          </h2>
        </div>
        <CarouselEcom />
      </section>
      <section className="py-12 px-8 lg:px-32">
        <div className="flex items-center flex-col">
          <h2 className="heading__center mb-4 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Notre accompagnement{" "}
            <span className="text-captive-blue">personnalisé</span> sur Shopify
          </h2>
          <p className="text-lg font-semibold text-center">
            Notre mission : vous livrer une boutique clé en main, prête à
            vendre, et facile à utiliser au quotidien.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-10 mt-12 lg:px-28 xl:px-36">
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <IconDesign className="fill-captive-violet text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Personnalisation du design du site
            </h3>
            <p className="text-center">
              Nous créons un thème graphique à votre image de marque pour un
              rendu professionnel, moderne et cohérent.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet">
            <div className="flex justify-center mb-6">
              <IconPages className="fill-captive-violet text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Création des pages essentielles
            </h3>
            <p className="text-center">
              Nous concevons toutes les pages clés pour présenter vos produits,
              votre activité et faciliter la navigation de vos visiteurs.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet">
            <div className="flex justify-center mb-6">
              <IconConfiguration className="fill-captive-violet text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Configuration complète de votre boutique
            </h3>
            <p className="text-center">
              Nous paramétrons l’ensemble de votre boutique : devise, TVA, modes
              de paiement, livraison, mentions légales et paramètres généraux.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet">
            <div className="flex justify-center mb-6">
              <IconSeo className="fill-captive-violet text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Référencement de base (SEO) sur Google
            </h3>
            <p className="text-center">
              Nous optimisons les titres, URL, balises et contenus pour que
              votre boutique soit bien référencée sur Google dès le lancement.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet">
            <div className="flex justify-center mb-6">
              <IconDeployement className="fill-captive-violet text-center w-20 h-20" />
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
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-violet">
            <div className="flex justify-center mb-6">
              <IconTraining className="fill-captive-violet text-center w-20 h-20" />
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
      </section>
      <Banner
        className="py-10 lg:py-14"
        titleClassName="text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold"
        title={
          <>
            Prêt à lancer votre{" "}
            <span className="text-captive-ciel">e&#8209;commerce</span> ?
          </>
        }
        description="Contactez-nous pour discuter de votre projet. Nous vous guiderons de A à Z pour que votre boutique Shopify reflète votre image et vous aide à atteindre vos objectifs."
      />
    </>
  );
}

export default Page;
