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
import { useEffect, useRef, useState } from "react";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  note?: string;
  originalPrice?: number;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  note,
  originalPrice,
  features,
  buttonText = "Get Started",
  onButtonClick,
}: PricingCardProps) {
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
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-captive-secondary">
                      {title}
                    </CardTitle>
                    <CardDescription className="mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <motion.div className="mt-6 space-y-8" variants={itemVariants}>
                <div>
                  <span className="block text-sm">A partir de :</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-semibold text-captive-secondary">
                      {price}€
                    </span>
                  </div>
                </div>
                <p className="text-sm">{note}</p>
              </motion.div>
            </div>
          </motion.div>
          <Separator className="lg:my-6 lg:hidden" />
          <motion.div
            className=" p-6 lg:w-3/5 lg:p-10 bg-captive-secondary text-white"
            variants={itemVariants}
          >
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3 className="mb-4 text-lg font-semibold">
                    {feature.title}:
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <div>
                          <Check className="mr-2 h-4 w-4 text-white mt-1" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && (
                    <Separator className="my-6" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
