import { BsBing } from "react-icons/bs";
import {
  FaFacebook,
  FaGoogle,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";
import { TfiYoutube } from "react-icons/tfi";

type Props = {};

function Icons({}: Props) {
  return (
    <section className="lg:px-8 py-8">
      <div className="container">
        <div className="flex justify-between">
          <FaGoogle className="h-12 w-12 text-gray-300" />
          <FaLinkedin className="h-12 w-12 text-gray-300" />
          <BsBing className="h-10 w-10 text-gray-300" />
          <FaFacebook className="h-12 w-12 text-gray-300" />
          <TbWorldWww className="h-14 w-14 text-gray-300" />
          <TfiYoutube className="h-12 w-12 text-gray-300" />
          <SiGoogleads className="h-12 w-12 text-gray-300" />
          <FaInstagramSquare className="h-12 w-12 text-gray-300" />
        </div>
      </div>
    </section>
  );
}

export default Icons;
