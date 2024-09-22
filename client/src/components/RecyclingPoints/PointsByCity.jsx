import React, { useEffect, useState } from 'react';
import { getRecyclingPointsByCity } from '../../services/api';
import RecyclingPointsList from './RecyclingPointsList';
import './RecyclingPoints.css';

const PointsByCity = ({ city, handleCardClick, updateFilteredPoints }) => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPointsByCity = async () => {
            if (!city.trim()) {
                setPoints([]);
                setLoading(false);
                updateFilteredPoints([]);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const data = await getRecyclingPointsByCity(city);
                setPoints(data);
                updateFilteredPoints(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPointsByCity();
    }, [city, updateFilteredPoints]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (city.trim() && points.length === 0) return <div>Nenhum ponto de coleta encontrado para "{city}".</div>;

    return <RecyclingPointsList points={points} handleCardClick={handleCardClick} />;
};

export default PointsByCity;
