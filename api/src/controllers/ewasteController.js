import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';
import Joi from 'joi';
import { baseUrl } from '../utils/constants.js';
import RecyclingPoint from '../models/ewasteModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.resolve(__dirname, '../db.json');

const adapter = new JSONFile(dataPath);
const defaultData = { recyclingPoints: [] };
const db = new Low(adapter, defaultData);

const readDatabase = async () => {
    await db.read();
};

const writeDatabase = async () => {
    await db.write();
};

const addLinksToRecyclingPoint = (point) => {
    return {
        ...point,
        links: [
            { rel: 'self', href: `${baseUrl}/recycling-points/${point.id}` },
            { rel: 'update', href: `${baseUrl}/recycling-points/${point.id}`, method: 'PUT' },
            { rel: 'delete', href: `${baseUrl}/recycling-points/${point.id}`, method: 'DELETE' }
        ]
    };
};

const getAllPoints = async (req, res) => {
    try {
        await readDatabase();
        const pointsWithLinks = db.data.recyclingPoints.map(addLinksToRecyclingPoint);
        res.status(200).json(pointsWithLinks);
    } catch (err) {
        console.error('Erro ao buscar pontos de coleta:', err);
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta.' });
    }
};

const getPointById = async (req, res) => {
    const { id } = req.params;

    try {
        await readDatabase();
        const point = db.data.recyclingPoints.find(point => point.id === id);
        if (!point) {
            return res.status(404).json({ message: 'Ponto de coleta não encontrado.' });
        }
        const pointWithLinks = addLinksToRecyclingPoint(point);
        res.status(200).json(pointWithLinks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPointsByCity = async (req, res) => {
    const city = req.params.city;
    try {
        await readDatabase();
        const filteredPoints = db.data.recyclingPoints.filter(point => point.city.toLowerCase() === city.toLowerCase());
        const pointsWithLinks = filteredPoints.map(addLinksToRecyclingPoint);
        res.status(200).json(pointsWithLinks);
    } catch (err) {
        console.error('Erro ao buscar pontos de coleta por cidade:', err);
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta por cidade.' });
    }
};

const getPointsByType = async (req, res) => {
    const type = req.params.type;
    try {
        await readDatabase();
        const filteredPoints = db.data.recyclingPoints.filter(point => point.type.toLowerCase() === type.toLowerCase());
        const pointsWithLinks = filteredPoints.map(addLinksToRecyclingPoint);
        res.status(200).json(pointsWithLinks);
    } catch (err) {
        console.error('Erro ao buscar pontos de coleta por tipo de resíduo:', err);
        res.status(500).json({ message: 'Erro ao buscar pontos de coleta por tipo de resíduo.' });
    }
};

const addPoint = async (req, res) => {
    const { error } = addPointSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { name, city, type, street_address, contact } = req.body;
    const newPoint = new RecyclingPoint(name, city, type, street_address, contact);

    try {
        await readDatabase();
        db.data.recyclingPoints.push(newPoint);
        await db.write();
        const pointWithLinks = addLinksToRecyclingPoint(newPoint);
        const location = `${baseUrl}/recycling-points/${newPoint.id}`;
        res.status(201).header('Location', location).json(pointWithLinks);
    } catch (err) {
        console.error('Erro ao adicionar ponto de coleta:', err);
        res.status(500).json({ message: 'Erro ao adicionar ponto de coleta.' });
    }
};

const deletePoint = async (req, res) => {
    const { id } = req.params;

    try {
        await readDatabase();
        const index = db.data.recyclingPoints.findIndex(point => point.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Ponto de coleta não encontrado.' });
        }

        const deletedPoint = db.data.recyclingPoints.splice(index, 1)[0];
        await db.write();
        const pointWithLinks = addLinksToRecyclingPoint(deletedPoint);
        res.json(pointWithLinks);
    } catch (err) {
        console.error('Erro ao deletar ponto de coleta:', err);
        res.status(500).json({ message: 'Erro ao deletar ponto de coleta.' });
    }
};

const updatePoint = async (req, res) => {
    const { id } = req.params;
    const { error } = addPointSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        await readDatabase();
        const index = db.data.recyclingPoints.findIndex(point => point.id === id);

        if (index === -1) {
            return res.status(404).json({ message: 'Ponto de coleta não encontrado.' });
        }

        db.data.recyclingPoints[index] = { id, ...req.body };
        await db.write();
        const updatedPoint = addLinksToRecyclingPoint(db.data.recyclingPoints[index]);
        res.status(200).json(updatedPoint);
    } catch (err) {
        console.error('Erro ao atualizar ponto de coleta:', err);
        res.status(500).json({ message: 'Erro ao atualizar ponto de coleta.' });
    }
};

const addPointSchema = Joi.object({
    name: Joi.string().required(),
    city: Joi.string().required(),
    type: Joi.string().valid('baterias', 'computadores', 'celulares', 'televisores').required(),
    street_address: Joi.string().required(),
    contact: Joi.string().required()
});

export {
    getAllPoints,
    getPointById,
    getPointsByCity,
    getPointsByType,
    addPoint,
    deletePoint,
    updatePoint
};