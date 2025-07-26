import localFont from "next/font/local";
import Image from "next/image";
import { FaWebAwesome } from "react-icons/fa6";
import { HiUserPlus } from "react-icons/hi2";
import { MdVisibility } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { TbMessageChatbotFilled } from "react-icons/tb";
import BusinessImage from "../../../public/images/home/captive-web_presentation.png";

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});

function Introduction() {
  return (
    <section className="my-10 px-8 lg:px-32">
      <div className="grid lg:grid-cols-2 2xl:gap-x-20 lg:gap-x-10 items-center gap-y-4">
        <div>
          <Image
            src={BusinessImage}
            alt="Agence Shikam publicité sur les réseaux sociaux"
            className="rounded-xl"
            style={{
              maxWidth: "90%",
              height: "auto",
            }}
            priority
          />
        </div>
        <div className="flex flex-col">
          <h2 className="2xl:text-3xl lg:text-3xl text-2xl font-bold mb-8 xl:leading-10">
            Pourquoi avoir un site web est essentiel pour votre activité ?
          </h2>
          <div className="bg-shikam-light">
            <div className="flex flex-col gap-y-5">
              <div>
                <div className="flex gap-x-2 items-end">
                  <div className="bg-captive-primary p-1 inline-block rounded-md">
                    <MdVisibility className="h-6 w-6 text-captive-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-captive-secondary">
                    Visibilité 24/7
                  </h3>
                </div>
                <p className="mt-3">
                  Votre entreprise reste accessible à tout moment, partout dans
                  le monde.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-end">
                  <div className="bg-captive-primary p-1 inline-block rounded-md">
                    <SiTrustpilot className="h-6 w-6 text-captive-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-captive-secondary">
                    Crédibilité professionnelle
                  </h3>
                </div>
                <p className="text-shikam-fonce mb-0 text-lg">
                  Un site bien conçu renforce votre image et inspire confiance.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-end">
                  <div className="bg-captive-primary p-1 inline-block rounded-md">
                    <HiUserPlus className="h-6 w-6 text-captive-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-captive-secondary">
                    Acquisition de clients
                  </h3>
                </div>
                <p className="text-shikam-fonce mb-0 text-lg">
                  Attirez de nouveaux clients en falicitant les ventes, les
                  prises de contact ou les demandes de devis.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-end">
                  <div className="bg-captive-primary p-1 inline-block rounded-md">
                    <TbMessageChatbotFilled className="h-6 w-6 text-captive-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-captive-secondary">
                    Communication maîtrisée
                  </h3>
                </div>
                <p className="text-shikam-fonce mb-0 text-lg">
                  Vous contrôlez votre message, vos offres, et votre image de
                  marque.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-end">
                  <div className="bg-captive-primary p-1 inline-block rounded-md">
                    <FaWebAwesome className="h-6 w-6 text-captive-secondary" />
                  </div>
                  <h3 className="font-bold text-lg text-captive-secondary">
                    Avantage concurrentiel
                  </h3>
                </div>
                <p className="text-shikam-fonce mb-0 text-lg">
                  Démarquez-vous avec un site moderne là où vos concurrents sont
                  absents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
