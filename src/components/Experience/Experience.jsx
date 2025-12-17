import React from 'react';
import styles from './Experience.module.css';

import aluraFlixImg from '../../assets/alura-flix-videoteca.PNG';
import aluraGeekImg from '../../assets/alura-geek.PNG';
import encriptadorImg from '../../assets/encriptador-texto.PNG';
import adivinaImg from '../../assets/adivina-el-numero.PNG';

const projects = [
    {
        title: 'Biblioteca audiovisual personal',
        subtitle: 'Challenge Alura Flix',
        img: aluraFlixImg,
        repo: 'https://github.com/Jhonfserna/aluraflix-jhon-serna.git',
        demo: 'https://aluraflix-jhon-serna-qzx4zjaey-jhonfsernas-projects.vercel.app/',
        type: 'image'
    },
    {
        title: 'Rock music store',
        subtitle: 'Challenge Alura Geek',
        img: aluraGeekImg,
        repo: 'https://github.com/Jhonfserna/alura-geek-jhon-serna.git',
        demo: 'https://jhonfserna.github.io/alura-geek-jhon-serna/',
        type: 'image'
    },
    {
        title: 'Encriptador de texto',
        subtitle: 'Challenge Alura Codificador',
        img: encriptadorImg,
        repo: 'https://github.com/Jhonfserna/Challenge-Alura-Encriptador-texto',
        demo: 'https://jhonfserna.github.io/Challenge-Alura-Encriptador-texto/',
        type: 'image'
    },
    {
        title: 'Juego creado con HTML y JavaScript',
        subtitle: 'Challenge Oracle',
        img: adivinaImg,
        repo: 'https://github.com/Jhonfserna/juego_adivina_el_numero',
        demo: 'https://jhonfserna.github.io/juego_adivina_el_numero/',
        type: 'image'
    },
    {
        title: 'Reel como productor cinematográfico',
        subtitle: 'Proyectos audiovisuales realizados en televisión',
        videoSrc: 'https://www.youtube.com/embed/rtvs-x-n2RA?si=fdlkPynb1-h1A35a',
        type: 'video'
    }
];

const Experience = () => {
    return (
        <section className={styles.experience} id="xp">
            <h2 className={styles.experience__section__title}>Experiencia Profesional</h2>

            {projects.map((project, index) => (
                <div key={index} className={styles.experiencie__box}>
                    {project.type === 'video' ? (
                        <iframe
                            className={styles.experience__video_reel}
                            width="560"
                            height="315"
                            src={project.videoSrc}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <img className={styles.experience__img} src={project.img} alt={project.title} />
                    )}

                    <div className={styles.experience__info}>
                        <h2 className={styles.experience__title}>{project.title}</h2>
                        <h3 className={styles.experience__text}>{project.subtitle}</h3>
                        {project.type !== 'video' && (
                            <div className={styles.experience__description}>
                                <span className={styles.experience__repo}>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.experience__botao__repo}>Repositorio</button>
                                    </a>
                                </span>
                                <span className={styles.experience__demo}>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.experience__botao__demo}>Ver demo</button>
                                    </a>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Experience;
