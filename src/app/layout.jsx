import NavBar from "@/layout/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";

const inter = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata = {
  title: "Ismayel Alam",
  description:
    "Ismayel Alam is a passionate and self-taught front-end web developer with a strong foundation in HTML, CSS(with multiple framework and library), and JavaScript(with multiple framework and library). Seeking opportunities to leverage my skills and creativity to build visually stunning and user-friendly websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
