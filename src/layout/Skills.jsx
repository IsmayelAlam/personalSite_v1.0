import style from "../styles/Skills.module.css";
import { language, software } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <div className={style.division1}>
        <h2 className={style.heading}>languages </h2>
        <ul className={style.list}>
          {language.map((skill) => (
            <li key={skill.title} className={style.items}>
              <Image
                src={skill.logo}
                alt=""
                className={style.img}
                width={100}
                height={100}
              />
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.division2}>
        <h2 className={style.heading}>software</h2>
        <ul className={style.list}>
          {software.map((skill) => (
            <li key={skill.title} className={style.items}>
              <Image
                src={skill.logo}
                alt=""
                className={style.img}
                width={100}
                height={100}
              />
              <p>{skill.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
