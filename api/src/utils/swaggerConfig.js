import swaggerJSDoc from 'swagger-jsdoc';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'e-Waste API',
        version: '1.0.0',
        description: 'API for managing recycling points for eletronic waste',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de Desenvolvimento',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: [join(__dirname, '../routes/*.js')]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
