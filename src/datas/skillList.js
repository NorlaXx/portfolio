import bootstrap from "../assets/images/skills/bootstrap.svg";
import css from "../assets/images/skills/css3.svg";
import git from "../assets/images/skills/git.svg";
import bash from "../assets/images/skills/gnubash.svg";
import html from "../assets/images/skills/html5.svg";
import javascript from "../assets/images/skills/javascript.svg";
import laravel from "../assets/images/skills/laravel.svg";
import php from "../assets/images/skills/php.svg";
import react from "../assets/images/skills/react.svg";
import symfony from "../assets/images/skills/symfony.svg";
import uml from "../assets/images/skills/uml.svg";
import front from "../assets/images/skills/front-end.svg";
import back from "../assets/images/skills/back-end.svg";
import devOps from "../assets/images/skills/dev-ops.svg";

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
