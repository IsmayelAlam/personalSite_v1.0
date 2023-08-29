"use client";

import { BsSend } from "react-icons/bs";
import { useRef } from "react";

import style from "../styles/ContactForm.module.css";
import { sendEmail } from "@/action/sendEmail";

export default function ContactForm() {
  const ref = useRef();

  return (
    <form
      className={style.form}
      action={async (data) => {
        const { res, error } = await sendEmail(data);
        console.log(res, error);
        ref.current.reset();
      }}
      ref={ref}
    >
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
