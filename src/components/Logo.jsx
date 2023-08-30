"use client";

import Image from "next/image";

import logoDark from "@/assets/logoDark.svg";
import logoLight from "@/assets/logoLight.svg";
import { useDarkMode } from "@/context/darkMode";

export default function Logo({ btnStyle }) {
  const { darkMode } = useDarkMode();

  let logo = logoLight;

  if (!darkMode) logo = logoDark;

  return (
    <Image src={logo} alt="logo" width={50} height={50} className={btnStyle} />
  );
}
