import Image from "next/image";
import { FaWebAwesome } from "react-icons/fa6";
import { HiUserPlus } from "react-icons/hi2";
import { MdVisibility } from "react-icons/md";
import { SiTrustpilot } from "react-icons/si";
import { TbMessageChatbotFilled } from "react-icons/tb";
import BusinessImage from "../../../public/images/home/captive-web_presentation.png";

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
          <h2 className="mb-8">
            Pourquoi avoir un site web est essentiel pour votre activité ?
          </h2>
          <div className="bg-shikam-light">
            <div className="flex flex-col gap-y-5">
              <div>
                <div className="flex gap-x-2 items-center">
                    <MdVisibility className="h-5 w-5 text-captive-secondary" />
                  <h3 className="font-semibold text-lg text-captive-secondary">
                    Visibilité 24/7
                  </h3>
                </div>
                <p className="mb-0">
                  Votre entreprise reste accessible à tout moment, partout dans
                  le monde.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-center">
                  <SiTrustpilot className="h-5 w-5 text-captive-secondary" />
                  <h3 className="font-semibold text-lg text-captive-secondary">
                    Crédibilité professionnelle
                  </h3>
                </div>
                <p className="mb-0">
                  Un site bien conçu renforce votre image et inspire confiance.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-center">
                  <HiUserPlus className="h-5 w-5 text-captive-secondary" />
                  <h3 className="font-semibold text-lg text-captive-secondary">
                    Acquisition de clients
                  </h3>
                </div>
                <p className="mb-0">
                  Attirez de nouveaux clients en falicitant les ventes, les
                  prises de contact ou les demandes de devis.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-center">
                  <TbMessageChatbotFilled className="h-5 w-5 text-captive-secondary" />
                  <h3 className="font-semibold text-lg text-captive-secondary">
                    Communication maîtrisée
                  </h3>
                </div>
                <p className="mb-0">
                  Vous contrôlez votre message, vos offres, et votre image de
                  marque.
                </p>
              </div>
              <div>
                <div className="flex gap-x-2 items-center">
                  <FaWebAwesome className="h-5 w-5 text-captive-secondary" />
                  <h3 className="font-semibold text-lg text-captive-secondary">
                    Avantage concurrentiel
                  </h3>
                </div>
                <p className="mb-0">
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
