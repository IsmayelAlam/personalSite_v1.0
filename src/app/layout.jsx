import { Roboto } from "next/font/google";

import "./globals.css";
import NavBar from "@/layout/NavBar";

import appleIcon from "../assets/apple-touch-icon.png";
import icon16 from "../assets/favicon-16x16.png";
import icon32 from "../assets/favicon-32x32.png";

const inter = Roboto({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Ismayel Alam",
  description:
    "Ismayel Alam is a passionate and self-taught front-end web developer with a strong foundation in HTML, CSS, and JavaScript. Seeking opportunities to leverage my skills and creativity to build visually stunning and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={appleIcon.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon16.src} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon32.src} />
        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/site.webmanifest"
        />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
