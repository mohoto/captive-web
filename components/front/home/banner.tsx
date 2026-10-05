import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

function Banner() {
  return (
    <section className="px-8 pt-4 pb-8 lg:px-32 lg:pt-8 lg:pb-12">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-y-5 rounded-2xl bg-captive-secondary px-8 py-10 lg:flex-row lg:px-14">
          <h2 className="text-center text-white lg:text-left">
            Besoin d&apos;un site web pour votre activité ?
          </h2>
          <Link
            href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
            target="_blank"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-captive-secondary transition-colors duration-200 hover:bg-captive-primary"
          >
            <WhatsappLogo className="h-5 w-5 text-green-600" weight="fill" />
            Discuter sur WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
