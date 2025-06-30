const Joke = require('../models/joke.model');
const { asyncHandler } = require('../middlewares/errorHandler');

// Historique en mémoire des 3 dernières blagues envoyées
let lastJokeIds = [];

exports.getAllJokes = asyncHandler(async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
});

exports.getJokeById = asyncHandler(async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) {
        const error = new Error('Joke not found');
        error.statusCode = 404;
        throw error;
    }
    res.json(joke);
});

exports.getRandomJoke = asyncHandler(async (req, res) => {
    const jokes = await Joke.findAll();
    if (jokes.length === 0) {
        const error = new Error('No jokes available');
        error.statusCode = 404;
        throw error;
    }

    // Filtrer les blagues déjà envoyées récemment
    const filteredJokes = jokes.filter(joke => !lastJokeIds.includes(joke.id));
    const availableJokes = filteredJokes.length > 0 ? filteredJokes : jokes;

    // Sélection aléatoire
    const randomIndex = Math.floor(Math.random() * availableJokes.length);
    const randomJoke = availableJokes[randomIndex];

    // Mise à jour de l'historique
    lastJokeIds.push(randomJoke.id);
    if (lastJokeIds.length > 3) {
        lastJokeIds.shift(); // Conserver les 3 derniers
    }

    // Retour direct des champs question et answer
    res.json({
        id: randomJoke.id,
        question: randomJoke.question,
        answer: randomJoke.answer,
        category: randomJoke.category
    });
});

exports.createJoke = asyncHandler(async (req, res) => {
    const { question, answer, category } = req.body;

    if (!question || !answer) {
        const error = new Error('Question and answer are required');
        error.statusCode = 400;
        throw error;
    }

    const joke = await Joke.create({
        question,
        answer,
        category: category || 'general'
    });

    res.status(201).json(joke);
});