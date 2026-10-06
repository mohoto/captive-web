import Image from "next/image";
import type { CSSProperties } from "react";
import heroImage from "../../../public/images/home/captive-web_hero-7-jours.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-captive-secondary">
      <div className="absolute inset-0 bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary" />

      <div className="container relative mx-auto grid gap-10 px-8 pt-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-32 lg:pt-24 lg:pb-20">
        <div className="lg:order-1">
          <h1 className="rise-in max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Un site web qui travaille pour votre entreprise
          </h1>
          <p
            className="rise-in mt-6 max-w-md text-lg text-white/75"
            style={{ "--rise-delay": "120ms" } as CSSProperties}
          >
            Site vitrine, boutique en ligne ou application sur mesure, conçus et livrés de bout en bout par une seule équipe.
          </p>
        </div>

        <div
          className="rise-in flex justify-center lg:order-2 lg:justify-end"
          style={{ "--rise-delay": "200ms" } as CSSProperties}
        >
          <div className="relative w-[88%] lg:w-[92%]">
            {/* Decorative dashed frame, concentric with the image corners */}
            <div
              className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-dashed border-captive-ciel/60 lg:-inset-5 lg:rounded-[2.25rem]"
              aria-hidden="true"
            />
            <Image
              src={heroImage}
              alt="Une céramiste présente le site web de son atelier sur sa tablette et son ordinateur. Site vitrine livré en 7 jours, à partir de 590 €."
              className="relative aspect-square w-full rounded-2xl object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
