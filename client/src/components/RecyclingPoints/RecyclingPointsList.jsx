import React, { useState } from 'react';
import './RecyclingPoints.css';

const RecyclingPointsList = ({ points, handleCardClick }) => {
    const [selectedPoint, setSelectedPoint] = useState(null);

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
            <div className="points-container">
                {points.map(point => (
                    <div key={point.id} className="point-card" onClick={() => openPopup(point)}>
                        <h3>{point.name}</h3>
                        <p><strong>Cidade:</strong> {point.city}</p>
                        <p><strong>Contato:</strong> {point.contact}</p>
                        <button>+</button>
                    </div>
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
