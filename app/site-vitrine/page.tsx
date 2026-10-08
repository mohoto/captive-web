import Banner from "@/components/front/home/banner";
import IconConfiguration from "@/components/svg/IconConfiguration";
import IconDeployement from "@/components/svg/IconDeployement";
import IconDesign from "@/components/svg/IconDesign";
import IconPages from "@/components/svg/IconPages";
import IconSeo from "@/components/svg/IconSeo";
import IconTraining from "@/components/svg/IconTraining";
import SiteVitrineExplication from "@/public/images/site-vitrine/vitrine-explication.webp";
import SiteVitrineIntro from "@/public/images/site-vitrine/vitrine-introduction.webp";
import SiteVitrinePresentation from "@/public/images/site-vitrine/vitrine-hero.webp";
import { Metadata } from "next";
import Image from "next/image";
import CarouselVitrine from "./carousel-vitrine";

export const metadata: Metadata = {
  title: "Site Vitrine Professionnel | Captive Web - Création sur mesure",
  description:
    "Créez votre site vitrine professionnel avec Captive Web. Design moderne, responsive, optimisé SEO. Idéal pour artisans, professions libérales et PME.",
};

function Page() {
  return (
    <>
      <section className="pt-10 lg:pt-2 bg-captive-primary px-8 lg:px-32">
        <div className="container grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 lg:place-content-between">
          <div className="place-self-center">
            <h1 className="mb-6 text-3xl leading-[1.1] font-bold tracking-tight text-balance text-center text-captive-secondary sm:text-4xl lg:text-left lg:text-[2.5rem]">
              Gagnez en visibilité et en confiance avec un{" "}
              <span className="text-captive-blue">site web clé en main</span>
            </h1>
            <p className="text-lg text-center lg:text-left">
              Plus qu’un simple site, nous créons un outil de communication
              efficace pour valoriser votre activité et générer des
              opportunités.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={SiteVitrinePresentation}
              alt="Une gérante de boutique de décoration présente le site web de sa boutique sur sa tablette, avec des cartes : demander un devis, prendre rendez-vous et un aperçu de site web"
              className="aspect-[4/5] portrait-cap w-full max-w-md rounded-2xl object-cover lg:w-[70%]"
              sizes="(min-width: 1024px) 35vw, 90vw"
              priority
            />
          </div>
        </div>
      </section>
      <section className="py-16 px-8 lg:px-32">
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-4 lg:items-center">
          <Image
            src={SiteVitrineIntro}
            alt="Un menuisier souriant dans son atelier, une tablette en main affichant le site de son entreprise, avec des cartes : livré en 7 jours, site en ligne et un aperçu de site web"
            className="justify-self-center place-self-center aspect-[4/5] portrait-cap w-full max-w-md rounded-2xl object-cover order-2 lg:order-1 lg:w-[75%]"
            sizes="(min-width: 1024px) 35vw, 90vw"
          />

          <div className="order-1 lg:order-2">
            <h2 className="mb-6 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
              Un site web professionnel{" "}
              <span className="text-captive-blue">sans prise de tête</span>
            </h2>
            <p>
              Vous êtes artisan, commerçant local, indépendant ou à la tête
              d’une petite entreprise ? Vous savez que la présence en ligne est
              aujourd’hui essentielle pour gagner en visibilité, rassurer vos
              clients et développer votre activité, mais vous ne savez pas par
              où commencer ?
            </p>
            <p>
              Nous concevons pour vous un site vitrine professionnel, clair,
              moderne et adapté à votre métier. Notre objectif : vous livrer un
              site web, efficace pour votre communication, et fidèle à l’image
              que vous souhaitez transmettre.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 lg:gap-x-10 gap-y-4 lg:items-center mt-10">
          <div className="place-self-center order-1">
            <h2 className="mb-6 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
              Que vous vendiez un service, un savoir-faire ou votre expertise :{" "}
              <span className="text-captive-blue">soyez visible</span>
            </h2>
            <p>
              Un site vitrine est idéal pour toutes les entreprises ou
              professionnels qui souhaitent présenter leurs services, renforcer
              leur crédibilité et être trouvés sur Google, sans forcément vendre
              en ligne.
            </p>
            <p>
              Avec un site vitrine, chaque visite peut devenir une opportunité.
              Grâce à des formulaires intégrés, vos visiteurs peuvent demander
              un devis, réserver un rendez-vous ou vous contacter facilement, en
              quelques clics. Vos prospects trouvent les informations qu’ils
              cherchent et peuvent vous joindre facilement. Vous gagnez du temps
              et transformez plus de visiteurs en clients.
            </p>
            <p>
              Que vous exerciez seul ou en équipe, votre site devient votre
              carte de visite digitale accessible 24h/24.
            </p>
          </div>
          <Image
            src={SiteVitrineExplication}
            alt="Une consultante souriante dans un espace de coworking devant son ordinateur affichant son site, avec des cartes : trouvé sur Google, nous contacter et un aperçu de site web"
            className="justify-self-center place-self-center aspect-[4/5] portrait-cap w-full max-w-md rounded-2xl object-cover order-2 lg:w-[75%]"
            sizes="(min-width: 1024px) 35vw, 90vw"
          />
        </div>
      </section>
      <section className="py-16 px-8 lg:px-32 bg-captive-primary">
        <div className="xl:px-16">
          <h2 className="mb-6 lg:mb-8 text-left text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Un site web vitrine :{" "}
            <span className="text-captive-blue">pour qui ?</span>
          </h2>
        </div>
        <CarouselVitrine />
      </section>
      <section className="py-12 px-8 lg:px-32">
        <div className="flex items-center flex-col">
          <h2 className="heading__center mb-4 text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold">
            Notre accompagnement{" "}
            <span className="text-captive-blue">personnalisé</span> pour votre
            site vitrine
          </h2>
          <p className="text-lg font-semibold text-center">
            Notre mission : vous livrer un site clé en main, professionnel,
            moderne et facile à gérer.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-x-10 gap-y-10 mt-12 lg:px-28 xl:px-36">
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue flex flex-col justify-center">
            <div className="flex justify-center mb-6">
              <IconDesign className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Personnalisation du design du site
            </h3>
            <p className="text-center">
              Nous créons un design sur mesure, adapté à votre image de marque
              pour valoriser votre activité et inspirer confiance à vos
              visiteurs.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue">
            <div className="flex justify-center mb-6">
              <IconPages className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Création des pages essentielles
            </h3>
            <p className="text-center">
              Nous concevons toutes les pages indispensables pour présenter vos
              services, votre entreprise, vos témoignages, votre équipe ou
              encore vos réalisations.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue">
            <div className="flex justify-center mb-6">
              <IconConfiguration className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Configuration complète du site
            </h3>
            <p className="text-center">
              Nous configurons tous les éléments techniques : nom de domaine,
              hébergement, sécurité (HTTPS), formulaires de contact, mentions
              légales, RGPD, et autres paramètres essentiels.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue">
            <div className="flex justify-center mb-6">
              <IconSeo className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Référencement de base (SEO) sur Google
            </h3>
            <p className="text-center">
              Nous optimisons les titres, URLs, balises et contenus pour
              garantir une bonne visibilité de votre site sur Google dès sa mise
              en ligne.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue">
            <div className="flex justify-center mb-6">
              <IconDeployement className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Mise en ligne de votre site vitrine
            </h3>
            <p className="text-center">
              Une fois tout validé, nous mettons votre site en ligne et le
              rendons accessible au public. Votre entreprise est désormais
              visible 24h/24 sur le web.
            </p>
          </div>
          <div className="bg-captive-primary p-6 rounded-lg shadow-xs border-b-4 border-captive-blue">
            <div className="flex justify-center mb-6">
              <IconTraining className="fill-captive-blue text-center w-20 h-20" />
            </div>
            <h3 className="text-center text-xl mb-4 text-shikam-normal font-semibold">
              Formation à l’utilisation du site
            </h3>
            <p className="text-center">
              Nous vous formons à l’utilisation de votre site (ajout de textes,
              images, pages, etc.), si besoin pour certaines activités, pour que
              vous puissiez le gérer facilement et en toute autonomie.
            </p>
          </div>
        </div>
      </section>
      <Banner
        className="py-10 lg:py-14"
        titleClassName="text-[1.625rem] sm:text-[1.875rem] lg:text-[2rem] font-semibold"
        title={
          <>
            Prêt à donner de la visibilité à votre{" "}
            <span className="text-captive-ciel">activité</span> ?
          </>
        }
        description="Obtenez une estimation en quelques questions. Nous réaliserons un site vitrine qui mettra en valeur vos services et vous aidera à attirer de nouveaux clients."
      />
    </>
  );
}

export default Page;
