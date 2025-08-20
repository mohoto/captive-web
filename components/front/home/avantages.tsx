import ServicesPro from "@/public/images/home/captive-web_sites_professionnels.png";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";

function Avantages() {
  return (
    <section className="lg:px-32 px-8 bg-captive-secondary py-16 text-white">
      <div className="container">
          <div className="grid lg:grid-cols-2 place-items-center lg:gap-x-12 gap-y-10 lg:gap-y-0">
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl mb-8 font-semibold text-white">
                Une approche personnalisée pour chaque secteur d&#39;activité
              </h2>
              <p>
                Chaque profession a ses spécificités, ses contraintes et ses objectifs. C&#39;est pourquoi nous adaptons nos solutions à votre secteur d&#39;activité.
              </p>
              <div className="mt-6">
                <ul className="space-y-2">
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="!mb-0">Fonctionnalités métier : outils spécifiques à votre domaine d&#39;expertise</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="!mb-0">Design adapté : codes visuels qui parlent à votre clientèle cible</p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="!mb-0">
                      Contenu optimisé : textes et mots-clés pertinents pour votre secteur
                    </p>
                  </li>
                  <li className="py-1 w-full flex items-center gap-x-2">
                    <FaCirclePlus className=" w-5 h-5 text-captive-blue" />
                    <p className="!mb-0">
                      Conformité réglementaire : respect des obligations de votre profession
                    </p>
                  </li>
                </ul>
                <p className="font-semibold mt-6">Quel que soit votre métier, nous avons la solution digitale qui vous correspond.</p>
              </div>
            </div>
            <div className="justify-self-center order-1 lg:order-2 w-[80%] lg:w-[50%] mx-auto">
              <Image
                src={ServicesPro}
                alt="Aillustration métiers professionnels"
                width={800}
                height={800}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                priority
              />
            </div>
          </div>
        </div>
    </section>
  );
}

export default Avantages;