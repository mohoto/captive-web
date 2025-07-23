"use client";
import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {usePathname} from 'next/navigation'
import NavbarData from '@/data/NavbarData';
import {cn} from '@/lib/utils';
import GoogleBusinessImage from "../../../public/images/home/Shikam-google-mybusiness.webp"
import { FaFacebookF } from "react-icons/fa";


const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const [openMenu, setOpenMenu] = useState(false);

    const [subnav, setSubnav] = useState(0);
    const [navSticky, setNavSticky] = useState(false)

    useEffect(() => {
        window.document.addEventListener('scroll', () => {
            if(window.scrollY > 170) {
                setNavSticky(true);
            }
            else {
                setNavSticky(false);
            } 
        });
        /* window.document.addEventListener('scroll', () => {
            setSubnav(0);
        }); */
    });

    useEffect(() => {
        setSubnav(0);
        setOpenMenu(false);
    }, [pathname])
    

    return (
        <>
            <header className="z-20">
                {/* TopHeader */}
                <nav className={cn(navSticky ? "fixed top-0 z-50 w-full transition duration-500 ease-in-out shadow-lg bg-white border" : "bg-shikam-light pt-4")}>
                    <div className="py-4 container">
                        <div className="flex items-center justify-between">
                            <Link href="/">
                                {/* <div className="relative w-32 h-12 cursor-pointer md:w-44">
                                    <Image
                                    src="/images/work-formation-logo-vert-3.png"
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                    alt="Logo Karoy formation"
                                    />
                                </div> */}
                                SHIKAM
                            </Link>
                            <div className="hidden lg:flex">
                                <ul className="flex space-x-3">
                                    {NavbarData && NavbarData.map((value: any, index: any) => (
                                        // <li className={pathname === '/notre-centre' ? 'text-bleue-karoy-50' : undefined}>
                                        <li className="relative lg:text-base xl:text-base 2xl:text-base 3xl:text-lg text-shikam-fonce" key={index} onMouseEnter={() => setSubnav(index) }>
                                            {value.link ? (
                                                <Link href={value.link}>
                                                    {value.title}
                                                </Link>
                                            ) : (
                                                <span className="cursor-pointer">{value.title}</span>
                                            )}
                                            {value.subMenu && subnav === index ? (
                                                <div className={cn("absolute left-0 right-0 z-50 mt-2 origin-top-center rounded-md shadow-lg", value.title === 'PUBLICITÉ WEB' ? "w-[550px]" : "w-80")} onMouseLeave={() => setSubnav(0)}>
                                                    {value.title === 'PUBLICITÉ WEB' ? (
                                                        <div className="grid grid-cols-2">
                                                            <ul className="px-2 py-2 bg-white rounded-md shadow">
                                                                {value.subMenu && value.subMenu.filter((value: any) => value.title != "Annonces Local Services").map((value: any, index: any) => (
                                                                    <li key={index} className="border-gray-100 border-b last:border-0">
                                                                        <Link 
                                                                        href={value.link}
                                                                        className="block px-4 py-2 mt-2 bg-transparent rounded-lg md:mt-0 hover:text-shikam-normal focus:text-shikam-normal hover:bg-second-50 focus:bg-second-50 focus:outline-none focus:shadow-outline"
                                                                        >
                                                                            <div className="flex items-center">
                                                                                <value.icon className="w-5 h-5 text-shikam-normal" />
                                                                                {value.title}
                                                                            </div>
                                                                        </Link>
                                                                    </li> 
                                                                ))}
                                                            </ul>
                                                            <div className="p-6 bg-white">
                                                                <Image
                                                                    src={GoogleBusinessImage}
                                                                    alt="Agence Shikam publicité sur les réseaux sociaux"
                                                                    className="rounded-xl"
                                                                    width={200}
                                                                    height={200}
                                                                    priority
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <ul className="px-2 py-2 bg-white rounded-md shadow">
                                                            {value.subMenu && value.subMenu.map((value: any, index: any) => (
                                                                <li key={index} className="border-gray-100 border-b last:border-0">
                                                                    <Link 
                                                                    href={value.link}
                                                                    className="block px-4 py-2 mt-2 bg-transparent rounded-lg md:mt-0 hover:text-shikam-normal focus:text-shikam-normal hover:bg-second-50 focus:bg-second-50 focus:outline-none focus:shadow-outline"
                                                                    >
                                                                        {value.title}
                                                                    </Link>
                                                                </li> 
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ) : null }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <button 
                                className="px-6 py-2 shikam rounded-full bg-shikam-clair text-white shadow-xs hover:bg-shikam-degrade-fonce transition-all duration-75 ease-out"
                                >
                                    Espace client
                                </button>
                            </div>
                            <div className="lg:hidden">
                                {/* Mobile-menu */}
                                <div onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 bg-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    {openMenu && (
                        <div className="p-4 bg-white border-t-2 border-gray-200 lg:hidden">
                            <ul className="flex flex-col space-y-3 font-semibold text-md fadeInUp">
                                {NavbarData && NavbarData.map((value: any, index: any) => (
                                    // <li className={pathname === '/notre-centre' ? 'text-bleue-karoy-50' : undefined}>
                                    <li className="relative" key={index} onClick={() => setSubnav(index)}>
                                        {value.link ? (
                                            <Link href={value.link}>
                                                {value.title}
                                            </Link>
                                        ) : (
                                            <span className="cursor-pointer">{value.title}</span>
                                        )}
                                        {value.subMenu && subnav === index ? (
                                                <ul className="px-2 py-2 bg-white dark-mode:bg-gray-800">
                                                    {value.subMenu && value.subMenu.map((value: any, index: any) => (
                                                        <li key={index}>
                                                            <Link 
                                                            href={value.link}
                                                            className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-bleue-karoy-50 dark-mode:focus:bg-bleue-karoy-50 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-white focus:text-white hover:bg-bleue-karoy-50 focus:bg-bleue-karoy-50 focus:outline-none focus:shadow-outline">
                                                                {value.title}
                                                            </Link>
                                                        </li> 
                                                    )) }
                                                </ul>
                                        
                                        ) : null }
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
}

export default Navbar;


