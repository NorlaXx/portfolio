import "../assets/styles/projects.scss";

import logo from "../assets/images/projects/logo192.png";

export default function Projects() {
    return (
        <div className="portfolio-projects" id="projects">
            <h1>Projets</h1>
            <div className="projects">
                <div className="project">
                    <div className="project-head">
                        <img src={logo} alt="logo portfolio"></img>
                        <h3>Portfolio</h3>
                    </div>
                    <div className="project-body"></div>
                </div>
            </div>
        </div>
    );
}
