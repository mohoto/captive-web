import { Lightning } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import type { CSSProperties } from "react";
import heroImage from "../../../public/images/home/captive_agence_web_services.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-captive-secondary">
      <div className="absolute inset-0 bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary" />

      <div className="container relative mx-auto grid gap-10 px-8 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-32 lg:pt-24 lg:pb-20">
        <div className="lg:order-1">
          <h1 className="rise-in max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Un site web qui travaille pour votre entreprise
          </h1>
          <p className="rise-in mt-6 max-w-md text-lg text-white/75" style={{ "--rise-delay": "120ms" } as CSSProperties}>
            Site vitrine, boutique en ligne ou application sur mesure, conçus et livrés de bout en bout par une seule équipe.
          </p>
          <div
            className="rise-in mt-9 inline-flex max-w-full items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-4 sm:px-6 sm:py-5"
            style={{ "--rise-delay": "240ms" } as CSSProperties}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-captive-blue">
              <Lightning className="h-6 w-6 text-white" weight="fill" />
            </span>
            <p className="mb-0 font-semibold leading-tight text-white">
              <span className="block text-base sm:text-lg">
                Site vitrine livré en 7&nbsp;jours
              </span>
              <span className="block text-2xl text-captive-ciel sm:text-3xl">
                à partir de 590&nbsp;€
              </span>
            </p>
          </div>
        </div>

        <div className="rise-in flex justify-center lg:order-2 lg:justify-end" style={{ "--rise-delay": "200ms" } as CSSProperties}>
          <div className="relative w-[85%] lg:w-[90%]">
            {/* Decorative circle frame */}
            <svg
              viewBox="0 0 100 100"
              className="pointer-events-none absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] lg:-inset-8 lg:h-[calc(100%+4rem)] lg:w-[calc(100%+4rem)]"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="2.2 2.2"
                className="text-captive-ciel/70"
              />
            </svg>

            {/* Small dashed arc, bottom-left */}
            <svg
              viewBox="0 0 40 40"
              className="pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 lg:-bottom-8 lg:-left-8 lg:h-20 lg:w-20"
              aria-hidden="true"
            >
              <circle
                cx="20"
                cy="20"
                r="17"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="3 3"
                className="text-captive-blue/60"
              />
            </svg>

            {/* Spheres, top-right */}
            <div className="absolute -top-4 right-2 h-14 w-14 rounded-full bg-captive-blue lg:-top-6 lg:right-4 lg:h-20 lg:w-20" />
            <div className="absolute -top-8 right-20 h-4 w-4 rounded-full bg-captive-blue lg:-top-10 lg:right-28 lg:h-5 lg:w-5" />

            {/* Spheres, bottom-left */}
            <div className="absolute bottom-6 -left-8 h-10 w-10 rounded-full bg-captive-blue lg:bottom-8 lg:-left-10 lg:h-12 lg:w-12" />
            <div className="absolute bottom-0 left-10 h-3 w-3 rounded-full bg-captive-blue lg:h-3.5 lg:w-3.5" />

            <Image
              src={heroImage}
              alt="Illustration des services de l'agence Captive Web : sites vitrines, e-commerce et applications"
              className="relative aspect-square w-full rounded-full object-cover"
              width={800}
              height={800}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
