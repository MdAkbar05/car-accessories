import { SessionProviders } from "@/provider/SessionProvider";
import { Hind_Siliguri, Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato", // exposes a CSS var
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-hind-siliguri", // exposes a CSS var
});

export const metadata = {
  title: {
    default: "E-commerce platform",
    template: "%s | E-commerce platform",
  },
  description: "A modern e-commerce platform for online shopping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${lato.className} ${hindSiliguri.variable} antialiased `}
      >
        <SessionProviders>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </SessionProviders>
      </body>
    </html>
  );
}
