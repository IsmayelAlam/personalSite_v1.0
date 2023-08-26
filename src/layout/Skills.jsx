import SectionHeader from "@/components/SectionHeader";
import style from "../styles/Skills.module.css";
import { skills } from "@/utils/data";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <ul className={style.list}>
        {skills.map((skill) => (
          <li key={skill.title} className={style.items}>
            <img src={skill.logo} alt="" srcset="" className={style.img} />
            <h4>{skill.title}</h4>
          </li>
        ))}
      </ul>
      <ul className={style.list}>
        {skills.map((skill) => (
          <li key={skill.title} className={style.items}>
            <img src={skill.logo} alt="" srcset="" className={style.img} />
            <h4>{skill.title}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
