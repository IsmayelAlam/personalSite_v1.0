"use server";

import { Resend } from "resend";

import Notification from "../components/Notification";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data) {
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  if (!name || typeof name !== "string") return { error: "Invalid name" };
  if (!email || typeof name !== "string") return { error: "Invalid email" };
  if (!message || typeof name !== "string") return { error: "Invalid message" };

  let res = undefined;
  try {
    res = await resend.emails.send({
      from: "Portfolio <email@info.ismayelalam.com>",
      to: "ismayelalam0@gmail.com",
      subject: "Notification",
      reply_to: email,
      react: Notification({ name, email, message }),
    });

    if (res?.message || res?.name || res?.statusCode)
      return {
        error: "something went wrong",
        res,
      };
  } catch (error) {
    return { error: "something went wrong" };
  }

  return { res };
}
