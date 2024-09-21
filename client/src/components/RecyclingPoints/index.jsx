import React, { useRef, useState } from 'react';
import RecyclingPointsList from './RecyclingPointsList';
import './RecyclingPoints.css';

const RecyclingPoints = () => {
    const scrollRef = useRef(null);
    const [searchCity, setSearchCity] = useState('');
    const [pointsCount, setPointsCount] = useState(0);
    const cardsToShow = 4;


    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                top: 0,
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth'
            });
        }
    };

    const handleCitySearch = (e) => {
        setSearchCity(e.target.value);
    };

    return (
        <section id="collection-points" className="recycling-section">
            <h2>Pontos de Coleta</h2>
            <p>Total de pontos encontrados: {pointsCount}</p>

            <div className="filter-section">
                <input
                    type="text"
                    placeholder="Digite sua cidade"
                    className="search-bar"
                    value={searchCity}
                    onChange={handleCitySearch}
                />
                <div className="filter-buttons">
                    <button className="btn-filtro">Filtrar por Cidade</button>
                    <button className="btn-filtro">Filtrar por Tipo</button>
                </div>
            </div>

            <div className="scroll-container">
                <button className="scroll-button" onClick={() => scroll('left')}>❮</button>
                <div className="points-container" ref={scrollRef}>
                    <RecyclingPointsList />
                </div>
                <button className="scroll-button" onClick={() => scroll('right')}>❯</button>
            </div>
        </section>
    );
};

export default RecyclingPoints;