import React from 'react';
import styles from './Hero.module.css';
import profileImg from '../../assets/jhon-foto-perfil.jpg';
import arrowImg from '../../assets/arrow.png';

const Hero = () => {
    return (
        <section className={styles.title}>
            <div className={styles.title__div}>
                <img className={styles.title__profile} src={profileImg} alt="Imagen Circular" />
                <div className={styles.title__container}>
                    <h2 className={styles.title__bio}>
                        Hola, mi nombre es Jhon Serna y soy productor cinematográfico y, desde ahora, un gran y talentoso desarrollador web en el área del Frontend.
                    </h2>
                    <h3 className={styles.title__subsection}>
                        Formado en programación en Python, manejo de base de datos, y empezando mi carrera como Frontend gracias a mi formación con Oracle ONE en Alura Latam.
                    </h3>
                    <ul className={styles.title__network}>
                        <li className={styles.title__network__item}>
                            <a href="https://github.com/Jhonfserna" target="_blank" rel="noopener noreferrer">
                                Github <img src={arrowImg} alt="arrow" />
                            </a>
                        </li>
                        <li className={styles.title__network__item}>
                            <a href="http://www.linkedin.com/in/jhonfserna" target="_blank" rel="noopener noreferrer">
                                Linkedin <img src={arrowImg} alt="arrow" />
                            </a>
                        </li>
                        <li className={styles.title__network__item}>
                            <a href="https://www.instagram.com/jhonfserna/" target="_blank" rel="noopener noreferrer">
                                Instagram <img src={arrowImg} alt="arrow" />
                            </a>
                        </li>
                        <li className={styles.title__network__item}>
                            <a href="https://drive.google.com/file/d/11CBNBY6ChYTCgs4zAhzp2Las3pk1uL6D/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                Currículo <img src={arrowImg} alt="arrow" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;
