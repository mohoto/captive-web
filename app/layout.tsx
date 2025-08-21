import FooterTwo from "@/components/front/common/footerTwo";
import NavbarTwo from "@/components/front/common/navbarTwo";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.variable} antialiased`}>
        <NavbarTwo />
        {children}
        <FooterTwo />
      </body>
    </html>
  );
}
