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
    description: "Accessible à toute heure.",
  },
  {
    icon: ShieldCheck,
    title: "Crédibilité professionnelle",
    description: "Une image qui rassure.",
  },
  {
    icon: Lightning,
    title: "Acquisition de clients",
    description: "Plus de contacts et de devis.",
  },
  {
    icon: ChatCircleDots,
    title: "Communication maîtrisée",
    description: "Votre message, vos règles.",
  },
];

function Introduction() {
  return (
    <section className="px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 flex w-full flex-col gap-4 sm:mx-auto sm:max-w-lg sm:gap-0 lg:order-1 portrait-cap">
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
            <span className="text-captive-secondary">essentiel</span> pour votre
            activité
          </h2>
          <p className="mt-5 max-w-xl text-lg text-neutral-900/80">
            Vendre, prendre des rendez-vous ou être trouvé sur Google : un site
            qui travaille pour vous.
          </p>
          <ul className="mt-10 m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
            {raisons.map((raison) => {
              const Icon = raison.icon;
              return (
                <li
                  key={raison.title}
                  className="group flex items-center gap-4 rounded-2xl p-4 sm:flex-col sm:items-start border border-captive-secondary/10 bg-white sm:p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-captive-secondary/25 hover:shadow-lg hover:shadow-captive-secondary/10"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-captive-secondary text-white transition duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6" weight="bold" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-captive-ink">
                      {raison.title}
                    </h3>
                    <p className="mt-1 mb-0 text-neutral-900/70">
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
