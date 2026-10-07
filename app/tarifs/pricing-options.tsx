import { Card } from "@/components/ui/card";
import {
  formatPrice,
  shopifyOptions,
  wordpressOptions,
  type PricingOption,
} from "@/lib/pricing";
import Link from "next/link";

function OptionsCard({ title, options }: { title: string; options: PricingOption[] }) {
  return (
    <Card className="w-full overflow-hidden bg-captive-primary p-0 shadow-md">
      <h3 className="bg-captive-secondary px-6 py-4 text-xl font-bold text-white">
        {title}
      </h3>
      <ul className="divide-y px-6 pb-2">
        {options
          .filter((option) => !option.included)
          .map((option) => (
          <li key={option.id} className="flex items-start justify-between gap-4 py-3">
            <div>
              <p className="mb-0 font-medium text-captive-secondary">{option.name}</p>
              <p className="mb-0 text-sm text-muted-foreground">{option.description}</p>
            </div>
            <span className="shrink-0 font-semibold text-captive-secondary">
              {formatPrice(option.price)}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function PricingOptions() {
  return (
    <div className="container mx-auto max-w-6xl pt-12 md:pt-24">
      <h2 className="text-center">Options supplémentaires</h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
        Ajoutez à votre site les fonctionnalités dont vous avez besoin. Prix en
        € TTC, paiement unique. Les éventuelles licences d&apos;extensions ou
        d&apos;applications payantes sont facturées au coût réel.
      </p>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <OptionsCard title="Site vitrine (WordPress)" options={wordpressOptions} />
        <OptionsCard title="E-commerce (Shopify)" options={shopifyOptions} />
      </div>
      <div className="mt-12 flex flex-col items-center gap-3 text-center">
        <p className="mb-0 text-lg font-semibold text-captive-secondary">
          Un projet en tête ? Estimez votre budget en 2 minutes.
        </p>
        <Link
          href="/devis"
          className="inline-flex items-center justify-center rounded-full bg-captive-secondary px-8 py-4 font-semibold text-white transition-colors duration-200 hover:bg-captive-secondary-hover"
        >
          Faire mon devis
        </Link>
      </div>
    </div>
  );
}
