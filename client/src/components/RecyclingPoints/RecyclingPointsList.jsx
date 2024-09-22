import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import './RecyclingPoints.css';

const RecyclingPointsList = ({ points, handleCardClick }) => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const nextSlide = () => {
        if (currentIndex < Math.ceil(points.length / itemsToShow) - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const displayedPoints = points.slice(currentIndex * itemsToShow, (currentIndex + 1) * itemsToShow);


    const openPopup = (point) => {
        setSelectedPoint(point);
        handleCardClick(point);
    };

    const closePopup = () => {
        setSelectedPoint(null);
    };

    

    if (!points || points.length === 0) {
        return <div>Nenhum ponto de coleta encontrado.</div>;
    }

    return (
        <>
            <div className="carousel">
                <button className="scroll-button" onClick={prevSlide} disabled={currentIndex === 0}>
                    &lt;
                </button>
                <div className="points-container">
                    {displayedPoints.map(point => (
                        <div key={point.id} className="point-card" onClick={() => handleCardClick(point)}>
                            <div className="card-content">
                                <h3>{point.name}</h3>
                                <p><strong>Cidade:</strong> {point.city}</p>
                                <p><strong>Contato:</strong> {point.contact}</p>
                            </div>
                            <button className="icon-button">
                                <FaPlus />
                            </button>
                        </div>
                    
                    ))}
                </div>
                <button className="scroll-button" onClick={nextSlide} disabled={currentIndex >= Math.ceil(points.length / itemsToShow) - 1}>
                    &gt;
                </button>
            </div>
            <div className="pagination">
                {Array.from({ length: Math.ceil(points.length / itemsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
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
        </>
    );
};

export default RecyclingPointsList;
