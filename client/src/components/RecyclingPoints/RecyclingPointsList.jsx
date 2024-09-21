import React, { useEffect, useState } from 'react';
import { getRecyclingPoints } from '../../services/api';
import './RecyclingPoints.css';

const RecyclingPointsList = () => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedPoint, setSelectedPoint] = useState(null);


    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const data = await getRecyclingPoints();
                setPoints(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPoints();
    }, []);

    const handleCardClick = (point) => {
        setSelectedPoint(point);
    };

    const closePopup = () => {
        setSelectedPoint(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className="points-container">
                {points.map(point => (
                    <div key={point.id} className="point-card" onClick={() => handleCardClick(point)}>
                        <h3>{point.name}</h3>
                        <p>{point.city}</p>
                        <p>{point.contact}</p>
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
