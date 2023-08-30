import { Nunito } from "next/font/google";
import { BsFillSunFill } from "react-icons/bs";

import { navigation } from "@/utils/data";
import style from "@/styles/NavBar.module.css";
import Logo from "@/components/Logo";

const nunito = Nunito({ subsets: ["latin"], weight: ["900", "600"] });

export default function NavBar() {
  return (
    <header>
      <nav className={style.sidebar}>
        <Logo />
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
          <Logo btnStyle={style.logo} />
        </div>
        <BsFillSunFill className={style.icons} />
      </nav>
    </header>
  );
}
