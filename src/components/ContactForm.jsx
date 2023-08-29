"use client";

import { BsSend } from "react-icons/bs";
import style from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const handleSubmit = (data) => {
    console.log(data.get("name"));
    console.log(data.get("email"));
    console.log(data.get("message"));
  };
  return (
    <form className={style.form}>
      <h2 className={style.heading}>get in touch</h2>
      <input
        type="text"
        name="name"
        required
        className={style.input}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        required
        className={style.input}
        placeholder="Email"
      />
      <textarea
        cols="30"
        rows="10"
        name="message"
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
