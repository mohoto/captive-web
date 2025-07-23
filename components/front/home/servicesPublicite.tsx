import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

import localFont from "next/font/local";

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});


type Props = {}

function ServicesPublicite({}: Props) {
  return (
    <section className="mt-16 mb-16 bg-shikam-light py-16 lg:px-8">
      <div className="container">
        <div className="flex items-center flex-col mb-20">
          {/* <span className="text-shikam-normal text-center font-semibold mb-3 text-lg">Création de site web et marketing</span> */}
          <div style={icomoonFont.style} className="text-shikam-normal text-[2.5em] mb-3">a</div>
          <h2 className="text-4xl font-bold text-shikam-fonce text-center lg:px-48 2xl:px-64">Dominez le web : <span className="text-shikam-degrade">stratégies publicitaires sur mesure</span> pour votre succès en ligne !</h2>
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-x-12">
            <div className="!border-0 shadow-none bg-shikam-light">
                <div className="flex aspect-square items-center justify-center p-0">
                  <div className="rounded-xl relative w-full h-full">
                    <Image
                      src="/images/home/service-publicite-facebook-4.png"
                      alt="Agence Shikam publicité sur les réseaux sociaux"
                      className="object-contain rounded-t-xl"
                      fill
                      priority
                    />
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div>
                  <h3 className="text-shikam-normal mb-8 font-semibold text-xl before:content-[''] before:w-20 before:h-2 before:bg-shikam-normal before:-bottom-4 before:left-0 relative before:absolute flex items-center"><FaFacebookF className="h-6 w-6 mr-2"/>POUR QUI ?</h3>
                    <p className="mb-6 font-light">Idéale pour les PME, les commerçants, les restaurateurs et les services locaux qui souhaitent cibler une audience large et diversifiée.</p>
                    <Link href="/publicite-facebook">
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-shikam-normal hover:text-white transition-all duration-75 ease-in-out">
                        En savoir plus
                      </button>
                    </Link>
                  </div>
                </div>
            </div>
            <div className="!border-0 shadow-none bg-shikam-light">
                <div className="flex aspect-square items-center justify-center p-0">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/home/service-publicite-instagram-4.png"
                      alt="Agence Shikam publicité sur les réseaux sociaux"
                      className="object-contain rounded-t-xl"
                      fill
                      priority
                    />
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div>
                    <h3 className="text-shikam-normal mb-8 font-semibold text-xl before:content-[''] before:w-20 before:h-2 before:bg-shikam-normal before:-bottom-4 before:left-0 relative before:absolute flex items-center"><FaInstagram className="h-6 w-6 mr-2"/>POUR QUI ?</h3>
                    <p className="mb-6 font-light">Parfait pour les créateurs, les coachs, les marques de mode et les entreprises visuelles cherchant à captiver un public jeune et engagé.</p>
                    <Link href="/publicite-facebook">
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-shikam-normal hover:text-white transition-all duration-75 ease-in-out">
                        En savoir plus
                      </button>
                    </Link>
                  </div>
                </div>
            </div>
            <div className="!border-0 shadow-none bg-shikam-light">
                <div className="flex aspect-square items-center justify-center p-0">
                  <div className="rounded-xl relative w-full h-full">
                    <Image
                      src="/images/home/service-publicite-linkedin-4.png"
                      alt="Agence Shikam publicité sur les réseaux sociaux"
                      className="object-contain rounded-t-xl"
                      fill
                      priority
                    />
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg">
                  <div>
                  <h3 className="text-shikam-normal mb-8 font-semibold text-xl before:content-[''] before:w-20 before:h-2 before:bg-shikam-normal before:-bottom-4 before:left-0 relative before:absolute flex items-center"><FaLinkedin className="h-6 w-6 mr-2"/>POUR QUI ?</h3>
                    <p className="mb-6 font-light">Adaptée pour les professionnels B2B, les consultants et les entreprises de services cherchant des contacts professionnels et des opportunités d'affaires.</p>
                    <Link href="/publicite-facebook">
                      <button className="text-shikam-normal border-shikam-normal px-4 py-2 rounded-full text-sm border-2 hover:bg-shikam-normal hover:text-white transition-all duration-75 ease-in-out">
                        En savoir plus
                      </button>
                    </Link>
                  </div>
                </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 mt-16 lg:gap-x-20">
            <div className="rounded-xl">
              <div className="rounded-t-2xl">
                <Image
                  src="/images/home/shikam-service-seo-4.png"
                  alt="Agence Shikam publicité sur les réseaux sociaux"
                  className="rounded-t-2xl"
                  width={1000}
                  height={600}
                  priority
                />
              </div>
              <div>
                <div className="flex items-center flex-col py-10 bg-shikam-degrade-fonce lg:px-20">
                    <h3 className="text-white mb-8 font-semibold text-2xl before:content-[''] before:w-20 before:h-2 before:bg-shikam-normal before:-bottom-4 before:left-1/2 relative before:absolute flex items-center uppercase text-center before:transform before:-translate-x-1/2">Visibilté sur Google et Bing</h3>
                    <h4 className="text-xl text-shikam-clair mb-4">Reférencement de votre site web</h4>
                    <p className="mb-0 font-light text-center text-slate-50">Votre site web dans les premiers résultats de Google et Bing naturellement.</p>
                    <button className="text-shikam-normal bg-white px-8 py-2 rounded-full mt-4 border-2 hover:bg-shikam-normal hover:text-white transition-all duration-75 ease-in-out block">Découvrir</button>
                </div>
              </div>
            </div>
            <div className="rounded-2xl">
              <div>
                <div className="flex items-center flex-col py-10 bg-shikam-degrade-fonce lg:px-16">
                    <h3 className="text-white mb-8 font-semibold text-2xl before:content-[''] before:w-20 before:h-2 before:bg-shikam-normal before:-bottom-4 before:left-1/2 relative before:absolute flex items-center uppercase text-center before:transform before:-translate-x-1/2">Publicité sur Google et Bing</h3>
                    <h4 className="text-xl text-shikam-clair mb-4">Annonces publicitaires</h4>
                    <p className="mb-0 font-light text-center text-slate-50">Votre site web dans les premiers résultats de Google et Bing avec les annonces sponsorisées.</p>
                    <button className="text-shikam-normal bg-white px-8 py-2 rounded-full mt-4 border-2 hover:bg-shikam-normal hover:text-white transition-all duration-75 ease-in-out block">Découvrir</button>
                </div>
              </div>
              <div className="rounded-b-2xl">
                <Image
                  src="/images/home/shikam-service-adwords-4.png"
                  alt="Agence Shikam publicité sur les réseaux sociaux"
                  className="rounded-b-2xl"
                  width={1000}
                  height={600}
                  priority
                />
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesPublicite;


  