import axios from 'axios';

const API_URL = 'http://localhost:3000/recycling-points';

const getRecyclingPointsPaginated = async (url, page, limit) => {
    const response = await axios.get(`${url}?page=${page}&limit=${limit}`);
    return response.data;
};

export const getRecyclingPoints = async (page = 1, limit = 10) => {
    const data = await getRecyclingPointsPaginated(API_URL, page, limit);
    return data;
};

export const getRecyclingPointsByCity = async (city, page = 1, limit = 10) => {
    const url = `${API_URL}/city/${encodeURIComponent(city)}`;
    const data = await getRecyclingPointsPaginated(url, page, limit);
    return data;
};

export const getRecyclingPointsByType = async (type, page = 1, limit = 10) => {
    const url = `${API_URL}/type/${encodeURIComponent(type)}`;
    const data = await getRecyclingPointsPaginated(url, page, limit);
    return data;
};

export const getRecyclingPointById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const addRecyclingPoint = async (point) => {
    const response = await axios.post(API_URL, point);
    return response.data;
};

export const updateRecyclingPoint = async (id, point) => {
    const response = await axios.put(`${API_URL}/${id}`, point);
    return response.data;
};

export const deleteRecyclingPoint = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
