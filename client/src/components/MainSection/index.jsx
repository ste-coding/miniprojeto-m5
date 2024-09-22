import React, { useRef } from 'react';
import './MainSection.css';
import rightIcon from '../../assets/main-section-img.svg';

const MainSection = () => {
    const recyclingPointsRef = useRef(null);

    const scrollToRecyclingPoints = () => {
        const section = document.getElementById('collection-points'); // ID da seção
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="main-section">
            <div className="content">
                <h1>e-Waste</h1>
                <p className="subtitle">Encontre o ponto de coleta de lixo eletrônico mais próximo de você</p>
                <button className="btn-try" onClick={scrollToRecyclingPoints}>Buscar ponto de coleta</button>
            </div>
            <div className="icon-right">
                <img src={rightIcon} alt='' />
            </div>
        </section>
    );
};

export default MainSection;
