import { BsGithub, BsLinkedin, BsSend } from "react-icons/bs";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

import style from "../styles/Contact.module.css";
import MapChart from "@/components/Map";

export default function Contact() {
  return (
    <section className={style.contact} id="contact">
      <div className={style.map}>
        <MapChart />
      </div>
      <form action="" className={style.form}>
        <h4 className={style.heading}>let&apos;s get in touch</h4>
        <input
          type="text"
          required
          className={style.input}
          placeholder="Name"
        />
        <input
          type="email"
          required
          className={style.input}
          placeholder="Email"
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className={style.input}
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" className={style.btn}>
          <span>send</span>
          <BsSend />
        </button>
      </form>
      <div className={style.social}>
        <div className={style.mails}>
          <p className={style.mail}>
            <IoMailOutline className={style.icons} />
            <span> Ismayelalam0@gmail.com</span>
          </p>
          <p className={style.mail}>
            <IoCallOutline className={style.icons} />
            <span>(+880) 1626 256336</span>
          </p>
        </div>
        <div className={style.links}>
          <BsLinkedin className={style.icons} />
          <BsGithub className={style.icons} />
        </div>
      </div>
    </section>
  );
}
