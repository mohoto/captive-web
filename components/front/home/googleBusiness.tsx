import localFont from "next/font/local";
import Image from "next/image";
import GoogleBusinessImage from "../../../public/images/home/Shikam-google-mybusiness.webp";

const icomoonFont = localFont({
  src: "../../../fonts/icomoon.ttf",
});

function GoogleBusiness() {
  return (
    <section className="px-8 lg:px-32 bg-captive-primary pt-16 pb-28">
      <div className="grid lg:grid-cols-2 2xl:gap-x-20 lg:gap-x-10 place-items-center gap-y-4">
        <div className="w-full sm:max-w-md md:max-w-xl mx-auto">
          <Image
            src={GoogleBusinessImage}
            alt="Service Google Business"
            className="rounded-xl w-full h-auto object-contain"
            style={{
              maxWidth: "80%",
              height: "auto",
            }}
            priority
          />
        </div>
        <div className="flex flex-col items-stretch">
          <h3 className="text-3xl mb-12">
            <span className="font-semibold">Google My Business </span>
            inclus avec la création de votre site web
          </h3>
          <div className="p-8 rounded-xl self-end">
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
            <p className="font-light">
              Google My Business aumente la visibilité des professionnels dans
              les recherches locales sur Google. Il rend votre activité plus
              accessible en mettant en avant des informations clés comme
              l&#39;adresse, les horaires et le numéro de téléphone. Les avis
              clients affichés renforcent la confiance envers vous.
            </p>
            <div className="mt-8 flex flex-col gap-y-5">
              <div className="flex items-center gap-x-4">
                <span style={icomoonFont.style} className="text-3xl">
                  h
                </span>
                <p className="mb-0 text-lg">Visibilité locale accrue</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span style={icomoonFont.style} className="ext-3xl">
                  i
                </span>
                <p className="mb-0 text-lg">Interaction client facilitée</p>
              </div>
              <div className="flex items-center gap-x-4">
                <span style={icomoonFont.style} className="text-3xl">
                  j
                </span>
                <p className="mb-0 text-lg">Analyse de performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleBusiness;
