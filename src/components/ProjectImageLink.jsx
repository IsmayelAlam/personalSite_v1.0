import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import style from "../styles/ProjectImageLink.module.css";

export default function ProjectImageLink({ project }) {
  return (
    <div className={style.imageLink}>
      <Image
        src={project.image}
        alt="screen short of the project"
        width={480}
        height={250}
        className={style.image}
      />
      <div className={style.links}>
        <a
          className={style.btn}
          href={project.live}
          target="_blank"
          rel="noopener"
          aria-label={`live preview of ${project.title} demo project`}
        >
          <span>live preview</span>
          <FiExternalLink />
        </a>
        <a
          className={style.btn}
          href={project.code}
          target="_blank"
          rel="noopener"
          aria-label="codebase"
        >
          <span>codebase</span>
          <FiGithub />
        </a>
      </div>
    </div>
  );
}
