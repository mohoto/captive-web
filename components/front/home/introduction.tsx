import {
  ChatCircleDots,
  Lightning,
  ShieldCheck,
  Eye,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import EcommerceImage from "../../../public/images/home/captive-web_pourquoi-ecommerce.webp";
import ArtisanImage from "../../../public/images/home/captive-web_pourquoi-artisan.webp";

const raisons = [
  {
    icon: Eye,
    title: "Visibilité 24/7",
    description: "Votre entreprise reste accessible à tout moment, partout dans le monde.",
  },
  {
    icon: ShieldCheck,
    title: "Crédibilité professionnelle",
    description: "Un site bien conçu renforce votre image et inspire confiance.",
  },
  {
    icon: Lightning,
    title: "Acquisition de clients",
    description: "Facilitez les ventes, les prises de contact et les demandes de devis.",
  },
  {
    icon: ChatCircleDots,
    title: "Communication maîtrisée",
    description: "Vous contrôlez votre message, vos offres et votre image de marque.",
  },
];

function Introduction() {
  return (
    <section className="px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex w-full flex-col gap-4 sm:mx-auto sm:max-w-lg sm:gap-0 lg:order-1 lg:max-w-none">
          <Image
            src={EcommerceImage}
            alt="Une commerçante emballe un colis dans sa boutique de vêtements ; des éléments graphiques affichent une nouvelle commande, des avis cinq étoiles, une courbe de croissance et l'expédition"
            className="h-auto w-full rounded-2xl sm:w-[68%]"
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 340px, 100vw"
          />
          <Image
            src={ArtisanImage}
            alt="Un artisan devant sa camionnette avec une tablette ; des éléments graphiques affichent sa visibilité sur Google, une demande de devis et un rendez-vous confirmé"
            className="h-auto w-full rounded-2xl sm:-mt-[34%] sm:ml-auto sm:w-[56%] sm:ring-[10px] sm:ring-white"
            sizes="(min-width: 1024px) 28vw, (min-width: 640px) 280px, 100vw"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="max-w-xl">
            Pourquoi avoir un site web est{" "}
            <span className="text-captive-blue">essentiel</span> pour votre
            activité
          </h2>
          <p className="mt-5 max-w-xl text-lg text-neutral-900/80">
            Que vous vouliez vendre en ligne, prendre des rendez-vous ou
            simplement être trouvé sur Google, nous construisons le site qui
            correspond à votre activité et qui travaille pour vous au
            quotidien.
          </p>
          <ul className="mt-10 m-0 grid list-none gap-x-8 gap-y-9 p-0 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
            {raisons.map((raison) => {
              const Icon = raison.icon;
              return (
                <li key={raison.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-captive-blue/10">
                    <Icon className="h-5 w-5 text-captive-blue" weight="bold" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-neutral-900">
                      {raison.title}
                    </h3>
                    <p className="mt-1.5 mb-0 text-neutral-900/70">
                      {raison.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
