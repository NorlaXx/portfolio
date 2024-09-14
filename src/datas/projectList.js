import logoPortfolio from "../assets/images/projects/logo-portfolio.svg";
import imagePortfolio from "../assets/images/projects/portfolio.png";
import imageEncheres from "../assets/images/projects/imageEnchere.png";
import logoEncheres from "../assets/images/projects/logoEnchere.png";
import logobdEni from "../assets/images/projects/logo-bdEni.png";
import imagebdEni from "../assets/images/projects/BDE-ENI.png";

export const projectList = [
    {
        name: "Portfolio",
        logo: logoPortfolio,
        image: imagePortfolio,
        description:
            "Ceci est mon portfolio où je présente mes compétences ainsi que mes projets. Je l'ai réalisé avec ReactJS.",
        link: "https://github.com/NorlaXx/portfolio",
    },
    {
        name: "Encheres",
        logo: logoEncheres,
        image: imageEncheres,
        description: "Projet de mise en ligne d'enchères réalisé avec Java Spring Boot."
    },
    {
        name: "ENI-BDE",
        logo: logobdEni,
        image: imagebdEni,
        description: "Projet d'application web pour la gestion des sorties organisés dans chaque campus de l'ENI, réalisé avec Symfony.",
        link: "https://github.com/NorlaXx/ENI-BDE"
    }
];
