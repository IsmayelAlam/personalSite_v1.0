"use client";

import { useRef } from "react";
import { toast } from "react-hot-toast";

import { sendEmail } from "@/action/sendEmail";
import style from "../styles/ContactForm.module.css";
import Button from "./Button";

export default function ContactForm() {
  const ref = useRef();

  return (
    <form
      className={style.form}
      action={async (data) => {
        try {
          const { res, error } = await sendEmail(data);
          error ? toast.error(error) : toast.success("Message sent!");
          ref.current.reset();
        } catch (error) {
          toast.error("something went wrong");
        }
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
      <Button btnStyle={style} />
    </form>
  );
}
