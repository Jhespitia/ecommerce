const { Sequelize } = require('sequelize');
require('dotenv').config();

const db = new Sequelize({
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  logging: false,
});

module.exports = db;