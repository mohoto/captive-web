import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

type BannerProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  titleClassName?: string;
  className?: string;
  /** Bouton d'action : le devis en ligne (par défaut) ou WhatsApp. */
  cta?: "devis" | "whatsapp";
};

function Banner({
  title = (
    <>
      Besoin d&apos;un site web pour votre{" "}
      <span className="text-captive-ciel">activité</span> ?
    </>
  ),
  description = "Répondez à quelques questions : vous obtenez une estimation de votre site en 2 minutes, sans engagement.",
  titleClassName,
  className,
  cta = "devis",
}: BannerProps) {
  return (
    <section
      className={`px-8 pt-4 pb-4 lg:px-32 lg:pt-8 lg:pb-8 ${className ?? ""}`}
    >
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-captive-secondary px-8 py-12 lg:px-16 lg:py-16">
          {/* Orbit motif, clipped by the card */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full border border-dashed border-captive-ciel/40 lg:-top-32 lg:-right-20 lg:h-96 lg:w-96"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-8 top-10 h-16 w-16 rounded-full bg-captive-blue lg:right-24 lg:top-8 lg:h-20 lg:w-20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-24 bottom-8 hidden h-4 w-4 rounded-full bg-captive-violet lg:block"
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="max-w-xl">
              <h2 className={`mb-0 text-white ${titleClassName ?? ""}`}>
                {title}
              </h2>
              <p className="mt-4 mb-0 text-lg text-white/70">{description}</p>
            </div>

            {cta === "devis" ? (
              <Link
                href="/devis"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start whitespace-nowrap rounded-full bg-white px-6 py-4 text-base font-semibold sm:px-8 sm:text-lg text-captive-secondary transition-colors duration-200 hover:bg-captive-primary lg:self-auto"
              >
                Obtenir mon devis
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  weight="bold"
                />
              </Link>
            ) : (
              <Link
                href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-3 self-start whitespace-nowrap rounded-full bg-white px-6 py-4 text-base font-semibold sm:px-8 sm:text-lg text-captive-secondary transition-colors duration-200 hover:bg-captive-primary lg:self-auto"
              >
                <WhatsappLogo className="h-6 w-6 text-green-600" weight="fill" />
                Discuter sur WhatsApp
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
