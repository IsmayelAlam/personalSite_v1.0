import { BsGithub, BsLinkedin } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

import style from "../styles/ContactLinks.module.css";

export default function ContactLinks() {
  return (
    <div className={style.links}>
      <p className={style.link}>
        <CiLocationOn className={style.icons} />
        <span> Dhaka, Bangladesh</span>
      </p>
      <a
        className={style.link}
        aria-label="Ismayelalam0@gmail.com"
        href="mailto:Ismayelalam0@gmail.com"
        rel="noopener"
      >
        <IoMailOutline className={style.icons} />
        <span> Ismayelalam0@gmail.com</span>
      </a>
      <a
        className={style.link}
        aria-label="(+880) 1626 256336"
        href="tel:(+880) 1626 256336"
        rel="noopener"
      >
        <IoCallOutline className={style.icons} />
        <span>(+880) 1626 256336</span>
      </a>
      <a
        href="https://github.com/IsmayelAlam"
        target="_blank"
        className={style.link}
        aria-label="contact through github"
        rel="noopener"
      >
        <BsGithub className={style.icons} />
        <span href="tel:(+880) 1626 256336">github</span>
      </a>
      <a
        href="https://www.linkedin.com/in/ismayelalam/"
        target="_blank"
        className={style.link}
        aria-label="contact through Linkedin"
        rel="noopener"
      >
        <BsLinkedin className={style.icons} />
        <span>Linkedin</span>
      </a>
    </div>
  );
}
