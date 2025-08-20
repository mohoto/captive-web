import GoogleBusinessImage from "@/public/images/home/captive_web-google-mybusiness.png";
import Image from "next/image";
import { MdOutlineAdsClick, MdOutlineVisibility } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";



function GoogleBusiness() {
  return (
    <section className="px-8 lg:px-32 py-16">
      <div className="grid lg:grid-cols-2 2xl:gap-x-20 lg:gap-x-10 place-items-center gap-y-4">
        <div className="w-full lg:w-[70%]">
          <Image
            src={GoogleBusinessImage}
            alt="Service Google Business"
            className="rounded-xl w-full h-auto object-contain"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            priority
          />
        </div>
        <div className="flex flex-col items-stretch">
          <h2 className="mb-4">
            <span className="text-[#437ee2]">Google My Business </span>
            inclus avec la création de votre site web
          </h2>
          <div className="py-8 rounded-xl lg:self-end">
            <div className="flex items-center gap-x-3 mb-4">
              <Image
                src="/images/home/Google-My-Business_logo.svg"
                alt="Logo Googme My Business"
                width={40}
                height={40}
                priority
              />
              <h3 className="text-3xl font-semibold">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#DB4437]">o</span>
                <span className="text-[#F4B400]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#0F9D58]">l</span>
                <span className="text-[#DB4437]">e</span>
                <span className="font-normal text-[#437ee2]"> My business</span>
              </h3>
            </div>
            <p>
              Google My Business augmente la visibilité des professionnels dans
              les recherches locales sur Google. Il rend votre activité plus
              accessible en mettant en avant des informations clés comme
              l&#39;adresse, les horaires et le numéro de téléphone. Les avis
              clients affichés renforcent la confiance envers vous.
            </p>
            <div className="mt-8 flex flex-col gap-y-5">
              <div className="flex items-center gap-x-4">
                <MdOutlineVisibility className="size-8 text-captive-secondary" />
                <p className="mb-0 text-lg text-captive-secondary">Visibilité locale accrue</p>
              </div>
              <div className="flex items-center gap-x-4">
                <MdOutlineAdsClick className="size-8 text-captive-secondary" />
                <p className="mb-0 text-lg text-captive-secondary">Interaction client facilitée</p>
              </div>
              <div className="flex items-center gap-x-4">
                <TbBrandGoogleAnalytics className="size-8 text-captive-secondary" />
                <p className="mb-0 text-lg text-captive-secondary">Analyse de performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleBusiness;
