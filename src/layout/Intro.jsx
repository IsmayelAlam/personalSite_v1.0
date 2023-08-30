import { Nunito } from "next/font/google";

import style from "../styles/Intro.module.css";
import { BsDownload } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import Artwork from "@/components/Artwork";

const nunito = Nunito({ subsets: ["latin"], weight: ["500"] });

export default function Intro() {
  return (
    <section className={style.intro} id="home">
      <div className={style.details}>
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
        <div className={style.links}>
          <a className={style.btn} href="#contact" aria-label="contact form">
            <span>Get in touch</span>
            <BiSend />
          </a>
          <a
            className={style.btn}
            href="/ismayel_alam_resume.pdf"
            download
            aria-label="download resume"
          >
            <span>Download CV</span>
            <BsDownload />
          </a>
        </div>
      </div>
      <Artwork />
    </section>
  );
}
