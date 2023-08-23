import { Nunito } from "next/font/google";

import style from "../styles/Intro.module.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["500"] });

export default function Intro() {
  return (
    <section className={`${style.Intro} ${nunito.className}`}>
      <p className={style.font}>I&apos;m</p>
      <p className={style.font}>Ismayel</p>
      <p className={style.font}>Alam</p>
    </section>
  );
}
