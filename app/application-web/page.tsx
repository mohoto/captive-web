import IconConfiguration from "@/components/svg/IconConfiguration";
import IconTraining from "@/components/svg/IconTraining";
import ApplicationWebIntro from "@/public/images/application-web/captive-web_applcation_web_introduction.png";
import AppWebPresentation from "@/public/images/application-web/captive-web_applcation_web_presentation.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaPeopleGroup } from "react-icons/fa6";
import { ImStatsBars2 } from "react-icons/im";
import { MdOutlineSupport } from "react-icons/md";
import { RiNextjsFill, RiWhatsappFill } from "react-icons/ri";
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
            <h1 className="heading__page">
              Transformez vos processus métier avec une application web
              personnalisée
            </h1>
            <p className="text-lg text-center lg:text-left">
              Développement d&#39;applications web complexes et interactives.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={AppWebPresentation}
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
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-4 lg:items-center">
          <Image
            src={ApplicationWebIntro}
            alt="Illustration site web e-commerce"
            className="justify-self-center place-self-center rounded-lg order-2 lg:order-1 lg:w-[80%]"
            width={875}
            height={564}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />

          <div className="order-1 lg:order-2">
            <h2 className="mb-6">Applications Web sur mesure</h2>
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
        <div className="flex items-center flex-col">
          <span className="heading__span">VOTRE SOLUTION</span>
          <h2 className="heading__center mb-8">
            Une application web pour chaque besoin professionnel
          </h2>
        </div>
        <CarouselApp />
      </section>
      <section className="py-12 px-8 lg:px-32">
        <div className="flex items-center flex-col">
          <span className="heading__span">NOTRE ENGAGEMENT</span>
          <h2 className="heading__center mb-4">
            Pourquoi choisir nos applications web ?
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
      <section className="my-10 lg:px-40 xl:px-68">
        <div className="bg-captive-secondary flex lg:flex px-10 py-6 items-center justify-between rounded-lg flex-col gap-y-4">
          <h2 className="text-3xl text-white text-center lg:text-left font-semibold">
            Discutons de votre projet
          </h2>
          <p className="text-white text-center lg:px-20 text-lg">
            Vous avez un projet d&#39;application web en tête ? Contactez-nous
            pour un audit gratuit de vos besoins et un devis personnalisé.
          </p>
          <button className="group text-shikam-normal border-shikam-normal px-8 py-3 rounded-full border-2 bg-captive-primary hover:bg-green-700 hover:text-white transition-all duration-75 ease-in-out">
            <Link
              href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
              className="flex gap-2 items-center text-lg font-semibold group-hover:text-white"
            >
              <RiWhatsappFill className="h-8 w-8 text-green-700 group-hover:text-white" />
              WhatsApp
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}

export default Page;
