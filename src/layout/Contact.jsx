import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

import style from "../styles/Contact.module.css";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className={style.contact} id="contact">
      <Map />

      <ContactForm />

      <div className={style.social}>
        <div>
          <p className={style.link}>
            <CiLocationOn className={style.icons} />
            <span> Narayanganj, Bangladesh</span>
          </p>
          <p className={style.link}>
            <IoMailOutline className={style.icons} />
            <a href="mailto:Ismayelalam0@gmail.com"> Ismayelalam0@gmail.com</a>
          </p>
          <p className={style.link}>
            <IoCallOutline className={style.icons} />
            <a href="tel:(+880) 1626 256336">(+880) 1626 256336</a>
          </p>
        </div>

        <div className={style.links}>
          <a href="https://www.linkedin.com/in/ismayelalam/" target="_blank">
            <BsLinkedin className={style.icons} />
          </a>
          <a href="https://github.com/IsmayelAlam" target="_blank">
            <BsGithub className={style.icons} />
          </a>
        </div>
      </div>
    </section>
  );
}
