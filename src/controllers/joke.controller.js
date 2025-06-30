const { Joke } = require('../models');

exports.getAllJokes = async (req, res) => {
  const jokes = await Joke.findAll();
  res.json(jokes);
};
