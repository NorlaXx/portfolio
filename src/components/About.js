import "../assets/styles/about.scss";

import presentation from "../assets/images/about/presentation.jpg";
import cv from "../assets/images/about/cv.pdf";

export default function About() {
    return (
        <div className="portfolio-about" id="about">
            <div className="profile-picture">
                <img src={presentation} alt="profile" />
            </div>
            <div className="profile-presentation">
                <p>
                    Hello, <br />
                    Je m'appelle <span className="name">Alexis</span> et j'ai 20
                    ans
                    <br />
                    Je suis actuellement en formation à l'
                    <span className="school">ENI</span> afin de passer le titre
                    CDA (Concepteur Développeur d'Application).
                    <br />
                    En alternance chez <span className="company">
                        Blue2i
                    </span>{" "}
                    en tant que développeur web. <br />
                </p>
                <div className="cv">
                    <a
                        href={cv}
                        rel="noreferrer"
                        target="_blank"
                        className="withBorder"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </div>
    );
}
