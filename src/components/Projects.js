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
                                <a
                                    href={project.link}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Voir le projet
                                </a>
                            </div>
                        </div>
                    );
                })}
                {/* <div className="project">
                    <div className="project-head">
                        <img src={logo} alt="logo portfolio"></img>
                        <h3>Portfolio</h3>
                    </div>
                    <div className="project-body"></div>
                </div> */}
            </div>
        </div>
    );
}
