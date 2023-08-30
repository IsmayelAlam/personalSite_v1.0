"use client";

import { BiMoon, BiSun } from "react-icons/bi";

import { useDarkMode } from "@/context/darkMode";
import style from "@/styles/ModeToggle.module.css";

export default function ModeToggle() {
  const { toggleDarkMode, darkMode } = useDarkMode();

  return (
    <div className={style.mode} onClick={toggleDarkMode}>
      <BiSun className={style.icon} />
      <BiMoon className={style.icon} />
      <div
        className={style.block}
        style={darkMode ? { left: "4.25rem" } : { left: ".75rem" }}
      />
    </div>
  );
}
