// ewasteRoutes.js
import { Router } from 'express';
import { getAllPoints,getPointById, getPointsByCity, getPointsByType, addPoint, deletePoint, updatePoint } from '../controllers/ewasteController.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Recycling Points
 *   description: API para gerenciar pontos de coleta de resíduos eletrônicos
 */

/**
 * @swagger
 * /recycling-points:
 *   get:
 *     summary: Retorna todos os pontos de coleta
 *     tags: [Recycling Points]
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/recycling-points', getAllPoints);

/**
 * @swagger
 * /recycling-points/{id}:
 *   get:
 *     summary: Retorna um ponto de coleta por ID
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do ponto de coleta
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/recycling-points/:id', getPointById);

/**
 * @swagger
 * /recycling-points/city/{city}:
 *   get:
 *     summary: Retorna pontos de coleta por cidade
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: city
 *         required: true
 *         schema:
 *           type: string
 *         description: Nome da cidade
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/recycling-points/city/:city', getPointsByCity);

/**
 * @swagger
 * /recycling-points/type/{type}:
 *   get:
 *     summary: Retorna pontos de coleta por tipo
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *         description: Tipo de resíduo eletrônico
 *     responses:
 *       '200':
 *         description: OK
 */

router.get('/recycling-points/type/:type', getPointsByType);

/**
 * @swagger
 * /recycling-points:
 *   post:
 *     summary: Adiciona um novo ponto de coleta
 *     tags: [Recycling Points]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/RecyclingPoint'
 *     responses:
 *       '201':
 *         description: Created
 */

router.post('/recycling-points', addPoint);

/**
 * @swagger
 * /recycling-points/{id}:
 *   delete:
 *     summary: Remove um ponto de coleta existente
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do ponto de coleta a ser removido
 *     responses:
 *       '204':
 *         description: No Content
 */

router.delete('/recycling-points/:id', deletePoint);

/**
 * @swagger
 * /recycling-points/{id}:
 *   put:
 *     summary: Atualiza um ponto de coleta existente
 *     tags: [Recycling Points]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do ponto de coleta a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/RecyclingPoint'
 *     responses:
 *       '200':
 *         description: OK
 */

router.put('/recycling-points/:id', updatePoint);

export default router;