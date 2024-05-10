import "../assets/styles/projects.scss";

import { projectList } from "../datas/projectList";

export default function Projects() {
    return (
        <div className="portfolio-projects" id="projects">
            <h1>Projets</h1>
            <div className="projects">
                {projectList.map((project, index) => {
                    return (
                        <div className="project" key={index}>
                            <div className="project-head">
                                <img
                                    src={project.logo}
                                    alt={project.name}
                                ></img>
                                <h3>{project.name}</h3>
                            </div>
                            <div className="project-body">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                ></img>
                                <p>{project.description}</p>
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        rel="noreferrer"
                                        target="_blank"
                                        className="withBorder"
                                    >
                                        Voir le projet
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
