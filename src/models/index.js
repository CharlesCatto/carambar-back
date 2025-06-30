
const { Sequelize } = require('sequelize');
const path = require('node:path');
const config = require('../config');

const sequelize = new Sequelize({
  dialect: config.db.dialect,
  storage: path.join(__dirname, '../../', config.db.storage),
  logging: config.db.logging
});


(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to DB has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = { sequelize }; 