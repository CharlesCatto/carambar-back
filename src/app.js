const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { errorHandler } = require('./middlewares/errorHandler');

const app = express();

// Configuration CORS manuelle complète (sans le package 'cors')
const allowedOrigins = [
    'https://charlescatto.github.io',
    'https://charlescatto.github.io/carambar-front',
    'http://localhost:5173'
];

// Middleware CORS personnalisé
app.use((req, res, next) => {
    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', 'true');
    }

    // Répondre immédiatement aux requêtes OPTIONS
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// Configuration Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Carambar API',
            version: '1.0.0',
            description: 'API for Carambar jokes'
        },
        servers: [
            {
                url: 'https://carambar-back-hmfy.onrender.com'
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

// Middlewares
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Carambar API',
        apiDocs: '/api-docs',
        allowedOrigins: allowedOrigins
    });
});

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes API
app.use('/api/v1/jokes', require('./routes/joke.routes'));

// Gestion des erreurs
app.use(errorHandler);

module.exports = app;