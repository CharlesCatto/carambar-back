const { DataTypes } = require('sequelize');
const { sequelize } = require('./index'); 

const Joke = sequelize.define('Joke', {
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: 'general'
  }
});

module.exports = Joke;