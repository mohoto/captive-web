import CaptiveLogo from "@/components/svg/CaptiveLogo";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const services = [
  { label: "Site vitrine", href: "/site-vitrine" },
  { label: "Site e-commerce", href: "/e-commerce" },
  { label: "Application sur mesure", href: "/application-web" },
  { label: "Tarifs", href: "/tarifs" },
];

const legal = [
  { label: "Conditions générales de vente", href: "/conditions-generales-vente" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

const linkClass =
  "text-white/70 transition-colors duration-200 hover:text-white";

function FooterTwo() {
  return (
    <footer className="relative bg-captive-secondary text-white">
      {/* Même fond dégradé que la section Hero */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-captive-secondary-hover/40 via-captive-secondary to-captive-secondary"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-8 pt-16 pb-10 lg:px-32">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-16">
          <div>
            <CaptiveLogo className="w-40 fill-white" />
            <p className="mt-5 mb-0 max-w-xs text-white/70">
              Création de sites web, boutiques en ligne et applications sur
              mesure pour les professionnels.
            </p>
          </div>

          <nav aria-label="Nos services">
            <h2 className="mb-5 text-sm font-semibold tracking-wide text-white uppercase">
              Nos services
            </h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informations légales">
            <h2 className="mb-5 text-sm font-semibold tracking-wide text-white uppercase">
              Informations légales
            </h2>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-5 text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h2>
            <div>
              <Link
                href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-semibold text-captive-secondary transition-colors duration-200 hover:bg-captive-primary"
              >
                <WhatsappLogo className="h-5 w-5 text-green-600" weight="fill" />
                Discuter sur WhatsApp
              </Link>
            </div>
            <p className="mt-4 mb-0 text-sm text-white/60">
              Devis gratuit et réponse rapide.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="mb-0">
            © {new Date().getFullYear()} Captive Web. Tous droits réservés.
          </p>
          <p className="mb-0">Agence web en France</p>
        </div>
      </div>
    </footer>
  );
}

export default FooterTwo;
