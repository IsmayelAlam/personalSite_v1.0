import Image from "next/image";
import { Nunito } from "next/font/google";

import { navigation } from "@/utils/data";
import style from "@/styles/NavBar.module.css";
import logo from "@/assets/logoDark.svg";
import { BsFillSunFill } from "react-icons/bs";

const nunito = Nunito({ subsets: ["latin"], weight: ["900", "600"] });

export default function NavBar() {
  return (
    <header>
      <nav className={style.sidebar}>
        <Image src={logo} alt="logo" width={50} height={50} />
        <ul className={`${style.links} ${nunito.className}`}>
          {navigation.map((link) => (
            <li key={link.title}>
              <a
                href={link.link}
                className={style.link}
                aria-label={`go to ${link.link} section`}
              >
                <span>{link.title}</span>
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className={style.btn}>
          <Image
            src={logo}
            alt="logo"
            width={50}
            height={50}
            className={style.logo}
          />
        </div>
        <BsFillSunFill className={style.icons} />
      </nav>
    </header>
  );
}
