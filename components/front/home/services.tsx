import ServicesImage from "@/public/images/home/captive-web_cle-en-main.webp";
import Image from "next/image";

const etapes = [
  {
    title: "Vous nous parlez de votre activité",
    description: "Votre métier, vos clients, vos couleurs : on part de votre réalité.",
  },
  {
    title: "Nous concevons et développons votre site",
    description: "Design, pages, référencement : tout est pris en charge par une seule équipe.",
  },
  {
    title: "Votre site est en ligne",
    description: "Prêt à recevoir des visites, des appels et des demandes de devis.",
  },
];

function Services() {
  return (
    <section className="bg-captive-primary px-8 py-20 lg:px-32 lg:py-28">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2>
              Votre site web clé en main en{" "}
              <span className="whitespace-nowrap text-captive-blue">7&nbsp;jours</span>
            </h2>
            <p className="mt-5 max-w-lg text-neutral-900/80">
              Artisan, commerçant, indépendant ou dirigeant de PME/TPE :
              concentrez-vous sur votre métier, nous prenons en charge
              l&apos;intégralité de votre projet, de la conception à la mise en
              ligne.
            </p>

            <ol className="relative mt-10 mb-0 list-none space-y-8 p-0">
              <span
                className="absolute top-3 bottom-3 left-[15px] w-px border-l border-dashed border-captive-blue/40"
                aria-hidden="true"
              />
              {etapes.map((etape, index) => (
                <li key={etape.title} className="relative flex gap-5">
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-captive-secondary text-sm font-semibold text-white ring-8 ring-captive-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {etape.title}
                    </h3>
                    <p className="mt-1 mb-0 max-w-md text-neutral-900/70">
                      {etape.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src={ServicesImage}
              alt="Une gérante de café sourit devant l'ordinateur affichant le site de son établissement ; des éléments graphiques indiquent « Livré en 7 jours » et « Site en ligne »"
              className="h-auto w-full rounded-2xl"
              sizes="(min-width: 1024px) 38vw, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
