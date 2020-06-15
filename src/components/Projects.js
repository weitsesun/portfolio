import React from "react";
import projectsData from "../data/projectsData";
import {
  project_container,
  header_container,
  topic,
  bar,
  repo_container,
  repo_table,
  repo_name,
  repo_pic,
  repo_content,
  tech_box_outer,
  tech_box,
  tech_atom,
} from "../styles/Projects.module.css";

export default function Projects() {
  return (
    <div className={project_container}>
      <div className={header_container}>
        <div className={topic}>PROJECTS</div>
        <div className={bar}></div>
      </div>

      <div className={repo_container}>
        {projectsData.map((repo) => (
          <Repo key={repo.name} repo={repo} />
        ))}
      </div>
    </div>
  );
}

function Repo({ repo }) {
  return (
    <div className={repo_table}>
      <a href={repo.github} target="_blank" rel="noopener noreferrer">
        <img className={repo_pic} src={repo.pic_url} alt={repo.name} />
      </a>
      <div className={repo_content}>
        <a href={repo.github} target="_blank" rel="noopener noreferrer">
          <div className={repo_name}>{repo.name}</div>
        </a>

        <div className={tech_box_outer}>
          {repo.tech_stack.map((tech) => (
            <span className={tech_box}>
              <span className={tech_atom}>{tech}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
