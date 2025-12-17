import React from 'react';
import styles from './Hobbies.module.css';

import swimmingIcon from '../../assets/MakiSwimming.png';
import readIcon from '../../assets/AntDesignReadOutlined.png';
import movieIcon from '../../assets/MaterialSymbolsMovieFilterOutlineSharp.png';
import cookIcon from '../../assets/LsCookpad.png';
import writeIcon from '../../assets/PhPencilSimpleLineBold.png';
import cameraIcon from '../../assets/MaterialSymbolsPhotoCameraOutline.png';

const hobbiesData = [
    { name: 'Nadar', icon: swimmingIcon },
    { name: 'Leer', icon: readIcon },
    { name: 'Ver películas', icon: movieIcon },
    { name: 'Cocinar', icon: cookIcon },
    { name: 'Escribir', icon: writeIcon },
    { name: 'Tomar fotos', icon: cameraIcon },
];

const Hobbies = () => {
    return (
        <section className={styles.hobbies} id="hobbies">
            <h3 className={styles.hobbies__title}>Hobbies</h3>
            <div className={styles.hobbies__line}>
                {hobbiesData.map((hobby, index) => (
                    <div key={index} className={styles.hobbies__box}>
                        <ul>
                            <li className={styles.hobbies__img}><img src={hobby.icon} alt={hobby.name} /></li>
                            <li className={styles.hobbies__name}>{hobby.name}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Hobbies;
