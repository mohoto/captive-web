import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

type Props = {}

function Testimonials({}: Props) {
  return (
    <section className="my-20 bg-shikam-degrade-fonce py-16 lg:px-8">
        <div className="container">
            <div className="grid grid-cols-5">
                <div className="col-span-4">
                    <h2 className="text-4xl font-bold text-white xl:!leading-relaxed mb-20">Depuis 2018, nous avons accompagné plus de 2200 <span className="text-shikam-clair">artisans, commerçants et PME comme vous !</span></h2>
                </div>
            </div>
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="p-1">
                            <div className="flex bg-white p-16 rounded-3xl lg:gap-x-6 items-stretch 2xl:gap-x-20">
                                <div className="w-1/2">
                                    <Image
                                        src="/images/home/Shikam-etude-cas-1.png"
                                        alt="Agence Shikam publicité sur les réseaux sociaux"
                                        className="rounded-3xl"
                                        width={800}
                                        height={800}
                                        style={{
                                            maxWidth: "80%", 
                                            height: "auto"
                                        }}
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 flex-1 justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold">Enzo PIGELLI</h3>
                                        <p className="font-semibold">Photographe</p>
                                    </div>
                                    <p>Pour ce photographe en freelance, nous avons conçu un site web pour présenter ses différentes prestations. Nous avons mis en place une campagne publicitaire sur <span className="font-semibold">Instagram, TikTok et Google Ads </span>pour attirer plus de clients à la recherche d'un photographe pour leurs évenements.</p>
                                    <div className="bg-shikam-light p-6 rounded-xl">
                                        <div>
                                            <svg width="30%" height="30%" viewBox="0 0 881 130" xmlns="http://www.w3.org/2000/svg"  >
                                                <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,109.853,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <blockquote className="font-semibold text-gray-900 dark:text-white mt-6">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-600 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                                            </svg>
                                            <p className="mt-4 text-foreground font-light">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="p-1">
                            <div className="flex bg-white p-16 rounded-3xl lg:gap-x-6 items-stretch 2xl:gap-x-20">
                                <div className="w-1/2">
                                    <Image
                                        src="/images/home/Shikam-etude-cas-1.png"
                                        alt="Agence Shikam publicité sur les réseaux sociaux"
                                        className="rounded-3xl"
                                        width={800}
                                        height={800}
                                        style={{
                                            maxWidth: "80%", 
                                            height: "auto"
                                        }}
                                        priority
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 flex-1 justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold">Enzo PIGELLI</h3>
                                        <p className="font-semibold">Photographe</p>
                                    </div>
                                    <p>Pour ce photographe en freelance, nous avons conçu un site web pour présenter ses différentes prestations. Nous avons mis en place une campagne publicitaire sur <span className="font-semibold">Instagram, TikTok et Google Ads </span>pour attirer plus de clients à la recherche d'un photographe pour leurs évenements.</p>
                                    <div className="bg-shikam-light p-6 rounded-xl">
                                        <div>
                                            <svg width="30%" height="30%" viewBox="0 0 881 130" xmlns="http://www.w3.org/2000/svg"  >
                                                <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                                <g transform="matrix(1,0,0,1,109.853,-382.568)">
                                                    <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" fill="rgb(255,216,0)"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <blockquote className="font-semibold text-gray-900 dark:text-white mt-6">
                                            <svg className="w-5 h-5 text-gray-400 dark:text-gray-600 mb-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                                            </svg>
                                            <p className="mt-4 text-foreground font-light">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </section>
  )
}

export default Testimonials