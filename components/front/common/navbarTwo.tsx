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
import { IoMdArrowForward, IoMdClose, IoMdMenu } from "react-icons/io";
import { WhatsappLogo } from "@phosphor-icons/react";

const mobileLinks = [
  { href: "/", label: "Accueil" },
  { href: "/site-vitrine", label: "Site vitrine" },
  { href: "/e-commerce", label: "Site e-commerce" },
  { href: "/application-web", label: "Application sur mesure" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/contact", label: "Nous contacter" },
];

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
                  <Link href="/application-web">APPLICATION SUR MESURE</Link>
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
              <DrawerContent className="data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-none">
                <DrawerHeader className="flex-row items-center justify-between border-b px-6 py-4">
                  <DrawerTitle asChild>
                    <Link href="/" onClick={() => setOpenMenu(false)}>
                      <CaptiveLogo className="w-24 fill-captive-secondary" />
                    </Link>
                  </DrawerTitle>
                  <DrawerClose
                    aria-label="Fermer le menu"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-captive-primary text-captive-secondary"
                  >
                    <IoMdClose className="h-6 w-6" />
                  </DrawerClose>
                </DrawerHeader>
                <nav className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
                  {mobileLinks.map(({ href, label }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setOpenMenu(false)}
                        className={cn(
                          "flex items-center justify-between border-b py-5 text-xl font-semibold transition-colors",
                          active
                            ? "text-captive-blue"
                            : "text-captive-secondary active:text-captive-blue"
                        )}
                      >
                        {label}
                        <IoMdArrowForward className="h-5 w-5 opacity-50" />
                      </Link>
                    );
                  })}
                </nav>
                <div className="border-t px-6 py-5">
                  <Link
                    href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2.5 rounded-full bg-captive-secondary px-6 py-4 text-lg font-semibold text-white"
                  >
                    <WhatsappLogo className="h-6 w-6 text-green-400" weight="fill" />
                    Discuter sur WhatsApp
                  </Link>
                  <p className="mt-3 mb-0 text-center text-sm text-neutral-900/60">
                    Devis gratuit et réponse rapide.
                  </p>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        )}
        <div className="order-2 lg:order-3">
          <Link
            href="https://wa.me/33757837110?text=Bonjour,%20je%20vous%20contacte%20pour%20la%20creation%20de%20site%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-captive-secondary px-4 py-2.5 text-sm font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-captive-secondary-hover sm:px-5 sm:text-base"
          >
            <WhatsappLogo className="h-5 w-5 text-green-400 sm:h-6 sm:w-6" weight="fill" />
            WhatsApp
          </Link>
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
