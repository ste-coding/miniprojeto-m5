// src/components/RecyclingPoints/AllPoints.jsx
import React, { useEffect, useState } from 'react';
import { getRecyclingPoints } from '../../services/api';
import RecyclingPointsList from './RecyclingPointsList';
import './RecyclingPoints.css';

const AllPoints = ({ handleCardClick, updateFilteredPoints }) => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllPoints = async () => {
            try {
                const data = await getRecyclingPoints();
                setPoints(data);
                updateFilteredPoints(data); // Atualiza a contagem de pontos
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchAllPoints();
    }, [updateFilteredPoints]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <RecyclingPointsList points={points} handleCardClick={handleCardClick} />;
};

export default AllPoints;
