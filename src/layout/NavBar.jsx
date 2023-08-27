import Image from "next/image";
import { Nunito } from "next/font/google";

import { navigation } from "../utils/data";
import style from "../styles/NavBar.module.css";
import logo from "@/assets/logo.svg";

const nunito = Nunito({ subsets: ["latin"], weight: ["900", "600"] });

export default function NavBar() {
  return (
    <header>
      <nav className={style.sidebar}>
        <Image src={logo} alt="logo" width={50} height={50} />
        <ul className={`${style.links} ${nunito.className}`}>
          {navigation.map((link) => (
            <li key={link.title} className={style.link}>
              <a href={link.link} className={style.link}>
                <span>{link.title}</span>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <Image
          src={logo}
          alt="logo"
          width={50}
          height={50}
          className={style.logo}
        />
      </nav>
    </header>
  );
}
