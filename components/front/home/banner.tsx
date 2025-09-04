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
          <button className="group text-shikam-normal border-shikam-normal px-8 py-3 rounded-full border-2 bg-captive-primary hover:bg-green-700 hover:text-white transition-all duration-75 ease-in-out">
            <Link
              href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20%creation20de%20site%20web"
              className="flex gap-2 items-center text-lg font-semibold group-hover:text-white"
            >
              <RiWhatsappFill className="h-8 w-8 text-green-700 group-hover:text-white" />
              WhatsApp
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
