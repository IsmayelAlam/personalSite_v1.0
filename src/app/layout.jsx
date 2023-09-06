import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";
import NavBar from "@/layout/NavBar";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "@/context/darkMode";
import MetaData from "@/components/MetaData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ismayel Alam",
  description:
    "Ismayel Alam is a passionate and self-taught front-end web developer with a strong foundation in HTML, CSS, and JavaScript. Seeking opportunities to leverage my skills and creativity to build visually stunning and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <MetaData />
      </head>
      <body className={inter.className}>
        <DarkModeProvider>
          <NavBar />
          {children}
          <Toaster position="top-center" />
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}
