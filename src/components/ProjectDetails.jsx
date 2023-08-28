import style from "../styles/ProjectDetail.module.css";

export default function ProjectDetails({ project }) {
  return (
    <div className={style.details}>
      <h3 className={style.heading}>{project.title}</h3>
      <p>{project.description}</p>

      <p>
        <b className={style.subHead}>Tech stack: </b>
        Figma, NextJS, ReactJs, React toast, CSS modules, Vercel
      </p>
      <div className={style.extra}>
        <div>
          <h4 className={style.subHead}>Challenges</h4>
          <p>{project.challenges}</p>
        </div>
        <div>
          <h4 className={style.subHead}>How I overcome</h4>
          <p>{project.overcome}</p>
        </div>
      </div>
    </div>
  );
}
