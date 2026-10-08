import type { ReactNode } from "react";

type TocItem = { id: string; label: string };

type LegalLayoutProps = {
  title: string;
  updated?: string;
  toc: TocItem[];
  children: ReactNode;
};

const company = [
  "CAPTIVE",
  "SIRET : 392 843 595 00035",
  "256 rue Gabriel Péri, 94230 Cachan",
];

function TocList({ toc }: { toc: TocItem[] }) {
  return (
    <ol className="m-0 mt-3 list-none space-y-1 p-0 text-sm">
      {toc.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="block rounded-lg px-2 py-1.5 text-neutral-900/70 transition-colors hover:bg-white hover:text-captive-blue"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function LegalLayout({ title, updated, toc, children }: LegalLayoutProps) {
  return (
    <>
      <header className="relative overflow-hidden bg-captive-secondary px-8 pt-14 pb-12 lg:px-32 lg:pt-20 lg:pb-16">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary"
          aria-hidden="true"
        />
        <div className="relative container mx-auto">
          <p className="mb-3 text-sm font-semibold tracking-wide text-captive-ciel uppercase">
            Informations légales
          </p>
          <h1 className="mb-6 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {company.map((item) => (
              <li
                key={item}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/85"
              >
                {item}
              </li>
            ))}
          </ul>
          {updated && (
            <p className="mt-4 mb-0 text-sm text-white/60">
              Dernière mise à jour : {updated}
            </p>
          )}
        </div>
      </header>

      <div className="container mx-auto grid gap-8 px-6 py-10 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-12 lg:px-32 lg:py-16">
        <nav aria-label="Sommaire" className="lg:sticky lg:top-28 lg:self-start">
          {/* Mobile : sommaire repliable */}
          <details className="rounded-2xl border border-captive-secondary/10 bg-captive-primary p-4 lg:hidden">
            <summary className="cursor-pointer text-sm font-semibold tracking-wide text-captive-secondary uppercase">
              Sommaire
            </summary>
            <TocList toc={toc} />
          </details>
          {/* Ordinateur : sommaire toujours visible et fixe */}
          <div className="hidden rounded-2xl border border-captive-secondary/10 bg-captive-primary p-4 lg:block">
            <p className="mb-0 text-sm font-semibold tracking-wide text-captive-secondary uppercase">
              Sommaire
            </p>
            <TocList toc={toc} />
          </div>
        </nav>

        <article className="min-w-0">{children}</article>
      </div>
    </>
  );
}
