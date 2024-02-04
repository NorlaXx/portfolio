import "../assets/styles/career.scss";

export default function Career() {
    return (
        <div className="portfolio-career" id="career">
            <h1>Parcours</h1>
            <div className="career">
                <div className="career-education">
                    <h2>Parcours Scolaire</h2>
                    <div className="career-item">
                        <h3>Concepteur Développeur d'Applications</h3>
                        <p>ENI, Chartres-de-Bretagne, 2023 - En Cours</p>
                        <ul>
                            <li>Développement web</li>
                            <li>Développement en couche</li>
                            <li>Java - Spring Boot</li>
                            <li>PHP - Symfony</li>
                            <li>SQL - UML</li>
                            <li>javaScript - Angular</li>
                            <li>Travail en équipe</li>
                        </ul>
                    </div>
                    <div className="career-item">
                        <h3>BTS SIO - Option SLAM</h3>
                        <p>Lycée Saint-Sauveur, Redon, 2021 - 2023</p>
                        <ul>
                            <li>Développement web</li>
                            <li>Java</li>
                            <li>PHP - Laravel</li>
                            <li>SQL - UML</li>
                        </ul>
                    </div>
                </div>
                <div className="career-professionnal">
                    <h2>Parcours Professionnel</h2>
                    <div className="career-item">
                        <h3>Alternance - Développeur Web Junior</h3>
                        <p>Blue2i, Châteaubourg, 2023 - En Cours</p>
                        <ul>
                            <li>Développement web</li>
                            <li>Php - Symfony</li>
                            <li>Drupal</li>
                            <li>Git</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div className="career-item">
                        <h3>Stage en Développement</h3>
                        <p>Blue2i, Châteaubourg, janvier 2023 - février 2023</p>
                        <ul>
                            <li>
                                Portage d'une application PHP vers Symfony 5
                            </li>
                            <li>Commandes Symfony</li>
                            <li>Bash</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
