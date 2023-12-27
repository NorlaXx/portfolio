import "../assets/styles/skills.scss";

import { skillList } from "../datas/skillList";

export default function Skills() {
    return (
        <div className="portfolio-skills" id="skills">
            <h1>Compétences</h1>
            <div className="skills">
                {skillList.map((category, index) => (
                    <div className={category.category}>
                        <div
                            key={index}
                            className={category.category + "-logo"}
                        >
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill">
                                    <img src={skill.image} alt={skill.name} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                        <div className={category.category + "-presentation"}>
                            <div>
                                <img
                                    src={category.image}
                                    alt={category.category}
                                />
                            </div>
                            <p>{category.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
