"use client"
import Image from 'next/image'
import Link from 'next/link'
import {BsTelephoneInbound} from 'react-icons/bs'
import {HiOutlineLocationMarker, HiOutlineMail} from 'react-icons/hi'

type Props = {}

function Footer({}: Props) {
  return (
    <footer>
        <div className="bg-shikam-degrade-fonce">
            <div className="grid grid-cols-1 px-6 text-white bg-bleue-karoy-100 bg-opacity-90 md:grid-cols-4 gap-y-10 py-14 text-md md:gap-x-20 md:px-6 lg:px-12 xl:px-20 2xl:px-44 3xl:px-52">
                <div className="flex flex-col">
                    <div className="relative">
                        {/* <Image 
                        src="/images/logo-qualiopi.png"
                        width={200}
                        height={100}
                        alt="Logo certification Qualiopi"
                        /> */}
                    </div>
                    <p className="mt-4 mb-2 text-sm font-extralight">Notre centre a obtenu la certification QUALIOPI. Cette certification qualité a été délivrée au titre de la catégorie: actions de formation.</p>
                    <p className="text-sm font-extralight">N° de déclaration d'activité : 11756436975</p>
                </div>
                <div>
                    <h5 className="text-xl font-bold md:text-lg">LIENS RAPIDES</h5>
                    <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
                        <Link href="/formations">Nos formations</Link>
                        <Link href="/financement/financement-pole-emploi">Financement Pôle emploi</Link>
                        <Link href="/financement/financement-cpf">Financement CPF</Link>
                        <Link href="/financement/financement-agephip">Financement AGEPHIP</Link>
                        <Link href="/financement/financement-opco">Financement OPCO</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h5 className="text-xl font-bold md:text-lg">INFORMATIONS LÉGALES</h5>
                    <div className="flex flex-col mt-6 space-y-2 text-lg md:text-base">
                        <Link href="/conditions-generales-de-vente">Conditions générales de vente</Link>
                        <Link href="/reglement-interieur">Règlement intérieur</Link>
                        <Link href="/politique-confidentialite">Politique de confidentialité</Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h5 className="text-xl font-bold md:text-lg">CONTACT</h5>
                    <div className="text-lg md:text-base">
                        <p className="flex items-center mb-1"><HiOutlineMail className="h-4 mr-2"/>Email :</p>
                        <p>contact@shikam.fr</p>
                    </div>
                    <div className="text-lg md:text-base">
                        <p className="flex items-center mb-1"><HiOutlineLocationMarker className="h-4 mr-2"/>Adresse :</p>
                        <p>30 bd de sébastopol<br/>75004 PARIS</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-4 bg-bleue-karoy-100">
            <p className="text-center text-white font-extralight">Copyright © 2023 Work formation</p>
        </div>
    </footer>
  )
}

export default Footer
