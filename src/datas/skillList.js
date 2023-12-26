import bootstrap from "../assets/images/bootstrap.svg";
import css from "../assets/images/css3.svg";
import git from "../assets/images/git.svg";
import bash from "../assets/images/gnubash.svg";
import html from "../assets/images/html5.svg";
import javascript from "../assets/images/javascript.svg";
import laravel from "../assets/images/laravel.svg";
import php from "../assets/images/php.svg";
import react from "../assets/images/react.svg";
import symfony from "../assets/images/symfony.svg";
import uml from "../assets/images/uml.svg";
import front from "../assets/images/front-end.svg";
import back from "../assets/images/back-end.svg";
import devOps from "../assets/images/dev-ops.svg";

export const skillList = [
    {
        category: "frontEnd",
        image: front,
        skills: [
            {
                name: "Html",
                image: html,
            },
            {
                name: "Css",
                image: css,
            },
            {
                name: "Javascript",
                image: javascript,
            },
            {
                name: "React",
                image: react,
            },
            {
                name: "Bootstrap",
                image: bootstrap,
            },
        ],
    },
    {
        category: "backEnd",
        image: back,
        skills: [
            {
                name: "Php",
                image: php,
            },
            {
                name: "Symfony",
                image: symfony,
            },
            {
                name: "Laravel",
                image: laravel,
            },
            {
                name: "Uml",
                image: uml,
            },
        ],
    },
    {
        category: "devOps",
        image: devOps,
        skills: [
            {
                name: "Git",
                image: git,
            },
            {
                name: "Bash",
                image: bash,
            },
        ],
    },
];
