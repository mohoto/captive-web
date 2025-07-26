"use client";

import LogoMakeEnergy from "@/public/images/testimonials/logo-make-energy.png";
import LogoNestRenove from "@/public/images/testimonials/logo-nest-renove.png";
import LogoParisianMode from "@/public/images/testimonials/logo-parisian-mode.png";
import LogoSiay from "@/public/images/testimonials/logo-siay.png";
import LogoWorkFormation from "@/public/images/testimonials/logo-work-formation.png";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "This platform revolutionized our data analysis process. The speed and accuracy are unparalleled. A must-have for any data-driven team.",
    name: "SIAY",
    designation: "Data Scientist at QuantumLeap",
    src: LogoSiay,
  },
  {
    quote:
      "The user interface is incredibly intuitive, which made the onboarding process for my team a breeze. We were up and running in hours, not days.",
    name: "Make Energy",
    designation: "Head of Operations at Synergy Corp",
    src: LogoMakeEnergy,
  },
  {
    quote:
      "Customer support is top-notch. They are responsive, knowledgeable, and genuinely invested in our success. It feels like a true partnership.",
    name: "Parisian Mode",
    designation: "Client Success Manager at Horizon",
    src: LogoParisianMode,
  },
  {
    quote:
      "I'm impressed by the constant stream of updates and new features. The development team is clearly passionate and listens to user feedback.",
    name: "Nest Renove",
    designation: "Software Engineer at CodeCrafters",
    src: LogoNestRenove,
  },
  {
    quote:
      "The ROI was almost immediate. It streamlined our workflows so effectively that we cut project delivery times by nearly 30%.",
    name: "Work Formation",
    designation: "CFO at Apex Financial",
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

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="px-4 pt-12 pb-20 font-sans md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20">
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
                    className="h-full w-full rounded-3xl object-cover shadow-2xl"
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold">
                  {testimonials[active].name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-8 text-lg">
                  "{testimonials[active].quote}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <ArrowLeft className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
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
    <section className="my-10 px-8 lg:px-32">
      <div className="flex items-center flex-col">
        <span className="text-captive-secondary text-center font-semibold text-md">
          AVIS CLIENTS
        </span>
        <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold text-center lg:px-48 2xl:px-64 xl:leading-12 mb-12">
          Nos clients en parlent le mieux
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
