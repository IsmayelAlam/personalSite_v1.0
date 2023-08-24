import Image from "next/image";

import { navigation } from "../utils/data";
import style from "../styles/NavBar.module.css";
import logo from "../../Public/logo.svg";

export default function NavBar() {
  return (
    <header>
      <nav className={style.navBar}>
        <Image src={logo} alt="logo" width={60} height={60} />
        <ul className={style.links}>
          {navigation.map((link) => (
            <li key={link.title}>{link.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
