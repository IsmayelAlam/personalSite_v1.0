import { Nunito } from "next/font/google";
import Image from "next/image";

import style from "../styles/Intro.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["500"] });

export default function Intro() {
  return (
    <section className={style.Intro}>
      <div>
        <div className={nunito.className}>
          <p className={style.greet}>Hi! I&apos;m</p>
          <h1 className={style.header}>Ismayel Alam</h1>
        </div>
        <p className={style.description}>
          A passionate and self-taught front-end web developer with a strong
          foundation in HTML, CSS, and JavaScript. Seeking opportunities to
          leverage my skills and creativity to build visually stunning and
          user-friendly websites.
        </p>
        <a className={style.btn}>Get in touch</a>
        <a className={style.btn} href="/ismayel_alam_resume.pdf" download>
          Download CV
        </a>
      </div>
      <Image
        src="/art.svg"
        alt="logo"
        width={700}
        height={700}
        className={style.heroImage}
      />
    </section>
  );
}
