import style from "../styles/Skills.module.css";
import { skills } from "@/utils/data";
import Image from "next/image";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <h2 className={style.heading}>some of my skills</h2>
      <div className={style.animation}>
        <ul className={style.list}>
          {skills.map((skill) => (
            <li key={skill.title} className={style.items}>
              <Image
                src={skill.logo}
                alt=""
                className={style.img}
                width={100}
                height={100}
              />
              <h3>{skill.title}</h3>
            </li>
          ))}
        </ul>
        <ul className={style.list}>
          {skills.map((skill) => (
            <li key={skill.title} className={style.items}>
              <Image
                src={skill.logo}
                alt=""
                className={style.img}
                width={100}
                height={100}
              />
              <h3>{skill.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
