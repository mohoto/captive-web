import Banner from "@/components/front/home/banner";
import IconConfiguration from "@/components/svg/IconConfiguration";
import IconTraining from "@/components/svg/IconTraining";
import ApplicationWebIntro from "@/public/images/application-web/app-introduction.webp";
import AppWebPresentation from "@/public/images/application-web/app-hero.webp";
import { Metadata } from "next";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImStatsBars2 } from "react-icons/im";
import { MdOutlineSupport } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import CarouselApp from "./carousel-app";

export const metadata: Metadata = {
  title: "Développement Application Web Sur Mesure | Captive Web",
  description:
    "Applications web professionnelles : e-learning, marketplace, SaaS, système de réservation. Solutions sur mesure par Captive Web. Expertise garantie.",
};

function Page() {
  return (
    <>
      <section className="pt-10 lg:pt-2 bg-captive-primary px-8 lg:px-32">
        <div className="container grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:place-content-between">
          <div className="place-self-center">
            <h1 className="mb-6 text-3xl leading-[1.1] font-bold tracking-tight text-balance text-center text-captive-secondary sm:text-4xl lg:text-left lg:text-[2.5rem]">
              Transformez vos processus métier avec une{" "}
              <span className="text-captive-blue">
                application web personnalisée
              </span>
            </h1>
            <p className="text-lg text-center lg:text-left">
              Développement d&#39;applications web complexes et interactives.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={AppWebPresentation}
              alt="Une responsable d'exploitation présente le tableau de bord de son application web sur sa tablette, avec des cartes : tableau de bord, processus automatisés et un aperçu d'application web"
              className="aspect-[4/5] w-full max-w-md rounded-2xl object-cover lg:w-[70%]"
              sizes="(min-width: 1024px) 35vw, 90vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8 lg:px-32">
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-4 lg:items-center">
          <Image
            src={ApplicationWebIntro}
            alt="Un entrepreneur souriant devant son ordinateur affichant une application web, avec des cartes : solution sur mesure, évolutive et sécurisée, et un aperçu d'application web"
            className="justify-self-center place-self-center aspect-[4/5] w-full max-w-md rounded-2xl object-cover order-2 lg:order-1 lg:w-[75%]"
            sizes="(min-width: 1024px) 35vw, 90vw"
          />

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
              Applications Web{" "}
              <span className="text-captive-blue">sur mesure</span>
            </h2>
            <p>
              Vous avez besoin d&#39;une solution digitale qui va au-delà
              d&#39;un simple site vitrine ? Nos applications web sur mesure
              répondent à vos besoins spécifiques et automatisent vos processus
              d&#39;entreprise. De la plateforme e-learning au logiciel SaaS,
              nous développons des solutions complètes et évolutives.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-10 px-8 lg:px-32 bg-captive-primary">
        <div className="xl:px-16">
          <h2 className="mb-2 text-left text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Une application web pour chaque{" "}
            <span className="text-captive-blue">besoin professionnel</span>
          </h2>
        </div>
        <CarouselApp />
      </section>
      <section className="py-12 px-8 lg:px-32">
        <div className="flex items-center flex-col">
          <h2 className="heading__center mb-4 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Pourquoi choisir nos{" "}
            <span className="text-captive-blue">applications web</span> ?
          </h2>
          <p className="text-lg font-semibold text-center">
            Une approche complète qui combine expertise technique,
            accompagnement personnalisé et vision long terme.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-10 mt-12 lg:px-28 xl:px-36">
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <IconConfiguration className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Développement sur mesure
            </h3>
            <p className="text-center">
              Chaque application est conçue spécifiquement pour vos besoins,
              sans compromis sur les fonctionnalités essentielles à votre
              activité.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel">
            <div className="flex justify-center mb-6">
              <RiNextjsFill className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Technologies modernes
            </h3>
            <p className="text-center">
              Nous utilisons les dernières technologies web pour garantir
              performance, sécurité et évolutivité de votre application.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel">
            <div className="flex justify-center mb-6">
              <FaPeopleGroup className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Accompagnement complet
            </h3>
            <p className="text-center">
              De l&#39;analyse de vos besoins à la maintenance, nous vous
              accompagnons à chaque étape de votre projet digital.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel">
            <div className="flex justify-center mb-6">
              <IconTraining className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Formation incluse
            </h3>
            <p className="text-center">
              Nous formons vos équipes à l&#39;utilisation de votre nouvelle
              application pour une adoption réussie.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel">
            <div className="flex justify-center mb-6">
              <MdOutlineSupport className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Maintenance et support
            </h3>
            <p className="text-center">
              Votre application reste performante grâce à notre service de
              maintenance continue : mises à jour de sécurité, corrections de
              bugs et optimisations techniques.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-md border-b-4 border-captive-ciel">
            <div className="flex justify-center mb-6">
              <ImStatsBars2 className="fill-captive-ciel text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Évolutivité garantie
            </h3>
            <p className="text-center">
              Votre application grandit avec votre entreprise : ajout de
              nouvelles fonctionnalités, intégration de nouveaux services et
              adaptation aux besoins futurs.
            </p>
          </div>
        </div>
      </section>
      <Banner
        className="py-10 lg:py-14"
        titleClassName="text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold"
        title={
          <>
            Discutons de votre{" "}
            <span className="text-captive-ciel">projet</span>
          </>
        }
        description="Vous avez un projet d'application web en tête ? Contactez-nous pour un audit gratuit de vos besoins et un devis personnalisé."
      />
    </>
  );
}

export default Page;
