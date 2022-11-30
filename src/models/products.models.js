const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  availableQty: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Products;