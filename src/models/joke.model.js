const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Joke = sequelize.define('Joke', {
    question: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    answer: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        defaultValue: 'general'
    }
}, {
    timestamps: true
});

module.exports = Joke;