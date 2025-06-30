require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  db: {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE,
    logging: false
  }
};