import React from 'react'

type Props = {}

function Blog({}: Props) {
  return (
    <section className="container my-20">
        <div className="grid lg:grid-cols-2 lg:gap-x-20">
            <div>
                <div className="flex flex-col mb-10">
                    <span className="text-shikam-normal font-semibold mb-1 text-lg">LE BLOG</span>
                    <h2 className="text-4xl font-bold text-shikam-fonce mb-6">Les news <span className="text-shikam-degrade">du web</span></h2>
                    <p>Nous partageons les dernières tendances, innovations, et actualités du monde digital. Restez à l'affût pour ne rien manquer de ce qui façonne l'avenir de la communication en ligne.</p>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-gray-300 mb-10">
                    <h3 className="text-xl">Comment avoir un bon site web : les 5 méthodes essentiels</h3>
                </div>
                <div className="border-b-2 border-gray-300 mb-10">
                    <h3 className="text-xl">Comment avoir un bon site web : les 5 méthodes essentiels</h3>
                </div>
                <div className="border-b-2 border-gray-300 mb-10">
                    <h3 className="text-xl">Comment avoir un bon site web : les 5 méthodes essentiels</h3>
                </div>
            </div>
            <div>

            </div>

        </div>

    </section>
  )
}

export default Blog