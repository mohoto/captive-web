import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "contact@captive-web.fr",
}: Contact2Props) => {
  return (
    <section className="py-32 px-8 lg:px-32">
      <div className="container">
        <div className="grid lg:grid-cols-5 lg:gap-x-32">
          <div className="flex flex-col justify-between gap-10 lg:col-span-2">
            <div className="text-center lg:text-left">
              <h1 className="mb-6 font-semibold lg:mb-1 lg:text-4xl text-4xl">
                {title}
              </h1>
              <p className="mt-6">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Details
              </h3>
              <ul className="ml-4 list-none gap-y-6 flex flex-col">
                <li className="flex items-center gap-x-2">
                  <button className="group text-shikam-normal border-shikam-normal px-8 py-3 rounded-full border-2 bg-captive-primary hover:bg-green-700 hover:text-white transition-all duration-75 ease-in-out">
                    <Link
                      href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20%creation20de%20site%20web"
                      className="flex gap-2 items-center text-lg font-semibold group-hover:text-white"
                    >
                      <RiWhatsappFill className="h-8 w-8 text-green-700 group-hover:text-white" />
                      WhatsApp
                    </Link>
                  </button>
                </li>
                <li className="flex items-center gap-x-2">
                  <MdEmail className="text-captive-secondary h-6 w-6" />
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 rounded-lg border p-10 lg:col-span-3">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Nom</Label>
              <Input type="text" id="lastname" placeholder="Nom" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">Prénom</Label>
              <Input type="text" id="firstname" placeholder="Prénom" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Sujet</Label>
              <Input type="text" id="subject" placeholder="Sujet" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Ecrivez votre message." id="message" />
            </div>
            <Button className="w-full bg-captive-secondary hover:bg-captive-secondary-hover py-6">
              Envoyer le message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
