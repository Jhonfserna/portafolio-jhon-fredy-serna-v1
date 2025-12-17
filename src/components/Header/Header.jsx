import React from 'react';
import styles from './Header.module.css';
import vector from '../../assets/vector.png';

const Header = () => {
  return (
    <section className={styles.menu}>
        <header className={styles.menu__header}>
            <img className={styles.menu__icono} src={vector} alt="Menu Icon" />
            <h3 className={styles.menu__title}>Jhon Fredy Serna</h3>
        </header>
        <nav>
            <ul className={styles.menu__list}>
                <li className={styles.menu__list__item}><a href="#sobre-mi">Sobre mi</a></li>
                <li className={styles.menu__list__item}><a href="#skills">Skills</a></li>
                <li className={styles.menu__list__item}><a href="#hobbies">Hobbies</a></li>
                <li className={styles.menu__list__item}><a href="#formacion">Formación</a></li>
                <li className={styles.menu__list__item}><a href="#xp">Proyectos</a></li>
                <li className={`${styles.menu__list__item} ${styles.destacado}`}><a href="#contacto">jhonfserna@yahoo.com</a></li>
            </ul>
        </nav>
    </section>
  );
};

export default Header;
