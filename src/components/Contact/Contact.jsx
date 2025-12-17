import React, { useState } from 'react';
import styles from './Contact.module.css';
import contactImg from '../../assets/contacto-imagen.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const { nombre, email, asunto, mensaje } = formData;

        if (!nombre) {
            alert("Campo nombre es obligatorio");
            return false;
        }
        if (!email) {
            alert("Campo e-mail es obligatorio");
            return false;
        }
        if (!asunto) {
            alert("Campo Asunto es obligatorio");
            return false;
        }
        if (!mensaje || mensaje.length > 1000) {
            alert("Campo Mensaje es obligatorio y debe contener máximo 1.000 caracteres");
            return false;
        }
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            alert("e-mail inválido");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Mensaje enviado con éxito! (Simulación)");
            // Logic to send email would go here
            setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        }
    };

    return (
        <section className={styles.formcontato} id="contacto">
            <div className={styles.formcontato__contacto}>
                <div className={styles.formcontato__esquerda}>
                    <img className={styles.formcontato__img} src={contactImg} alt="Contacto" />
                </div>
                <div className={styles.formcontato__text}>
                    <h2 className={styles.formcontato__title}>Contacto</h2>
                    <h3 className={styles.formcontato__subtext}>¿Quieres contactarme? <em><u>(De momento, esta sección está deshabilitada, pero puedes escribir al correo ubicado en la parte superior).</u></em></h3>
                    <h3 className={styles.formcontato__subtext}>Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </h3>
                    <form className={styles.formcontato__form} name="form" onSubmit={handleSubmit}>
                        <input
                            className={styles.formcontato__input}
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            minLength="3"
                            maxLength="1000"
                        />
                        <input
                            className={styles.formcontato__input}
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className={styles.formcontato__input}
                            type="text"
                            name="asunto"
                            placeholder="Asunto"
                            value={formData.asunto}
                            onChange={handleChange}
                            required
                            maxLength="50"
                        />
                        <textarea
                            className={styles.formcontato__textarea}
                            rows="5"
                            cols="40"
                            id="mensagem"
                            name="mensaje"
                            placeholder="Mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                            minLength="10"
                            maxLength="1000"
                        ></textarea>
                        <button type="submit" className={styles.formcontato__botao}>Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
