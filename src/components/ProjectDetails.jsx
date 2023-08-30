import style from "../styles/ProjectDetail.module.css";

export default function ProjectDetails({ project }) {
  return (
    <div className={style.details}>
      <h3 className={style.heading}>{project.title}</h3>

      <div className={style.techs}>
        {project.tech.map((t) => (
          <p className={style.tech} key={t}>
            {t}
          </p>
        ))}
      </div>

      <p className={style.description}>{project.description}</p>

      <div className={style.extras}>
        <div className={style.extra}>
          <h3 className={style.subHead}>Challenges</h3>
          <p>{project.challenges}</p>
        </div>
        <div className={style.extra}>
          <h3 className={style.subHead}>Outcome</h3>
          <p>{project.outcome}</p>
        </div>
      </div>
    </div>
  );
}
