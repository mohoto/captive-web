"use client";

import LogoMakeEnergy from "@/public/images/testimonials/logo-make-energy.png";
import LogoNestRenove from "@/public/images/testimonials/logo-nest-renove.png";
import LogoParisianMode from "@/public/images/testimonials/logo-parisian-mode.png";
import LogoSiay from "@/public/images/testimonials/logo-siay.png";
import LogoWorkFormation from "@/public/images/testimonials/logo-work-formation.png";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "Nous avions besoin d’un site élégant et facile à utiliser pour lancer notre marque. Le résultat est au-delà de nos attentes ! Design moderne, parcours client fluide… Nos clientes adorent. Merci pour cet accompagnement de A à Z. ",
    name: "SIAY",
    designation: "Vente en ligne de vêtements",
    src: LogoSiay,
  },
  {
    quote:
      "Site propre, rassurant et bien référencé. On reçoit beaucoup plus de demandes depuis sa mise en ligne. Merci pour votre écoute, votre réactivité et la qualité du travail fourni.",
    name: "Mak Energy",
    designation: "Entreprise de traitements anti-nuisibles",
    src: LogoMakeEnergy,
  },
  {
    quote:
      "Nous cherchions une vitrine impactante pour nos collections. Le site est canon, rapide, responsive, et vraiment fidèle à notre univers. L’équipe a su comprendre notre style et le retranscrire parfaitement.",
    name: "Parisian Mode",
    designation: "Vente en ligne de vêtements",
    src: LogoParisianMode,
  },
  {
    quote:
      "Nous voulions un site clair pour présenter nos services et rassurer nos clients. Tout a été pensé pour nous : design pro, contenu bien structuré, et un formulaire adapté pour recevoir des devis. C’est devenu un vrai atout pour notre activité.",
    name: "Nest Renove",
    designation: "Entreprise de rénovation énergétique",
    src: LogoNestRenove,
  },
  {
    quote:
      "L’équipe a su comprendre nos besoins et traduire notre vision en un site moderne, professionnel et impactant. Nous avons eu de nombreux retours positifs de nos clients. Un vrai atout pour notre communication digitale.",
    name: "Work Formation",
    designation: "Centre de formation professionnelle",
    src: LogoWorkFormation,
  },
];

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: StaticImageData;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = true,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  /* useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]); */

  const isActive = (index: number) => index === active;

  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="px-4 pt-12 pb-10 lg:pb-20 font-sans md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-0 md:grid-cols-2 md:gap-x-20">
        <div className="flex items-center justify-center">
          <div className="relative lg:h-80 lg:w-full max-w-xs h-72 w-72">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 50,
                    rotate: randomRotate(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.9,
                    y: isActive(index) ? 0 : 20,
                    zIndex: isActive(index)
                      ? testimonials.length
                      : testimonials.length - Math.abs(index - active),
                    rotate: isActive(index) ? "0deg" : randomRotate(),
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 origin-bottom"
                  style={{ perspective: "1000px" }}
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-[70%] w-[70%] mx-auto rounded-3xl object-cover shadow-2xl"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(
                        0
                      )}`;
                      e.currentTarget.onerror = null;
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-captive-secondary">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg">
                  &quot;{testimonials[active].quote}&quot;
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <ArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white transition-colors hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <ArrowRight className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedTestimonialsDemo: React.FC = () => {
  return <AnimatedTestimonials testimonials={testimonials} />;
};

const MyAnimatedTestimonials: React.FC = () => {
  return (
    <section className="py-16 px-8 lg:px-32 bg-captive-primary">
      <div className="flex items-center flex-col">
        <span className="heading__span">
          AVIS CLIENTS
        </span>
        <h2 className="heading__center mb-6">
          Nos client témoignent des résultats
        </h2>
      </div>
      <div className="relative">
        <style>
          {`
            @keyframes animate-grid {
              0% { background-position: 0% 50%; }
              100% { background-position: 100% 50%; }
            }
            .animated-grid {
              width: 100%;
              height: 100%;
              background-image: 
                linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), 
                linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
              background-size: 3rem 3rem;
              animation: animate-grid 40s linear infinite alternate;
            }
          `}
        </style>
        <div className="animated-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        <div className="z-10">
          <AnimatedTestimonialsDemo />
        </div>
      </div>
    </section>
  );
};

export default MyAnimatedTestimonials;
