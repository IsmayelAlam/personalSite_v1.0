import SectionHeader from "@/components/SectionHeader";
import style from "../styles/Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={style.skills}>
      <SectionHeader title="skills" />
      <div className={style.details}>
        <ul className={style.list}>
          {[...new Array(7).keys()].map((key) => (
            <li key={key} className={style.items}>
              javascript
            </li>
          ))}
        </ul>
        <ul className={style.list}>
          {[...new Array(9).keys()].map((key) => (
            <li key={key} className={style.items}>
              javascript
            </li>
          ))}
        </ul>
        <ul className={style.list}>
          {[...new Array(8).keys()].map((key) => (
            <li key={key} className={style.items}>
              javascript
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
