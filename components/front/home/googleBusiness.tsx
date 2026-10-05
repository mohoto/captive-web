import GoogleBusinessImage from "@/public/images/home/captive_web-google-mybusiness.png";
import { ChartLineUp, ChatCircleText, Eye } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const points = [
  {
    icon: Eye,
    label: "Visibilité locale accrue",
  },
  {
    icon: ChatCircleText,
    label: "Interaction client facilitée",
  },
  {
    icon: ChartLineUp,
    label: "Analyse de performance",
  },
];

function GoogleBusiness() {
  return (
    <section className="bg-captive-primary px-8 py-20 lg:px-32 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-md">
          <Image
            src={GoogleBusinessImage}
            alt="Fiche Google My Business gérée par Captive Web"
            className="h-auto w-full rounded-xl object-contain"
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/home/Google-My-Business_logo.svg"
              alt="Logo Google My Business"
              width={36}
              height={36}
              priority
            />
            <span className="text-sm font-semibold uppercase tracking-wide text-captive-blue">
              Google My Business
            </span>
          </div>
          <h2 className="max-w-md">
            Inclus avec la création de votre site web
          </h2>
          <p className="mt-4 max-w-md text-neutral-900">
            Google My Business augmente la visibilité de votre entreprise
            dans les recherches locales sur Google, en mettant en avant
            votre adresse, vos horaires et votre numéro de téléphone. Les
            avis clients affichés renforcent la confiance envers vous.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.label} className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-captive-secondary/10">
                    <Icon className="h-5 w-5 text-captive-secondary" weight="bold" />
                  </div>
                  <p className="mb-0 text-base font-medium text-neutral-900">
                    {point.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleBusiness;
