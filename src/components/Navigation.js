import "../assets/styles/navigation.scss";
import logo_github from "../assets/images/navBar/github.svg";
import logo_linkedin from "../assets/images/navBar/linkedin.svg";
import logo_instagram from "../assets/images/navBar/instagram.svg";

export default function Navigation() {
    return (
        <nav className="portfolio-navigation">
            <ul className="nav-item nav-liens">
                <li className="about">
                    <a href="#about" className="withoutBorder">
                        About
                    </a>
                </li>
                <li className="competences">
                    <a href="#skills" className="withoutBorder">
                        Compétences
                    </a>
                </li>
                <li className="projets">
                    <a href="#projects" className="withoutBorder">
                        Projets
                    </a>
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
                        href="https://www.instagram.com/alexis.rochefort/"
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
