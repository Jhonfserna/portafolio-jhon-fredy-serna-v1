import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <section className={styles.about} id="sobre-mi">
            <div className={styles.about__container}>
                <h3 className={styles.about__title}>SOBRE MÍ:</h3>
                <p className={styles.about__paragraph}>
                    Soy un profesional de cine y televisión con más de 12 años de experiencia. Desde el 2022 inicié mi carrera en el mundo de la tecnología estudiando programación en Python y programación en redes; también he llevado a cabo cursos de analítica de datos y presentaciones con Power BI. Actualmente me encuentro desarrollando mi carrera como front-end en el diseño web con Alura LATAM y Oracle.
                </p>
                <p className={styles.about__paragraph}>
                    Tener la oportunidad de llevar mi capacidad creativa y vision estética al universo del diseño web me permite no solo crecer en mis aptitudes, sino a su vez seguir creciendo en mis habilidades como lo son la organización, la capacidad analítica, el trabajo en equipo y la proactividad en cada proyecto a realizar.
                </p>
            </div>
        </section>
    );
};

export default About;
