import express from 'express';
import cors from 'cors';
import errorHandler from './utils/errorHandler.js';
import swaggerSpec from './utils/swaggerConfig.js';
import swaggerUi from 'swagger-ui-express';

import recyclingRoutes from './routes/ewasteRoutes.js';

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(errorHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', recyclingRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
