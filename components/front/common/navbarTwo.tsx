"use client";

import CaptiveLogo from "@/components/svg/CaptiveLogo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Site vitrine",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Site e-commerce",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

export default function NavbarTwo() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);

  const [subnav, setSubnav] = useState(0);
  const [navSticky, setNavSticky] = useState(false);

  React.useEffect(() => {
    window.document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    });
    /* window.document.addEventListener('scroll', () => {
        setSubnav(0);
    }); */
  });

  return (
    <header
      className={cn(
        "px-6 lg:px-32",
        navSticky
          ? "fixed top-0 z-50 w-full transition duration-500 ease-in-out shadow-lg bg-white border py-2"
          : "bg-white py-2 border"
      )}
    >
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <CaptiveLogo className="w-24 lg:w-32 fill-captive-secondary" />
        </Link>
        {isDesktop ? (
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/">ACCUEIL</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/site-vitrine">SITE VITRINE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/e-commerce">SITE E-COMMERCE</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/application-web">APPLICATION WEB</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/tarifs">TARIFS</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/contact">NOUS CONTACTER</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <div className="order-3">
            <Drawer
              direction="right"
              open={openMenu}
              onOpenChange={setOpenMenu}
            >
              <DrawerTrigger>
                <IoMdMenu className="h-8 w-8" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="flex justify-end">
                    <DrawerClose asChild>
                      <IoMdClose className="h-8 w-8" />
                    </DrawerClose>
                  </DrawerTitle>
                </DrawerHeader>
                <div className="px-4 flex flex-col text-lg gap-y-3">
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/">Accueil</Link>
                  </div>
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/site-vitrine">Site vitrine</Link>
                  </div>
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/e-commerce">Site e-commerce</Link>
                  </div>
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/application-web">Application web</Link>
                  </div>
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/tarifs">Tarifs</Link>
                  </div>
                  <div
                    className="hover:bg-captive-primary focus:bg-captive-primary rounded-md p-2"
                    onClick={() => setOpenMenu(false)}
                  >
                    <Link href="/contact">Nous contacter</Link>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        )}
        <div className="order-2 lg:order-3">
          <button className="px-6 py-2 rounded-full shadow-xs transition-all duration-75 ease-out bg-captive-primary group hover:bg-captive-secondary">
            <Link
              href="tel:0757837110"
              className="flex gap-2 items-center text-lg font-semibold group-hover:text-white"
            >
              <RiWhatsappFill className="h-8 w-8 text-green-700 group-hover:text-white" />
              07 57 83 71 10
            </Link>
          </button>
        </div>
      </nav>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
