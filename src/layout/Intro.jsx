import { Nunito } from "next/font/google";
import Image from "next/image";

import style from "../styles/Intro.module.css";
import logo from "../../Public/Art.svg";

const nunito = Nunito({ subsets: ["latin"], weight: ["500"] });

export default function Intro() {
  return (
    <section className={`${style.Intro} ${nunito.className}`}>
      <div className={style.details}>
        <p className={style.greet}>Hi! I&apos;m</p>
        <h1 className={style.header}>Ismayel Alam</h1>
        <p className={style.description}>
          A passionate and self-taught front-end web developer with a strong
          foundation in HTML, CSS, and JavaScript. Seeking opportunities to
          leverage my skills and creativity to build visually stunning and
          user-friendly websites.
        </p>
        <button className={style.btn}>Get in touch</button>
        <button className={style.btn}>Download CV</button>
      </div>
      <Image
        src={logo}
        alt="logo"
        width={700}
        height={700}
        className={style.heroImage}
      />
    </section>
  );
}
