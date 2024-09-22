// src/components/RecyclingPoints/index.jsx
import React, { useRef, useState } from 'react';
import AllPoints from './AllPoints';
import PointsByCity from './PointsByCity';
import PointsByType from './PointsByType';
import './RecyclingPoints.css';

const RecyclingPoints = () => {
    const scrollRef = useRef(null);
    const [viewMode, setViewMode] = useState('all'); // 'all', 'city', 'filtered-city', 'type', 'filtered-type'
    const [pointsCount, setPointsCount] = useState(0);
    const [selectedPoint, setSelectedPoint] = useState(null);

    const [searchCity, setSearchCity] = useState('');
    const [filterType, setFilterType] = useState('');

    const [filteredCity, setFilteredCity] = useState('');
    const [filteredType, setFilteredType] = useState('');

    const handleCardClick = (point) => {
        setSelectedPoint(point);
    };

    const closePopup = () => {
        setSelectedPoint(null);
    };

    const updateFilteredPoints = (points) => {
        setPointsCount(points.length);
    };

    const handleResetFilters = () => {
        setViewMode('all');
        setSearchCity('');
        setFilterType('');
        setFilteredCity('');
        setFilteredType('');
        setPointsCount(0);
    };

    const handleFilterCity = () => {
        if (searchCity.trim()) {
            setFilteredCity(searchCity.trim());
            setViewMode('filtered-city');
        }
    };

    const handleFilterType = () => {
        if (filterType.trim()) {
            setFilteredType(filterType.trim());
            setViewMode('filtered-type');
        }
    };

    return (
        <section id="collection-points" className="recycling-section">
            <h2>Pontos de Coleta</h2>
            <p>Total de pontos encontrados: {pointsCount}</p>

            <div className="pages__home__genres__tiles">
                <a 
                    className="pages__home__genres__tile" 
                    onClick={() => handleResetFilters()}
                >
                    Ver Todos
                </a>
                <a 
                    className="pages__home__genres__tile" 
                    onClick={() => setViewMode('city')}
                >
                    Filtrar por Cidade
                </a>
                <a 
                    className="pages__home__genres__tile" 
                    onClick={() => setViewMode('type')}
                >
                    Filtrar por Tipo
                </a>
            </div>

            {/* Renderizando o conteúdo baseado no modo de visualização */}
            <div className="wrapper">
                <div className="container" ref={scrollRef}>
                    {viewMode === 'all' && (
                        <AllPoints 
                            handleCardClick={handleCardClick} 
                            updateFilteredPoints={updateFilteredPoints} 
                        />
                    )}
                    {viewMode === 'city' && (
                        <div className="filter-section">
                            <input 
                                type="text" 
                                placeholder="Digite o nome da cidade" 
                                onChange={(e) => setSearchCity(e.target.value)} 
                                value={searchCity}
                            />
                            <button 
                                onClick={handleFilterCity}
                            >
                                Filtrar por Cidade
                            </button>
                        </div>
                    )}
                    {viewMode === 'filtered-city' && (
                        <PointsByCity 
                            city={filteredCity} 
                            handleCardClick={handleCardClick} 
                            updateFilteredPoints={updateFilteredPoints} 
                        />
                    )}
                    {viewMode === 'type' && (
                        <div className="filter-section">
                            <input 
                                type="text" 
                                placeholder="Digite o tipo de ponto" 
                                onChange={(e) => setFilterType(e.target.value)} 
                                value={filterType}
                            />
                            <button 
                                onClick={handleFilterType}
                            >
                                Filtrar por Tipo
                            </button>
                        </div>
                    )}
                    {viewMode === 'filtered-type' && (
                        <PointsByType 
                            type={filteredType} 
                            handleCardClick={handleCardClick} 
                            updateFilteredPoints={updateFilteredPoints} 
                        />
                    )}
                </div>
            </div>

            {selectedPoint && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>{selectedPoint.name}</h3>
                        <p><strong>Cidade:</strong> {selectedPoint.city}</p>
                        <p><strong>Tipo:</strong> {selectedPoint.type}</p>
                        <p><strong>Endereço:</strong> {selectedPoint.street_address}</p>
                        <p><strong>Contato:</strong> {selectedPoint.contact}</p>
                        <button onClick={closePopup}>Fechar</button>
                    </div>
                </div>
            )}
        </section>
    );

};

export default RecyclingPoints;
