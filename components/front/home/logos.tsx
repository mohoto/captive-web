import Image from 'next/image'

type Props = {}

function Logos({}: Props) {
  return (
    <section className="my-40 lg:px-8">
      <div className="container flex justify-between">
        <Image
        src="/images/home/facebook-partner-logo-vector.svg"
        alt="Logo Facebook business suite"
        className="rounded-md bg-shikal-light px-2 border-shikam-light border-2 shadow-sm"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/google-partner-logo-vector.svg"
        alt="Logo Google partners"
        className="rounded-md bg-shikal-light px-2 border-shikam-light border-2 shadow-sm"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/shopify-partner-logo-vector.svg"
        alt="Logo Shopify partners"
        className="rounded-md bg-shikal-light px-2 border-shikam-light border-2 shadow-sm"
        width={142}
        height={63}
        priority
        />
        <Image
        src="/images/home/france-num-logo-vector.svg"
        alt="Logo France numerique"
        className="rounded-md bg-shikal-light px-2 border-shikam-light border-2 shadow-sm"
        width={142}
        height={63}
        priority
        />
      </div>
    </section>
  )
}

export default Logos