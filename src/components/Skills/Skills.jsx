import React from 'react';
import styles from './Skills.module.css';

import htmlIcon from '../../assets/RiHtml5Fill.png';
import cssIcon from '../../assets/TeenyiconsCss3Solid.png';
import jsIcon from '../../assets/CibJs.png';
import reactIcon from '../../assets/MdiReact.png';
import pythonIcon from '../../assets/FaBrandsPython.png';
import mysqlIcon from '../../assets/SimpleIconsMysql.png';
import powerBiIcon from '../../assets/ArcticonsMicrosoftPowerBi.png';

const skillsData = [
    { name: 'HTML 5', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'Power BI', icon: powerBiIcon },
];

const Skills = () => {
    return (
        <section className={styles.skills} id="skills">
            <h3 className={styles.skills__title}>Skills</h3>
            <div className={styles.skills__line}>
                {skillsData.map((skill, index) => (
                    <div key={index} className={styles.skills__box}>
                        <ul>
                            <li className={styles.skills__img}><img src={skill.icon} alt={skill.name} /></li>
                            <li className={styles.skills__name}>{skill.name}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
