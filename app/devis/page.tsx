import { Metadata } from "next";
import { QuoteForm } from "./quote-form";

export const metadata: Metadata = {
  title: "Devis en ligne | Estimez le prix de votre site web - Captive Web",
  description:
    "Répondez à quelques questions et obtenez une estimation de votre site vitrine ou de votre boutique en ligne, avec les options adaptées à votre activité.",
  alternates: { canonical: "https://captive-web.fr/devis" },
};

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-captive-blue/10 via-white to-white px-6 pt-10 pb-20 lg:px-32 lg:pt-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-center text-3xl font-extrabold tracking-tight text-captive-secondary lg:text-4xl">
          Votre devis en quelques questions
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-neutral-900/70">
          Répondez à quelques questions simples : nous vous proposons les
          options adaptées à votre activité et le total s&apos;ajuste au fur
          et à mesure.
        </p>
        <QuoteForm />
      </div>
    </section>
  );
}
