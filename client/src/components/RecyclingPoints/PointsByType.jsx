// src/components/RecyclingPoints/PointsByType.jsx
import React, { useEffect, useState } from 'react';
import { getRecyclingPointsByType } from '../../services/api';
import RecyclingPointsList from './RecyclingPointsList';
import './RecyclingPoints.css';

const PointsByType = ({ type, handleCardClick, updateFilteredPoints }) => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPointsByType = async () => {
            if (!type.trim()) {
                setPoints([]);
                setLoading(false);
                updateFilteredPoints([]); // Limpa os pontos filtrados
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const data = await getRecyclingPointsByType(type);
                setPoints(data);
                updateFilteredPoints(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPointsByType();
    }, [type, updateFilteredPoints]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (type.trim() && points.length === 0) return <div>Nenhum ponto de coleta encontrado para o tipo "{type}".</div>;

    return <RecyclingPointsList points={points} handleCardClick={handleCardClick} />;
};

export default PointsByType;
