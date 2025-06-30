const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur Carambar API 🎉' });
});

module.exports = app;
