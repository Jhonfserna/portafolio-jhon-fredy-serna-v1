import React from 'react';
import styles from './Academic.module.css';

import ciscoLogo from '../../assets/640px-Cisco_logo-1000px.png';
import aluraLogo from '../../assets/alura_logo.png'; // check filename slash
import platziLogo from '../../assets/patzi.png';
import utadeoLogo from '../../assets/utadeo.jpg';

// Ordered as per user's visual preference (implied by flex order 1, 2, 3, 4)
const academicData = [
    {
        title: 'Formación en FRONT-END',
        subtitle: '2024 - Alura - En curso',
        img: aluraLogo,
        id: 'alura'
    },
    {
        title: 'Power BI y Analítica de Datos',
        subtitle: '2023',
        img: platziLogo,
        id: 'platzi'
    },
    {
        title: 'Python y Programación en Redes',
        subtitle: '2022',
        img: ciscoLogo,
        id: 'cisco'
    },
    {
        title: 'Productor de Cine y Televisión',
        subtitle: '2013',
        img: utadeoLogo,
        id: 'utadeo'
    }
];

const Academic = () => {
    return (
        <section className={styles.academic} id="formacion">
            <h2 className={styles.academic__title}>Formación académica</h2>
            <div className={styles.academic__courses}>
                {academicData.map((item) => (
                    <div key={item.id} className={styles.academic__courses__box}>
                        <ul className={styles.academic__courses__list}>
                            <li className={styles.academic__courses__item__img}><img src={item.img} alt={item.title} /></li>
                            <li className={styles.academic__courses__item__title}><h4>{item.title}</h4></li>
                            <li className={styles.academic__courses__item__subtitle}><p>{item.subtitle}</p></li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Academic;
