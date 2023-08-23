import { navigation } from "../utils/data";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <header>
      <nav className={style.navBar}>
        <ul>
          {navigation.map((link) => (
            <li key={link.title}>{link.title}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
