"use client";

import { Minus, Plus, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const items: FaqItem[] = [
  {
    question: "Combien coûte la création d’un site ?",
    answer:
      "Le tarif varie selon vos besoins (nombre de pages, fonctionnalités, niveau de personnalisation…). Nous proposons des formules de base claires et accessibles, aussi bien pour les sites vitrines que pour les boutiques en ligne, sans frais cachés. Contactez-nous pour un devis simple et rapide",
  },
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer:
      "Un site vitrine ou une boutique en ligne est livré en 7 jours. Nous nous adaptons aussi à votre rythme et à vos délais, notamment selon la rapidité avec laquelle vous validez les contenus.",
  },
  {
    question: "Dois-je fournir les textes et les images ?",
    answer:
      "Vous avez déjà vos contenus ? Parfait. Sinon, nous nous chargeons de tout : rédaction des textes, recherche de visuels professionnels… pour un site prêt à l’emploi, sans effort de votre part.",
  },
  {
    question: "Le site sera-t-il visible sur Google ?",
    answer:
      "Oui, tous nos sites sont optimisés pour le référencement naturel dès leur mise en ligne. Cette optimisation de base vous permettra d’apparaître sur Google, notamment lorsque l’on recherche le nom de votre entreprise.",
  },
  {
    question: "Aurais-je la main pour modifier mon site après ?",
    answer:
      "Pour les boutiques en ligne, vous bénéficiez d’un accès complet à l’administration du site, avec une formation à l’appui. Vous pourrez modifier facilement textes, images et produits. Pour les sites vitrines, certaines sections sont modifiables selon vos besoins. Pour des fonctionnalités plus avancées, la personnalisation dépendra du type de solution mise en place.",
  },
];

function FaqRow({
  item,
  id,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-captive-secondary/15">
      <h3 className="m-0">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="group flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span
            className={`text-lg leading-snug font-semibold transition-colors duration-200 ${
              isOpen
                ? "text-captive-secondary"
                : "text-neutral-900 group-hover:text-captive-blue"
            }`}
          >
            {item.question}
          </span>
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
              isOpen
                ? "border-captive-secondary bg-captive-secondary text-white"
                : "border-captive-secondary/25 text-captive-secondary group-hover:border-captive-blue group-hover:text-captive-blue"
            }`}
            aria-hidden="true"
          >
            {isOpen ? (
              <Minus className="h-4 w-4" weight="bold" />
            ) : (
              <Plus className="h-4 w-4" weight="bold" />
            )}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
            className="overflow-hidden"
          >
            <p className="mt-0 mb-0 max-w-2xl pr-12 pb-7 leading-relaxed text-neutral-900/75">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FaqDemo() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="px-8 py-20 lg:px-32 lg:py-28">
      <div className="container mx-auto grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <h2 className="max-w-md">
            Questions fréquentes de nos clients sur la création de{" "}
            <span className="text-captive-blue">sites web</span>
          </h2>
          <p className="mt-4 max-w-sm text-lg text-neutral-900/70">
            Une autre question ? Posez-la nous directement, nous répondons
            rapidement.
          </p>
          <a
            href="https://wa.me/33757837110?text=Bonjour,%20j%27ai%20une%20question%20sur%20la%20creation%20de%20site%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2.5 font-semibold text-captive-secondary underline decoration-captive-blue decoration-2 underline-offset-4 transition-colors duration-200 hover:text-captive-blue"
          >
            <WhatsappLogo className="h-5 w-5 text-green-600" weight="fill" />
            Écrivez-nous sur WhatsApp
          </a>
        </div>

        <div className="border-t border-captive-secondary/15">
          {items.map((item, index) => (
            <FaqRow
              key={item.question}
              item={item}
              id={`faq-${index}`}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqDemo;
