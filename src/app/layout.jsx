import NavBar from "@/layout/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";

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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
