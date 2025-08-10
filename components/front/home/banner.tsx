import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

function Banner() {
  return (
    <section className="lg:px-8 -mt-10">
      <div className="container">
        <div className="bg-captive-secondary flex lg:flex px-10 py-6 items-center justify-between lg:rounded-lg flex-col gap-y-4">
          <h2 className="text-3xl text-white text-center lg:text-left">
            Besoin d&#39;un site web pour votre activité ?
          </h2>
          <Link
            href="tel:0757837110"
            className="flex gap-3 items-center text-lg font-bold px-8 py-3 rounded-full border-2 bg-captive-primary hover:bg-white transition-all duration-75 ease-in-out"
          >
            <RiWhatsappFill className="h-8 w-8 text-green-700" />
            07 57 83 71 10
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
