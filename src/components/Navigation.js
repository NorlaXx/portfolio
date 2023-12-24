import "../assets/styles/navigation.scss";
import logo_github from "../assets/images/github.svg";
import logo_linkedin from "../assets/images/linkedin.svg";
import logo_instagram from "../assets/images/instagram.svg";

export default function Navigation() {
    return (
        <nav className="portfolio-navigation">
            <ul className="nav-item nav-liens">
                <li className="about">
                    <a href="#about">About</a>
                </li>
                <li className="competences">
                    <a href="#competences">Compétences</a>
                </li>
                <li className="projets">
                    <a href="#projets">Projets</a>
                </li>
                <li className="cv">
                    <a href="#cv">CV</a>
                </li>
            </ul>
            <ul className="nav-item nav-contact">
                <li>
                    <a
                        href="https://github.com/NorlaXx"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={logo_github} alt="logo github" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/alexis-rochefort-4318b5207/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={logo_linkedin} alt="logo linkedin" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/rochefort-alexis/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img src={logo_instagram} alt="logo instagram" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}
