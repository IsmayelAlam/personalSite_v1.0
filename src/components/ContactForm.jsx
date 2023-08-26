import { BsSend } from "react-icons/bs";
import style from "../styles/ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={style.form}>
      <h4 className={style.heading}>get in touch</h4>
      <input type="text" required className={style.input} placeholder="Name" />
      <input
        type="email"
        required
        className={style.input}
        placeholder="Email"
      />
      <textarea
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
  );
}
