"use client";
import CaptiveLogo from "@/components/svg/CaptiveLogo";
import Link from "next/link";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";

function FooterTwo() {
  return (
    <footer>
      <div className="bg-captive-secondary text-white">
        <div className="grid grid-cols-1 px-6 bg-opacity-90 md:grid-cols-4 gap-y-10 py-14 text-md md:gap-x-20 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
          <div className="flex flex-col">
            <CaptiveLogo className="w-40 lg:w-40 fill-white" />
            <p className="mt-4 mb-2 text-sm font-light">
              Création de sites web pour les professionnels
            </p>
          </div>
          <div>
            <h5 className="text-xl font-bold md:text-lg">LIENS RAPIDES</h5>
            <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
              <Link href="/site-vitrine">Site vitrine</Link>
              <Link href="/e-commerce">Site e-commerce</Link>
              <Link href="/application-web">Application web</Link>
              <Link href="/tarifs">Tarifs</Link>
              <Link href="/contact">Nous contacter</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xl font-bold md:text-lg">
              INFORMATIONS LÉGALES
            </h5>
            <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
              <Link href="/conditions-generales-vente">
                Conditions générales de vente
              </Link>
              <Link href="/politique-confidentialite">
                Politique de confidentialité
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-xl font-bold md:text-lg">CONTACT</h5>
            <div className="text-lg md:text-base">
              <p className="flex items-center mb-1">
                <HiOutlineMail className="h-4 mr-2" />
                Email :
              </p>
              <p>contact@captive-web.fr</p>
            </div>
            <div className="text-lg md:text-base">
              <p className="flex items-center mb-1">
                <HiOutlineLocationMarker className="h-4 mr-2" />
                Mobile :
              </p>
              <p>
                07 57 83 71 10
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-shikam-light">
        <p className="text-center font-extralight">
          Copyright © {new Date().getFullYear()} - Captive web
        </p>
      </div>
    </footer>
  );
}

export default FooterTwo;
