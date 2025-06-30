const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/joke.controller');

console.log('[ROUTES] Initializing joke routes...');

// Middleware de log global
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
router.get('/', jokeController.getAllJokes);

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
  console.log('[ROUTES] GET /random - Start');
  jokeController.getRandomJoke(req, res, next);
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
router.get('/:id', jokeController.getJokeById);

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
router.post('/', jokeController.createJoke);

// Middleware de log des erreurs
router.use((err, req, res, next) => {
  console.error('[ROUTES] Error:', {
    message: err.message,
    stack: err.stack
  });
  next(err);
});

console.log('[ROUTES] Joke routes initialized');
module.exports = router;