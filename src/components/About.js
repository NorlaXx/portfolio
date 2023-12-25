import "../assets/styles/about.scss";

import presentation from "../assets/images/presentation.jpg";

export default function About() {
    return (
        <div className="portfolio-about">
            <div className="profile-picture">
                <img src={presentation} alt="profile" />
            </div>
            <div className="profile-presentation">
                <p>
                    <span className="first">
                        hello, <br />
                        Je m'apelle <span className="name">Alexis</span> et j'ai
                        20 ans
                    </span>{" "}
                    <br />
                    <span className="second">
                        Je suis actuellement en formation à l'
                        <span className="school">ENI </span>
                        afin de passer le titre CDA (Concepteur Développeur
                        d'Application).
                    </span>{" "}
                    <br />
                    <span className="third">
                        En alternance chez{" "}
                        <span className="company">Blue2i </span>
                        en tant que développeur web. <br />
                    </span>
                </p>
            </div>
        </div>
    );
}
