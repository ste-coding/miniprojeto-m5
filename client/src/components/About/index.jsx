import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import leftIcon from '../../assets/about-img.png'
import './About.css';

const About = () => {

    useEffect(() => {
        ScrollReveal().reveal('.about-section h2', {
            duration: 1000,
            distance: '50px',
            origin: 'top',
            opacity: 0,
            reset: true,
        });
        ScrollReveal().reveal('.about-section p', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            opacity: 0,
            delay: 200,
            reset: true,
        });
        ScrollReveal().reveal('.figure-about', {
            duration: 1000,
            distance: '50px',
            origin: 'right',
            opacity: 0,
            delay: 400,
            reset: true,
        });
    }, []);

    return (
        <section id="about" className="about-section">
        <h2>Sobre</h2>
        <p>
            Esta plataforma foi criada para ajudar você a encontrar o ponto de coleta mais próximo para o descarte correto de lixo eletrônico, contribuindo para a preservação do meio ambiente. Com a nossa API, você localiza os pontos de coleta mais próximos, garantindo que seus dispositivos tenham um destino correto e sustentável. Navegue pelo nosso site e descubra como é fácil contribuir para um planeta mais sustentável e limpo.
        </p>
        <div className="figure-about">
            <img src={leftIcon}></img>
        </div>
        </section>
    );
};

export default About;
