const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/joke.controller');

console.log('[ROUTES] Initializing joke routes...');

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: The jokes managing API
 */

// Middleware de log pour toutes les routes
router.use((req, res, next) => {
  console.log(`[ROUTES] ${req.method} ${req.originalUrl}`, {
    params: req.params,
    query: req.query,
    body: req.body
  });
  next();
});

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Returns the list of all the jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: The list of the jokes
 */
router.get('/', (req, res, next) => {
  console.log('[ROUTES] GET /jokes - Fetching all jokes');
  jokeController.getAllJokes(req, res, next)
    .then(() => console.log('[ROUTES] GET /jokes - Completed'))
    .catch(err => console.error('[ROUTES] GET /jokes - Error:', err));
});

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *       404:
 *         description: No jokes available
 */
router.get('/random', (req, res, next) => {
  console.log('[ROUTES] GET /random - Fetching random joke');
  const start = Date.now();
  
  jokeController.getRandomJoke(req, res, next)
    .then(() => {
      console.log(`[ROUTES] GET /random - Completed in ${Date.now() - start}ms`);
    })
    .catch(err => {
      console.error('[ROUTES] GET /random - Error:', err);
      next(err);
    });
});

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Get the joke by id
 *     tags: [Jokes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The joke id
 *     responses:
 *       200:
 *         description: The joke description by id
 *       404:
 *         description: The joke was not found
 */
router.get('/:id', (req, res, next) => {
  console.log(`[ROUTES] GET /${req.params.id} - Fetching joke by ID`);
  
  jokeController.getJokeById(req, res, next)
    .then(() => console.log(`[ROUTES] GET /${req.params.id} - Completed`))
    .catch(err => console.error(`[ROUTES] GET /${req.params.id} - Error:`, err));
});

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Create a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: The joke was successfully created
 *       400:
 *         description: Missing required fields
 */
router.post('/', (req, res, next) => {
  console.log('[ROUTES] POST / - Creating new joke', {
    body: req.body
  });
  
  jokeController.createJoke(req, res, next)
    .then(joke => console.log('[ROUTES] POST / - Joke created:', joke.id))
    .catch(err => console.error('[ROUTES] POST / - Error:', err));
});

// Middleware de log pour les erreurs
router.use((err, req, res, next) => {
  console.error('[ROUTES] Error handler:', {
    error: err.message,
    stack: err.stack
  });
  next(err);
});

console.log('[ROUTES] Joke routes initialized');
module.exports = router;