import ProjectImageLink from "@/components/ProjectImageLink";
import style from "../styles/Project.module.css";
import { projects } from "@/utils/data";
import ProjectDetails from "@/components/ProjectDetails";

export default function Project() {
  return (
    <section className={style.projects} id="projects">
      <h2 className={style.heading}>recent works</h2>
      {projects.map((project, i) => (
        <div key={i} className={style.details}>
          <ProjectImageLink project={project} />
          <ProjectDetails project={project} />
        </div>
      ))}
    </section>
  );
}
