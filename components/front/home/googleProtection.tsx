import Image from "next/image"

type Props = {}

function GoogleProtection({}: Props) {
  return (
    <section className="mt-24 lg:px-8">
      <div className="container">
        <div className="grid grid-cols-5">
          <div className="col-span-3">
            <h2 className="text-4xl mb-12 font-bold text-shikam-fonce xl:!leading-relaxed">Développez votre business en attirant de nouveaux clients <span className="text-shikam-normal">près de chez vous</span></h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 2xl:gap-x-20 lg:gap-x-10">
          <div className="col-span-3">
            <h3 className="font-semibold text-lg mb-4">Vous êtes un professionnel de services désireux d'élargir votre clientèle locale?</h3>
            <p className="!mb-12">Grâce au programme Annonces Local Services, positionnez-vous en tête des résultats de recherche Google, ciblez les clients locaux et ne payez que lorsque votre annonce génère un contact.</p>
            <div className="flex flex-col gap-y-6">
              <div className="md:flex md:items-start lg:gap-x-3">
                <div className="flex items-center w-16 h-16 bg-shikam-light rounded-full justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                </div>
                <div className="flex flex-col gap-y-2 lg:max-w-sm">
                  <h3 className="text-xl font-semibold">Annonces Local Services</h3>
                  <p className="font-light">Ciblez les utilisateurs recherchant les services que vous proposez sur votre secteur.</p>
                </div>
              </div>
              <div className="md:flex md:items-start lg:gap-x-3">
                <div className="flex items-center w-16 h-16 bg-shikam-light rounded-full justify-center">
                  <svg viewBox="0 0 2500 2500" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10"><circle cx="1250" cy="1250" fill="#53ba6f" r="1250"/><path d="m2493.8 1133.8-618.8-618.8-1150 1148.7 803.8 803.8c556.2-127.5 971.2-623.7 971.2-1217.5 0-38.7-2.5-77.5-6.2-116.2z" fill="#23893c"/><path d="m1875 515-883.7 883.8-353.8-353.8-265 265 618.8 618.7 1148.7-1148.7z" fill="#fff"/></svg>
                </div>
                <div className="flex flex-col gap-y-2 lg:max-w-sm">
                  <h3 className="text-xl font-semibold">Protection Google</h3>
                  <p className="font-light">Rassurez de nouveaux clients en tant que prestataire de qualité.</p>
                </div>
              </div>
              <div className="md:flex md:items-start lg:gap-x-3">
                <div className="flex items-center w-16 h-16 bg-shikam-light rounded-full justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-shikam-normal">
                  <path d="m11.969,6.996l-3,.008.005,1.996h-1.969l-.005-2.004-3,.008.005,1.996h-2.005v3h2.013l.005,2h-2.018v3h2.026l.005,2.004,3-.008-.005-1.996h1.969l.005,2.004,3-.008-.005-1.996h2.005v-3h-2.013l-.005-2h2.018v-3h-2.026l-.005-2.004Zm-2.982,7.004h-1.969l-.005-2h1.969l.005,2ZM22,2v20h-3V7.069l-2.012,2.063-2.148-2.094,4.913-5.039h2.247Z"/>
                </svg>
                </div>
                <div className="flex flex-col gap-y-2 lg:max-w-sm">
                  <h3 className="text-xl font-semibold">Premier sur Google</h3>
                  <p className="font-light">Vos annonces s'affichent dans les premiers résultats de recherche sur Google.</p>
                </div>
              </div>
            </div>
            <button className="px-6 py-3 shikam rounded-full bg-shikam-normal text-white mt-6 shadow-md hover:bg-shikam-degrade-fonce transition-all duration-75 ease-out">Découvrir notre solution</button>
          </div>
          <div className="rounded-xl relative w-full h-full col-span-2">
            <Image
              src="/images/home/Shikam-service-protection-google.png"
              alt="Agence Shikam publicité sur les réseaux sociaux"
              className="object-contain rounded-xl"
              fill
              priority
            />
            </div>
        </div>
      </div>
    </section>
  )
}

export default GoogleProtection