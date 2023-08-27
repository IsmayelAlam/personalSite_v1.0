import Image from "next/image";

import style from "../styles/Artwork.module.css";
import art from "../assets/artwork/static.svg";
import css from "../assets/artwork/css.svg";
import html from "../assets/artwork/html.svg";
import javascript from "../assets/artwork/javascript.svg";

export default function Artwork() {
  return (
    <div className={style.artwork}>
      <Image
        src={art}
        alt="a guy using laptop vector art"
        width={700}
        height={700}
        className={style.static}
      />
      <Image
        src={css}
        alt="a guy using laptop vector art"
        width={700}
        height={700}
        className={style.css}
      />
      <Image
        src={html}
        alt="a guy using laptop vector art"
        width={700}
        height={700}
        className={style.html}
      />
      <Image
        src={javascript}
        alt="a guy using laptop vector art"
        width={700}
        height={700}
        className={style.javascript}
      />
    </div>
  );
}
