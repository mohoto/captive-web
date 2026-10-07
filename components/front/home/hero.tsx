import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import heroImage from "../../../public/images/home/captive-web_hero-7-jours.webp";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-captive-secondary">
      <div className="absolute inset-0 bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary" />

      <div className="container relative mx-auto grid gap-10 px-8 pt-12 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8 lg:px-32 lg:pt-24 lg:pb-20">
        <div className="lg:order-1">
          <h1 className="rise-in max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Un site web qui{" "}
            <span className="text-captive-ciel">travaille pour votre entreprise</span>
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
          <div className="relative w-full">
            <Image
              src={heroImage}
              alt="Un restaurateur souriant présente le site web de son restaurant sur sa tablette. Site vitrine livré en 7 jours, à partir de 590 €."
              className="relative aspect-[4/5] w-full rounded-2xl object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="mt-6 flex justify-center">
              <Link
                href="/devis"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-lg font-semibold text-captive-secondary transition-colors duration-200 hover:bg-captive-primary sm:w-auto"
              >
                Obtenir mon devis
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                  weight="bold"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
