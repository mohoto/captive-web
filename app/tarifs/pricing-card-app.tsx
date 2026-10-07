"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion, useInView, Variants } from "framer-motion";
import { Check } from "lucide-react";
import { AppWindow } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";


export function PricingCardApp() {

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="container pt-12 md:pt-24"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden shadow-md bg-captive-primary">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10 border-r-2"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-captive-ciel text-white">
                    <AppWindow className="h-6 w-6" weight="bold" />
                  </span>
                  <div>
                    <CardTitle className="text-xl leading-tight font-bold text-captive-secondary">
                      Application sur mesure
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm leading-snug">
                      TPE/PME aux besoins sur mesure
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-7" variants={itemVariants}>
                <div className="border-y border-captive-secondary/15 py-6">
                  <span className="block text-sm text-neutral-900/60">
                    Tarif
                  </span>
                  <span className="block text-5xl font-bold tracking-tight text-captive-secondary">
                    Sur devis
                  </span>
                </div>
                <p className="mt-6 mb-0 text-sm">
                  Contactez-nous pour un audit gratuit de vos besoins et un devis personnalisé.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <Separator className="lg:my-6 lg:hidden" />
          <motion.div
            className="p-6 lg:w-3/5 lg:p-10 bg-captive-secondary text-white"
            variants={itemVariants}
          >
            <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Type d&#39;applications :
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Plateforme e-learning</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Site web très interactif / UX poussée</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Marketplace</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Système de réservation complexe / planning</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Application métier</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Application interactive temps réel</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">SaaS : Logiciel accessible en ligne</span>
                      </motion.li>
                      <motion.li
                        className="flex"
                        variants={listItemVariants}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">Plateforme communautaire / réseau social</span>
                      </motion.li>
                  </ul>      
                </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
