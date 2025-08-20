import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneSquareAlt } from "react-icons/fa";
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
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-10">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
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
                  <FaPhoneSquareAlt className="text-captive-secondary h-6 w-6" />
                  <span className="font-bold">Téléphone: </span>
                  {phone}
                </li>
                <li className="flex items-center gap-x-2">
                  <RiWhatsappFill className="text-green-700 h-6 w-6" />
                  <span className="font-bold">WhatsApp: </span>
                  {phone}
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
          <div className="flex flex-col gap-6 rounded-lg border p-10">
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
