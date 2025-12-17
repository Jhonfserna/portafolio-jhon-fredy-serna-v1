import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer__rodape}>
                <p>Desarrollado por Jhon Fredy Serna Aguirre</p>
                <p>2024</p>
            </div>
        </section>
    );
};

export default Footer;
