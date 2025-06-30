const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/joke.controller');

router.get('/', jokeController.getAllJokes);

module.exports = router;
